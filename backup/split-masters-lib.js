// 各種マスタ(得意先・商品・在庫・業種・参照シートURL)を、1つにまとめた置き場所(sales3/shared)から各社の置き場所へ写す。
//   ・得意先・商品: 今の共通マスタを、同じID(案件などの紐づけがそのまま使える)で各社へ写す。
//     各社の置き場所に残っている「まとめる前の古い写し」(共通マスタに無いID)は削除の印を付ける(文書は消さない)。
//   ・項目(salesWs/{会社}/mFields): 共通の値があればそれを、無ければ会社の値を残す(参照シートURLは欄ごと)。
//   ・最後に sales3/shared に mastersSplitAt を付ける → 開いている画面も含め、マスタは会社ごとの置き場所を使う。
//   記録には件数だけを出す(得意先名・コード・URL は出さない)。
export const LISTS = ["customers", "products"];
export const FIELDS = ["industries", "chatWebhook", "sheetUrls", "stocks", "sheetModified"];
const BY = "各社別へ写し";
export const SHARED_URL_OWNER = "エアモア";
const FIELD_CHUNK_CHARS = 700_000;

async function readFields(db, ws) {
  const qs = await db.collection(`salesWs/${ws}/mFields`).get();
  const rows = qs.docs.map((d) => ({ _id: d.id, ...d.data() }));
  const out = {};
  const parts = new Map();
  rows.forEach((r) => {
    if (r._id.includes("#")) {
      const f = r._id.split("#")[0];
      parts.set(f, [...(parts.get(f) || []), r]);
    }
  });
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
async function writeField(db, ws, f, value) {
  const coll = db.collection(`salesWs/${ws}/mFields`);
  const qs = await coll.get();
  const batch = db.batch();
  qs.docs.forEach((d) => d.id.startsWith(f + "#") && batch.delete(d.ref));
  const json = JSON.stringify(value === undefined ? null : value);
  const rev = String(Date.now());
  if (json.length <= FIELD_CHUNK_CHARS) batch.set(coll.doc(f), { json, updatedAt: new Date() });
  else {
    const ps = [];
    for (let i = 0; i < json.length; i += FIELD_CHUNK_CHARS) ps.push(json.slice(i, i + FIELD_CHUNK_CHARS));
    ps.forEach((data, k) => batch.set(coll.doc(f + "#" + k), { part: k, rev, data }));
    batch.set(coll.doc(f), { chunks: ps.length, rev, updatedAt: new Date() });
  }
  await batch.commit();
}
const nonEmpty = (v) => v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && !v.length) && !(typeof v === "object" && !Array.isArray(v) && !Object.keys(v).length);

/** write=false は件数の報告だけ(何も書かない) */
export async function splitMasters(db, { write = false, serverTs = () => new Date(), log = console.log } = {}) {
  const sharedRef = db.doc("sales3/shared");
  const sharedDoc = await sharedRef.get();
  const sd = (sharedDoc.exists && sharedDoc.data()) || {};
  if (!sd.migratedAt) throw new Error("商談管理のデータが1つにまとまっていません(写す元がありません)");
  const companies = (sd.from || []).filter((x) => x && x !== "shared");
  if (!companies.length) throw new Error("写す先の会社が分かりません(sales3/shared の from が空です)");
  log(`${sd.mastersSplitAt ? "(既に各社別の印があります。足りない分だけ写し直します)\n" : ""}写す先: ${companies.length}社(${companies.join("・")})`);
  const report = { companies, lists: {}, fields: {} };
  // 共通マスタ
  const src = {};
  for (const name of LISTS) {
    const qs = await db.collection(`sales3/shared/${name}`).get();
    src[name] = qs.docs.filter((d) => !d.data()._deleted).map((d) => ({ id: d.id, data: d.data() }));
    log(`共通の${name === "customers" ? "得意先" : "商品"}: ${src[name].length}件`);
  }
  const sharedFields = await readFields(db, "shared");
  const now = Date.now();
  const delAt = new Date().toISOString();
  for (const co of companies) {
    const r = (report.lists[co] = {});
    for (const name of LISTS) {
      const qs = await db.collection(`sales3/${co}/${name}`).get();
      const cur = new Map(qs.docs.map((d) => [d.id, d.data()]));
      const keep = new Set(src[name].map((x) => x.id));
      const stale = [...cur.entries()].filter(([id, v]) => !keep.has(id) && !(v && v._deleted)).map(([id]) => id);
      r[name] = { copy: src[name].length, replaced: src[name].filter((x) => cur.has(x.id)).length, stale: stale.length };
      if (!write) continue;
      const ops = [];
      for (const x of src[name]) {
        const { _wt, ...rest } = x.data;
        ops.push((b) => b.set(db.doc(`sales3/${co}/${name}/${x.id}`), { ...rest, _at: now, _by: BY, _wt: serverTs() }));
      }
      for (const id of stale)
        ops.push((b) => b.set(db.doc(`sales3/${co}/${name}/${id}`), { _deleted: true, _delAt: delAt, _at: now, _by: BY, _wt: serverTs() }, { merge: true }));
      for (let i = 0; i < ops.length; i += 400) {
        const b = db.batch();
        ops.slice(i, i + 400).forEach((f) => f(b));
        await b.commit();
      }
      // 古い写しのまとめ(1日1回のまとめ)は使わない(次のまとめで作り直される。無い間は全件を読む)
      await db.doc(`sales3/${co}/_snap/${name}`).delete().catch(() => {});
    }
    // 項目
    const coFields = await readFields(db, co);
    const f = (report.fields[co] = {});
    for (const k of FIELDS) {
      let next;
      if (k === "sheetUrls") {
        const a = coFields.sheetUrls || {};
        const s = sharedFields.sheetUrls || {};
        // 共通のURLは、まとめた後にエアモアの画面で入れ直されたもの → エアモアは共通を、他の会社は会社に残っている元のURLを優先
        const sharedFirst = co === SHARED_URL_OWNER;
        const pick = (w) => {
          const sv = String(s[w] || "").trim();
          const av = String(a[w] || "").trim();
          return sharedFirst ? [sv || av, sv ? "共通" : av ? "会社" : "空"] : [av || sv, av ? "会社" : sv ? "共通" : "空"];
        };
        next = {};
        const src = [];
        for (const w of ["customers", "products", "stocks"]) {
          const [v, from] = pick(w);
          if (v) next[w] = v;
          src.push(from);
        }
        f[k] = src.join("/");
      } else {
        next = nonEmpty(sharedFields[k]) ? sharedFields[k] : coFields[k];
        f[k] = nonEmpty(sharedFields[k]) ? "共通" : nonEmpty(coFields[k]) ? "会社" : "空";
      }
      if (write && next !== undefined && JSON.stringify(next) !== JSON.stringify(coFields[k])) await writeField(db, co, k, next);
    }
    log(`${co}: 得意先 ${r.customers.copy}件・商品 ${r.products.copy}件を写す(古い写しに削除の印: 得意先 ${r.customers.stale}件・商品 ${r.products.stale}件)／参照シートURL(得意先/商品/在庫)=${f.sheetUrls}・在庫=${f.stocks}・業種=${f.industries}`);
  }
  if (write) {
    const to = companies.filter((c) => c !== "common-shared");
    await sharedRef.set({ mastersSplitAt: sd.mastersSplitAt || new Date().toISOString(), mastersSplitTo: to, _wt: serverTs() }, { merge: true });
    log(`各社別の印を付けました(取込の対象: ${to.join("・")})`);
  } else log("(確認だけ。何も書いていません)");
  return report;
}
