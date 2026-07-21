// 全データを Google ドライブへバックアップする（平日 23:59 に GitHub Actions から実行）
//   node backup.js
// 環境変数: GCP_SA_KEY / GDRIVE_FOLDER_ID / KEEP_DAYS（既定 90 日）
import { BACKUP_PREFIX, deleteFile, driveClient, exportAll, initFirestore, listBackups, uploadJson } from "./lib.js";

const KEEP_DAYS = Number(process.env.KEEP_DAYS || 90);

// ファイル名に使う JST の日時（GitHub Actions は UTC で動くため明示的に変換する）
function jstStamp() {
  const jst = new Date(Date.now() + 9 * 60 * 60 * 1000);
  const p = (n) => String(n).padStart(2, "0");
  return (
    `${jst.getUTCFullYear()}${p(jst.getUTCMonth() + 1)}${p(jst.getUTCDate())}` +
    `-${p(jst.getUTCHours())}${p(jst.getUTCMinutes())}`
  );
}

// どの段階で失敗したかログに残す（失敗時に原因を切り分けやすくするため）
const t0 = Date.now();
const secs = () => ((Date.now() - t0) / 1000).toFixed(0);

try {
  const db = initFirestore();
  const drive = driveClient();

  console.log("[1/3] Firestore を読み出しています…");
  const backup = await exportAll(db, (m) => console.log(m));
  const text = JSON.stringify(backup);
  console.log(`  → ドキュメント ${backup.docCount} 件 / ${(text.length / 1024 / 1024).toFixed(2)} MB（${secs()}秒）`);

  if (backup.docCount === 0) {
    // 空の内容で上書きし続けると、古い正常なバックアップが保持期間を過ぎて消えてしまう
    console.error("中止: 読み出せたドキュメントが 0 件です。サービスアカウントのロール（Cloud Datastore ユーザー）を確認してください。");
    process.exit(1);
  }

  console.log("[2/3] Google ドライブへ保存しています…");
  const name = `${BACKUP_PREFIX}${jstStamp()}.json`;
  const file = await uploadJson(drive, name, text);
  console.log(`  → 保存しました: ${file.name}（${Math.round((file.size || text.length) / 1024)} KB、${secs()}秒）`);

  console.log("[3/3] 古いバックアップを整理しています…");
  // 保持期間を過ぎたものを削除する（直近 1 件は保持期間に関わらず必ず残す）
  const files = await listBackups(drive);
  const limit = Date.now() - KEEP_DAYS * 24 * 60 * 60 * 1000;
  const old = files.slice(1).filter((f) => new Date(f.createdTime).getTime() < limit);
  for (const f of old) {
    await deleteFile(drive, f.id);
    console.log(`  保持期間(${KEEP_DAYS}日)を過ぎたため削除: ${f.name}`);
  }
  console.log(`完了。バックアップ ${files.length - old.length} 件を保持しています。（合計 ${secs()}秒）`);
} catch (e) {
  // 原因が一目で分かるようにメッセージを目立たせて出す
  console.error("\n====== バックアップに失敗しました ======");
  console.error(e?.message || e);
  console.error("=======================================");
  if (e?.stack) console.error(e.stack);
  process.exit(1);
}
