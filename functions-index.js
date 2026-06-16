// Cloud Functions for Hittatsu
// メール送信（Gmail API + サービスアカウント / 送信元はタスク担当者本人）＋ プッシュ送信（FCM）
//
// このファイルを functions/index.js としてコピーしてください。
// 依存：package.json に "googleapis" を追加（npm i googleapis）
//
// 必要な secrets（サービスアカウントの JSON キー全体を貼り付け）:
//   firebase functions:secrets:set GMAIL_SA_KEY
//
// 事前設定（Google Workspace 管理コンソール → セキュリティ → API制御 → ドメイン全体の委任）:
//   サービスアカウントのクライアントID に scope https://www.googleapis.com/auth/gmail.send を許可

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
  try {
    await sendMail(fromEmail, list, String(subject), String(text || ""));
    return { ok: true, from: fromEmail };
  } catch (e) {
    console.error("[sendAppEmail] failed:", e.message);
    throw new HttpsError("internal", "送信に失敗しました: " + e.message);
  }
});

exports.sendReminders = onSchedule(
  {
    schedule: "every 1 minutes",
    timeZone: "Asia/Tokyo",
    secrets: [GMAIL_SA_KEY],
  },
  async () => {
    const db = admin.firestore();
    const messaging = admin.messaging();

    // 今日（JST）
    const now = new Date();
    const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const today = jst.toISOString().slice(0, 10);
    const nowMin = jst.getUTCHours() * 60 + jst.getUTCMinutes();

    console.log(`[reminder] check at ${today} ${jst.getUTCHours()}:${String(jst.getUTCMinutes()).padStart(2,"0")} JST`);

    const wsSnap = await db.collection("workspaces").get();
    let totalEmails = 0, totalPushes = 0;

    for (const wsDoc of wsSnap.docs) {
      const wsId = wsDoc.id;
      const wsData = wsDoc.data() || {};
      const wsName = wsData.wsName || wsId;
      const authMembers = Array.isArray(wsData.authMembers) ? wsData.authMembers : [];

      const tasksSnap = await db.collection(`workspaces/${wsId}/tasks`).get();
      for (const tDoc of tasksSnap.docs) {
        const t = tDoc.data() || {};
        if (t.status === "完了" || t.status === "中止") continue;
        if (t.startD !== today) continue;
        if (!t.time || !t.owner) continue;
        const m = String(t.time).match(/^(\d{1,2}):(\d{2})/);
        if (!m) continue;
        const taskMin = Number(m[1]) * 60 + Number(m[2]);
        const diff = taskMin - nowMin;
        if (diff < 8 || diff > 12) continue;

        // 重複防止
        const reminderKey = `${today}_${wsId}_${t.id}`;
        const reminderRef = db.collection("sentReminders").doc(reminderKey);
        if ((await reminderRef.get()).exists) continue;

        const owner = authMembers.find(a => a.name === t.owner);
        if (!owner || !owner.email) {
          console.warn(`[reminder] no email for owner=${t.owner} in ws=${wsId}`);
          continue;
        }

        const taskName = t.act || t.mid || "(無題)";
        const goalName = t.goal ? (await getGoalName(db, wsId, t.goal)) : "";
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

        // ===== メール送信（Gmail / 担当者本人として送信） =====
        let emailOk = false;
        try {
          await sendMail(owner.email, owner.email, subject, textBody);
          totalEmails++;
          emailOk = true;
          console.log(`[email] sent: ${t.id} from/to ${owner.email}`);
        } catch (err) {
          console.error(`[email] failed ${t.id}:`, err.message);
        }

        // ===== プッシュ送信（FCM） =====
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
                data: {
                  taskId: t.id,
                  wsId,
                  url: APP_BASE_URL,
                  type: "reminder",
                  tag: `task-${t.id}`,
                },
                webpush: {
                  notification: {
                    icon: APP_BASE_URL + "icons/icon-192.png",
                    badge: APP_BASE_URL + "icons/icon-192.png",
                    requireInteraction: false,
                  },
                  fcmOptions: { link: APP_BASE_URL },
                },
              });
              totalPushes += result.successCount;
              pushOk = result.successCount > 0;
              console.log(`[push] ${t.id} -> ${owner.email}: success=${result.successCount}, fail=${result.failureCount}`);
              // 無効トークンを削除
              await Promise.all(result.responses.map(async (resp, idx) => {
                if (!resp.success) {
                  const err = resp.error;
                  const code = err && err.code;
                  if (code === "messaging/invalid-registration-token" ||
                      code === "messaging/registration-token-not-registered") {
                    try { await tokenDocs[idx].ref.delete(); console.log(`[push] removed invalid token`); } catch {}
                  }
                }
              }));
            }
          } else {
            console.log(`[push] no tokens for ${owner.email}`);
          }
        } catch (err) {
          console.error(`[push] failed ${t.id}:`, err.message);
        }

        // 送信記録
        if (emailOk || pushOk) {
          await reminderRef.set({
            sentAt: admin.firestore.FieldValue.serverTimestamp(),
            taskId: t.id, wsId, ownerEmail: owner.email, taskName,
            emailSent: emailOk, pushSent: pushOk,
          });
        }
      }
    }
    console.log(`[reminder] done. emails=${totalEmails}, pushes=${totalPushes}`);
  }
);

async function getGoalName(db, wsId, goalId) {
  try {
    const g = await db.doc(`workspaces/${wsId}/goals/${goalId}`).get();
    return g.exists ? (g.data().name || goalId) : goalId;
  } catch { return goalId; }
}

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

// 古い sentReminders を毎日掃除（3日経過分削除）
exports.cleanupSentReminders = onSchedule(
  { schedule: "every day 03:00", timeZone: "Asia/Tokyo" },
  async () => {
    const db = admin.firestore();
    const threshold = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
    const snap = await db.collection("sentReminders")
      .where("sentAt", "<", threshold).get();
    const batch = db.batch();
    snap.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(`[cleanup] deleted ${snap.size} old sentReminders`);
  }
);
