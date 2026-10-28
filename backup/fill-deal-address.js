// 案件の住所を、ユーザー名から得意先マスタを引いて入れる(一回きりの作業)。内容は fill-deal-address-lib.js
//   node fill-deal-address.js                                   … 確認だけ(何も書かない)
//   node fill-deal-address.js --confirm 住所を入れる --hash <確認時の番号> [--exclude id,id]
//                                                               … 住所を入れる(先にバックアップを取ること)
// 環境変数: GCP_SA_KEY / REPORT_PUBKEY(名前・住所の一覧を暗号化する公開鍵。無ければ一覧は出さない)
// ログは公開されるため件数だけを出す。一覧は暗号化して report.enc に書き、ログにも出す。
import admin from "firebase-admin";
import { writeFileSync } from "node:fs";
import { initFirestore } from "./lib.js";
import { BY, CLIENT_WRITE_VERSION, buildPlan, contentWithoutAddress, fingerprint, fvWithoutAddress, planHash, sealReport } from "./fill-deal-address-lib.js";

const arg = (k) => {
  const i = process.argv.indexOf(k);
  return i >= 0 ? process.argv[i + 1] || "" : "";
};
const write = arg("--confirm") === "住所を入れる";
const wantHash = arg("--hash");
const exclude = new Set(arg("--exclude").split(/[,\s]+/).filter(Boolean));

const db = initFirestore();
const shared = (await db.doc("sales3/shared").get()).data() || {};
const companies = [...new Set([...(shared.mastersSplitTo || []), ...(shared.from || [])])].filter((c) => c && c !== "shared");
console.log(`得意先マスタを読む会社: ${companies.length}社`);

const readList = async (path) => (await db.collection(path).get()).docs.map((d) => ({ id: d.id, data: d.data() }));
const deals = await readList("sales3/shared/deals");
const customers = {};
for (const co of companies) customers[co] = await readList(`sales3/${co}/customers`);
if (!shared.mastersSplitAt) customers.shared = await readList("sales3/shared/customers");
console.log(`案件 ${deals.length}件 / 得意先 ${Object.values(customers).reduce((n, a) => n + a.length, 0)}件(全社の合計)`);

const { counts, rows, plan, planHash: hash } = buildPlan(deals, customers);
console.log(
  [
    `削除されていない案件: ${counts.all}件`,
    `  ユーザー名あり: ${counts.withUser}件(うち住所が入っていて触らない: ${counts.hasAddr}件)`,
    `  対象(ユーザー名あり・住所なし): ${counts.target}件`,
    `    住所が1つに決まる: ${counts.match}件`,
    `    候補の住所が複数(入れない): ${counts.multi}件`,
    `    得意先は見つかるが住所が空(入れない): ${counts.noaddr}件`,
    `    得意先マスタに見つからない(入れない): ${counts.none}件`,
    `確認の番号: ${hash}`,
  ].join("\n"),
);

const pub = process.env.REPORT_PUBKEY;
if (pub) {
  // 一覧は小さく(ログで読めるように): 案件ID・件名・ユーザー名・結果と、候補の得意先(最大3件)
  const brief = rows.map((r) => [r.id, r.title, r.endUser, r.kind, r.address || "", (r.hits || []).slice(0, 3).map((c) => [c.co, c.code, c.name, c.site, c.address])]);
  const sealed = sealReport({ at: new Date().toISOString(), counts, hash, rows: brief }, pub);
  writeFileSync("report.enc", sealed);
  console.log("----- REPORT BEGIN -----");
  for (let i = 0; i < sealed.length; i += 3000) console.log(sealed.slice(i, i + 3000));
  console.log("----- REPORT END -----");
}

if (!write) {
  console.log("(確認だけ。何も書いていません)");
  process.exit(0);
}
if (!wantHash || wantHash !== hash) {
  console.error(`中止: 確認の番号が違います(確認時 ${wantHash || "未指定"} / 今 ${hash})。確認したときからデータが変わっています。確認からやり直してください。`);
  process.exit(1);
}
const todo = plan.filter((p) => !exclude.has(p.id));
console.log(`住所を入れます: ${todo.length}件(除外 ${plan.length - todo.length}件)`);

const before = new Map();
const result = { written: 0, skipped: 0 };
for (const p of todo) {
  const ref = db.doc(`sales3/shared/deals/${p.id}`);
  const ok = await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const d = snap.exists ? snap.data() : null;
    // 確認のあとで住所が入った・ユーザー名が変わった・削除された案件は触らない
    if (!d || d._deleted || (typeof d.address === "string" && d.address.trim()) || String(d.endUser || "").trim() !== p.endUser) return false;
    before.set(p.id, d);
    const at = Date.now();
    tx.update(
      ref,
      new admin.firestore.FieldPath("address"), p.address,
      new admin.firestore.FieldPath("_fv", "address"), { by: BY, at, b: fingerprint(d.address) },
      new admin.firestore.FieldPath("_at"), at,
      new admin.firestore.FieldPath("_by"), BY,
      new admin.firestore.FieldPath("_wt"), admin.firestore.FieldValue.serverTimestamp(),
      new admin.firestore.FieldPath("_cv"), CLIENT_WRITE_VERSION,
    );
    return true;
  });
  ok ? result.written++ : result.skipped++;
}
console.log(`書いた: ${result.written}件 / 確認のあとで変わっていたため触らなかった: ${result.skipped}件`);

// 書いたあとの確認: 住所以外の欄が1つも変わっていないこと
const v = { same: 0, addrOk: 0, diff: 0, editedSince: 0 };
for (const [id, b] of before) {
  const a = (await db.doc(`sales3/shared/deals/${id}`).get()).data() || {};
  if (a._by !== BY) {
    v.editedSince++; // 書いた直後に誰かが画面で変えた(その人の変更なので比べない)
    continue;
  }
  const p = todo.find((x) => x.id === id);
  if (a.address === p.address) v.addrOk++;
  if (contentWithoutAddress(a) === contentWithoutAddress(b) && fvWithoutAddress(a) === fvWithoutAddress(b) && a._schema === b._schema) v.same++;
  else v.diff++;
}
console.log(`確認: 住所以外が変わっていない ${v.same}件 / 住所が予定どおり ${v.addrOk}件 / 住所以外が変わった ${v.diff}件 / 直後に画面で編集された ${v.editedSince}件`);
if (v.diff) {
  console.error("住所以外が変わった案件があります。バックアップからの復元を検討してください。");
  process.exit(1);
}
console.log(`完了(確認の番号 ${planHash(todo)})`);
