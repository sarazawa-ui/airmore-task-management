// 販売管理システム（LLJ）の年間売上データを、会社別の取込用CSVへ振り分ける。
//
// ■ 振り分けルール（過去の振り分け結果から確定したもの）
//   「担当営業名」の先頭に付く部門名で会社を決める。
//     ◆Industry …            → エアモア
//     ◆HVAC / ◆HOME          → リークラボ
//     上記以外（◆Automotive、◆Automotive TMP、◆EC、◆OEM、◆海外セールス、◆直販）
//                             → MOBILY
//     担当営業名が空の行       → 対象外（どの会社にも入れない）
//
//   このルールは、2024年のデータで前回の会社別CSVと突き合わせて確認済み。
//   行数・金額とも完全に一致する（エアモア 2,817行 ¥233,124,391／
//   MOBILY 24,913行 ¥1,042,585,852／リークラボ 575行 ¥31,647,390）。
//
// ■ 使い方
//   node split-sales-by-department.mjs --file "…\【2024】LLJ_売上データ.xlsx" [--out "出力先フォルダ"]
//
//   会社ごとのCSVを出力し、最後に行数と金額の内訳を表示する。
//   出力したCSVは、アプリの「売上」タブから会社ごとに取り込む
//   （取込は、そのファイルに入っている月だけを置き換える）。
//   画面から取り込めない事情があるときは import-sales.js で直接書き込む。
//
//   xlsx の読み取りには airmore-sales の xlsx を使う（このフォルダには入れていない）。

import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const XLSX_PATHS = [
  "C:/Users/saraz/Desktop/Claude/airmore-sales/node_modules/xlsx",
  "xlsx",
];
let XLSX = null;
for (const p of XLSX_PATHS) {
  try {
    XLSX = require(p);
    break;
  } catch (e) {
    /* 次を試す */
  }
}
if (!XLSX) {
  console.error("xlsx を読み込めませんでした。airmore-sales で npm install を済ませてください。");
  process.exit(1);
}

/* ---------- 引数 ---------- */
const argv = process.argv.slice(2);
const arg = (name) => {
  const i = argv.indexOf("--" + name);
  return i >= 0 ? argv[i + 1] : null;
};
const FILE = arg("file");
const OUT = arg("out") || path.dirname(FILE || ".");
if (!FILE) {
  console.error('使い方: node split-sales-by-department.mjs --file "…\\【2024】LLJ_売上データ.xlsx" [--out "出力先"]');
  process.exit(1);
}

/* ---------- 振り分けルール ---------- */
export function companyOf(rep) {
  const s = String(rep ?? "").trim();
  if (!s) return null; // 担当営業名が無い行は対象外
  if (s.startsWith("◆Industry")) return "エアモア";
  if (s.startsWith("◆HVAC") || s.startsWith("◆HOME")) return "リークラボ";
  return "MOBILY";
}
const COMPANIES = ["エアモア", "リークラボ", "MOBILY"];

/* ---------- 値の正規化（会社別CSVの体裁にそろえる） ---------- */
const MONTHS = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
/** 「Jan-24」「2024/01」→「2024/01」 */
function normYM(s) {
  const t = String(s ?? "").trim();
  let m = t.match(/^([A-Za-z]{3})-(\d{2})$/);
  if (m && MONTHS[m[1]]) return "20" + m[2] + "/" + MONTHS[m[1]];
  m = t.match(/^(\d{4})[/\-.](\d{1,2})/);
  if (m) return m[1] + "/" + String(m[2]).padStart(2, "0");
  return t;
}
/** 「1/5/24」(M/D/YY)「2024/01/05」→「2024/01/05」 */
function normDate(s) {
  const t = String(s ?? "").trim();
  let m = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/);
  if (m) return "20" + m[3] + "/" + m[1].padStart(2, "0") + "/" + m[2].padStart(2, "0");
  m = t.match(/^(\d{4})[/\-.](\d{1,2})[/\-.](\d{1,2})$/);
  if (m) return m[1] + "/" + m[2].padStart(2, "0") + "/" + m[3].padStart(2, "0");
  return t;
}
/** 「¥95,400」→「95400」。数値でない文字列はそのまま返す */
function normMoney(s) {
  const t = String(s ?? "").trim();
  if (!/^[¥￥\-(]?[\d,]+(\.\d+)?\)?$/.test(t)) return t;
  const neg = /^\(.+\)$/.test(t) || t.startsWith("-");
  const v = Number(t.replace(/[^0-9.]/g, ""));
  if (isNaN(v)) return t;
  return String(neg ? -v : v);
}
const MONEY_COLS = ["単価", "金額", "原単価", "原価金額", "上代単価", "粗利"];
const DATE_COLS = ["伝票日付", "操作日付"];

function csvCell(v) {
  const s = String(v ?? "");
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

/* ---------- 本体 ---------- */
console.log("読み込み中:", path.basename(FILE));
const wb = XLSX.readFile(FILE, { raw: false });
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: "" });
if (!rows.length) {
  console.error("シートにデータがありません。");
  process.exit(1);
}
const H = rows[0].map((h) => String(h ?? "").trim());
const need = ["担当営業名", "年月度", "金額"];
const missing = need.filter((n) => !H.includes(n));
if (missing.length) {
  console.error(`必要な列が見つかりません: ${missing.join("、")}\n見出し: ${H.join(",")}`);
  process.exit(1);
}
const jRep = H.indexOf("担当営業名");
const moneyIdx = MONEY_COLS.map((c) => H.indexOf(c)).filter((i) => i >= 0);
const dateIdx = DATE_COLS.map((c) => H.indexOf(c)).filter((i) => i >= 0);
const jYM = H.indexOf("年月度");

const out = Object.fromEntries(COMPANIES.map((c) => [c, []]));
const stat = Object.fromEntries(COMPANIES.concat("(対象外)").map((c) => [c, { n: 0, amt: 0, months: new Set() }]));
const jAmt = H.indexOf("金額");
const toNum = (s) => {
  const v = Number(String(s ?? "").replace(/[^0-9.\-]/g, ""));
  return isNaN(v) ? 0 : v;
};

for (let i = 1; i < rows.length; i++) {
  const r = rows[i].slice();
  const co = companyOf(r[jRep]);
  const bucket = co || "(対象外)";
  stat[bucket].n++;
  stat[bucket].amt += toNum(r[jAmt]);
  if (!co) continue;
  // 会社別CSVの体裁にそろえる（日付・年月度・金額）
  dateIdx.forEach((j) => (r[j] = normDate(r[j])));
  if (jYM >= 0) r[jYM] = normYM(r[jYM]);
  moneyIdx.forEach((j) => (r[j] = normMoney(r[j])));
  stat[co].months.add(r[jYM]);
  out[co].push(r);
}

const year = (path.basename(FILE).match(/(\d{4})/) || [])[1] || "";
fs.mkdirSync(OUT, { recursive: true });
console.log("");
console.log("振り分け結果:");
for (const co of COMPANIES) {
  const name = `【${year}】${co}_売上データ.csv`;
  const dest = path.join(OUT, name);
  const body = [H, ...out[co]].map((r) => r.map(csvCell).join(",")).join("\r\n");
  fs.writeFileSync(dest, "\ufeff" + body, "utf8"); // Excelでも開けるようBOM付き
  const s = stat[co];
  console.log(
    `  ${co.padEnd(8)} ${String(s.n).padStart(7)}行  ¥${Math.round(s.amt).toLocaleString("ja-JP").padStart(15)}  ` +
      `${[...s.months].sort().join(",")}`
  );
  console.log(`           → ${dest}`);
}
const skip = stat["(対象外)"];
if (skip.n) {
  console.log(`  ${"(対象外)".padEnd(8)} ${String(skip.n).padStart(7)}行  ¥${Math.round(skip.amt).toLocaleString("ja-JP")}  ※担当営業名が空の行`);
}
console.log("");
console.log("このCSVを、アプリの「売上」タブから会社ごとに取り込んでください。");
console.log("取込は、そのファイルに入っている月だけを置き換えます（他の月・他社はそのまま残ります）。");
