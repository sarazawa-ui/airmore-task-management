// 巻き戻り事故の修復（GitHub Actions から実行・repair-request.json で駆動）
//   Google ドライブの夜間バックアップを取得し、対象ワークスペースのドキュメントを
//   「内容がバックアップと異なるものだけ」書き戻す。また、リクエストで明示された
//   ID（事故で復活した削除済み項目など）を削除する。
//   ※ 公開リポジトリのため、ログには件数とIDのみ出力し、内容は一切出力しない。
import fs from "node:fs";
import { downloadJson, driveClient, initFirestore, listBackups } from "./lib.js";

const COLLS = ["tasks", "goals", "weeklyReports", "meetings", "shared"];

// decode: lib.js と同じ変換（admin への依存を避けるため必要分のみ）
import admin from "firebase-admin";
function decode(v) {
  if (v === null || typeof v !== "object") return v;
  if (Array.isArray(v)) return v.map(decode);
  if (v.$ts) return admin.firestore.Timestamp.fromDate(new Date(v.$ts));
  const o = {};
  for (const [k, val] of Object.entries(v)) o[k] = decode(val);
  return o;
}
const sortKeys = (x) => {
  if (Array.isArray(x)) return x.map(sortKeys);
  if (x && typeof x === "object" && !(x instanceof admin.firestore.Timestamp)) {
    const o = {};
    for (const k of Object.keys(x).sort()) o[k] = sortKeys(x[k]);
    return o;
  }
  return x;
};
const stable = (x) => JSON.stringify(sortKeys(x));
// 比較時は _modAt(同期の都合で頻繁に再スタンプされる)を無視する
const contentKey = (doc) => {
  const { _modAt, ...rest } = doc || {};
  return stable(rest);
};

const req = JSON.parse(fs.readFileSync("repair-request.json", "utf8"));
if (!req.ws || !req.backupName) { console.error("repair-request.json が不正です"); process.exit(1); }
if (!req.expiresAt || Date.now() > new Date(req.expiresAt).getTime()) {
  console.log("リクエストの期限切れのため何もしません（再実行防止）:", req.expiresAt);
  process.exit(0);
}
console.log(`修復対象WS: ${req.ws} / バックアップ: ${req.backupName}`);
console.log(`メモ: ${req.note || "-"}`);

const db = initFirestore();
const drive = driveClient();

// Drive からバックアップを取得
const files = await listBackups(drive);
const file = files.find((f) => f.name === req.backupName);
if (!file) { console.error("Drive にバックアップが見つかりません:", req.backupName); process.exit(1); }
const backup = await downloadJson(drive, file.id);
console.log(`バックアップ取得OK: ${backup.takenAt} / ${backup.docCount}件`);

const prefix = `workspaces/${req.ws}`;
let restored = 0, skippedSame = 0, restoredMissing = 0, deleted = 0, keptEdited = 0;
let batch = db.batch(), ops = 0;
const flush = async () => { if (ops) { await batch.commit(); batch = db.batch(); ops = 0; } };
const add = (fn) => { fn(batch); ops++; };

for (const coll of COLLS) {
  const collPrefix = `${prefix}/${coll}/`;
  const backupDocs = {};
  for (const p of Object.keys(backup.docs)) {
    if (p.startsWith(collPrefix)) backupDocs[p.slice(collPrefix.length)] = backup.docs[p];
  }
  const snap = await db.collection(`${prefix}/${coll}`).get();
  const cloud = new Map();
  snap.forEach((d) => cloud.set(d.id, d.data()));
  const delIds = new Set((req.deleteIds && req.deleteIds[coll]) || []);

  for (const [id, enc] of Object.entries(backupDocs)) {
    if (delIds.has(id)) continue; // 明示削除対象は書き戻さない
    const want = decode(enc);
    const cur = cloud.get(id);
    if (cur === undefined) {
      add((b) => b.set(db.doc(`${collPrefix}${id}`), want));
      restoredMissing++;
      console.log(`  復元(欠落): ${coll}/${id}`);
    } else if (contentKey(want) !== contentKey(cur)) {
      add((b) => b.set(db.doc(`${collPrefix}${id}`), want));
      restored++;
    } else {
      skippedSame++;
    }
    if (ops >= 400) await flush();
  }
  for (const id of delIds) {
    if (cloud.has(id)) {
      add((b) => b.delete(db.doc(`${collPrefix}${id}`)));
      deleted++;
      console.log(`  削除(明示指定): ${coll}/${id}`);
    }
  }
  await flush();
  console.log(`${coll}: 書戻し${restored + restoredMissing} / 同一スキップ${skippedSame} / 削除${deleted} (累計)`);
}

// メインドキュメント: バックアップを基本に、メンバー系配列だけは現在との和集合を取る
// （事故後に参加/更新されたメンバー情報を失わないため）
const mainEnc = backup.docs[prefix];
if (mainEnc) {
  const want = decode(mainEnc);
  const curSnap = await db.doc(prefix).get();
  const cur = curSnap.exists ? curSnap.data() : {};
  const uniqBy = (arr, key) => {
    const seen = new Set(); const out = [];
    for (const x of arr || []) { const k = key(x); if (k && !seen.has(k)) { seen.add(k); out.push(x); } }
    return out;
  };
  want.memberEmails = uniqBy([...(want.memberEmails || []), ...(cur.memberEmails || [])], (e) => String(e).toLowerCase());
  want.authMembers = uniqBy([...(want.authMembers || []), ...(cur.authMembers || [])], (m) => String(m && m.email || "").toLowerCase());
  want.members = uniqBy([...(want.members || []), ...(cur.members || [])], (m) => m && m.name);
  if (contentKey(want) !== contentKey(cur)) {
    await db.doc(prefix).set(want);
    console.log("メインドキュメント: 書き戻しました(メンバー系は現在との和集合)");
  } else {
    console.log("メインドキュメント: 同一のためスキップ");
  }
}

console.log(`完了: 内容復元 ${restored} / 欠落復元 ${restoredMissing} / 同一 ${skippedSame} / 削除 ${deleted}`);
