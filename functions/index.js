// Cloud Functions for Hittatsu
// メール送信（Gmail API + サービスアカウント / 送信元はタスク担当者本人）＋ リマインド（5分毎・当日分のみ）
//
// このファイルを functions/index.js としてコピーしてください。
// 依存：package.json に "googleapis" を追加（npm i googleapis）
//
// 必要な secrets（サービスアカウントの JSON キー全体を貼り付け）:
//   firebase functions:secrets:set GMAIL_SA_KEY
//
// 事前設定（Google Workspace 管理コンソール → セキュリティ → API制御 → ドメイン全体の委任）:
//   サービスアカウントのクライアントID に scope https://www.googleapis.com/auth/gmail.send を許可
//
// リマインド用インデックス（必須）:
//   collectionGroup "tasks" の startD（COLLECTION_GROUP スコープ）。
//   firestore.indexes.json を deploy するか、初回実行時のログのリンクから作成。

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onDocumentWritten } = require("firebase-functions/v2/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const { google } = require("googleapis");

admin.initializeApp();
setGlobalOptions({ region: "asia-northeast1" });

const APP_BASE_URL = "https://sarazawa-ui.github.io/airmore-task-management/";

// ============================================================
// メール送信：Gmail API + サービスアカウント（ドメイン全体委任）
//   各メールを「指定した Workspace ユーザー（＝タスク担当者など）」として送信する。
//   GMAIL_SA_KEY = サービスアカウントの JSON キー全体（secrets に設定）
//   ※ そのサービスアカウントを Google Workspace 管理コンソールで
//     ドメイン全体委任に登録し、scope gmail.send を許可しておくこと。
//   ※ 送信元（fromEmail）は Workspace 内の実在ユーザーのメールボックスである必要がある
//     （グループ／エイリアスは不可）。
// ============================================================
const GMAIL_SA_KEY = defineSecret("GMAIL_SA_KEY");

// fromEmail（成り代わるユーザー）ごとに Gmail クライアントを生成・キャッシュ
const _gmailClients = {};
async function getGmail(fromEmail) {
  if (_gmailClients[fromEmail]) return _gmailClients[fromEmail];
  const key = JSON.parse(GMAIL_SA_KEY.value());
  const jwt = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/gmail.send"],
    subject: fromEmail, // この Workspace ユーザーとして送信
  });
  await jwt.authorize();
  _gmailClients[fromEmail] = google.gmail({ version: "v1", auth: jwt });
  return _gmailClients[fromEmail];
}

function _b64url(buf) {
  return Buffer.from(buf).toString("base64")
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// メール送信（プレーンテキスト）。fromEmail として送信。to は文字列または配列。
async function sendMail(fromEmail, to, subject, text) {
  const recipients = (Array.isArray(to) ? to : [to]).filter(Boolean).join(", ");
  if (!recipients || !fromEmail) return false;
  const gmail = await getGmail(fromEmail);
  const subjEnc = "=?UTF-8?B?" + Buffer.from(subject, "utf8").toString("base64") + "?=";
  const message = [
    `From: ${fromEmail}`,
    `To: ${recipients}`,
    `Subject: ${subjEnc}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(text || "", "utf8").toString("base64"),
  ].join("\r\n");
  await gmail.users.messages.send({ userId: "me", requestBody: { raw: _b64url(message) } });
  return true;
}

// クライアント（タスク管理アプリ）から呼ぶ汎用メール送信（完了通知・リマインド等）。
//   認証必須。宛先は最大20件。from（送信元）未指定時は呼び出しユーザー本人。
exports.sendAppEmail = onCall({ secrets: [GMAIL_SA_KEY] }, async (req) => {
  if (!req.auth) throw new HttpsError("unauthenticated", "ログインが必要です");
  const { from, to, subject, text } = req.data || {};
  const fromEmail = String(from || req.auth.token.email || "").trim();
  const list = (Array.isArray(to) ? to : [to]).filter(Boolean);
  if (!fromEmail || !list.length || !subject) throw new HttpsError("invalid-argument", "from/to/subject は必須です");
  if (list.length > 20) throw new HttpsError("invalid-argument", "宛先が多すぎます（最大20件）");
  // 旧クライアント（キャッシュ未更新の端末）が送る「10分前リマインド」をサーバーで遮断する。
  //   リマインドはサーバーの sendReminders（内部 sendMail を直接呼ぶ）が唯一の送信元とし、
  //   クライアント経由の callable では受け付けない。これによりリロード不要で二重送信を停止できる。
  //   ※ サーバー側 sendReminders はこの callable を通らないため影響なし。
  if (/リマインド/.test(String(subject))) {
    console.log("[sendAppEmail] reminder via client blocked:", subject);
    return { ok: true, from: fromEmail, skipped: "client-reminder-blocked" };
  }
  try {
    await sendMail(fromEmail, list, String(subject), String(text || ""));
    return { ok: true, from: fromEmail };
  } catch (e) {
    console.error("[sendAppEmail] failed:", e.message);
    throw new HttpsError("internal", "送信に失敗しました: " + e.message);
  }
});


// ============================================================
// 予実管理（予算管理）アクセス申請の通知
//   budgetAccessRequests/{email} の作成・更新を監視し、
//   - pending になった瞬間：admin 全員へ「承認依頼」メール
//   - approved になった瞬間：申請者へ「承認完了」メール
//   - rejected になった瞬間：申請者へ「却下」メール
// ============================================================
const BUDGET_URL = APP_BASE_URL + "budget/";
const BOOTSTRAP_ADMIN_EMAIL = "sarazawa@n-airmore.com";

async function getBudgetAdminEmails(db) {
  const set = new Set([BOOTSTRAP_ADMIN_EMAIL]);
  try {
    const snap = await db.doc("globalBudget/roles").get();
    const roles = (snap.exists ? (snap.data() || {}).roles : {}) || {};
    Object.entries(roles).forEach(([em, r]) => { if (r === "admin" && em) set.add(em); });
  } catch (e) {
    console.warn("[budgetAccess] read roles failed:", e.message);
  }
  return [...set];
}

exports.onBudgetAccessRequest = onDocumentWritten(
  {
    document: "budgetAccessRequests/{email}",
    secrets: [GMAIL_SA_KEY],
  },
  async (event) => {
    const after = event.data?.after?.exists ? event.data.after.data() : null;
    const before = event.data?.before?.exists ? event.data.before.data() : null;
    if (!after) return; // 削除は無視

    const becamePending  = after.status === "pending"  && (!before || before.status !== "pending");
    const becameApproved = after.status === "approved" && (!before || before.status !== "approved");
    const becameRejected = after.status === "rejected" && (!before || before.status !== "rejected");
    if (!becamePending && !becameApproved && !becameRejected) return;

    const db = admin.firestore();
    const requester = after.email || event.params.email;
    const name = after.name || requester;

    try {
      if (becamePending) {
        const adminEmails = await getBudgetAdminEmails(db);
        const reason = (after.message || "").trim() || "（理由の記載なし）";
        const subject = `【予実管理】アクセス申請：${name} さん`;
        const text =
`予実管理ボードへのアクセス申請が届きました。

■ 申請者：${name}
■ メール：${requester}
■ 理由　：${reason}

▼ 承認はこちらから
予実管理ボードを開き、右上の「👥 ユーザー管理」→ 一覧上部の申請を承認してください。
${BUDGET_URL}
`;
        await sendMail(requester, adminEmails, subject, text); // 申請者本人として admin へ
        console.log(`[budgetAccess] request from ${requester} → notified ${adminEmails.length} admins`);
      } else if (becameApproved) {
        const roleLabel = after.approvedAs || "viewer";
        await sendMail(BOOTSTRAP_ADMIN_EMAIL, requester, "【予実管理】アクセスが承認されました",
`${name} さん

予実管理ボードへのアクセスが承認されました（権限：${roleLabel}）。
下記URLからご利用いただけます。ページを開いて再読込してください。

${BUDGET_URL}
`);
        console.log(`[budgetAccess] approved ${requester} (${roleLabel}) → notified requester`);
      } else if (becameRejected) {
        await sendMail(BOOTSTRAP_ADMIN_EMAIL, requester, "【予実管理】アクセス申請の結果",
`${name} さん

予実管理ボードへのアクセス申請は今回見送りとなりました。
ご不明な点は管理者までお問い合わせください。
`);
        console.log(`[budgetAccess] rejected ${requester} → notified requester`);
      }
    } catch (e) {
      console.error("[budgetAccess] mail send failed:", e.message);
    }
  }
);

// ============================================================
// リマインド（10分前）：5分毎・当日分のタスクのみを読む
//   collectionGroup("tasks").where("startD","==",今日) で「当日のタスク」だけ取得し、
//   全タスクを毎分読む方式に比べ Firestore 読み取りを ~99% 削減。
//   送信元は担当者本人（sendMail）。重複防止は sentReminders。
//   ※ クライアント側（ブラウザ）のリマインド送信は無効化済み（二重送信防止）。
// ============================================================
async function getGoalName(db, wsId, goalId) {
  try {
    const g = await db.doc(`workspaces/${wsId}/goals/${goalId}`).get();
    return g.exists ? (g.data().name || goalId) : goalId;
  } catch { return goalId; }
}

exports.sendReminders = onSchedule(
  {
    // B：5分→10分間隔（リマインド窓は 8〜17分前に拡張して取りこぼし防止）
    schedule: "every 10 minutes",
    timeZone: "Asia/Tokyo",
    secrets: [GMAIL_SA_KEY],
  },
  async () => {
    const db = admin.firestore();
    const messaging = admin.messaging();

    // 今日（JST）と現在分
    const jst = new Date(Date.now() + 9 * 60 * 60 * 1000);
    const today = jst.toISOString().slice(0, 10);
    const nowMin = jst.getUTCHours() * 60 + jst.getUTCMinutes();
    const dow = jst.getUTCDay(); // 0=日 .. 6=土（JST基準）
    const hour = jst.getUTCHours();

    // A：実働時間帯（平日 6:00–22:00 JST）のみ実行。
    //   それ以外は当日タスクの読み取り（collectionGroup）自体を行わず、読み取りを節約する。
    if (dow === 0 || dow === 6 || hour < 6 || hour >= 22) {
      console.log(`[reminder] skip (outside business hours) ${today} dow=${dow} ${hour}h JST`);
      return;
    }
    console.log(`[reminder] check ${today} ${hour}:${String(jst.getUTCMinutes()).padStart(2,"0")} JST`);

    // ★ 当日分のタスクだけを collectionGroup で取得（全タスク読みを回避）
    const tasksSnap = await db.collectionGroup("tasks").where("startD", "==", today).get();
    const wsCache = {}; // wsId -> workspace data（authMembers 等）
    let totalEmails = 0, totalPushes = 0;

    for (const tDoc of tasksSnap.docs) {
      const t = tDoc.data() || {};
      if (t.status === "完了" || t.status === "中止") continue;
      if (!t.time || !t.owner) continue;
      const m = String(t.time).match(/^(\d{1,2}):(\d{2})/);
      if (!m) continue;
      const taskMin = Number(m[1]) * 60 + Number(m[2]);
      const diff = taskMin - nowMin;
      // 10分間隔に合わせ 8〜17分前（幅10分・半開区間）で各タスクをちょうど1回拾う
      if (diff < 8 || diff >= 18) continue;

      const wsRef = tDoc.ref.parent.parent; // workspaces/{wsId}
      if (!wsRef) continue;
      const wsId = wsRef.id;

      // 重複防止＆同時実行ガード：create() で原子的に予約する。
      //   既に同じキーが存在すれば create が失敗 → skip。
      //   （スケジューラの at-least-once 配信で同一トリガーが二重起動しても二重送信しない）
      const reminderRef = db.collection("sentReminders").doc(`${today}_${wsId}_${t.id}`);
      try {
        await reminderRef.create({
          reservedAt: admin.firestore.FieldValue.serverTimestamp(),
          taskId: t.id, wsId,
        });
      } catch (e) {
        continue; // 既に他の実行が予約済み → 二重送信防止のためスキップ
      }

      // workspace 情報をキャッシュ（同一WSの複数タスクで使い回し）
      if (!wsCache[wsId]) {
        const wsSnap = await wsRef.get();
        wsCache[wsId] = wsSnap.exists ? (wsSnap.data() || {}) : {};
      }
      const wsData = wsCache[wsId];
      const authMembers = Array.isArray(wsData.authMembers) ? wsData.authMembers : [];
      const owner = authMembers.find(a => a && a.name === t.owner);
      if (!owner || !owner.email) {
        console.warn(`[reminder] no email for owner=${t.owner} in ws=${wsId}`);
        try { await reminderRef.delete(); } catch {} // 送信対象外 → 予約を解除
        continue;
      }

      const taskName = t.act || t.mid || "(無題)";
      const wsName = wsData.wsName || wsId;
      const goalName = t.goal ? await getGoalName(db, wsId, t.goal) : "";
      const subject = `⚠️10分前リマインド⚠️‐${taskName}`;
      const textBody = [
        `「${taskName}」開始の 10分前リマインドです。`,
        "",
        `■ ワークスペース：${wsName}`,
        `■ 紐付プロジェクト：${goalName || "(未紐付)"}`,
        `■ タスク：${taskName}`,
        `■ 開始時刻：${t.time}`,
        `■ 所要時間：${t.est ? t.est + "分" : "(未設定)"}`,
        "",
        `アプリで開く：${APP_BASE_URL}`,
        `— Hittatsu | ${wsName} より自動送信`,
      ].join("\n");

      // メール（担当者本人として送信）
      let emailOk = false;
      try {
        await sendMail(owner.email, owner.email, subject, textBody);
        totalEmails++; emailOk = true;
        console.log(`[reminder][email] ${t.id} from/to ${owner.email}`);
      } catch (err) {
        console.error(`[reminder][email] failed ${t.id}:`, err.message);
      }

      // プッシュ（FCM）
      let pushOk = false;
      try {
        const tokensSnap = await db.collection(`workspaces/${wsId}/pushTokens`)
          .where("email", "==", owner.email).get();
        if (!tokensSnap.empty) {
          const tokenDocs = [];
          tokensSnap.forEach(d => tokenDocs.push({ ref: d.ref, token: d.data().token }));
          const tokens = tokenDocs.map(td => td.token).filter(Boolean);
          if (tokens.length > 0) {
            const result = await messaging.sendEachForMulticast({
              tokens,
              notification: {
                title: `⏰ 10分後: ${taskName}`,
                body: `${t.time} 開始 / ${goalName || "(未紐付)"}`,
              },
              data: { taskId: t.id, wsId, url: APP_BASE_URL },
              webpush: { fcmOptions: { link: APP_BASE_URL } },
            });
            totalPushes += result.successCount;
            pushOk = result.successCount > 0;
            await Promise.all(result.responses.map(async (resp, idx) => {
              if (!resp.success) {
                const code = resp.error && resp.error.code;
                if (code === "messaging/invalid-registration-token" ||
                    code === "messaging/registration-token-not-registered") {
                  try { await tokenDocs[idx].ref.delete(); } catch {}
                }
              }
            }));
          }
        }
      } catch (err) {
        console.error(`[reminder][push] failed ${t.id}:`, err.message);
      }

      if (emailOk || pushOk) {
        await reminderRef.set({
          sentAt: admin.firestore.FieldValue.serverTimestamp(),
          taskId: t.id, wsId, ownerEmail: owner.email, taskName,
          emailSent: emailOk, pushSent: pushOk,
        }, { merge: true });
      } else {
        // 送信に失敗 → 予約を解除して次回の実行で再試行できるようにする
        try { await reminderRef.delete(); } catch {}
      }
    }
    console.log(`[reminder] done. tasks(today)=${tasksSnap.size}, emails=${totalEmails}, pushes=${totalPushes}`);
  }
);

// 古い sentReminders を毎日掃除（3日経過分削除）
exports.cleanupSentReminders = onSchedule(
  { schedule: "every day 03:00", timeZone: "Asia/Tokyo" },
  async () => {
    const db = admin.firestore();
    const threshold = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
    const snap = await db.collection("sentReminders").where("sentAt", "<", threshold).get();
    const batch = db.batch();
    snap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(`[cleanup] deleted ${snap.size} old sentReminders`);
  }
);

// ============================================================
// 展示会リード：返信の自動検知 → 案件を自動生成
//   各会社の「担当メンバー各自のメールボックス」を定期的に読み、リードの
//   メールアドレスからの返信があれば案件化する（専用の検知用アドレスは不要）。
//
//   ※ 事前設定（Google Workspace 管理コンソール → ドメイン全体の委任）:
//      送信用サービスアカウントの クライアントID に、送信スコープに加えて
//      https://www.googleapis.com/auth/gmail.readonly を追加すること。
//      これで各メンバー（＝そのドメインのユーザー）のメールボックスを読める。
//   ※ メンバーが複数の Workspace ドメインにまたがる場合は、各ドメインの管理
//      コンソールで同じ委任を登録すること（未登録ドメインのユーザーは読めない）。
// ============================================================
const _gmailReaders = {};
async function getGmailReader(mailbox) {
  if (_gmailReaders[mailbox]) return _gmailReaders[mailbox];
  const key = JSON.parse(GMAIL_SA_KEY.value());
  const jwt = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
    subject: mailbox, // このメールボックスを読む
  });
  await jwt.authorize();
  _gmailReaders[mailbox] = google.gmail({ version: "v1", auth: jwt });
  return _gmailReaders[mailbox];
}

// "山田 太郎 <taro@example.com>" → "taro@example.com"（小文字）
function parseEmail(headerValue) {
  const s = String(headerValue || "");
  const m = s.match(/<([^>]+)>/);
  return (m ? m[1] : s).trim().toLowerCase();
}

function jstYm(monthsAhead) {
  const j = new Date(Date.now() + 9 * 60 * 60 * 1000);
  let y = j.getUTCFullYear();
  let mo = j.getUTCMonth() + 1 + (monthsAhead || 0);
  while (mo > 12) { mo -= 12; y += 1; }
  return `${y}-${String(mo).padStart(2, "0")}`;
}
function jstToday() {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
function newId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
// リードの担当名（フロントの leadRep と同じ優先順: rep → bookName）
function leadRepName(lead) {
  return String(lead.rep || lead.bookName || "").trim();
}

exports.watchLeadReplies = onSchedule(
  {
    // 30分ごと。営業時間外(夜間・土日)は下でスキップして読み取り・API呼び出しを節約。
    schedule: "every 30 minutes",
    timeZone: "Asia/Tokyo",
    secrets: [GMAIL_SA_KEY],
  },
  async () => {
    // 実働時間帯（平日 7:00–20:00 JST）のみ実行。返信は次の営業時間内に処理される。
    const jst = new Date(Date.now() + 9 * 60 * 60 * 1000);
    const dow = jst.getUTCDay(); // 0=日 .. 6=土（JST基準）
    const hour = jst.getUTCHours();
    if (dow === 0 || dow === 6 || hour < 7 || hour >= 20) {
      console.log(`[leadReply] skip (outside business hours) dow=${dow} ${hour}h JST`);
      return;
    }
    const db = admin.firestore();
    // 会社（ワークスペース）ごとに検知用メールボックスを読む
    const wsSnap = await db.collection("salesWs").get();
    let totalConverted = 0;

    for (const wsDoc of wsSnap.docs) {
      const wsId = wsDoc.id;

      // 1) 未案件化のリード（メールあり）を集める。0件ならこの会社はスキップ
      const leadsSnap = await db.collection(`salesWs/${wsId}/leads`).get();
      const openLeads = leadsSnap.docs
        .map(d => d.data())
        .filter(l => l && l.status !== "dealt" && l.email);
      if (!openLeads.length) continue;
      const leadEmails = [...new Set(openLeads.map(l => String(l.email).trim().toLowerCase()))];

      // メンバー（担当の突き合わせ＋各自のメールボックスを確認するため）
      const membersSnap = await db.collection(`salesWs/${wsId}/members`).get();
      const members = membersSnap.docs.map(d => d.data());

      // 確認するメールボックス = 各メンバーのGoogleアカウント
      const mailboxes = [...new Set(
        members.map(m => String((m && m.email) || "").trim().toLowerCase()).filter(Boolean)
      )];
      if (!mailboxes.length) continue;

      // メールアドレス → そのメールボックスの持ち主(メンバーID)。担当が名前で
      // 特定できないときのフォールバックに使う(返信を受け取った本人＝送信した担当)。
      const mailboxOwner = {};
      members.forEach(m => { const e = String((m && m.email) || "").trim().toLowerCase(); if (e) mailboxOwner[e] = m.id; });

      // 2) 各メールボックスを、リードのメールアドレスからの受信に絞って検索する
      //    from:(...) で絞るので、返ってくるのは実際のリード返信だけ（読み取り最小）。
      //    二重案件化はリードの「案件化済」で防ぐ（同じ返信を再取得しても対象外になる）。
      //    senders: 返信元アドレス → それを受信したメールボックスの持ち主メンバーID
      const senders = new Map();
      for (const mb of mailboxes) {
        try {
          const gmail = await getGmailReader(mb);
          for (let i = 0; i < leadEmails.length; i += 25) {
            const chunk = leadEmails.slice(i, i + 25);
            const q = `newer_than:3d -in:chats from:(${chunk.join(" OR ")})`;
            const list = await gmail.users.messages.list({ userId: "me", q, maxResults: 50 });
            for (const ref of (list.data.messages || [])) {
              const meta = await gmail.users.messages.get({
                userId: "me", id: ref.id, format: "metadata", metadataHeaders: ["From"],
              });
              const from = (meta.data.payload?.headers || []).find(h => h.name === "From");
              if (from) {
                const addr = parseEmail(from.value);
                if (!senders.has(addr)) senders.set(addr, mailboxOwner[mb] || "");
              }
            }
          }
        } catch (err) {
          // そのメールボックスを読めない（委任未設定のドメイン等）→ 記録して次へ
          console.error(`[leadReply] read failed for mailbox ${mb} (ws=${wsId}):`, err.message);
        }
      }
      if (!senders.size) continue;

      // 3) 返信元アドレスに一致する未案件化リードを案件化する
      const targets = openLeads.filter(l => senders.has(String(l.email).trim().toLowerCase()));
      if (!targets.length) continue;

      // リードの担当者名 → Hittatsuのアカウント(メンバー)を照合(空白差・姓のみ↔姓名を吸収)
      const normName = (s) => String(s || "").replace(/[\s　]/g, "");
      const memberIdForLead = (lead) => {
        const repN = normName(leadRepName(lead));
        if (repN) {
          const hit = members.find(m => {
            const mn = normName(m && m.name);
            return mn && (mn === repN || mn.includes(repN) || repN.includes(mn));
          });
          if (hit) return hit.id;
        }
        // 名前で特定できなければ、返信を受け取ったメールボックスの持ち主を担当にする
        return senders.get(String(lead.email).trim().toLowerCase()) || "";
      };

      // 得意先マスタ（会社共有の単一ドキュメント。wsId と同じキー）
      const mastersRef = db.doc(`salesMasters/${wsId}`);
      const mastersSnap = await mastersRef.get();
      const masters = mastersSnap.exists ? (mastersSnap.data() || {}) : {};
      const customers = Array.isArray(masters.customers) ? masters.customers : [];

      const batch = db.batch();
      let customersChanged = false;
      const today = jstToday();

      for (const lead of targets) {
        const memberId = memberIdForLead(lead); // 先頭メンバーを機械割当しない
        // 得意先：会社名で照合、なければ新規作成（マスタへ追記）
        let customer = customers.find(c => c && c.name === lead.company);
        if (!customer) {
          customer = {
            id: newId("cus"), name: lead.company || "(不明)", contact: lead.name || "",
            address: lead.address || "", tel: lead.tel || "", memberId: memberId || null,
          };
          customers.push(customer);
          customersChanged = true;
        }
        const dealId = newId("deal");
        // 案件を作成
        batch.set(db.doc(`salesWs/${wsId}/deals/${dealId}`), {
          id: dealId,
          title: [lead.group, lead.company].filter(Boolean).join("・") || (lead.company || "展示会リード"),
          customerId: customer.id,
          endUser: [lead.company, lead.dept, lead.title, lead.name].filter(Boolean).join(" "),
          memberId,
          stage: "ATK",
          expectedMonth: jstYm(2),
          items: [], amount: 0, nas: [], attachments: [],
          createdAt: today,
        });
        // 商談記録（展示会）
        const actId = newId("act");
        batch.set(db.doc(`salesWs/${wsId}/activities/${actId}`), {
          id: actId, dealId, memberId,
          date: lead.exchangeDate || today,
          type: "expo",
          summary: lead.memo || "展示会リードの返信を受信（自動案件化）",
        });
        // リードを案件化済みに
        batch.set(db.doc(`salesWs/${wsId}/leads/${lead.id}`), { ...lead, status: "dealt", dealId }, { merge: true });
        totalConverted++;
      }

      if (customersChanged) {
        batch.set(mastersRef, { ...masters, customers, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
      }
      await batch.commit();
      console.log(`[leadReply] ws=${wsId} converted ${targets.length} lead(s) from ${mailboxes.length} mailbox(es)`);
    }

    console.log(`[leadReply] done. converted=${totalConverted}`);
  }
);

