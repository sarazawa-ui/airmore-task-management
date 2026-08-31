// 売上データをCSVから直接Firestoreへ取り込む（アプリの取込と同じ集計）。
//
// 画面から取り込めない事情があるとき用の運用スクリプト。
// globalBudget/data の sales[年月][会社ID] を、CSVの内容で「その会社・その月だけ」
// 置き換える。触らない月・他社・予算・経費はそのまま残る。
//
// 使い方（backup フォルダで実行）:
//   node import-sales.js --key "…\サービスアカウント.json" --company "エアモア" --file "…\売上データ.csv"
//   node import-sales.js --key "…" --company "エアモア" --file "…" --apply
//
//   --apply を付けるまでは書き込みません（何がどう変わるかだけ表示します）。
//   実行前に globalBudget/data の内容を backup-globalBudget-<日時>.json へ保存します。
//   鍵は --key（JSONファイルのパス）か、環境変数 GOOGLE_APPLICATION_CREDENTIALS /
//   GCP_SA_KEY（JSONの中身）で渡します。

import fs from "fs";
import path from "path";
import admin from "firebase-admin";

/* ---------- 引数 ---------- */
const argv = process.argv.slice(2);
const arg = (name) => {
  const i = argv.indexOf("--" + name);
  return i >= 0 ? argv[i + 1] : null;
};
const APPLY = argv.includes("--apply");
const COMPANY = arg("company");
const FILE = arg("file");
const KEY = arg("key");
if (!COMPANY || !FILE) {
  console.error('使い方: node import-sales.js --key "鍵JSONのパス" --company "会社名" --file "CSVのパス" [--apply]');
  process.exit(1);
}

/* ---------- 認証（鍵ファイル / 環境変数） ---------- */
function credentials() {
  const p = KEY || process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (p) {
    if (!fs.existsSync(p)) throw new Error(`鍵ファイルが見つかりません: ${p}`);
    return JSON.parse(fs.readFileSync(p, "utf8"));
  }
  if (process.env.GCP_SA_KEY) return JSON.parse(process.env.GCP_SA_KEY);
  throw new Error(
    "サービスアカウントの鍵がありません。--key で鍵JSONのパスを指定するか、" +
      "環境変数 GOOGLE_APPLICATION_CREDENTIALS / GCP_SA_KEY を設定してください。"
  );
}
function initFirestore() {
  const cred = credentials();
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(cred), projectId: cred.project_id });
  }
  return admin.firestore();
}

/* ---------- CSV ---------- */
function parseCsv(text) {
  const rows = [];
  let row = [], cur = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cur); cur = ""; }
    else if (c === "\n") { row.push(cur); cur = ""; rows.push(row); row = []; }
    else if (c !== "\r") cur += c;
  }
  if (cur !== "" || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

/* ---------- アプリと同じ集計ロジック（src/budget/App.jsx の parseSalesRows と対応） ---------- */
const SHIP_CODES = ["*5", "*555"];
const normYM = (v) => {
  const s = String(v ?? "").trim();
  const sep = s.match(/(\d{4})\s*[年./\-]\s*(\d{1,2})(?!\d)/);
  if (sep) { const mm = +sep[2]; if (mm >= 1 && mm <= 12) return `${sep[1]}-${String(mm).padStart(2, "0")}`; }
  const d = s.replace(/[^0-9]/g, "");
  if (d.length === 6 || d.length === 8) {
    const y = d.slice(0, 4), mm = +d.slice(4, 6);
    if (mm >= 1 && mm <= 12) return `${y}-${String(mm).padStart(2, "0")}`;
  }
  return "";
};
const num = (v) => { const n = Number(String(v ?? "").replace(/[^0-9.\-]/g, "")); return isNaN(n) ? 0 : n; };

function aggregate(rows) {
  const fields = rows[0].map((h) => String(h ?? "").trim());
  const idx = Object.fromEntries(fields.map((h, i) => [h, i]));
  const normH = (s) => String(s).replace(/\s/g, "");
  const codeKey = fields.find((f) => ["商品ｺｰﾄﾞ", "商品コード", "商品CD", "品番", "商品番号", "商品№"].includes(normH(f)))
    || fields.find((f) => /商品.*(コード|ｺｰﾄﾞ|CD)/.test(normH(f))) || null;
  const prodNameKey = fields.find((f) => ["商品名１", "商品名1"].includes(normH(f)))
    || fields.find((f) => /商品名.*[1１]/.test(normH(f)))
    || fields.find((f) => /商品名/.test(normH(f))) || null;
  const get = (r, name) => (idx[name] != null ? r[idx[name]] : undefined);

  const byMonth = {};
  const reps = new Set();
  let skipped = 0, rowCount = 0;
  for (const r of rows.slice(1)) {
    if (!r || r.length < 3) { skipped++; continue; }
    rowCount++;
    const ym = normYM(get(r, "年月度")) || normYM(get(r, "伝票日付"));
    if (!ym) { skipped++; continue; }
    const rep = String(get(r, "担当営業名") ?? "").trim() || "担当未設定";
    const amt = num(get(r, "金額"));
    const cost = num(get(r, "原価金額"));
    const gpCol = get(r, "粗利");
    const gp = gpCol !== undefined && String(gpCol).trim() !== "" ? num(gpCol) : amt - cost;
    const isShip = codeKey ? SHIP_CODES.includes(String(r[idx[codeKey]] ?? "").trim()) : false;
    const isTax = prodNameKey ? String(r[idx[prodNameKey]] ?? "").includes("消費税") : false;
    if (!byMonth[ym]) byMonth[ym] = { byRep: {} };
    if (!byMonth[ym].byRep[rep]) {
      byMonth[ym].byRep[rep] = {
        amt: 0, cost: 0, gp: 0, cnt: 0,
        ship: { amt: 0, cost: 0, gp: 0, cnt: 0 },
        tax: { amt: 0, cost: 0, gp: 0, cnt: 0 },
      };
    }
    const t = byMonth[ym].byRep[rep];
    t.amt += amt; t.cost += cost; t.gp += gp; t.cnt += 1;
    if (isShip) { t.ship.amt += amt; t.ship.cost += cost; t.ship.gp += gp; t.ship.cnt += 1; }
    if (isTax) { t.tax.amt += amt; t.tax.cost += cost; t.tax.gp += gp; t.tax.cnt += 1; }
    reps.add(rep);
  }
  return { byMonth, reps: [...reps], rowCount, skipped, codeColFound: !!codeKey, prodNameColFound: !!prodNameKey };
}

const yen = (n) => "¥" + Math.round(n).toLocaleString("ja-JP");
const sumOf = (rec) => Object.values(rec?.byRep || {}).reduce((s, t) => s + (t?.amt || 0), 0);

/* ---------- 本体 ---------- */
const db = initFirestore();
const ref = db.doc("globalBudget/data");
const snap = await ref.get();
if (!snap.exists) { console.error("globalBudget/data がありません。中止します。"); process.exit(1); }
const raw = snap.data().value || "{}";
const data = JSON.parse(raw);

// 実行前の状態を必ず控える
const stampName = new Date().toISOString().replace(/[:.]/g, "-");
const backupPath = path.join(process.cwd(), `backup-globalBudget-${stampName}.json`);
fs.writeFileSync(backupPath, raw);
console.log("実行前の内容を保存しました:", backupPath, `(${raw.length.toLocaleString()} 文字)`);

const org = (data.orgs || []).find((o) => o.name === COMPANY);
if (!org) {
  console.error(`会社「${COMPANY}」が見つかりません。登録されている会社: ${(data.orgs || []).map((o) => o.name).join(" / ")}`);
  process.exit(1);
}
const cid = org.id;

const text = fs.readFileSync(FILE, "utf8").replace(/^﻿/, "");
const res = aggregate(parseCsv(text));
const months = Object.keys(res.byMonth).sort();
if (!months.length) { console.error("年月度（または伝票日付）を読み取れる行がありませんでした。中止します。"); process.exit(1); }

console.log("");
console.log(`会社: ${COMPANY} (${cid})`);
console.log(`ファイル: ${path.basename(FILE)}`);
console.log(`行数: ${res.rowCount}／対象外: ${res.skipped}／担当: ${res.reps.length}名`);
console.log(`商品ｺｰﾄﾞ列: ${res.codeColFound ? "あり" : "なし(送料を判別できません)"}／商品名列: ${res.prodNameColFound ? "あり" : "なし(消費税を判別できません)"}`);
console.log("");
console.log("月ごとの変化（現在 → 取込後）:");
let before = 0, after = 0;
for (const ym of months) {
  const b = sumOf(data.sales?.[ym]?.[cid]);
  const a = sumOf(res.byMonth[ym]);
  before += b; after += a;
  console.log(`  ${ym}  ${yen(b).padStart(14)} → ${yen(a).padStart(14)}`);
}
console.log(`  ${"合計".padEnd(7)}${yen(before).padStart(14)} → ${yen(after).padStart(14)}  (差 ${yen(after - before)})`);

// 触らない月・他社が保たれることの確認材料
const otherMonths = Object.keys(data.sales || {}).filter((ym) => !months.includes(ym));
console.log("");
console.log(`変更しない月: ${otherMonths.length}か月／他社: ${(data.orgs || []).length - 1}社（そのまま残ります）`);

if (!APPLY) {
  console.log("");
  console.log("※ 確認のみです。書き込むには --apply を付けて実行してください。");
  process.exit(0);
}

// 反映（アプリの applySalesResult と同じ: その会社・その月だけ置き換え）
const nextSales = { ...(data.sales || {}) };
months.forEach((ym) => { nextSales[ym] = { ...(nextSales[ym] || {}), [cid]: res.byMonth[ym] }; });
const repMap = { ...(data.repMap || {}) };
res.reps.forEach((r) => { if (!(r in repMap)) repMap[r] = ""; });
const li = data.lastImport || {};
const out = {
  ...data,
  sales: nextSales,
  repMap,
  lastImport: { ...li, sales: { ...(li.sales || {}), [cid]: new Date().toISOString() } },
};

await ref.set({ value: JSON.stringify(out), _writer: "import-sales.js", updatedAt: new Date().toISOString() }, { merge: true });
console.log("");
console.log("書き込みました。アプリを再読み込みすると反映されます。");
