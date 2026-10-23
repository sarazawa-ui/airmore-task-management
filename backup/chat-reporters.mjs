// 反映した変更の題名にある「チャット報告 #番号」から、報告した人の Google Chat のメンション(<users/ID>)を出す。
//   node chat-reporters.mjs "<変更の題名>"
// 「更新のお知らせ」(.github/workflows/notify-chat.yml)が、知らせの本文に報告者のメンションを入れるために使う。
// 報告の記録は Hittatsu Bot が chatBot/reports/items に残す(報告者の ID は 2026-10-23 以降の報告から)。
// 見つからない・読めないときは何も出さない(知らせ自体は止めない)。
import { initFirestore } from "./lib.js";

const nums = [...new Set([...(process.argv[2] || "").matchAll(/チャット報告\s*#(\d+)/g)].map((m) => Number(m[1])))];
const ids = [];
try {
  if (nums.length) {
    const db = initFirestore();
    for (const n of nums) {
      const snap = await db.collection("chatBot/reports/items").where("issue", "==", n).limit(1).get();
      const id = snap.empty ? "" : String(snap.docs[0].get("sender") || "");
      if (/^users\/\d+$/.test(id) && !ids.includes(id)) ids.push(id);
    }
  }
} catch (e) {
  console.error("報告者を調べられませんでした: " + (e?.message || e));
}
console.log(ids.map((id) => `<${id}>`).join(" "));
process.exit(0);
