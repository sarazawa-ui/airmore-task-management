// 過去の時点の案件データを読み出して Google ドライブに保存する(読むだけ。何も書き換えない)。
// Firestore は「1時間以内の任意の時点」(PITR が有効なら7日以内)のデータを読めるため、
// 巻き戻りが起きる前の状態を、消える前にドライブへ控える目的で使う。
// 環境変数: GCP_SA_KEY / GDRIVE_FOLDER_ID / REPORT_PUBKEY / AT_LIST(読む時点 UTC ISO をカンマ区切り。空なら既定)
// ログは公開されるため件数だけを出す。中身は REPORT_PUBKEY で暗号化して report.enc に置く。
import admin from "firebase-admin";
import crypto from "node:crypto";
import { writeFileSync } from "node:fs";
import { initFirestore, driveClient, uploadJson } from "./lib.js";
import { sealReport } from "./fill-deal-address-lib.js";

const BASE = "sales3/shared";
const COLS = ["deals", "activities", "quotes", "repairs"];

function encode(v) {
  if (v === null || v === undefined) return null;
  if (v instanceof admin.firestore.Timestamp) return { $ts: v.toDate().toISOString() };
  if (v instanceof admin.firestore.GeoPoint) return { $geo: [v.latitude, v.longitude] };
  if (v instanceof admin.firestore.DocumentReference) return { $ref: v.path };
  if (Buffer.isBuffer(v)) return { $bytes: v.toString("base64") };
  if (Array.isArray(v)) return v.map(encode);
  if (typeof v === "object") { const o = {}; for (const [k, val] of Object.entries(v)) o[k] = encode(val); return o; }
  return v;
}

const db = initFirestore();
const now = Date.now();
const minute = (t) => Math.floor(t / 60000) * 60000; // readTime は分単位でないといけない(PITR)
let times = (process.env.AT_LIST || "").split(",").map((s) => s.trim()).filter(Boolean).map((s) => Date.parse(s));
if (!times.length) {
  // 既定: 今から59分前まで5分ごと(PITRなしでも読める) + 本日 10:00〜14:00 JST を15分ごと(PITRが有効なら読める)
  for (let m = 55; m >= 5; m -= 5) times.push(minute(now - m * 60000));
  for (let t = Date.parse("2026-11-02T01:00:00Z"); t < now - 60 * 60000; t += 15 * 60000) times.push(t);
}
times = [...new Set(times.map(minute))].sort((a, b) => a - b);

async function readAt(t) {
  const out = {};
  await db.runTransaction(async (tx) => {
    for (const c of COLS) {
      const snap = await tx.get(db.collection(`${BASE}/${c}`));
      out[c] = Object.fromEntries(snap.docs.map((d) => [d.id, encode(d.data())]));
    }
  }, t ? { readOnly: true, readTime: admin.firestore.Timestamp.fromMillis(t) } : { readOnly: true });
  return out;
}

// 置き場所の確認: sales3/shared の印と、各社の古い置き場所(まとめる前)の案件
const meta = {};
{
  const sh = (await db.doc(BASE).get()).data() || {};
  meta.shared = { migratedAt: encode(sh.migratedAt) || null, mastersSplitAt: encode(sh.mastersSplitAt) || null, from: sh.from || null, keys: Object.keys(sh) };
  const toMs = (v) => (v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : Date.parse(v) || 0);
  meta.old = {};
  for (const ref of await db.collection("sales3").listDocuments()) {
    if (ref.id === "shared") continue;
    const snap = await ref.collection("deals").get();
    let max = 0, cnt = 0, recent = 0;
    for (const d of snap.docs) { const x = d.data(); if (x._deleted) continue; cnt++; const t = toMs(x._at); if (t > max) max = t; if (t > Date.parse("2026-11-01T15:00:00Z")) recent++; }
    meta.old[ref.id] = { deals: cnt, lastWrite: max ? new Date(max).toISOString() : null, writtenToday: recent };
  }
  const nShared = (await db.collection(`${BASE}/deals`).get()).docs.filter((d) => !d.data()._deleted).length;
  console.log(`まとめた置き場所: 印 migratedAt ${meta.shared.migratedAt ? "あり" : "なし"} / 削除されていない案件 ${nShared}件`);
  for (const [k, v] of Object.entries(meta.old)) console.log(`古い置き場所(会社${Object.keys(meta.old).indexOf(k) + 1}): 案件 ${v.deals}件 / 最終書き込み ${v.lastWrite} / 今日の書き込み ${v.writtenToday}件`);
}

const drive = process.env.GDRIVE_FOLDER_ID ? driveClient() : null;
const stamp = (t) => new Date(t + 9 * 3600e3).toISOString().slice(0, 16).replace(/[-:T]/g, "").replace(/^(\d{8})/, "$1-");
const results = [];
for (const t of [...times, null]) {
  const label = t ? new Date(t).toISOString() : "現在";
  try {
    const data = await readAt(t);
    const counts = Object.fromEntries(COLS.map((c) => [c, Object.keys(data[c]).length]));
    const h = crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex").slice(0, 12);
    let saved = "";
    if (drive) {
      const name = `hittatsu-pastread-shared-${t ? stamp(t) : stamp(now) + "-now"}JST.json`;
      const prev = results.at(-1);
      if (!prev || prev.hash !== h || !t) { await uploadJson(drive, name, JSON.stringify({ readTime: label, base: BASE, docs: data })); saved = name; }
    }
    results.push({ t, label, counts, hash: h, data, saved });
    console.log(`${label}: 読めた ${JSON.stringify(counts)} 内容番号 ${h}${saved ? " → ドライブ保存 " + saved : ""}`);
  } catch (e) {
    console.log(`${label}: 読めない (${String(e.code || "")} ${String(e.message).slice(0, 120)})`);
  }
}

const pub = process.env.REPORT_PUBKEY;
if (pub) {
  // 時点ごとの案件の要約(件名・ステージ・更新時刻・更新者)と、全データ
  const brief = (d) => Object.fromEntries(Object.entries(d.deals || {}).map(([id, x]) => [id, [x.title || x.name || "", x.stage || "", x._at || null, x._by || "", x.deletedAt || x._deleted || x.deleted || null]]));
  const sealed = sealReport({ at: new Date(now).toISOString(), meta, points: results.map((r) => ({ label: r.label, counts: r.counts, hash: r.hash, saved: r.saved, deals: brief(r.data) })) }, pub);
  writeFileSync("report.enc", sealed);
  const full = sealReport({ points: results.filter((r, i) => i === 0 || r.hash !== results[i - 1].hash || r.t === null).map((r) => ({ label: r.label, data: r.data })) }, pub);
  writeFileSync("full.enc", full);
  console.log("----- REPORT BEGIN -----");
  for (let i = 0; i < sealed.length; i += 3000) console.log(sealed.slice(i, i + 3000));
  console.log("----- REPORT END -----");
}
console.log("(読むだけ。データは何も書き換えていません)");
