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
// 売上：Googleスプレッドシート自動取込（方式B・サーバー側）
//   各社の参照URL（globalBudget/data の salesSheetUrl[cid]）を、
//   サービスアカウント（GMAIL_SA_KEY）で読み取り、売上に反映する。
//   ※ 各スプレッドシートを、SAのメールアドレス
//       hittatsu-mailer@airmore-task-management-app.iam.gserviceaccount.com
//     に「閲覧者」で共有しておくこと（非公開のまま読める）。
//   ※ Google Cloud で Sheets API を有効化しておくこと。
//   - 定期実行：平日 23:59（Asia/Tokyo）
//   - 手動実行：onCall refreshSalesNow（更新ボタンから呼ぶ）
//   解析ロジックはクライアント（budget/src/App.jsx の parseSalesRows）と同等。
// ============================================================
const SHIP_CODES = ["*5", "*555"];
function _num(v) {
  const n = parseFloat(String(v == null ? "" : v).replace(/[,¥\s"']/g, ""));
  return isNaN(n) ? 0 : n;
}
function _normYM(v) {
  const s = String(v == null ? "" : v).trim();
  const sep = s.match(/(\d{4})\s*[年./\-]\s*(\d{1,2})(?!\d)/);
  if (sep) { const mm = +sep[2]; if (mm >= 1 && mm <= 12) return `${sep[1]}-${String(mm).padStart(2, "0")}`; }
  const d = s.replace(/[^0-9]/g, "");
  if (d.length === 6 || d.length === 8) { const y = d.slice(0, 4), mm = +d.slice(4, 6); if (mm >= 1 && mm <= 12) return `${y}-${String(mm).padStart(2, "0")}`; }
  if (d.length === 5) { const y = d.slice(0, 4), mm = +d.slice(4); if (mm >= 1 && mm <= 9) return `${y}-0${mm}`; }
  return null;
}
function _parseSalesRows(rows, fields) {
  const normH = (s) => String(s).replace(/\s/g, "");
  const codeKey = fields.find(f => ["商品ｺｰﾄﾞ", "商品コード", "商品CD", "品番", "商品番号", "商品№"].includes(normH(f)))
    || fields.find(f => /商品.*(コード|ｺｰﾄﾞ|CD)/.test(normH(f))) || null;
  const prodNameKey = fields.find(f => ["商品名１", "商品名1", "商品名(1)", "商品名（1）", "商品名（１）"].includes(normH(f)))
    || fields.find(f => /商品名.*[1１]/.test(normH(f))) || fields.find(f => /商品名/.test(normH(f))) || null;
  const byMonth = {};
  const reps = new Set();
  for (const r of rows) {
    const ym = _normYM(r["年月度"]) || _normYM(r["伝票日付"]);
    if (!ym) continue;
    const rep = (String(r["担当営業名"] == null ? "" : r["担当営業名"]).trim()) || "担当未設定";
    const amt = _num(r["金額"]);
    const cost = _num(r["原価金額"]);
    const gpCol = r["粗利"];
    const gp = gpCol !== undefined && String(gpCol).trim() !== "" ? _num(gpCol) : amt - cost;
    const isShip = codeKey ? SHIP_CODES.includes(String(r[codeKey] == null ? "" : r[codeKey]).trim()) : false;
    const isTax = prodNameKey ? String(r[prodNameKey] == null ? "" : r[prodNameKey]).includes("消費税") : false;
    if (!byMonth[ym]) byMonth[ym] = { byRep: {} };
    if (!byMonth[ym].byRep[rep]) byMonth[ym].byRep[rep] = { amt: 0, cost: 0, gp: 0, cnt: 0, ship: { amt: 0, cost: 0, gp: 0, cnt: 0 }, tax: { amt: 0, cost: 0, gp: 0, cnt: 0 } };
    const t = byMonth[ym].byRep[rep];
    t.amt += amt; t.cost += cost; t.gp += gp; t.cnt += 1;
    if (isShip) { t.ship.amt += amt; t.ship.cost += cost; t.ship.gp += gp; t.ship.cnt += 1; }
    if (isTax) { t.tax.amt += amt; t.tax.cost += cost; t.tax.gp += gp; t.tax.cnt += 1; }
    reps.add(rep);
  }
  return { byMonth, reps: [...reps], months: Object.keys(byMonth) };
}
function _parseSalesValues(values) {
  if (!values || !values.length) throw new Error("シートにデータがありません");
  const fields = (values[0] || []).map(h => String(h == null ? "" : h).trim());
  const rows = values.slice(1).map(arr => {
    const o = {};
    fields.forEach((h, i) => { if (h) o[h] = arr[i]; });
    return o;
  });
  return _parseSalesRows(rows, fields);
}
function _parseSheetUrl(url) {
  const idM = String(url || "").match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (!idM) throw new Error("URL形式が不正です");
  const gidM = String(url).match(/[#&?]gid=(\d+)/);
  return { id: idM[1], gid: gidM ? Number(gidM[1]) : null };
}
let _sheetsClient = null;
async function getSheets() {
  if (_sheetsClient) return _sheetsClient;
  const key = JSON.parse(GMAIL_SA_KEY.value());
  const jwt = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  await jwt.authorize();
  _sheetsClient = google.sheets({ version: "v4", auth: jwt });
  return _sheetsClient;
}
async function fetchSheetValues(url) {
  const { id, gid } = _parseSheetUrl(url);
  const sheets = await getSheets();
  const meta = await sheets.spreadsheets.get({ spreadsheetId: id, fields: "sheets(properties(sheetId,title))" });
  const list = (meta.data && meta.data.sheets) || [];
  if (!list.length) throw new Error("シートが見つかりません");
  let target = gid != null ? list.find(s => s.properties && s.properties.sheetId === gid) : null;
  if (!target) target = list[0];
  const title = target.properties.title;
  const valRes = await sheets.spreadsheets.values.get({
    spreadsheetId: id, range: title, majorDimension: "ROWS", valueRenderOption: "FORMATTED_VALUE",
  });
  return { values: (valRes.data && valRes.data.values) || [], sheetTitle: title };
}
// 売上スプレッドシートを取込（targetCid 指定でその会社のみ／省略で全社）
async function refreshSalesSheetsCore(targetCid) {
  const db = admin.firestore();
  const ref = db.doc("globalBudget/data");
  const snap = await ref.get();
  if (!snap.exists) return { ok: false, reason: "no-data", results: [] };
  let parsed0;
  try { parsed0 = JSON.parse((snap.data() || {}).value || "{}"); } catch (e) { return { ok: false, reason: "parse", results: [] }; }
  const urls = parsed0.salesSheetUrl || {};
  const cids = Object.keys(urls).filter(c => urls[c] && (!targetCid || c === targetCid));
  const fetched = {};
  const results = [];
  for (const cid of cids) {
    try {
      const { values } = await fetchSheetValues(urls[cid]);
      const res = _parseSalesValues(values);
      if (!res.months.length) { results.push({ cid, ok: false, reason: "対象月の行なし" }); continue; }
      fetched[cid] = res;
      results.push({ cid, ok: true, months: res.months.length });
    } catch (e) {
      results.push({ cid, ok: false, reason: e.message });
    }
  }
  const okCids = Object.keys(fetched);
  if (okCids.length) {
    await db.runTransaction(async (tx) => {
      const s = await tx.get(ref);
      let p;
      try { p = JSON.parse((s.data() || {}).value || "{}"); } catch (e) { p = parsed0; }
      p.sales = p.sales || {};
      p.repMap = p.repMap || {};
      p.lastImport = p.lastImport || {};
      p.lastImport.sales = p.lastImport.sales || {};
      const stamp = new Date().toISOString();
      okCids.forEach(cid => {
        const res = fetched[cid];
        Object.keys(res.byMonth).forEach(ym => { p.sales[ym] = Object.assign({}, p.sales[ym], { [cid]: res.byMonth[ym] }); });
        res.reps.forEach(r => { if (!(r in p.repMap)) p.repMap[r] = ""; });
        p.lastImport.sales[cid] = stamp;
      });
      tx.set(ref, {
        value: JSON.stringify(p),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        _writer: "server-sheet-refresh",
      }, { merge: true });
    });
  }
  return { ok: true, updated: okCids.length, results };
}

// 定期実行：平日 23:59（日本時間）
exports.refreshSalesSheets = onSchedule(
  { schedule: "59 23 * * 1-5", timeZone: "Asia/Tokyo", secrets: [GMAIL_SA_KEY] },
  async () => {
    const r = await refreshSalesSheetsCore(null);
    console.log("[refreshSalesSheets]", JSON.stringify(r));
  }
);

// 手動実行：更新ボタンから呼ぶ（cid 指定でその会社のみ）
exports.refreshSalesNow = onCall({ secrets: [GMAIL_SA_KEY] }, async (req) => {
  if (!req.auth) throw new HttpsError("unauthenticated", "ログインが必要です");
  const cid = req.data && req.data.cid ? String(req.data.cid) : null;
  try {
    return await refreshSalesSheetsCore(cid);
  } catch (e) {
    console.error("[refreshSalesNow] failed:", e.message);
    throw new HttpsError("internal", "更新に失敗しました: " + e.message);
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
    schedule: "every 5 minutes",
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
    console.log(`[reminder] check ${today} ${jst.getUTCHours()}:${String(jst.getUTCMinutes()).padStart(2,"0")} JST`);

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
      if (diff < 8 || diff > 12) continue; // 8〜12分前のみ

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

