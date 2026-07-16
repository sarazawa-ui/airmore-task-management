// バックアップから復元する（GitHub Actions の「Hittatsu 復元」から手動実行）
//   node restore.js --list                     … バックアップの一覧を表示
//   node restore.js --file <名前> --dry-run    … 何が変わるかだけ表示（既定・書き込まない）
//   node restore.js --file <名前> --confirm 復元する          … 上書き復元
//   node restore.js --file <名前> --confirm 復元する --wipe   … 取得時点に完全に戻す
import { downloadJson, driveClient, exportAll, importAll, initFirestore, listBackups } from "./lib.js";

const args = process.argv.slice(2);
const has = (k) => args.includes(k);
const val = (k) => {
  const i = args.indexOf(k);
  return i >= 0 ? args[i + 1] : undefined;
};

const drive = driveClient();
const files = await listBackups(drive);

if (has("--list") || !val("--file")) {
  console.log(`バックアップ ${files.length} 件（新しい順）:`);
  files.slice(0, 40).forEach((f) => console.log(`  ${f.name}\t${Math.round(f.size / 1024)} KB\t${f.createdTime}`));
  if (!val("--file")) console.log("\n復元するには --file <名前> を指定してください。");
  process.exit(0);
}

const want = val("--file");
const file = files.find((f) => f.name === want) || files.find((f) => f.name.includes(want));
if (!file) {
  console.error(`「${want}」に一致するバックアップが見つかりません。--list で確認してください。`);
  process.exit(1);
}

console.log(`読み込み中: ${file.name}`);
const backup = await downloadJson(drive, file.id);
if (!backup?.docs || !backup.docCount) {
  console.error("このファイルはバックアップとして読み取れません（中身が空か形式違い）。");
  process.exit(1);
}
console.log(`取得日時: ${backup.takenAt} / ドキュメント ${backup.docCount} 件`);

// 復元は元に戻せないため、何が起きるかを必ず先に表示する
const db = initFirestore();
const current = await exportAll(db);
const paths = Object.keys(backup.docs);
const now = new Set(Object.keys(current.docs));
const added = paths.filter((p) => !now.has(p));
const changed = paths.filter((p) => now.has(p) && JSON.stringify(current.docs[p]) !== JSON.stringify(backup.docs[p]));
const extra = Object.keys(current.docs).filter((p) => !(p in backup.docs));

console.log("\n===== 復元の内容 =====");
console.log(`  現在のドキュメント : ${current.docCount} 件`);
console.log(`  復元で戻る         : ${added.length} 件（今は存在しない）`);
console.log(`  復元で上書き       : ${changed.length} 件（内容が違う）`);
console.log(`  バックアップに無い : ${extra.length} 件` + (has("--wipe") ? " → --wipe のため削除します" : " → そのまま残します"));
if (extra.length && has("--wipe")) extra.slice(0, 10).forEach((p) => console.log(`      削除: ${p}`));

if (!has("--confirm") || val("--confirm") !== "復元する") {
  console.log("\n実行していません（確認のみ）。実際に復元するには --confirm 復元する を付けてください。");
  process.exit(0);
}

console.log("\n復元しています…");
const res = await importAll(db, backup, { wipe: has("--wipe") });
console.log(`完了: ${res.written} 件を書き込み、${res.deleted} 件を削除しました。`);
