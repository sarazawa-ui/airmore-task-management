// Cloud Functions for Hittatsu reminder
// メール送信（SendGrid）＋ プッシュ送信（FCM）の統合版
//
// このファイルを functions/index.js としてコピーしてください。
//
// 必要な secrets:
//   firebase functions:secrets:set SENDGRID_KEY

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { setGlobalOptions } = require("firebase-functions/v2");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();
setGlobalOptions({ region: "asia-northeast1" });

const SENDGRID_KEY = defineSecret("SENDGRID_KEY");
const SENDGRID_FROM_EMAIL = "sarazawa@n-airmore.com"; // ★ 認証済み送信元に書き換え
const SENDGRID_FROM_NAME  = "Hittatsu リマインドBot";
const APP_BASE_URL = "https://sarazawa-ui.github.io/airmore-task-management/";

exports.sendReminders = onSchedule(
  {
    schedule: "every 1 minutes",
    timeZone: "Asia/Tokyo",
    secrets: [SENDGRID_KEY],
  },
  async () => {
    sgMail.setApiKey(SENDGRID_KEY.value());
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

        // ===== メール送信（SendGrid） =====
        let emailOk = false;
        try {
          await sgMail.send({
            from: { email: SENDGRID_FROM_EMAIL, name: SENDGRID_FROM_NAME },
            to: owner.email,
            subject,
            text: textBody,
          });
          totalEmails++;
          emailOk = true;
          console.log(`[email] sent: ${t.id} -> ${owner.email}`);
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
