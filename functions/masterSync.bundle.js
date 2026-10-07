"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server/masterSync.ts
var masterSync_exports = {};
__export(masterSync_exports, {
  SHARED_WS: () => SHARED_WS,
  consolidateSalesData: () => consolidateSalesData,
  dedupeCompany: () => dedupeCompany,
  lastScheduledJst: () => lastScheduledJst,
  purgeDeleted: () => purgeDeleted,
  runMasterSync: () => runMasterSync,
  salesRoots: () => salesRoots
});
module.exports = __toCommonJS(masterSync_exports);

// src/masterImport.ts
var KANA_HALF = "\uFF76\uFF9E\uFF77\uFF9E\uFF78\uFF9E\uFF79\uFF9E\uFF7A\uFF9E\uFF7B\uFF9E\uFF7C\uFF9E\uFF7D\uFF9E\uFF7E\uFF9E\uFF7F\uFF9E\uFF80\uFF9E\uFF81\uFF9E\uFF82\uFF9E\uFF83\uFF9E\uFF84\uFF9E\uFF8A\uFF9E\uFF8B\uFF9E\uFF8C\uFF9E\uFF8D\uFF9E\uFF8E\uFF9E\uFF8A\uFF9F\uFF8B\uFF9F\uFF8C\uFF9F\uFF8D\uFF9F\uFF8E\uFF9F\uFF73\uFF9E";
var KANA_FULL = "\u30AC\u30AE\u30B0\u30B2\u30B4\u30B6\u30B8\u30BA\u30BC\u30BE\u30C0\u30C2\u30C5\u30C7\u30C9\u30D0\u30D3\u30D6\u30D9\u30DC\u30D1\u30D4\u30D7\u30DA\u30DD\u30F4";
var KANA_ONE_HALF = "\uFF71\uFF72\uFF73\uFF74\uFF75\uFF76\uFF77\uFF78\uFF79\uFF7A\uFF7B\uFF7C\uFF7D\uFF7E\uFF7F\uFF80\uFF81\uFF82\uFF83\uFF84\uFF85\uFF86\uFF87\uFF88\uFF89\uFF8A\uFF8B\uFF8C\uFF8D\uFF8E\uFF8F\uFF90\uFF91\uFF92\uFF93\uFF94\uFF95\uFF96\uFF97\uFF98\uFF99\uFF9A\uFF9B\uFF9C\uFF66\uFF9D\uFF67\uFF68\uFF69\uFF6A\uFF6B\uFF6F\uFF6C\uFF6D\uFF6E\uFF70\uFF61\uFF62\uFF63\uFF64\uFF65";
var KANA_ONE_FULL = "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F2\u30F3\u30A1\u30A3\u30A5\u30A7\u30A9\u30C3\u30E3\u30E5\u30E7\u30FC\u3002\u300C\u300D\u3001\u30FB";
function kanaToFull(s) {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const two = s.slice(i, i + 2);
    const k = KANA_HALF.indexOf(two);
    if (k >= 0 && k % 2 === 0) {
      out += KANA_FULL[k / 2];
      i++;
      continue;
    }
    const j = KANA_ONE_HALF.indexOf(s[i]);
    out += j >= 0 ? KANA_ONE_FULL[j] : s[i];
  }
  return out;
}
var normHeader = (s) => kanaToFull(
  String(s ?? "").replace(/[\s　]/g, "").replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 65248))
);
function importNum(s) {
  const t = String(s ?? "").replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 65248)).replace(/[．]/g, ".").replace(/[，￥、]/g, "").trim();
  const neg = /-\s*$/.test(t) || /^\(.+\)$/.test(t) || /^\s*-/.test(t);
  const v = Number(t.replace(/[^0-9.]/g, ""));
  if (isNaN(v)) return 0;
  return neg ? -v : v;
}
var codeKey = (s) => String(s ?? "").replace(/[Ａ-Ｚａ-ｚ０-９－]/g, (c) => c === "\uFF0D" ? "-" : String.fromCharCode(c.charCodeAt(0) - 65248)).replace(/[\s　]/g, "").toUpperCase();
function importCustomerRows(d, rows, newId2) {
  const none = (msg) => ({ next: d, msg, added: 0, updated: 0 });
  if (rows.length === 0) return none("\u30C7\u30FC\u30BF\u304C\u7A7A\u3067\u3059\u3002");
  const norm = normHeader;
  const header = rows[0].map(norm);
  if (!header.some((h) => h.includes("\u5F97\u610F\u5148"))) return none("\u30D8\u30C3\u30C0\u884C(\u5F97\u610F\u5148\uFF7A\uFF70\uFF84\uFF9E\u3001\u5F97\u610F\u5148\u540D\uFF11\u2026)\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002");
  const col = (name) => header.findIndex((h) => h === norm(name));
  const g = (r, name) => {
    const i = col(name);
    return i >= 0 ? String(r[i] ?? "").trim() : "";
  };
  let skipped = 0;
  const parsedRows = [];
  for (const r of rows.slice(1)) {
    const code = g(r, "\u5F97\u610F\u5148\uFF7A\uFF70\uFF84\uFF9E");
    const name = g(r, "\u5F97\u610F\u5148\u540D\uFF11");
    if (!name && !code) {
      skipped++;
      continue;
    }
    parsedRows.push({
      code,
      name: name || code,
      site: g(r, "\u5F97\u610F\u5148\u540D\uFF12") || void 0,
      address: [g(r, "\u90F5\u4FBF\u756A\u53F7") && "\u3012" + g(r, "\u90F5\u4FBF\u756A\u53F7"), g(r, "\u4F4F\u6240\uFF11"), g(r, "\u4F4F\u6240\uFF12"), g(r, "\u4F4F\u6240\uFF13")].filter(Boolean).join(" ") || void 0,
      tel: g(r, "\u96FB\u8A71\u756A\u53F7") || void 0,
      memberId: d.members.find((m) => g(r, "\u62C5\u5F53\u55B6\u696D\u540D").includes(m.name))?.id,
      priceCode: g(r, "\u58F2\u4FA1\uFF7A\uFF70\uFF84\uFF9E") || void 0,
      priceName: g(r, "\u58F2\u4FA1\u540D") || void 0,
      closingDay: g(r, "\u7DE0\u65E5\uFF11") || void 0,
      paymentDay: g(r, "\u5165\u91D1\u65E5\uFF11") || void 0,
      paymentCycle: g(r, "\u5165\u91D1\uFF7B\uFF72\uFF78\uFF99\uFF11") || void 0,
      note: [g(r, "\u30E1\u30E2\uFF11"), g(r, "\u30E1\u30E2\uFF12"), g(r, "\u30E1\u30E2\uFF13"), g(r, "\u6CE8\u610F\u4E8B\u9805")].filter(Boolean).join("\uFF0F") || void 0
    });
  }
  const patches = {};
  const added = [];
  let up = 0;
  for (const fields of parsedRows) {
    const code = fields.code || "";
    const existing = code && d.customers.find((c) => c.code === code) || d.customers.find((c) => c.name === fields.name && (!c.code || !code));
    if (existing) {
      patches[existing.id] = fields;
      up++;
    } else if (!added.some((c) => code && c.code === code)) {
      added.push({ id: newId2(), ...fields });
    } else skipped++;
  }
  const customers = [...d.customers.map((c) => patches[c.id] ? { ...c, ...patches[c.id] } : c), ...added];
  const label = (c) => `${c.name}${c.site ? "\u3000" + c.site : ""}`;
  const renamed = /* @__PURE__ */ new Map();
  Object.keys(patches).forEach((id) => {
    const before = d.customers.find((c) => c.id === id);
    const after = customers.find((c) => c.id === id);
    if (before && after && label(before) !== label(after)) renamed.set(id, { before: label(before), after: label(after) });
  });
  const dealCustomer = new Map(d.deals.map((dl) => [dl.id, dl.customerId]));
  const quotes = renamed.size ? d.quotes.map((q) => {
    const cid = dealCustomer.get(q.dealId);
    const r = cid ? renamed.get(cid) : void 0;
    return r && q.customerName === r.before ? { ...q, customerName: r.after } : q;
  }) : d.quotes;
  return {
    next: { ...d, customers, quotes },
    added: added.length,
    updated: up,
    msg: `\u65B0\u898F ${added.length}\u4EF6 / \u66F4\u65B0 ${up}\u4EF6(\u5F97\u610F\u5148\uFF7A\uFF70\uFF84\uFF9E\u30FB\u540D\u79F0\u4E00\u81F4)\u3002${skipped ? `${skipped}\u4EF6\u30B9\u30AD\u30C3\u30D7\u3002` : ""}`
  };
}
function importProductRows(d, rows, newId2) {
  const none = (msg) => ({ next: d, msg, added: 0, updated: 0 });
  if (rows.length === 0) return none("\u30C7\u30FC\u30BF\u304C\u7A7A\u3067\u3059\u3002");
  const norm = normHeader;
  const header = rows[0].map(norm);
  if (!header.some((h) => h.includes("\u5546\u54C1"))) return none("\u30D8\u30C3\u30C0\u884C(\u5546\u54C1\uFF7A\uFF70\uFF84\uFF9E\u3001\u5546\u54C1\u7565\u79F0\u2026)\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002");
  const col = (name) => header.findIndex((h) => h === norm(name));
  const g = (r, name) => {
    const i = col(name);
    return i >= 0 ? String(r[i] ?? "").trim() : "";
  };
  const num2 = importNum;
  const costIdx = (() => {
    const tests = [
      (h) => h === "\u5728\u5EAB\u8A55\u4FA1\u5358\u4FA1",
      (h) => h.includes("\u5728\u5EAB\u8A55\u4FA1"),
      (h) => h.includes("\u8A55\u4FA1\u5358\u4FA1"),
      (h) => h.includes("\u539F\u4FA1") && h.includes("\u5358\u4FA1")
    ];
    for (const t of tests) {
      const i = header.findIndex(t);
      if (i >= 0) return i;
    }
    return -1;
  })();
  let costFilled = 0;
  const costBad = [];
  const rankIdx = (n) => col(`\u30E9\u30F3\u30AF${n}\u58F2\u4E0A\u5358\u4FA1`);
  const priceIdx = (rank, ...names) => {
    const r = rankIdx(rank);
    if (r >= 0) return r;
    for (const nm of names) {
      const i = col(nm);
      if (i >= 0) return i;
    }
    return -1;
  };
  const at = (r, i) => i >= 0 ? String(r[i] ?? "").trim() : "";
  const dealerIdx = priceIdx(1, "\u4EE3\u7406\u5E97");
  const distributorIdx = priceIdx(2, "\u8CA9\u58F2\u5E97");
  const userIdx = priceIdx(3, "\u30E6\u30FC\u30B6\u30FC");
  const listIdx = priceIdx(4, "\u5B9A\u4FA1");
  let specialIdx = rankIdx(5);
  if (specialIdx < 0) specialIdx = header.findIndex((h) => /電装/.test(h) || /代理店[②2]/.test(h) || /特約店/.test(h));
  if (specialIdx < 0 && col("\u5B9A\u4FA1") === 6 && header.length > 7 && !header[7]) specialIdx = 7;
  const parsed = [];
  let skipped = 0;
  for (const r of rows.slice(1)) {
    const code = g(r, "\u5546\u54C1\uFF7A\uFF70\uFF84\uFF9E");
    const name = g(r, "\u5546\u54C1\u7565\u79F0");
    if (!code && !name) {
      skipped++;
      continue;
    }
    const user = num2(at(r, userIdx));
    const special = num2(at(r, specialIdx));
    const fields = {
      code,
      name: name || code,
      listPrice: num2(at(r, listIdx)),
      prices: {
        dealer: num2(at(r, dealerIdx)) || void 0,
        distributor: num2(at(r, distributorIdx)) || void 0,
        user: user || void 0,
        special: special || void 0
      },
      // 標準仕切=ユーザー価格(ﾗﾝｸ3)を既定。無ければ販売店(ﾗﾝｸ2)→定価(ﾗﾝｸ4)
      price: user || num2(at(r, distributorIdx)) || num2(at(r, listIdx)),
      stock: num2(g(r, "\u5728\u5EAB")) || void 0,
      // 在庫評価単価(原価)。キャンペーン・NCのコスト試算に使う
      costPrice: (() => {
        const raw = costIdx >= 0 ? String(r[costIdx] ?? "").trim() : "";
        if (!raw) return void 0;
        const v = num2(raw);
        if (v || /[0-9０-９]/.test(raw)) costFilled++;
        else if (costBad.length < 5) costBad.push(`${code || "(\u54C1\u756A\u306A\u3057)"}=${raw}`);
        return v;
      })(),
      brand: g(r, "\u30D6\u30E9\u30F3\u30C9\u540D") || void 0,
      note: [g(r, "\u30CA\u30EC\u30C3\u30B8 / \u30E1\u30E2"), g(r, "\u5099\u8003")].filter(Boolean).join("\uFF0F") || void 0
    };
    parsed.push({ code, fields });
  }
  const byCode = /* @__PURE__ */ new Map();
  d.products.forEach((p) => {
    const k = codeKey(p.code);
    if (k && !byCode.has(k)) byCode.set(k, p);
  });
  const stockByCode = new Map((d.stocks?.items || []).map((it) => [codeKey(it.code), it.qty]));
  const patches = {};
  const news = [];
  const seen = /* @__PURE__ */ new Set();
  let added = 0;
  let updated = 0;
  for (const { code, fields } of parsed) {
    const k = codeKey(code);
    if (stockByCode.has(k)) fields.stock = stockByCode.get(k);
    const hit = k ? byCode.get(k) : void 0;
    if (hit) {
      patches[hit.id] = fields;
      updated++;
    } else if (!k || !seen.has(k)) {
      if (k) seen.add(k);
      news.push({ id: newId2(), ...fields });
      added++;
    } else skipped++;
  }
  const costNote = costIdx < 0 ? `\uFF0F\u5728\u5EAB\u8A55\u4FA1\u5358\u4FA1\u306E\u5217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093(\u30B7\u30FC\u30C8\u306E\u898B\u51FA\u3057: ${header.filter(Boolean).join("\u30FB")})` : `\uFF0F\u5728\u5EAB\u8A55\u4FA1\u5358\u4FA1\u300C${rows[0][costIdx]}\u300D\u5217\u304B\u3089 ${costFilled}\u4EF6` + (costBad.length ? `(\u8AAD\u3081\u306A\u304B\u3063\u305F\u4F8B: ${costBad.join("\u3001")})` : "");
  return {
    next: { ...d, products: [...d.products.map((p) => patches[p.id] ? { ...p, ...patches[p.id] } : p), ...news] },
    added,
    updated,
    msg: `\u65B0\u898F ${added}\u4EF6 / \u66F4\u65B0 ${updated}\u4EF6(\u5546\u54C1\uFF7A\uFF70\uFF84\uFF9E\u4E00\u81F4)\u3002${skipped ? `${skipped}\u4EF6\u30B9\u30AD\u30C3\u30D7\u3002` : ""}${costNote}`
  };
}
function applyStockToProducts(d, stocks) {
  const byCode = new Map(stocks.items.map((it) => [codeKey(it.code), it.qty]));
  let applied = 0;
  const products = d.products.map((pr) => {
    const q = byCode.get(codeKey(pr.code));
    if (q === void 0 || pr.stock === q) return pr;
    applied++;
    return { ...pr, stock: q };
  });
  return { next: applied ? { ...d, products } : d, applied };
}

// src/stockSheet.ts
var CODE_HEADS = ["\u30B3\u30FC\u30C9", "\u5546\u54C1\u30B3\u30FC\u30C9", "\u54C1\u756A", "\u54C1\u76EE\u30B3\u30FC\u30C9", "\u5546\u54C1CD", "\u54C1\u756A\u30B3\u30FC\u30C9", "SKU"];
var NAME_HEADS = ["\u5546\u54C1\u540D", "\u54C1\u540D", "\u54C1\u76EE\u540D", "\u5546\u54C1\u540D\u79F0", "\u54C1\u76EE"];
var QTY_HEADS = ["\u6B8B\u6570\u91CF", "\u5728\u5EAB\u6570\u91CF", "\u5728\u5EAB\u6570", "\u73FE\u5728\u5EAB\u6570", "\u73FE\u5728\u5EAB", "\u6709\u52B9\u5728\u5EAB\u6570", "\u6709\u52B9\u5728\u5EAB", "\u5B9F\u5728\u5EAB\u6570", "\u5728\u5EAB"];
function parseStockTab(values) {
  const nh = (s) => String(s ?? "").normalize("NFKC").replace(/[\s　]/g, "");
  const findCol = (H2, heads) => {
    for (const k of heads) {
      const i = H2.indexOf(k);
      if (i >= 0) return i;
    }
    return -1;
  };
  let h = -1;
  for (let i = 0; i < Math.min(20, values.length); i++) {
    const row = (values[i] || []).map(nh);
    if (findCol(row, CODE_HEADS) >= 0 && (row.some((c) => NAME_HEADS.some((n) => c.includes(n))) || findCol(row, QTY_HEADS) >= 0)) {
      h = i;
      break;
    }
  }
  if (h < 0) return null;
  const H = (values[h] || []).map(nh);
  const codeI = findCol(H, CODE_HEADS);
  const nameI = H.findIndex((c) => NAME_HEADS.some((n) => c.includes(n)));
  const unitI = H.indexOf("\u5358\u4F4D");
  const qtyCols = H.map((c, i) => c === "\u6B8B\u6570\u91CF" ? i : -1).filter((i) => i >= 0);
  const qtyI = qtyCols.length ? qtyCols[qtyCols.length - 1] : findCol(H, QTY_HEADS.slice(1));
  const costI = H.findIndex((c) => c.includes("\u5728\u5EAB\u8A55\u4FA1\u5358\u4FA1"));
  if (codeI < 0 || qtyI < 0) return null;
  const items = [];
  for (const r of values.slice(h + 1)) {
    const code = String(r?.[codeI] ?? "").trim();
    if (!code || /^(合計|総計|小計)/.test(code)) continue;
    items.push({
      code,
      name: nameI >= 0 ? String(r?.[nameI] ?? "").trim() : "",
      unit: unitI >= 0 ? String(r?.[unitI] ?? "").trim() || void 0 : void 0,
      qty: importNum(String(r?.[qtyI] ?? "")),
      cost: costI >= 0 ? importNum(String(r?.[costI] ?? "")) || void 0 : void 0
    });
  }
  const asOf = String(values[1]?.[0] ?? "").replace(/^対象期間[:：]?\s*/, "").trim();
  return { asOf, items };
}
var WAREHOUSE_ALIAS = { \u5927\u548C\u904B\u8F38: "\u5927\u548C", \u30E4\u30DE\u30C8\u904B\u8F38: "\u30E4\u30DE\u30C8", \u65E5\u672C\u901A\u904B: "\u65E5\u901A" };
function stockTabName(title) {
  const base = title.replace(/在庫一覧|在庫/g, "").trim();
  const noWh = base.replace(/倉庫$/, "").trim() || base;
  return WAREHOUSE_ALIAS[noWh] || noWh || title;
}
function unreadStockTabs(tabs) {
  return tabs.filter((t) => !parseStockTab(t.values)).map((t) => t.title);
}
function buildStockData(tabs) {
  const companies = [];
  const map = /* @__PURE__ */ new Map();
  let asOf = "";
  for (const t of tabs) {
    const parsed = parseStockTab(t.values);
    if (!parsed) continue;
    const company = stockTabName(t.title);
    companies.push(company);
    if (!asOf && parsed.asOf) asOf = parsed.asOf;
    for (const it of parsed.items) {
      const key = codeKey(it.code);
      const cur = map.get(key) || { code: it.code, name: it.name, unit: it.unit, qty: 0, byCompany: {}, cost: it.cost };
      cur.qty += it.qty;
      cur.byCompany[company] = (cur.byCompany[company] || 0) + it.qty;
      if (!cur.name && it.name) cur.name = it.name;
      if (!cur.unit && it.unit) cur.unit = it.unit;
      if (!cur.cost && it.cost) cur.cost = it.cost;
      map.set(key, cur);
    }
  }
  return { asOf, companies, items: [...map.values()], updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
}

// src/collab/fields.ts
var META_KEYS = /* @__PURE__ */ new Set(["_schema", "_at", "_by", "_deleted", "_delAt", "_delBy", "_mig", "_fv", "_backfill"]);
var isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
var isIdArray = (a) => a.length > 0 && a.every((x) => isObj(x) && typeof x.id === "string" && x.id) && new Set(a.map((x) => x.id)).size === a.length;
function enc(v) {
  if (v === void 0) return void 0;
  if (Array.isArray(v)) {
    if (isIdArray(v)) {
      const e = {};
      v.forEach((x, i) => {
        const o = encObj(x);
        delete o.id;
        o.__o = i;
        e[x.id] = o;
      });
      return { __arr: 1, e };
    }
    return v.map((x) => x === void 0 ? null : enc(x));
  }
  if (isObj(v)) return encObj(v);
  if (typeof v === "number" && !isFinite(v)) return null;
  return v;
}
function encObj(o) {
  const out = {};
  for (const k of Object.keys(o)) {
    const x = enc(o[k]);
    if (x !== void 0) out[k] = x;
  }
  return out;
}
function dec(v, top = true) {
  if (Array.isArray(v)) return v.map((x) => dec(x, false));
  if (isObj(v)) {
    if (v.__arr === 1 && isObj(v.e)) {
      return Object.entries(v.e).filter(([, x]) => isObj(x) && !x.__del).sort((a, b) => (Number(a[1].__o) || 0) - (Number(b[1].__o) || 0) || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)).map(([id, x]) => {
        const o = decObj(x, false);
        delete o.__o;
        delete o.__del;
        return { id, ...o };
      });
    }
    return decObj(v, top);
  }
  if (v && typeof v === "object" && typeof v.toDate === "function") return v.toDate().toISOString();
  return v;
}
function decObj(o, top) {
  const out = {};
  for (const k of Object.keys(o)) {
    if (o[k] === null || o[k] === void 0) continue;
    if (top && META_KEYS.has(k)) continue;
    out[k] = dec(o[k], false);
  }
  return out;
}
function deepEq(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return a == null && b == null;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!deepEq(a[i], b[i])) return false;
    return true;
  }
  if (Array.isArray(b)) return false;
  if (typeof a === "object") {
    for (const k of Object.keys(a)) if (!deepEq(a[k], b[k])) return false;
    for (const k of Object.keys(b)) if (!(k in a) && b[k] != null) return false;
    return true;
  }
  return false;
}
function diff(b, n, path = [], out = [], inRows = false) {
  const keys = /* @__PURE__ */ new Set([...Object.keys(b || {}), ...Object.keys(n || {})]);
  for (const k of keys) {
    if (path.length === 0 && META_KEYS.has(k)) continue;
    const bv = b ? b[k] : void 0;
    const nv = n ? n[k] : void 0;
    if (deepEq(bv, nv)) continue;
    const p = [...path, k];
    if (nv == null) {
      if (bv == null) continue;
      if (inRows && isObj(bv)) {
        if (!bv.__del) out.push([[...p, "__del"], true]);
        continue;
      }
      out.push([p, null]);
      continue;
    }
    if (isObj(bv) && isObj(nv) && !!bv.__arr === !!nv.__arr) {
      if (nv.__arr) {
        diff(bv.e || {}, nv.e || {}, [...p, "e"], out, true);
      } else diff(bv, nv, p, out, false);
      continue;
    }
    out.push([p, nv]);
  }
  return out;
}

// src/masterDedupe.ts
var REF_KEY = { customers: "customerId", products: "productId" };
var REF_LISTS = ["deals", "activities", "quotes", "trips", "rideAlongs", "repairs", "expos", "leads"];
var filled = (x) => Object.values(x || {}).filter((v) => v !== void 0 && v !== null && v !== "").length;
function sameKey(kind, x) {
  const code = String(x?.code || "").trim();
  if (code) return "c:" + code;
  if (kind === "customers" && x?.name) return "n:" + String(x.name).trim() + "|" + String(x.site || "").trim();
  return "";
}
function countRefs(v, key, out) {
  if (Array.isArray(v)) v.forEach((x) => countRefs(x, key, out));
  else if (v && typeof v === "object") {
    for (const [k, x] of Object.entries(v)) {
      if (k === key && typeof x === "string" && x) out.set(x, (out.get(x) || 0) + 1);
      else if (x && typeof x === "object") countRefs(x, key, out);
    }
  }
}
function remapRefs(v, key, map) {
  if (Array.isArray(v)) {
    let ch = false;
    const n = v.map((x) => {
      const y = remapRefs(x, key, map);
      if (y !== x) ch = true;
      return y;
    });
    return ch ? n : v;
  }
  if (v && typeof v === "object") {
    let out = null;
    for (const [k, x] of Object.entries(v)) {
      let y = x;
      if (k === key && typeof x === "string" && map[x]) y = map[x];
      else if (x && typeof x === "object") y = remapRefs(x, key, map);
      if (y !== x) {
        out ||= { ...v };
        out[k] = y;
      }
    }
    return out || v;
  }
  return v;
}
function planMasterDedupe(d) {
  const plan = { customers: {}, products: {}, fill: { customers: {}, products: {} } };
  for (const kind of ["customers", "products"]) {
    const list = (d[kind] || []).filter(Boolean);
    const groups = /* @__PURE__ */ new Map();
    for (const x of list) {
      if (typeof x.id !== "string" || !x.id) continue;
      const k = sameKey(kind, x);
      if (!k) continue;
      const g = groups.get(k);
      if (g) g.push(x);
      else groups.set(k, [x]);
    }
    if (![...groups.values()].some((g) => g.length > 1)) continue;
    const refs = /* @__PURE__ */ new Map();
    REF_LISTS.forEach((n) => countRefs(d[n] || [], REF_KEY[kind], refs));
    for (const g of groups.values()) {
      if (g.length < 2) continue;
      const sorted = [...g].sort(
        (a, b) => (refs.get(b.id) || 0) - (refs.get(a.id) || 0) || filled(b) - filled(a) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
      );
      const keep = sorted[0];
      const add = {};
      for (const other of sorted.slice(1)) {
        plan[kind][other.id] = keep.id;
        for (const [k, v] of Object.entries(other)) {
          if (k === "id" || v === void 0 || v === null || v === "") continue;
          const cur = keep[k] !== void 0 && keep[k] !== null && keep[k] !== "" ? keep[k] : add[k];
          if (cur === void 0 || cur === null || cur === "") add[k] = v;
        }
      }
      if (Object.keys(add).length) plan.fill[kind][keep.id] = add;
    }
  }
  return plan;
}
var planIsEmpty = (p) => !Object.keys(p.customers).length && !Object.keys(p.products).length;
function applyMasterDedupe(d, p) {
  if (planIsEmpty(p)) return d;
  const next = { ...d };
  for (const kind of ["customers", "products"]) {
    const drop = p[kind];
    if (!Object.keys(drop).length) continue;
    next[kind] = (d[kind] || []).filter((x) => !drop[x?.id]).map((x) => p.fill[kind][x.id] ? { ...x, ...p.fill[kind][x.id] } : x);
    for (const n of REF_LISTS) if (next[n]) next[n] = remapRefs(next[n], REF_KEY[kind], drop);
  }
  return next;
}

// src/salesConsolidate.ts
var META = /* @__PURE__ */ new Set(["_schema", "_at", "_by", "_deleted", "_delAt", "_delBy", "_mig", "_fv", "_backfill"]);
var SHARED_LISTS = ["customers", "products", "members", "deals", "activities", "quotes", "trips", "rideAlongs", "repairs", "expos", "leads"];
function fieldTimes(doc) {
  const m = /* @__PURE__ */ new Map();
  const fv = doc._fv || {};
  for (const [k, v] of Object.entries(fv)) {
    const top = String(k).split("|")[0];
    const at = Number(v && v.at) || 0;
    if (at > (m.get(top) || 0)) m.set(top, at);
  }
  return m;
}
function mergeCopies(srcs, now) {
  const live = srcs.filter((s) => !s.doc._deleted);
  if (!live.length) return null;
  const sorted = [...live].sort((a, b) => a.order - b.order);
  const times = new Map(sorted.map((s) => [s, fieldTimes(s.doc)]));
  const keys = /* @__PURE__ */ new Set();
  sorted.forEach((s) => Object.keys(s.doc).forEach((k) => !META.has(k) && keys.add(k)));
  const out = { id: sorted[0].doc.id };
  const src = {};
  for (const k of keys) {
    if (k === "id") continue;
    let best = null;
    let bestAt = -1;
    for (const s of sorted) {
      if (!(k in s.doc)) continue;
      const at = times.get(s).get(k) ?? (Number(s.doc._at) || 0);
      if (at > bestAt) {
        bestAt = at;
        best = s;
      }
    }
    if (best) {
      out[k] = best.doc[k];
      src[k] = best.ws;
    }
  }
  const fv = {};
  for (const s of sorted) for (const [k, v] of Object.entries(s.doc._fv || {})) if (v && (!fv[k] || (Number(v.at) || 0) > (Number(fv[k].at) || 0))) fv[k] = v;
  if (Object.keys(fv).length) out._fv = fv;
  const newest = sorted.reduce((a, b) => (Number(b.doc._at) || 0) > (Number(a.doc._at) || 0) ? b : a);
  out._at = Number(newest.doc._at) || now;
  if (newest.doc._by) out._by = newest.doc._by;
  out._schema = 3;
  out._mig = now;
  return { doc: out, src };
}
var custKey = (c) => {
  const code = String(c.code || "").trim();
  if (code) return "c:" + code;
  return c.name ? "n:" + String(c.name).trim() + "|" + String(c.site || "").trim() : "";
};
var prodKey = (p) => {
  const k = codeKey(p.code);
  return k ? "c:" + k : "";
};
function stripUndefined(v) {
  if (Array.isArray(v)) return v.map((x) => x === void 0 ? null : stripUndefined(x));
  if (v && typeof v === "object") {
    const o = {};
    for (const [k, x] of Object.entries(v)) if (x !== void 0) o[k] = stripUndefined(x);
    return o;
  }
  return v;
}
function consolidateSales(copies, order, now = Date.now()) {
  const wss = [...order.filter((w) => w in copies), ...Object.keys(copies).filter((w) => !order.includes(w))];
  const ord = (ws) => wss.indexOf(ws);
  const lists = {};
  const idMap = {};
  wss.forEach((ws) => idMap[ws] = { customers: {}, products: {} });
  const report = { lists: {} };
  const rep = (name) => report.lists[name] ||= { out: 0, from: {}, remapped: 0, unresolved: 0 };
  const byCode = { customers: /* @__PURE__ */ new Map(), products: /* @__PURE__ */ new Map() };
  for (const name of ["customers", "products"]) {
    const keyOf = name === "customers" ? custKey : prodKey;
    const groups = /* @__PURE__ */ new Map();
    for (const ws of wss) {
      const rows = copies[ws]?.[name] || [];
      rep(name).from[ws] = rows.filter((r) => !r._deleted).length;
      for (const doc of rows) {
        if (!doc || !doc.id) continue;
        const k = keyOf(doc) || "id:" + doc.id;
        (groups.get(k) || groups.set(k, []).get(k)).push({ ws, doc, order: ord(ws) });
      }
    }
    const out = [];
    for (const [k, srcs] of groups) {
      const m = mergeCopies(srcs, now);
      if (!m) continue;
      out.push(stripUndefined(m.doc));
      srcs.forEach((s) => idMap[s.ws][name][s.doc.id] = m.doc.id);
      if (k.startsWith("c:")) byCode[name].set(k.slice(2), m.doc);
    }
    lists[name] = out;
    rep(name).out = out.length;
  }
  const custByCode = (code) => code ? byCode.customers.get(String(code).trim()) : void 0;
  const prodByCode = (code) => code ? byCode.products.get(codeKey(code)) : void 0;
  const remap = (name, kind, ws, id, code) => {
    if (typeof id !== "string" || !id) return void 0;
    const mapped = ws ? idMap[ws]?.[kind]?.[id] : void 0;
    if (mapped) {
      if (mapped !== id) rep(name).remapped++;
      return mapped;
    }
    const byC = kind === "customers" ? custByCode(code) : prodByCode(code);
    if (byC) {
      rep(name).remapped++;
      return byC.id;
    }
    for (const w of wss) {
      const m2 = idMap[w][kind][id];
      if (m2) {
        if (m2 !== id) rep(name).remapped++;
        return m2;
      }
    }
    rep(name).unresolved++;
    return void 0;
  };
  const remapRows = (name, kind, ws, rows) => {
    if (!rows || typeof rows !== "object" || !rows.__arr || !rows.e) return rows;
    const e = { ...rows.e };
    for (const [rid, row] of Object.entries(e)) {
      if (!row || typeof row !== "object" || !row.productId) continue;
      const to = remap(name, kind, ws, row.productId, row.code);
      if (to && to !== row.productId) e[rid] = { ...row, productId: to };
    }
    return { ...rows, e };
  };
  for (const name of SHARED_LISTS) {
    if (name === "customers" || name === "products") continue;
    const groups = /* @__PURE__ */ new Map();
    for (const ws of wss) {
      const rows = copies[ws]?.[name] || [];
      rep(name).from[ws] = rows.filter((r) => !r._deleted).length;
      for (const doc of rows) if (doc && doc.id) (groups.get(doc.id) || groups.set(doc.id, []).get(doc.id)).push({ ws, doc, order: ord(ws) });
    }
    const out = [];
    for (const srcs of groups.values()) {
      const m = mergeCopies(srcs, now);
      if (!m) continue;
      const d = m.doc;
      if (name === "deals" || name === "activities" || name === "repairs") {
        const to = remap(name, "customers", m.src.customerId, d.customerId, d.customerCode);
        if (to) {
          d.customerId = to;
          const c = lists.customers.find((x) => x.id === to);
          if (c && c.code) d.customerCode = c.code;
        }
      }
      for (const f of ["items", "lines"]) if (d[f] !== void 0) d[f] = remapRows(name, "products", m.src[f], d[f]);
      out.push(stripUndefined(d));
    }
    lists[name] = out;
    rep(name).out = out.length;
  }
  return { lists, idMap, report };
}

// src/budget/salesImport.js
var num = (v) => {
  const n = parseFloat(String(v ?? "").replace(/[,¥\s"']/g, ""));
  return isNaN(n) ? 0 : n;
};
var normYM = (v) => {
  const s = String(v ?? "").trim();
  const sep = s.match(/(\d{4})\s*[年./\-]\s*(\d{1,2})(?!\d)/);
  if (sep) {
    const mm = +sep[2];
    if (mm >= 1 && mm <= 12) return `${sep[1]}-${String(mm).padStart(2, "0")}`;
  }
  const d = s.replace(/[^0-9]/g, "");
  if (d.length === 6 || d.length === 8) {
    const y = d.slice(0, 4), mm = +d.slice(4, 6);
    if (mm >= 1 && mm <= 12) return `${y}-${String(mm).padStart(2, "0")}`;
  }
  if (d.length === 5) {
    const y = d.slice(0, 4), mm = +d.slice(4);
    if (mm >= 1 && mm <= 9) return `${y}-0${mm}`;
  }
  const MON = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
  const mon = s.match(/[A-Za-z]{3,}/);
  if (mon) {
    const mm = MON[mon[0].slice(0, 3).toLowerCase()];
    const yr = s.match(/\d{2,4}/);
    if (mm && yr) {
      let y = +yr[0];
      if (y < 100) y += y >= 70 ? 1900 : 2e3;
      return `${y}-${String(mm).padStart(2, "0")}`;
    }
  }
  return null;
};
var fyOf = (ym, startMonth) => {
  const [y, m] = ym.split("-").map(Number);
  return m >= startMonth ? y : y - 1;
};
var _pickKey = (fields, exacts, re) => {
  const normH = (s) => String(s).replace(/\s/g, "");
  return fields.find((f) => exacts.includes(normH(f))) || (re ? fields.find((f) => re.test(normH(f))) : null) || null;
};
var SHIP_CODES = ["*5", "*555"];
function parseSalesRows(rows, fields) {
  const normH = (s) => String(s).replace(/\s/g, "");
  const codeKey2 = fields.find((f) => ["\u5546\u54C1\uFF7A\uFF70\uFF84\uFF9E", "\u5546\u54C1\u30B3\u30FC\u30C9", "\u5546\u54C1CD", "\u5546\u54C1\uFF7A\uFF70\uFF84\uFF9E", "\u54C1\u756A", "\u5546\u54C1\u756A\u53F7", "\u5546\u54C1\u2116"].includes(normH(f))) || fields.find((f) => /商品.*(コード|ｺｰﾄﾞ|CD)/.test(normH(f))) || null;
  const prodNameKey = fields.find((f) => ["\u5546\u54C1\u540D\uFF11", "\u5546\u54C1\u540D1", "\u5546\u54C1\u540D(1)", "\u5546\u54C1\u540D\uFF081\uFF09", "\u5546\u54C1\u540D\uFF08\uFF11\uFF09"].includes(normH(f))) || fields.find((f) => /商品名.*[1１]/.test(normH(f))) || fields.find((f) => /商品名/.test(normH(f))) || null;
  const repKey = _pickKey(fields, ["\u62C5\u5F53\u55B6\u696D\u540D", "\u62C5\u5F53\u8005\u540D", "\u55B6\u696D\u62C5\u5F53", "\u62C5\u5F53\u55B6\u696D", "\u62C5\u5F53"], /担当/) || "\u62C5\u5F53\u55B6\u696D\u540D";
  const byMonth = {};
  const reps = /* @__PURE__ */ new Set();
  let skipped = 0;
  const shipTotal = { amt: 0, cnt: 0 };
  const taxTotal = { amt: 0, cnt: 0 };
  for (const r of rows) {
    const ym = normYM(r["\u5E74\u6708\u5EA6"]) || normYM(r["\u4F1D\u7968\u65E5\u4ED8"]);
    if (!ym) {
      skipped++;
      continue;
    }
    const rep = String(r[repKey] ?? "").trim() || "\u62C5\u5F53\u672A\u8A2D\u5B9A";
    const amt = num(r["\u91D1\u984D"]);
    const cost = num(r["\u539F\u4FA1\u91D1\u984D"]);
    const gpCol = r["\u7C97\u5229"];
    const gp = gpCol !== void 0 && String(gpCol).trim() !== "" ? num(gpCol) : amt - cost;
    const isShip = codeKey2 ? SHIP_CODES.includes(String(r[codeKey2] ?? "").trim()) : false;
    const isTax = prodNameKey ? String(r[prodNameKey] ?? "").includes("\u6D88\u8CBB\u7A0E") : false;
    if (!byMonth[ym]) byMonth[ym] = { byRep: {} };
    if (!byMonth[ym].byRep[rep]) byMonth[ym].byRep[rep] = { amt: 0, cost: 0, gp: 0, cnt: 0, ship: { amt: 0, cost: 0, gp: 0, cnt: 0 }, tax: { amt: 0, cost: 0, gp: 0, cnt: 0 } };
    const t = byMonth[ym].byRep[rep];
    if (!t.tax) t.tax = { amt: 0, cost: 0, gp: 0, cnt: 0 };
    t.amt += amt;
    t.cost += cost;
    t.gp += gp;
    t.cnt += 1;
    if (isShip) {
      t.ship.amt += amt;
      t.ship.cost += cost;
      t.ship.gp += gp;
      t.ship.cnt += 1;
      shipTotal.amt += amt;
      shipTotal.cnt += 1;
    }
    if (isTax) {
      t.tax.amt += amt;
      t.tax.cost += cost;
      t.tax.gp += gp;
      t.tax.cnt += 1;
      taxTotal.amt += amt;
      taxTotal.cnt += 1;
    }
    reps.add(rep);
  }
  return { byMonth, reps: [...reps], rowCount: rows.length, skipped, shipRows: shipTotal.cnt, shipAmt: shipTotal.amt, codeColFound: !!codeKey2, taxRows: taxTotal.cnt, taxAmt: taxTotal.amt, prodNameColFound: !!prodNameKey };
}
function parseSalesValues(values) {
  if (!values || values.length === 0) throw new Error("\u30B7\u30FC\u30C8\u306B\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093\uFF081\u884C\u76EE\u3092\u898B\u51FA\u3057\u884C\u306B\u3057\u3066\u304F\u3060\u3055\u3044\uFF09\u3002");
  const fields = (values[0] || []).map((h) => String(h ?? "").trim());
  const rows = values.slice(1).map((arr) => {
    const o = {};
    fields.forEach((h, i) => {
      if (h) o[h] = arr[i];
    });
    return o;
  });
  return parseSalesRows(rows, fields);
}
function planSalesSheetImport(values, { sales, repMap, startMonth }, cid, now = /* @__PURE__ */ new Date()) {
  const sm = startMonth ?? 4;
  const fyNow = fyOf(now.toISOString().slice(0, 7), sm);
  const parsed = parseSalesValues(values);
  const byMonth = {};
  const skipped = [];
  Object.entries(parsed.byMonth || {}).forEach(([ym, rec]) => {
    if (fyOf(ym, sm) === fyNow) byMonth[ym] = rec;
    else skipped.push(ym);
  });
  const sumOf = (rec) => Object.entries(rec && rec.byRep || {}).reduce((t, [rp, x]) => (repMap || {})[rp] === "__excluded__" ? t : t + (x && x.amt || 0), 0);
  const cmp = Object.keys(byMonth).sort().map((ym) => ({ ym, before: sumOf(sales?.[ym]?.[cid]), after: sumOf(byMonth[ym]) }));
  const shrunk = cmp.filter((x) => x.before > 0 && x.after < x.before * 0.5);
  return { parsed, byMonth, skipped, fyNow, cmp, shrunk };
}

// server/masterSync.ts
var SHARED_WS = "shared";
async function salesRoots(db) {
  const docs = await db.collection("sales3").listDocuments();
  const ids = docs.map((r) => r.id);
  if (ids.includes(SHARED_WS)) {
    const s = await db.doc(`sales3/${SHARED_WS}`).get();
    if (s.exists && s.data()?.migratedAt) return [SHARED_WS];
  }
  const out = [];
  for (const id of ids) {
    if (id === SHARED_WS) continue;
    const d = await db.doc(`sales3/${id}`).get();
    if (!d.data()?.sharedAt) out.push(id);
  }
  return out;
}
async function consolidateSalesData(ctx, order, dryRun) {
  const { db } = ctx;
  const sharedDoc = await db.doc(`sales3/${SHARED_WS}`).get();
  if (sharedDoc.exists && sharedDoc.data()?.migratedAt) return { already: true };
  const ids = (await db.collection("sales3").listDocuments()).map((r) => r.id).filter((x) => x !== SHARED_WS);
  const copies = {};
  for (const ws of ids) {
    copies[ws] = {};
    for (const name of SHARED_LISTS) {
      const qs = await db.collection(`sales3/${ws}/${name}`).get();
      copies[ws][name] = qs.docs.map((d) => ({ ...d.data(), id: d.id }));
    }
  }
  const now = Date.now();
  const res = consolidateSales(copies, order, now);
  if (dryRun) return { report: res.report };
  const written = {};
  for (const [name, rows] of Object.entries(res.lists)) {
    for (let i = 0; i < rows.length; i += 400) {
      const b = db.batch();
      rows.slice(i, i + 400).forEach((r) => {
        const { id, ...data } = r;
        b.set(db.doc(`sales3/${SHARED_WS}/${name}/${id}`), { ...data, id });
      });
      await b.commit();
    }
    written[name] = rows.length;
  }
  const first = order.find((w) => ids.includes(w)) || ids[0];
  if (first) {
    const mf = await db.collection(`salesWs/${first}/mFields`).get();
    const b = db.batch();
    mf.docs.forEach((d) => b.set(db.doc(`salesWs/${SHARED_WS}/mFields/${d.id}`), d.data()));
    await b.commit();
  }
  await db.doc(`sales3/${SHARED_WS}`).set({ _schema: 3, migratedAt: now, consolidatedAt: now, from: ids, m: {} }, { merge: true });
  for (const ws of ids) await db.doc(`sales3/${ws}`).set({ sharedAt: now }, { merge: true });
  return { report: res.report, written };
}
var BY = "\u81EA\u52D5\u66F4\u65B0(\u30B5\u30FC\u30D0\u30FC)";
var WHICH = ["stocks", "customers", "products"];
function lastScheduledJst(now = /* @__PURE__ */ new Date()) {
  const J = 9 * 60 * 60 * 1e3;
  const j = new Date(now.getTime() + J);
  const d = new Date(Date.UTC(j.getUTCFullYear(), j.getUTCMonth(), j.getUTCDate(), 8, 0, 0));
  if (j.getTime() < d.getTime()) d.setUTCDate(d.getUTCDate() - 1);
  while (d.getUTCDay() === 0 || d.getUTCDay() === 6) d.setUTCDate(d.getUTCDate() - 1);
  return d.getTime() - J;
}
var seq = 0;
var newId = () => Math.random().toString(36).slice(2, 10) + (Date.now() + seq++).toString(36);
var FIELD_CHUNK_CHARS = 25e4;
async function readFields(db, ws) {
  const qs = await db.collection(`salesWs/${ws}/mFields`).get();
  const rows = qs.docs.map((d) => ({ _id: d.id, ...d.data() }));
  const out = {};
  const parts = /* @__PURE__ */ new Map();
  rows.forEach((r) => {
    if (r._id.includes("#")) {
      const f = r._id.split("#")[0];
      parts.set(f, [...parts.get(f) || [], r]);
    }
  });
  rows.forEach((r) => {
    if (r._id.includes("#")) return;
    try {
      if (r.chunks) {
        const ps = (parts.get(r._id) || []).filter((x) => x.rev === r.rev).sort((x, y) => x.part - y.part);
        if (ps.length === r.chunks) out[r._id] = JSON.parse(ps.map((x) => x.data).join(""));
      } else if (r.json !== void 0) out[r._id] = JSON.parse(r.json);
    } catch (e) {
    }
  });
  return out;
}
async function writeField(db, ws, f, value) {
  const coll = db.collection(`salesWs/${ws}/mFields`);
  const qs = await coll.get();
  const batch = db.batch();
  qs.docs.forEach((d) => d.id.startsWith(f + "#") && batch.delete(d.ref));
  const json = JSON.stringify(value === void 0 ? null : value);
  const rev = String(Date.now());
  if (json.length <= FIELD_CHUNK_CHARS) batch.set(coll.doc(f), { json, updatedAt: /* @__PURE__ */ new Date() });
  else {
    const ps = [];
    for (let i = 0; i < json.length; i += FIELD_CHUNK_CHARS) ps.push(json.slice(i, i + FIELD_CHUNK_CHARS));
    ps.forEach((data, k) => batch.set(coll.doc(f + "#" + k), { part: k, rev, data }));
    batch.set(coll.doc(f), { chunks: ps.length, rev, updatedAt: /* @__PURE__ */ new Date() });
  }
  await batch.commit();
}
async function readList(db, ws, name) {
  const qs = await db.collection(`sales3/${ws}/${name}`).get();
  const stored = /* @__PURE__ */ new Map();
  const items = [];
  qs.docs.forEach((d) => {
    const v = d.data();
    stored.set(d.id, v);
    if (v && !v._deleted) items.push({ ...dec(v), id: d.id });
  });
  return { items, stored };
}
async function writeList(ctx, ws, name, before, after) {
  const { db, FieldPath } = ctx;
  const old = new Map(before.map((x) => [x.id, x]));
  const now = Date.now();
  const ops = [];
  for (const x of after) {
    const ref = db.doc(`sales3/${ws}/${name}/${x.id}`);
    const o = old.get(x.id);
    if (o === x) continue;
    if (!o) {
      const data = { ...enc(x), _schema: 3, _at: now, _by: BY };
      ops.push((b) => b.set(ref, data));
      continue;
    }
    const pairs = diff(enc(o), enc(x));
    if (!pairs.length) continue;
    const args = [];
    for (const [p, v] of [...pairs, [["_at"], now], [["_by"], BY]]) args.push(new FieldPath(...p), v === void 0 ? null : v);
    ops.push((b) => b.update(ref, ...args));
  }
  for (let i = 0; i < ops.length; i += 400) {
    const b = db.batch();
    ops.slice(i, i + 400).forEach((f) => f(b));
    await b.commit();
  }
  return ops.length;
}
async function markDeletedDocs(ctx, ws, name, ids) {
  const { db, FieldPath } = ctx;
  const at = (/* @__PURE__ */ new Date()).toISOString();
  for (let i = 0; i < ids.length; i += 400) {
    const b = db.batch();
    ids.slice(i, i + 400).forEach(
      (id) => b.update(db.doc(`sales3/${ws}/${name}/${id}`), new FieldPath("_deleted"), true, new FieldPath("_delAt"), at, new FieldPath("_at"), Date.now(), new FieldPath("_by"), BY)
    );
    await b.commit();
  }
}
var REF_LISTS2 = ["deals", "activities", "quotes", "trips", "rideAlongs", "repairs", "expos", "leads"];
async function dedupeCompany(ctx, ws, dryRun = false) {
  const { db } = ctx;
  const lists = {};
  for (const n of ["customers", "products", ...REF_LISTS2]) lists[n] = await readList(db, ws, n);
  const d = Object.fromEntries(Object.entries(lists).map(([k, v]) => [k, v.items]));
  const plan = planMasterDedupe(d);
  const res = { customers: Object.keys(plan.customers).length, products: Object.keys(plan.products).length, refs: {} };
  if (planIsEmpty(plan)) return res;
  const next = applyMasterDedupe(d, plan);
  for (const n of REF_LISTS2) {
    const before = new Map(d[n].map((x) => [x.id, x]));
    const changed = (next[n] || []).filter((x) => before.get(x.id) !== x).length;
    if (changed) res.refs[n] = changed;
  }
  const rq = await db.collection("sync3/repair/repairs").get();
  const repairs = rq.docs.map((x) => ({ ...dec(x.data()), id: x.id, _raw: x.data() })).filter((x) => !x._raw?._deleted && String(x.company || "") === ws);
  const repNext = repairs.map((x) => remapRefs(remapRefs(x, "customerId", plan.customers), "productId", plan.products));
  const repChanged = repNext.filter((x, i) => x !== repairs[i]);
  if (repChanged.length) res.refs["\u4FEE\u7406\u54C1"] = repChanged.length;
  if (dryRun) return res;
  for (const n of REF_LISTS2) if (res.refs[n]) await writeList(ctx, ws, n, d[n], next[n]);
  for (const x of repChanged) {
    const pairs = diff(enc(repairs.find((y) => y.id === x.id)), enc(x)).filter(([p]) => p[0] !== "_raw");
    if (!pairs.length) continue;
    const args = [];
    for (const [p, v] of [...pairs, [["_at"], Date.now()], [["_by"], BY]]) args.push(new ctx.FieldPath(...p), v === void 0 ? null : v);
    await db.doc(`sync3/repair/repairs/${x.id}`).update(...args);
  }
  for (const kind of ["customers", "products"]) {
    const drop = Object.keys(plan[kind]);
    if (!drop.length) continue;
    await writeList(ctx, ws, kind, d[kind], next[kind]);
    await markDeletedDocs(ctx, ws, kind, drop);
  }
  return res;
}
async function syncCompany(ctx, ws, out) {
  const { db } = ctx;
  const now = ctx.now || /* @__PURE__ */ new Date();
  const fields = await readFields(db, ws);
  const urls = fields.sheetUrls || {};
  const mods = { ...fields.sheetModified || {} };
  let modsChanged = false;
  let stocks = fields.stocks;
  let deduped = false;
  for (const which of WHICH) {
    const url = String(urls[which] || "").trim();
    if (!url) continue;
    const forced = ctx.force && (!ctx.force.ws || ctx.force.ws === ws) && (!ctx.force.which || ctx.force.which === which);
    if (ctx.force && !forced) continue;
    try {
      const prev = mods[which] || null;
      const m = await ctx.sheets.modified(url).catch(() => null);
      const synced = prev?.syncedAt ? Date.parse(prev.syncedAt) : 0;
      const changed = !!(m?.modifiedTime && m.modifiedTime !== prev?.modifiedTime);
      const daily = synced < lastScheduledJst(now) && now.getTime() >= lastScheduledJst(now);
      if (!forced && !changed && !daily) {
        out.push({ ws, which, status: "skip", msg: "\u5909\u66F4\u306A\u3057" });
        continue;
      }
      let msg = "";
      if (which !== "stocks" && !deduped) {
        deduped = true;
        const dd = await dedupeCompany(ctx, ws);
        if (dd.customers || dd.products) out.push({ ws, which: "dedupe", status: "done", msg: `\u91CD\u8907\u3092\u307E\u3068\u3081\u307E\u3057\u305F(\u5F97\u610F\u5148 ${dd.customers}\u4EF6\u30FB\u5546\u54C1 ${dd.products}\u4EF6)` });
      }
      if (which === "stocks") {
        const tabs = await ctx.sheets.tabs(url, "\u5728\u5EAB");
        const next = buildStockData(tabs);
        if (!next.items.length) throw new Error("\u300C\u5728\u5EAB\u300D\u3092\u542B\u3080\u30BF\u30D6\u306E\u898B\u51FA\u3057(\u30B3\u30FC\u30C9\u30FB\u5546\u54C1\u540D\u30FB\u6B8B\u6570\u91CF)\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F");
        await writeField(db, ws, "stocks", next);
        stocks = next;
        const P = await readList(db, ws, "products");
        const r = applyStockToProducts({ products: P.items }, next);
        const n = await writeList(ctx, ws, "products", P.items, r.next.products);
        const unread = unreadStockTabs(tabs);
        msg = `${next.companies.length}\u304B\u6240\u304B\u3089 ${next.items.length}\u54C1\u756A\uFF0F\u5546\u54C1\u30DE\u30B9\u30BF\u306E\u5728\u5EAB ${n}\u4EF6\u3092\u66F4\u65B0` + (unread.length ? `\uFF0F\u8AAD\u3081\u306A\u304B\u3063\u305F\u30B7\u30FC\u30C8: ${unread.join("\u30FB")}` : "");
      } else {
        const { values } = await ctx.sheets.values(url);
        const lists = {};
        const need = which === "customers" ? ["customers", "members", "deals", "quotes"] : ["products"];
        for (const n of need) lists[n] = await readList(db, ws, n);
        const d = {
          customers: lists.customers?.items || [],
          products: lists.products?.items || [],
          members: lists.members?.items || [],
          deals: lists.deals?.items || [],
          quotes: lists.quotes?.items || [],
          stocks
        };
        const r = which === "customers" ? importCustomerRows(d, values || [], newId) : importProductRows(d, values || [], newId);
        if (!r.added && !r.updated && /見つかりません|データが空/.test(r.msg)) throw new Error(r.msg);
        await writeList(ctx, ws, which, d[which], r.next[which]);
        if (which === "customers") await writeList(ctx, ws, "quotes", d.quotes, r.next.quotes);
        msg = r.msg;
      }
      mods[which] = { modifiedTime: m?.modifiedTime || null, by: m?.by || void 0, syncedAt: now.toISOString(), auto: true };
      modsChanged = true;
      out.push({ ws, which, status: "done", msg });
    } catch (e) {
      out.push({ ws, which, status: "error", msg: e?.message || String(e) });
    }
  }
  if (modsChanged) await writeField(db, ws, "sheetModified", JSON.parse(JSON.stringify(mods)));
}
async function syncBudgetSales(ctx, out) {
  const { db, FieldPath } = ctx;
  const now = ctx.now || /* @__PURE__ */ new Date();
  const top = await db.doc("sync3/budget").get();
  if (!top.exists || !top.data()?.migratedAt) return;
  const meta = dec(top.data().m || {}) || {};
  const urls = meta.salesSheetUrl || {};
  for (const [cid, url0] of Object.entries(urls)) {
    const url = String(url0 || "").trim();
    if (!url) continue;
    const forced = ctx.force && ctx.force.which === "sales" && (!ctx.force.cid || ctx.force.cid === cid);
    if (ctx.force && !forced) continue;
    const tag = { ws: "budget:" + cid, which: "sales" };
    try {
      const prevSheet = meta.lastImport?.salesSheet?.[cid] || null;
      const prevAt = meta.lastImport?.sales?.[cid] ? Date.parse(meta.lastImport.sales[cid]) : 0;
      const m = await ctx.sheets.modified(url).catch(() => null);
      const changed = !!(m?.modifiedTime && m.modifiedTime !== prevSheet?.at);
      const daily = prevAt < lastScheduledJst(now) && now.getTime() >= lastScheduledJst(now);
      if (!forced && !changed && !daily) {
        out.push({ ...tag, status: "skip", msg: "\u5909\u66F4\u306A\u3057" });
        continue;
      }
      const { values } = await ctx.sheets.values(url);
      const salesNow = {};
      const qs = await db.collection("sync3/budget/sales").get();
      qs.docs.forEach((d) => {
        const v = d.data();
        if (v && !v._deleted) salesNow[d.id] = dec(v);
      });
      const plan = planSalesSheetImport(values, { sales: salesNow, repMap: meta.repMap, startMonth: meta.startMonth }, cid, new Date(now.getTime() + 9 * 60 * 60 * 1e3));
      const shrunk = new Set(plan.shrunk.map((x) => x.ym));
      const months = Object.keys(plan.byMonth).filter((ym) => !shrunk.has(ym));
      if (!Object.keys(plan.byMonth).length) throw new Error(`\u3053\u306E\u30B7\u30FC\u30C8\u306B ${plan.fyNow}\u5E74\u5EA6\u306E\u6708\u304C\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F`);
      const t = Date.now();
      for (const ym of months) {
        const ref = db.doc(`sync3/budget/sales/${ym}`);
        const rec = enc(plan.byMonth[ym]);
        if (salesNow[ym]) await ref.update(new FieldPath(cid), rec, new FieldPath("_at"), t, new FieldPath("_by"), BY);
        else await ref.set({ _schema: 3, id: ym, [cid]: rec, _at: t, _by: BY }, { merge: true });
      }
      const stamp = now.toISOString();
      const mp = [
        new FieldPath("m", "lastImport", "sales", cid),
        stamp,
        new FieldPath("m", "lastImport", "salesSheet", cid),
        m ? { at: m.modifiedTime, by: m.by || "" } : null,
        new FieldPath("_at"),
        t
      ];
      (plan.parsed.reps || []).forEach((r) => {
        if (!(r in (meta.repMap || {}))) mp.push(new FieldPath("m", "repMap", r), "");
      });
      await top.ref.update(...mp);
      out.push({
        ...tag,
        status: "done",
        msg: `${months.length}\u304B\u6708\u3092\u66F4\u65B0` + (shrunk.size ? `\uFF0F\u5927\u304D\u304F\u6E1B\u308B\u305F\u3081\u53D6\u308A\u8FBC\u307E\u306A\u304B\u3063\u305F\u6708: ${[...shrunk].join("\u3001")}(\u753B\u9762\u306E\u300C\u58F2\u4E0A\u30C7\u30FC\u30BF\u306E\u53D6\u8FBC\u300D\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044)` : "")
      });
    } catch (e) {
      out.push({ ...tag, status: "error", msg: e?.message || String(e) });
    }
  }
}
async function purgeDeleted(ctx, now = /* @__PURE__ */ new Date()) {
  const { db } = ctx;
  const out = {};
  const roots = await salesRoots(db);
  const lists = [["customers", 2], ["products", 2], ["deals", 30], ["activities", 30], ["quotes", 30], ["trips", 30], ["rideAlongs", 30], ["repairs", 30], ["expos", 30], ["leads", 30], ["members", 30]];
  for (const ws of roots) {
    for (const [name, days] of lists) {
      const cutoff = new Date(now.getTime() - days * 864e5).toISOString();
      const qs = await db.collection(`sales3/${ws}/${name}`).where("_deleted", "==", true).get();
      const refs = qs.docs.filter((d) => String(d.data()._delAt || "") < cutoff).map((d) => d.ref);
      for (let i = 0; i < refs.length; i += 400) {
        const b = db.batch();
        refs.slice(i, i + 400).forEach((r) => b.delete(r));
        await b.commit();
      }
      if (refs.length) out[`${ws}/${name}`] = refs.length;
    }
  }
  return out;
}
async function runMasterSync(ctx) {
  const out = [];
  const roots = await salesRoots(ctx.db);
  const wss = ctx.force?.ws ? [roots.includes(SHARED_WS) ? SHARED_WS : ctx.force.ws] : roots;
  if (!ctx.force || ctx.force.which !== "sales") for (const ws of wss) await syncCompany(ctx, ws, out);
  if (!ctx.force || ctx.force.which === "sales") await syncBudgetSales(ctx, out);
  try {
    const done = out.filter((x) => x.status !== "skip");
    if (done.length) await ctx.db.doc("syncLog/masterSheets").set({ at: (/* @__PURE__ */ new Date()).toISOString(), results: done.slice(0, 50) }, { merge: false });
  } catch (e) {
  }
  return out;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SHARED_WS,
  consolidateSalesData,
  dedupeCompany,
  lastScheduledJst,
  purgeDeleted,
  runMasterSync,
  salesRoots
});
