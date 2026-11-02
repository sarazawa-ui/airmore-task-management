// 案件がカンバンに出ない件の調査(読むだけ)。見積番号から案件・担当者・所属会社をたどる。
// ログは公開されるため件数・有無だけを出し、名前などは REPORT_PUBKEY で暗号化して出す。
import { initFirestore } from "./lib.js";
import { sealReport } from "./fill-deal-address-lib.js";
const db = initFirestore();
const B = "sales3/shared";
const ts = (v) => (v == null ? null : typeof v === "number" ? new Date(v).toISOString() : v.toDate ? v.toDate().toISOString() : String(v));
const all = async (p) => (await db.collection(p).get()).docs.map((d) => ({ id: d.id, ...d.data() }));
const [deals, quotes, members] = [await all(`${B}/deals`), await all(`${B}/quotes`), await all(`${B}/members`)];
const ucDoc = await db.doc("globalBudget/userCompanies").get();
const uc = (ucDoc.data() || {}).map || {};
const memById = new Map(members.map((m) => [m.id, m]));
const compOf = (m) => (m && m.email && uc[String(m.email).toLowerCase()]) || (m && m.company) || "";
const out = { ucUpdate: ts(ucDoc.updateTime), members: members.map((m) => ({ id: m.id, name: m.name, email: m.email, company: m.company || "", mapCompany: compOf(m), del: !!m._deleted, at: ts(m._at), by: m._by || "" })) };
const q = quotes.find((x) => x.number === "Q-20261021-340");
console.log(`見積 Q-20261021-340: ${q ? "あり" : "なし"}`);
if (q) {
  const d = deals.find((x) => x.id === q.dealId);
  const m = d && memById.get(d.memberId);
  console.log(`  紐づく案件: ${d ? "あり" : "なし"} / 削除の印: ${d ? !!d._deleted : "-"} / 担当者: ${m ? "メンバーにいる" : d && d.memberId ? "メンバーにいない" : "未設定"} / 担当者の所属会社: ${compOf(m) || "未設定"}`);
  out.q = { dealId: q.dealId, deal: d ? { title: d.title, stage: d.stage, memberId: d.memberId, deleted: !!d._deleted, at: ts(d._at), by: d._by, createdAt: d.createdAt, expectedMonth: d.expectedMonth, fv: d._fv } : null, member: m || null };
}
const live = deals.filter((d) => !d._deleted);
const byComp = {};
for (const d of live) { const m = memById.get(d.memberId); const k = m ? compOf(m) || "(所属会社なし)" : d.memberId ? "(担当者がメンバー一覧にいない)" : "(担当者なし)"; byComp[k] = (byComp[k] || 0) + 1; }
console.log("削除されていない案件の担当者の所属会社別件数:", JSON.stringify(byComp));
console.log(`メンバー ${members.length}人(削除の印 ${members.filter((m) => m._deleted).length}) / 共有マップの所属会社 ${Object.keys(uc).length}件 最終更新 ${out.ucUpdate}`);
const today = Date.parse("2026-11-01T15:00:00Z");
const toMs = (v) => (v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : Date.parse(v) || 0);
console.log(`今日書き換わったメンバー: ${members.filter((m) => toMs(m._at) > today).length}人`);
const sealed = sealReport(out, process.env.REPORT_PUBKEY);
console.log("----- REPORT BEGIN -----");
for (let i = 0; i < sealed.length; i += 3000) console.log(sealed.slice(i, i + 3000));
console.log("----- REPORT END -----");
console.log("(読むだけ。データは何も書き換えていません)");
