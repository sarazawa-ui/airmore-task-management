// 商談管理の特定ワークスペース(会社)だけを、ローカルのバックアップJSONから復元する。
// 事故で消えた salesWs/<会社> を戻すための限定的な復元ツール。
// 他のコレクション(workspaces=プロジェクト管理, globalBudget=予算 など)には一切触らない。
//
//   node restore-sales.js --json <バックアップのパス> --ws エアモア              … 確認のみ(既定)
//   node restore-sales.js --json <パス> --ws エアモア --confirm 復元する         … 実際に復元
//   node restore-sales.js --json <パス> --ws エアモア --confirm 復元する --wipe  … バックアップ後に増えた項目も削除
//
// 環境変数: GCP_SA_KEY(サービスアカウントJSON) / 省略時は GOOGLE_APPLICATION_CREDENTIALS
import fs from "node:fs";
import admin from "firebase-admin";

const args = process.argv.slice(2);
const has = (k) => args.includes(k);
const val = (k) => {
  const i = args.indexOf(k);
  return i >= 0 ? args[i + 1] : undefined;
};

const jsonPath = val("--json");
const ws = val("--ws");
if (!jsonPath || !ws) {
  console.error("使い方: node restore-sales.js --json <バックアップ.json> --ws <会社名> [--confirm 復元する] [--wipe]");
  process.exit(1);
}

// ===== Firestore 初期化 =====
function initDb() {
  const raw = process.env.GCP_SA_KEY;
  if (raw) {
    const cred = JSON.parse(raw);
    admin.initializeApp({ credential: admin.credential.cert(cred), projectId: cred.project_id });
  } else {
    // GOOGLE_APPLICATION_CREDENTIALS か gcloud のデフォルト認証を使う
    admin.initializeApp({ projectId: process.env.GCP_PROJECT || "airmore-task-management-app" });
  }
  return admin.firestore();
}

// バックアップのエンコード形式($ts など)を Firestore の値へ戻す
function decode(v, db) {
  if (v === null || typeof v !== "object") return v;
  if (Array.isArray(v)) return v.map((x) => decode(x, db));
  if (v.$ts) return admin.firestore.Timestamp.fromDate(new Date(v.$ts));
  if (v.$geo) return new admin.firestore.GeoPoint(v.$geo[0], v.$geo[1]);
  if (v.$ref) return db.doc(v.$ref);
  if (v.$bytes) return Buffer.from(v.$bytes, "base64");
  const o = {};
  for (const [k, val2] of Object.entries(v)) o[k] = decode(val2, db);
  return o;
}

const backup = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
if (!backup?.docs) {
  console.error("バックアップとして読み取れません(docsがありません)。");
  process.exit(1);
}

const prefix = `salesWs/${ws}`;
const targets = Object.keys(backup.docs).filter((p) => p === prefix || p.startsWith(prefix + "/"));
if (!targets.length) {
  console.error(`バックアップに「${prefix}」が含まれていません。`);
  const wsList = [...new Set(Object.keys(backup.docs).filter((p) => p.startsWith("salesWs/")).map((p) => p.split("/")[1]))];
  console.error("含まれる会社:", wsList.join(", "));
  process.exit(1);
}

// 種類別の件数を表示
const kinds = {};
targets.forEach((p) => {
  const seg = p.split("/");
  const k = seg.length === 2 ? "(親ドキュメント)" : seg[2];
  kinds[k] = (kinds[k] || 0) + 1;
});

console.log(`バックアップ: ${jsonPath}`);
console.log(`取得日時: ${backup.takenAt}`);
console.log(`復元対象: ${prefix} … ${targets.length}件`);
console.log("  内訳:", JSON.stringify(kinds, null, 0));

const db = initDb();

// 現在のFirestoreの状態(この会社の分だけ)を調べる
async function currentPaths() {
  const out = new Set();
  const rootSnap = await db.doc(prefix).get();
  if (rootSnap.exists) out.add(prefix);
  const subs = await db.doc(prefix).listCollections();
  for (const col of subs) {
    const snap = await col.get();
    snap.docs.forEach((d) => out.add(d.ref.path));
  }
  return out;
}

const now = await currentPaths();
const added = targets.filter((p) => !now.has(p));
const overwritten = targets.filter((p) => now.has(p));
const extra = [...now].filter((p) => !targets.includes(p));

console.log("\n===== 復元の内容 =====");
console.log(`  現在クラウドにある : ${now.size}件`);
console.log(`  復元で戻る(新規)   : ${added.length}件`);
console.log(`  復元で上書き       : ${overwritten.length}件`);
console.log(`  バックアップに無い : ${extra.length}件` + (has("--wipe") ? " → --wipe のため削除します" : " → そのまま残します"));

if (!has("--confirm") || val("--confirm") !== "復元する") {
  console.log("\n実行していません(確認のみ)。実際に復元するには --confirm 復元する を付けてください。");
  process.exit(0);
}

console.log("\n復元しています…");
let written = 0;
for (let i = 0; i < targets.length; i += 400) {
  const batch = db.batch();
  for (const p of targets.slice(i, i + 400)) {
    batch.set(db.doc(p), decode(backup.docs[p], db));
    written++;
  }
  await batch.commit();
  console.log(`  ${Math.min(i + 400, targets.length)}/${targets.length}`);
}

let deleted = 0;
if (has("--wipe")) {
  for (let i = 0; i < extra.length; i += 400) {
    const batch = db.batch();
    for (const p of extra.slice(i, i + 400)) {
      batch.delete(db.doc(p));
      deleted++;
    }
    await batch.commit();
  }
}

console.log(`\n完了: ${written}件を書き込み、${deleted}件を削除しました。`);
console.log("ブラウザのHittatsuを再読み込みすると反映されます。");
