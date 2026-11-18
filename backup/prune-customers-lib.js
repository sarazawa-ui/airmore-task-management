// 得意先マスタの会社別の整理(内容)。prune-customers.js から使う。
//   2026-10-21 に各種マスタを各社別へ戻したとき、全社共通の得意先(約5,166件)を同じIDで全社へ写したため、
//   どの会社のマスタにも他社のスプレッドシート由来の得意先が混ざっている。
//   会社ごとの参照シートの得意先コードに無いものに「削除済み」の印を付ける(文書は消さない)。
// 残すもの(どれか1つでも当てはまれば残す):
//   ・その会社の参照シートに得意先コードがある
//   ・得意先コードが空(画面で手入力した得意先)
//   ・10/21 の写しではない(その後に会社で追加された得意先。案件・商談の画面から追加したものを含む)
//   ・案件・商談記録・見積・出張・同行・修理品・展示会・リード・各機能(sync3)のどれかから参照されている
//   ・案件の「得意先コードの控え」(customerCode)に同じコードがある
import crypto from "node:crypto";

export const BY = "得意先マスタの会社別の整理";
export const REF_LISTS = ["deals", "activities", "quotes", "trips", "rideAlongs", "repairs", "expos", "leads"];

export const codeKey = (s) =>
  String(s ?? "")
    .replace(/[Ａ-Ｚａ-ｚ０-９－]/g, (c) => (c === "－" ? "-" : String.fromCharCode(c.charCodeAt(0) - 0xfee0)))
    .replace(/[\s　]/g, "")
    .toUpperCase();

/** シートの見出しから得意先コードの列を探し、コードの集合を返す(画面の取込と同じく半角カナ・空白の違いを吸収) */
export function sheetCodes(values) {
  const norm = (s) =>
    String(s ?? "")
      .replace(/[\s　]/g, "")
      .replace(/ｺｰﾄﾞ/g, "コード")
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
  const head = (values[0] || []).map(norm);
  const ci = head.findIndex((h) => h === "得意先コード");
  const codes = new Set();
  if (ci < 0) return { codes, ok: false, rows: Math.max(0, values.length - 1) };
  for (const r of values.slice(1)) {
    const c = codeKey(r[ci]);
    if (c) codes.add(c);
  }
  return { codes, ok: true, rows: Math.max(0, values.length - 1) };
}

/** 記録の中の文字列をすべて見る(管理用の _ で始まる欄は除く) */
export function walkStrings(v, add) {
  if (typeof v === "string") add(v);
  else if (Array.isArray(v)) v.forEach((x) => walkStrings(x, add));
  else if (v && typeof v === "object") for (const k of Object.keys(v)) if (!k.startsWith("_")) walkStrings(v[k], add);
}

/**
 * 1社分の整理の予定を作る(書かない)
 * @param customers その会社の得意先(削除の印なし) [{id, code, name, ...}]
 * @param codes その会社の参照シートの得意先コード(Set)。null = シートを使わない会社(このときは何も消さない)
 * @param copiedIds 10/21 に写した得意先ID(Set)
 * @param referenced 参照されている得意先ID(Set)
 * @param dealCodes 案件の得意先コードの控え(Set, codeKey 済み)
 */
export function planCompany(customers, codes, copiedIds, referenced, dealCodes) {
  const r = { total: customers.length, inSheet: 0, noCode: 0, added: 0, referenced: 0, drop: [] };
  for (const c of customers) {
    const k = codeKey(c.code);
    if (!k) r.noCode++;
    else if (!copiedIds.has(c.id)) r.added++;
    else if (codes && codes.has(k)) r.inSheet++;
    else if (referenced.has(c.id) || dealCodes.has(k)) r.referenced++;
    else if (codes) r.drop.push(c.id);
    else r.inSheet++; // シートを使わない会社は触らない
  }
  r.drop.sort();
  return r;
}

export const planHash = (plan) =>
  crypto
    .createHash("sha256")
    .update(JSON.stringify(Object.keys(plan).sort().map((co) => [co, plan[co]])))
    .digest("hex")
    .slice(0, 12);
