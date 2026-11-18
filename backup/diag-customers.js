// 得意先マスタが会社ごとに分かれているかの調査(読むだけ。何も書かない)
//   ・会社ごとの得意先の件数・参照シートの設定(URLは出さず、同じURLかどうかだけ)
//   ・各社の参照シートを読めるか(このサービスアカウントで)。読めたらシートの得意先コードとマスタの突き合わせ
//   ・案件などから参照されている得意先の件数
// ログは公開されるため件数だけを出す。名前・コードの一覧は REPORT_PUBKEY で暗号化して出す。
import crypto from "node:crypto";
import { writeFileSync } from "node:fs";
import { google } from "googleapis";
import { initFirestore } from "./lib.js";
import { sealReport } from "./fill-deal-address-lib.js";

const db = initFirestore();
const h8 = (s) => (s ? crypto.createHash("sha256").update(String(s)).digest("hex").slice(0, 8) : "-");
const codeKey = (s) =>
  String(s ?? "")
    .replace(/[Ａ-Ｚａ-ｚ０-９－]/g, (c) => (c === "－" ? "-" : String.fromCharCode(c.charCodeAt(0) - 0xfee0)))
    .replace(/[\s　]/g, "")
    .toUpperCase();

async function readFields(ws) {
  const qs = await db.collection(`salesWs/${ws}/mFields`).get();
  const rows = qs.docs.map((d) => ({ _id: d.id, ...d.data() }));
  const out = {};
  const parts = new Map();
  rows.forEach((r) => r._id.includes("#") && parts.set(r._id.split("#")[0], [...(parts.get(r._id.split("#")[0]) || []), r]));
  rows.forEach((r) => {
    if (r._id.includes("#")) return;
    try {
      if (r.chunks) {
        const ps = (parts.get(r._id) || []).filter((x) => x.rev === r.rev).sort((x, y) => x.part - y.part);
        if (ps.length === r.chunks) out[r._id] = JSON.parse(ps.map((x) => x.data).join(""));
      } else if (r.json !== undefined) out[r._id] = JSON.parse(r.json);
    } catch (e) {}
  });
  return out;
}
const readList = async (path) => (await db.collection(path).get()).docs.map((d) => ({ id: d.id, ...d.data() }));
const tsOf = (v) => (v && typeof v.toDate === "function" ? v.toDate().toISOString() : v ? String(v) : "");

// シート(このサービスアカウントで読めるか試す)
const sa = JSON.parse(process.env.GCP_SA_KEY);
const jwt = new google.auth.JWT({ email: sa.client_email, key: sa.private_key, scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"] });
const sheets = google.sheets({ version: "v4", auth: jwt });
async function readSheet(url) {
  const m = String(url || "").match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (!m) throw new Error("URLが不正");
  const g = String(url).match(/[#?&]gid=(\d+)/);
  const meta = await sheets.spreadsheets.get({ spreadsheetId: m[1], fields: "sheets(properties(sheetId,title))" });
  const tabs = (meta.data.sheets || []).map((s) => s.properties || {});
  const tab = (g && tabs.find((t) => String(t.sheetId) === g[1])) || tabs[0];
  const r = await sheets.spreadsheets.values.get({ spreadsheetId: m[1], range: `'${String(tab.title).replace(/'/g, "''")}'`, majorDimension: "ROWS", valueRenderOption: "FORMATTED_VALUE" });
  return { tab: tab.title, values: r.data.values || [] };
}
function sheetCodes(values) {
  const norm = (s) => String(s ?? "").replace(/[\s　]/g, "").replace(/ｺｰﾄﾞ/g, "コード");
  const head = (values[0] || []).map(norm);
  const ci = head.findIndex((h) => h === "得意先コード");
  const ni = head.findIndex((h) => h === "得意先名１" || h === "得意先名1");
  const codes = new Map();
  for (const r of values.slice(1)) {
    const c = codeKey(ci >= 0 ? r[ci] : "");
    if (c) codes.set(c, String((ni >= 0 ? r[ni] : "") || ""));
  }
  return { codes, hasCodeCol: ci >= 0, rows: Math.max(0, values.length - 1) };
}

const shared = (await db.doc("sales3/shared").get()).data() || {};
const companies = [...new Set([...(shared.mastersSplitTo || []), ...(shared.from || [])])].filter((c) => c && c !== "shared");
console.log(`各社別の印: ${shared.mastersSplitAt ? "あり " + tsOf(shared.mastersSplitAt) : "なし"} / 会社: ${companies.join("・")}`);
console.log(`サーバー用アカウント(この調査): ${sa.client_email.replace(/@.*/, "@…")}`);

// 共通マスタ(10/21 に各社へ写した元)
const sharedCust = await readList("sales3/shared/customers");
const sharedIds = new Set(sharedCust.map((c) => c.id));
console.log(`共通の置き場所の得意先: ${sharedCust.length}件(削除の印なし ${sharedCust.filter((c) => !c._deleted).length}件)`);

// 参照(案件などから使われている得意先ID)。会社は担当者の所属で判断
const members = (await readList("sales3/shared/members")).filter((m) => !m._deleted);
const memberCo = new Map(members.map((m) => [m.id, m.company || ""]));
const refLists = ["deals", "activities", "quotes", "trips", "rideAlongs", "repairs", "expos", "leads"];
const lists = {};
for (const n of refLists) lists[n] = (await readList(`sales3/shared/${n}`)).filter((x) => !x._deleted);
const dealMember = new Map(lists.deals.map((d) => [d.id, d.memberId]));
const refs = new Map(); // customerId -> Set(会社 or "?")
function walk(v, add) {
  if (typeof v === "string") add(v);
  else if (Array.isArray(v)) v.forEach((x) => walk(x, add));
  else if (v && typeof v === "object") for (const k of Object.keys(v)) if (!k.startsWith("_")) walk(v[k], add);
}
const allCustIds = new Set();
const custByCo = {};
for (const co of companies) {
  custByCo[co] = (await readList(`sales3/${co}/customers`)).filter((c) => !c._deleted);
  custByCo[co].forEach((c) => allCustIds.add(c.id));
}
sharedCust.forEach((c) => allCustIds.add(c.id));
const refCount = {};
for (const n of refLists) {
  refCount[n] = 0;
  for (const x of lists[n]) {
    const mid = n === "quotes" ? dealMember.get(x.dealId) : x.memberId;
    const co = (mid && memberCo.get(mid)) || "?";
    let hit = false;
    walk(x, (s) => {
      if (allCustIds.has(s)) {
        hit = true;
        if (!refs.has(s)) refs.set(s, new Set());
        refs.get(s).add(co);
      }
    });
    if (hit) refCount[n]++;
  }
}
// sync3 の各機能(修理品・出荷製造など)も参照を見る(会社は不明扱い)
const sync3 = (await db.collection("sync3").listDocuments()).map((r) => r.id);
let syncHits = 0;
for (const id of sync3) {
  const cols = await db.doc(`sync3/${id}`).listCollections();
  for (const c of cols) {
    if (c.id === "_snap") continue;
    const qs = await c.get();
    for (const d of qs.docs) {
      const v = d.data();
      if (v._deleted) continue;
      let hit = false;
      walk(v, (s) => {
        if (allCustIds.has(s)) {
          hit = true;
          if (!refs.has(s)) refs.set(s, new Set());
          refs.get(s).add(String(v.company || "?"));
        }
      });
      if (hit) syncHits++;
    }
  }
}
console.log(`参照している記録: ${Object.entries(refCount).map(([k, v]) => `${k} ${v}`).join("・")}・各機能(sync3) ${syncHits}`);
console.log(`参照されている得意先ID: ${refs.size}種類`);

const report = { at: new Date().toISOString(), companies: {} };
for (const co of companies) {
  const f = await readFields(co);
  const url = String(f.sheetUrls?.customers || "").trim();
  const cs = custByCo[co];
  const withCode = cs.filter((c) => codeKey(c.code));
  const fromShared = cs.filter((c) => sharedIds.has(c.id));
  const byBy = {};
  cs.forEach((c) => (byBy[c._by || "?"] = (byBy[c._by || "?"] || 0) + 1));
  const line = [`【${co}】得意先 ${cs.length}件(コードあり ${withCode.length}・10/21の写し ${fromShared.length}・その後に増えた ${cs.length - fromShared.length})`];
  line.push(`  参照シート: ${url ? "設定あり(識別 " + h8(url) + ")" : "未設定"} / 最終取込 ${f.sheetModified?.customers?.syncedAt || "-"}${f.sheetModified?.customers?.auto ? "(サーバー)" : ""}`);
  line.push(`  最後に書いた人の内訳: ${Object.entries(byBy).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => `${k.length > 12 ? k.slice(0, 2) + "…" : k} ${v}`).join("・")}`);
  const r = (report.companies[co] = { url: h8(url), count: cs.length });
  if (url) {
    try {
      const s = await readSheet(url);
      const sc = sheetCodes(s.values);
      const inSheet = withCode.filter((c) => sc.codes.has(codeKey(c.code)));
      const notInSheet = withCode.filter((c) => !sc.codes.has(codeKey(c.code)));
      const masterCodes = new Set(withCode.map((c) => codeKey(c.code)));
      const missing = [...sc.codes.keys()].filter((k) => !masterCodes.has(k));
      const refMine = (c) => refs.has(c.id) && [...refs.get(c.id)].some((x) => x === co || x === "?");
      const refAny = (c) => refs.has(c.id);
      const cand = notInSheet.filter((c) => sharedIds.has(c.id));
      line.push(`  シート: 読めた(${s.values.length - 1}行・コード ${sc.codes.size}種類${sc.hasCodeCol ? "" : "・コード列なし"})`);
      line.push(`  マスタのうちシートにあるコード ${inSheet.length}件 / シートに無いコード ${notInSheet.length}件(うち10/21の写し ${cand.length}件: この会社の記録が参照 ${cand.filter(refMine).length}・他社の記録だけが参照 ${cand.filter((c) => refAny(c) && !refMine(c)).length}・参照なし ${cand.filter((c) => !refAny(c)).length})`);
      line.push(`  シートにあるのにマスタに無いコード ${missing.length}件 / コード無しの得意先 ${cs.length - withCode.length}件(参照あり ${cs.filter((c) => !codeKey(c.code) && refAny(c)).length})`);
      r.sheet = { rows: s.values.length - 1, tab: s.tab, header: s.values[0] };
      r.notInSheetSample = cand.slice(0, 40).map((c) => [c.id, c.code, c.name, c.site || "", [...(refs.get(c.id) || [])].join(",")]);
      r.missingSample = missing.slice(0, 20).map((k) => [k, sc.codes.get(k)]);
    } catch (e) {
      line.push(`  シート: このアカウントでは読めません(${String(e?.message || e).slice(0, 80)})`);
    }
  }
  // 他社とコードが重なっているか(同じコードが別の得意先名)
  r.sample = cs.slice(0, 15).map((c) => [c.id, c.code, c.name, c._by]);
  console.log(line.join("\n"));
}
// 会社どうしのURLの重なり
const log = (await db.doc("syncLog/masterSheets").get()).data();
if (log) console.log(`最後のサーバー取込の記録 ${log.at}: ${(log.results || []).filter((x) => x.which === "customers").map((x) => `${x.ws}=${x.status}`).join("・") || "得意先なし"}`);
report.syncLog = (log?.results || []).filter((x) => x.which === "customers");

const pub = process.env.REPORT_PUBKEY;
if (pub) {
  const sealed = sealReport(report, pub);
  writeFileSync("report.enc", sealed);
  console.log("----- REPORT BEGIN -----");
  for (let i = 0; i < sealed.length; i += 3000) console.log(sealed.slice(i, i + 3000));
  console.log("----- REPORT END -----");
}
console.log("(読むだけ。何も書いていません)");
