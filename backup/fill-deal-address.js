// 案件の住所を、ユーザー名から引いた住所で入れる(一回きりの作業)。内容は fill-deal-address-lib.js
//   node fill-deal-address.js                         … 確認だけ(何も書かない)。得意先マスタとの照合結果を出す
//   node fill-deal-address.js --confirm 住所を入れる --hash <書く予定の番号>
//                                                     … fill-deal-address.plan.enc の案件に住所を入れる(先にバックアップを取ること)
// 書く予定(案件ID・住所・確認時のユーザー名)は、得意先マスタと Googleマップの場所検索の結果から作り、
// Yuta さんが確認した一覧。名前・住所を含むため、サービスアカウントの公開鍵で暗号化して置く(秘密鍵を持つこの作業だけが読める)。
// 環境変数: GCP_SA_KEY / REPORT_PUBKEY(確認の一覧を暗号化する公開鍵。無ければ一覧は出さない)
// ログは公開されるため件数だけを出す。
import admin from "firebase-admin";
import crypto from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { initFirestore } from "./lib.js";
import { BY, CLIENT_WRITE_VERSION, buildPlan, contentWithoutAddress, fingerprint, fvWithoutAddress, openReport, planHash, sealReport } from "./fill-deal-address-lib.js";

const arg = (k) => {
  const i = process.argv.indexOf(k);
  return i >= 0 ? process.argv[i + 1] || "" : "";
};
const write = arg("--confirm") === "住所を入れる";
const wantHash = arg("--hash");

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

const { counts, rows, planHash: hash } = buildPlan(deals, customers);
console.log(
  [
    `削除されていない案件: ${counts.all}件`,
    `  ユーザー名あり: ${counts.withUser}件(うち住所が入っていて触らない: ${counts.hasAddr}件)`,
    `  対象(ユーザー名あり・住所なし): ${counts.target}件`,
    `    住所が1つに決まる: ${counts.match}件`,
    `    候補の住所が複数(入れない): ${counts.multi}件`,
    `    得意先は見つかるが住所が空(入れない): ${counts.noaddr}件`,
    `    得意先マスタに見つからない(入れない): ${counts.none}件`,
    `照合結果の番号: ${hash}`,
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

// 書く予定の暗号化に使う公開鍵(サービスアカウントの鍵から作る。公開してよい)
const sa = JSON.parse(process.env.GCP_SA_KEY);
console.log("書く予定の暗号化に使う公開鍵:");
console.log(crypto.createPublicKey(sa.private_key).export({ type: "spki", format: "pem" }).trim());

const PLAN_FILE = "fill-deal-address.plan.enc";
if (!write) {
  if (existsSync(PLAN_FILE)) {
    const p = openReport(readFileSync(PLAN_FILE, "utf8").trim(), sa.private_key);
    console.log(`書く予定: ${p.length}件(番号 ${planHash(p)})`);
  }
  console.log("(確認だけ。何も書いていません)");
  process.exit(0);
}
const todo = openReport(readFileSync(PLAN_FILE, "utf8").trim(), sa.private_key);
if (!wantHash || wantHash !== planHash(todo)) {
  console.error(`中止: 書く予定の番号が違います(指定 ${wantHash || "なし"} / 書く予定 ${planHash(todo)})`);
  process.exit(1);
}
console.log(`住所を入れます: ${todo.length}件`);

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
