// 得意先マスタの会社別の整理(一回きりの作業)。内容は prune-customers-lib.js
//   node prune-customers.js                                       … 確認だけ(件数を出す。何も書かない)
//   node prune-customers.js --confirm 他社の得意先を整理 --hash <確認の番号>
//                                                                 … 確認と同じ予定なら、削除済みの印を付ける(先にバックアップを取ること)
// 環境変数: GCP_SA_KEY(Firestore と参照シートを読む) / REPORT_PUBKEY(消す予定の一覧を暗号化する公開鍵)
//           NOSHEET=prune のときは、参照シートが未設定の会社も「シートのコードが0件」として整理する(既定は触らない)
// ログは公開されるため件数だけを出す。
import admin from "firebase-admin";
import { writeFileSync } from "node:fs";
import { google } from "googleapis";
import { initFirestore } from "./lib.js";
import { sealReport } from "./fill-deal-address-lib.js";
import { BY, REF_LISTS, codeKey, planCompany, planHash, sheetCodes, walkStrings } from "./prune-customers-lib.js";

const arg = (k) => {
  const i = process.argv.indexOf(k);
  return i >= 0 ? process.argv[i + 1] || "" : "";
};
const write = arg("--confirm") === "他社の得意先を整理";
const wantHash = arg("--hash");
const noSheetPrune = process.env.NOSHEET === "prune";

const db = initFirestore();
const sa = JSON.parse(process.env.GCP_SA_KEY);
console.log(`シートを読むアカウント: ${sa.client_email}`);
const jwt = new google.auth.JWT({ email: sa.client_email, key: sa.private_key, scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"] });
const sheets = google.sheets({ version: "v4", auth: jwt });
async function readSheet(url) {
  const m = String(url || "").match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (!m) throw new Error("URLが不正です");
  const g = String(url).match(/[#?&]gid=(\d+)/);
  const meta = await sheets.spreadsheets.get({ spreadsheetId: m[1], fields: "sheets(properties(sheetId,title))" });
  const tabs = (meta.data.sheets || []).map((s) => s.properties || {});
  const tab = (g && tabs.find((t) => String(t.sheetId) === g[1])) || tabs[0];
  const r = await sheets.spreadsheets.values.get({ spreadsheetId: m[1], range: `'${String(tab.title).replace(/'/g, "''")}'`, majorDimension: "ROWS", valueRenderOption: "FORMATTED_VALUE" });
  return r.data.values || [];
}
async function sheetUrl(ws) {
  const d = await db.doc(`salesWs/${ws}/mFields/sheetUrls`).get();
  if (!d.exists) return "";
  const v = d.data();
  try {
    return String((v.json !== undefined ? JSON.parse(v.json) : {})?.customers || "").trim();
  } catch (e) {
    return "";
  }
}
const readList = async (path) => (await db.collection(path).get()).docs.map((d) => ({ id: d.id, ...d.data() }));

const shared = (await db.doc("sales3/shared").get()).data() || {};
if (!shared.mastersSplitAt) throw new Error("各社別のマスタになっていません");
const companies = (shared.mastersSplitTo || []).filter((c) => c && c !== "shared" && c !== "common-shared");
const copiedIds = new Set((await readList("sales3/shared/customers")).map((c) => c.id));

async function buildPlan() {
  const custByCo = {};
  const allIds = new Set(copiedIds);
  for (const co of companies) {
    custByCo[co] = (await readList(`sales3/${co}/customers`)).filter((c) => !c._deleted);
    custByCo[co].forEach((c) => allIds.add(c.id));
  }
  const referenced = new Set();
  const dealCodes = new Set();
  const add = (s) => allIds.has(s) && referenced.add(s);
  for (const n of REF_LISTS)
    for (const x of await readList(`sales3/shared/${n}`)) {
      if (x._deleted) continue;
      walkStrings(x, add);
      if (n === "deals" && codeKey(x.customerCode)) dealCodes.add(codeKey(x.customerCode));
    }
  for (const ref of await db.collection("sync3").listDocuments())
    for (const c of await ref.listCollections()) {
      if (c.id === "_snap") continue;
      (await c.get()).docs.forEach((d) => !d.data()._deleted && walkStrings(d.data(), add));
    }
  const plan = {};
  const detail = {};
  const lines = [];
  for (const co of companies) {
    const url = await sheetUrl(co);
    let codes = null;
    let note = "";
    if (url) {
      let values = null;
      try {
        values = await readSheet(url);
      } catch (e) {
        note = `シートを読めません(${String(e?.message || e).slice(0, 60)})→ 触らない`;
      }
      const s = values ? sheetCodes(values) : null;
      if (!s) {
      } else if (!s.ok) throw new Error(`${co}: 参照シートに「得意先ｺｰﾄﾞ」の列が見つかりません(中止)`);
      else if (s.codes.size < 10) throw new Error(`${co}: 参照シートの得意先コードが ${s.codes.size}件しかありません(読み違いの恐れがあるため中止)`);
      else {
        codes = s.codes;
        note = `シート ${s.rows}行・コード ${s.codes.size}種類`;
      }
    } else if (noSheetPrune) {
      codes = new Set();
      note = "シート未設定(コード0件として整理)";
    } else note = "シート未設定(触らない)";
    const r = planCompany(custByCo[co], codes, copiedIds, referenced, dealCodes);
    plan[co] = r.drop;
    const byId = new Map(custByCo[co].map((c) => [c.id, c]));
    detail[co] = r.drop.map((id) => [id, byId.get(id)?.code || "", byId.get(id)?.name || "", byId.get(id)?.site || ""]);
    lines.push(
      `【${co}】${note}\n  得意先 ${r.total}件 → 残す ${r.total - r.drop.length}件(シートにある ${r.inSheet}・コード空 ${r.noCode}・10/21より後に追加 ${r.added}・案件などが使っている ${r.referenced})/ 削除の印を付ける ${r.drop.length}件`
    );
  }
  return { plan, detail, lines, refCount: referenced.size };
}

const { plan, detail, lines, refCount } = await buildPlan();
const hash = planHash(plan);
console.log(`会社: ${companies.join("・")} / 案件などが使っている得意先ID ${refCount}種類`);
console.log(lines.join("\n"));
console.log(`合計 削除の印を付ける: ${Object.values(plan).reduce((n, a) => n + a.length, 0)}件 / 確認の番号: ${hash}`);

const pub = process.env.REPORT_PUBKEY;
if (pub) {
  const sealed = sealReport({ at: new Date().toISOString(), hash, detail }, pub);
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
  console.error(`中止: 確認の番号が違います(指定 ${wantHash || "なし"} / 今の予定 ${hash})。確認だけの実行をやり直してください。`);
  process.exit(1);
}
const at = new Date().toISOString();
const FP = admin.firestore.FieldPath;
let n = 0;
for (const co of companies) {
  const ids = plan[co];
  for (let i = 0; i < ids.length; i += 400) {
    const b = db.batch();
    ids.slice(i, i + 400).forEach((id) =>
      b.update(db.doc(`sales3/${co}/customers/${id}`), new FP("_deleted"), true, new FP("_delAt"), at, new FP("_at"), Date.now(), new FP("_by"), BY, new FP("_wt"), admin.firestore.FieldValue.serverTimestamp())
    );
    await b.commit();
    n += Math.min(400, ids.length - i);
  }
}
console.log(`削除の印を付けました: ${n}件(文書は残っています。2日後の定期処理で本当に消えます。戻すときは書く前のバックアップから)`);
// 書いたあとの確認
for (const co of companies) {
  const left = (await readList(`sales3/${co}/customers`)).filter((c) => !c._deleted).length;
  console.log(`  ${co}: 残った得意先 ${left}件`);
}
