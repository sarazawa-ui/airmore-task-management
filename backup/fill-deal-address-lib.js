// 案件の「住所」を、ユーザー(エンドユーザー)の名前から得意先マスタを引いて入れる(一回きりの作業)。
//   ・対象: 削除されていない案件のうち、ユーザー欄が入っていて住所欄が空のもの(住所が入っている案件は触らない)
//   ・照合: ユーザー名と得意先マスタ(全社)の「得意先名1+得意先名2」または「得意先名1」を、表記ゆれ
//     (全角半角・空白・記号・株式会社など)をそろえて完全一致で比べる。住所が1つに決まるものだけを入れる
//   ・書くのは住所(address)と、同期に必要な管理用の欄(_fv.address / _at / _by / _wt / _cv)だけ
//   ・書く前に1件ずつ「住所がまだ空・ユーザー名が確認時と同じ」をトランザクションで確かめる
//   公開リポジトリの記録(ログ)には件数だけを出す。名前・住所の一覧は暗号化して出す(fill-deal-address.js)。
import crypto from "node:crypto";

export const BY = "住所の補完";
export const CLIENT_WRITE_VERSION = 4; // 画面側(budget/firebase.real.js)と同じ値
// 画面側(collab/fields.ts)の管理用の欄
export const META_KEYS = new Set(["_schema", "_at", "_by", "_deleted", "_delAt", "_delBy", "_mig", "_fv", "_backfill", "_wt", "_cv"]);

const str = (v) => (typeof v === "string" ? v.trim() : "");

// 表記ゆれをそろえる(比べるためだけに使う。書く値には使わない)
const CORP = /(株式会社|有限会社|合同会社|合資会社|合名会社|一般社団法人|一般財団法人|公益社団法人|公益財団法人|社会福祉法人|医療法人|学校法人|\(株\)|\(有\)|\(同\)|㈱|㈲)/g;
export function norm(s) {
  return str(s)
    .normalize("NFKC")
    .toLowerCase()
    .replace(CORP, "")
    .replace(/[\s　_\-‐−–—―ー・･,，、。.．'"`’”()（）[\]［］{}「」『』【】〈〉<>/／\\|:：;；~〜]/g, "");
}
// 住所の同じ・違いを見るため(番地の全角半角・空白・ハイフンの違いは同じ住所とみなす)
export const normAddr = (s) =>
  str(s)
    .normalize("NFKC")
    .replace(/^日本[、,]\s*/, "")
    .replace(/^〒?\s*\d{3}-?\d{4}\s*/, "")
    .replace(/[\s　]/g, "")
    .replace(/[‐−–—―ー-]/g, "-");

// 画面側(collab/conflicts.ts)と同じ指紋
function sortKeysDeep(v) {
  if (Array.isArray(v)) return v.map(sortKeysDeep);
  if (v && typeof v === "object") {
    const o = {};
    for (const k of Object.keys(v).sort()) o[k] = sortKeysDeep(v[k]);
    return o;
  }
  return v;
}
export function fingerprint(v) {
  const s = v === undefined || v === null ? "" : JSON.stringify(sortKeysDeep(v));
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36) + ":" + s.length;
}

/** 得意先マスタの索引: そろえた名前 → [{co,id,code,name,site,address}] */
export function indexCustomers(byCompany) {
  const idx = new Map();
  const add = (k, c) => {
    if (!k) return;
    const a = idx.get(k) || [];
    a.push(c);
    idx.set(k, a);
  };
  for (const [co, docs] of Object.entries(byCompany)) {
    for (const { id, data: d } of docs) {
      if (!d || d._deleted) continue;
      const c = { co, id, code: str(d.code), name: str(d.name), site: str(d.site), address: str(d.address) };
      const kn = norm(c.name);
      const kns = norm(c.name + c.site);
      add(kns, c);
      if (kn !== kns) add(kn, { ...c, nameOnly: true });
    }
  }
  return idx;
}

/** 案件1件の照合結果 */
export function matchDeal(deal, idx) {
  const key = norm(deal.endUser);
  const hits = key ? idx.get(key) || [] : [];
  // 「得意先名1+2」で一致したものを優先。無ければ「得意先名1だけ」で一致したもの
  const full = hits.filter((c) => !c.nameOnly);
  const pool = full.length ? full : hits;
  const withAddr = pool.filter((c) => c.address);
  const seen = new Map(); // 同じ住所(表記ゆれ違い)は最初に見つかった表記を使う
  withAddr.forEach((c) => seen.has(normAddr(c.address)) || seen.set(normAddr(c.address), c.address));
  const addrs = [...seen.values()];
  if (addrs.length === 1) return { kind: "match", address: addrs[0], via: full.length ? "名前1+2" : "名前1", hits: withAddr };
  if (addrs.length > 1) return { kind: "multi", hits: withAddr };
  if (pool.length) return { kind: "noaddr", hits: pool };
  return { kind: "none", hits: [] };
}

/** 対象の案件を選んで照合する。plan は書く予定(id・住所・確認時のユーザー名) */
export function buildPlan(deals, customersByCompany) {
  const idx = indexCustomers(customersByCompany);
  const rows = [];
  const counts = { all: 0, withUser: 0, hasAddr: 0, target: 0, match: 0, multi: 0, noaddr: 0, none: 0 };
  for (const { id, data: d } of deals) {
    if (!d || d._deleted) continue;
    counts.all++;
    if (!str(d.endUser)) continue;
    counts.withUser++;
    if (str(d.address)) {
      counts.hasAddr++;
      continue;
    }
    counts.target++;
    const m = matchDeal(d, idx);
    counts[m.kind]++;
    rows.push({ id, title: str(d.title), endUser: str(d.endUser), stage: d.stage || "", ...m });
  }
  rows.sort((a, b) => (a.kind < b.kind ? -1 : a.kind > b.kind ? 1 : a.endUser.localeCompare(b.endUser, "ja")));
  const plan = rows.filter((r) => r.kind === "match").map((r) => ({ id: r.id, address: r.address, endUser: r.endUser }));
  return { counts, rows, plan, planHash: planHash(plan) };
}

export function planHash(plan) {
  const s = JSON.stringify([...plan].sort((a, b) => (a.id < b.id ? -1 : 1)).map((p) => [p.id, p.address, p.endUser]));
  return crypto.createHash("sha256").update(s).digest("hex").slice(0, 12);
}

/** 住所と管理用の欄を除いた中身(書く前後で同じことを確かめる) */
export function contentWithoutAddress(d) {
  const o = {};
  for (const k of Object.keys(d || {}).sort()) {
    if (META_KEYS.has(k) || k === "address") continue;
    o[k] = d[k];
  }
  return JSON.stringify(sortKeysDeep(o));
}
/** 管理用の欄 _fv も、address 以外は同じことを確かめる */
export function fvWithoutAddress(d) {
  const fv = { ...((d && d._fv) || {}) };
  delete fv.address;
  return JSON.stringify(sortKeysDeep(fv));
}

/** 報告(名前・住所を含む)を公開鍵で暗号化する: RSA-OAEP(SHA-256) で包んだ AES-256-GCM */
export function sealReport(obj, publicKeyPem) {
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv("aes-256-gcm", key, iv);
  const body = Buffer.concat([c.update(Buffer.from(JSON.stringify(obj), "utf8")), c.final()]);
  const tag = c.getAuthTag();
  const wrapped = crypto.publicEncrypt({ key: publicKeyPem, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: "sha256" }, key);
  return [wrapped, iv, tag, body].map((b) => b.toString("base64")).join(".");
}
