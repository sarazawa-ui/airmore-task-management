// 在庫一覧シートの読み取りを、アプリと同じロジック（src/stockSheet.ts）で検算する確認用スクリプト。
// 使い方: node check-stock.mjs <鍵JSONのパス> <スプレッドシートID>
import fs from "fs";
import path from "path";
import { google } from "googleapis";
import { transformSync } from "esbuild";

const KEY = process.argv[2];
const SHEET_ID = process.argv[3];
if (!KEY || !SHEET_ID) {
  console.error("使い方: node check-stock.mjs <鍵JSONのパス> <スプレッドシートID>");
  process.exit(1);
}

// アプリのソースをそのまま読み込んで実行する（実装と検算がズレないように）
const SRC = "C:/Users/saraz/Desktop/Claude/airmore-sales/src/stockSheet.ts";
let ts = fs.readFileSync(SRC, "utf8");
// 型とヘルパの import は、この場に同等のものを置いて差し替える
ts = ts.replace(/^import[\s\S]*?;\n/gm, "");
const helpers = `
const importNum = (s) => {
  const t = String(s ?? "").replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[．]/g, ".").replace(/[，￥、]/g, "").trim();
  const neg = /-\\s*$/.test(t) || /^\\(.+\\)$/.test(t) || /^\\s*-/.test(t);
  const v = Number(t.replace(/[^0-9.]/g, ""));
  return isNaN(v) ? 0 : (neg ? -v : v);
};
const codeKey = (s) => String(s ?? "")
  .replace(/[Ａ-Ｚａ-ｚ０-９－]/g, (c) => (c === "－" ? "-" : String.fromCharCode(c.charCodeAt(0) - 0xfee0)))
  .replace(/[\\s　]/g, "").toUpperCase();
`;
const js = transformSync(helpers + ts, { loader: "ts", format: "esm" }).code;
const mod = await import("data:text/javascript;base64," + Buffer.from(js).toString("base64"));

const cred = JSON.parse(fs.readFileSync(KEY, "utf8"));
const auth = new google.auth.GoogleAuth({ credentials: cred, scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"] });
const sheets = google.sheets({ version: "v4", auth });

const meta = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID, fields: "properties(title),sheets(properties(title))" });
const titles = meta.data.sheets.map((s) => s.properties.title).filter((t) => t.includes("在庫"));
const res = await sheets.spreadsheets.values.batchGet({ spreadsheetId: SHEET_ID, ranges: titles });
const tabs = res.data.valueRanges.map((vr, i) => ({ title: titles[i], values: vr.values || [] }));

const data = mod.buildStockData(tabs);
console.log("スプレッドシート:", meta.data.properties.title);
console.log("読み込んだタブ  :", titles.join(" / "));
console.log("会社            :", data.companies.join(" / "));
console.log("対象期間        :", data.asOf);
console.log("品番数          :", data.items.length, "／在庫数量≠0:", data.items.filter((i) => i.qty !== 0).length);
console.log("在庫数量の合計  :", data.items.reduce((s, i) => s + i.qty, 0).toLocaleString());
console.log("");
console.log("在庫数量の多い品番:");
[...data.items].sort((a, b) => b.qty - a.qty).slice(0, 8).forEach((i) =>
  console.log("  " + i.code.padEnd(15) + String(i.qty).padStart(7) + "  " +
    Object.entries(i.byCompany).filter(([, v]) => v).map(([k, v]) => k + ":" + v).join(" ") + "  " + String(i.name).slice(0, 22))
);
console.log("");
console.log("LLJ（列の位置が違うタブ）の読み取り:");
data.items.filter((i) => i.byCompany.LLJ).slice(0, 4).forEach((i) =>
  console.log("  " + i.code.padEnd(14) + "LLJ:" + String(i.byCompany.LLJ).padStart(5) +
    "  合計:" + String(i.qty).padStart(6) + "  " + String(i.name).slice(0, 24))
);
