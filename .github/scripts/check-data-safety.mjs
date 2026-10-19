// データを消したり上書きしたりする恐れのある変更を見つけ、見つかったら止める。
//   node .github/scripts/check-data-safety.mjs <比較元のコミット>
// 止まった PR は自動では本番に反映しない。Yuta さんが内容を確認して問題なければ、
// PR にラベル「データ変更OK」を付ける(付いていれば合格にする。CI が環境変数 APPROVED=1 で渡す)。
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, appendFileSync } from "node:fs";

const base = process.argv[2];
if (!base) {
  console.error("比較元のコミットを指定してください");
  process.exit(2);
}

// 変更されたら必ず確認するファイル(データの保存・同期・権限の要)
const WATCH_FILES = [
  { re: /^(.*\/)?firestore\.rules$/, why: "データベースの読み書き権限(firestore.rules)の変更" },
  { re: /^(.*\/)?storage\.rules$/, why: "ファイル保管の権限(storage.rules)の変更" },
  { re: /^(.*\/)?firestore\.indexes\.json$/, why: "データベースの索引の変更" },
  { re: /^functions\//, why: "サーバー処理(Cloud Functions)の変更" },
  { re: /^backup\//, why: "バックアップ・復元の仕組みの変更" },
  { re: /^server\//, why: "サーバー側の取込処理の変更" },
  { re: /^src\/collab\/(engine3|sync3|compatStore|compatV3|fields|modules3)\.ts$/, why: "同時編集・同期の仕組みの変更" },
  { re: /^src\/(syncMerge|salesSync3|mirror|masterDedupe|salesConsolidate)\.ts$/, why: "データの同期・統合処理の変更" },
];

// 追加された行にあれば確認する書き方(プログラムのファイルだけを見る)
const CODE = /\.(ts|tsx|js|jsx|mjs|cjs)$/;
// ビルド済み(1行に圧縮された)ファイルは中身を読んでも判断できないので、書き方の検査はしない
const BUILT = /^(assets|vendor)\/|\.bundle\.js$|\.min\.js$/;
const PATTERNS = [
  { re: /\bdeleteDoc\s*\(/, why: "データの削除(deleteDoc)" },
  { re: /\bdeleteField\s*\(/, why: "項目の削除(deleteField)" },
  { re: /\b(batch|b|tx|transaction)\.delete\s*\(/, why: "まとめての削除(batch.delete)" },
  { re: /\.(ref|doc\([^)]*\))\.delete\s*\(/, why: "データの削除(doc.delete)" },
  { re: /\brecursiveDelete\s*\(/, why: "まとめての削除(recursiveDelete)" },
  { re: /["']?_deleted["']?\)?\s*[:,]\s*true/, why: "削除済みの印を付ける処理" },
  { re: /localStorage\.clear\s*\(|indexedDB\.deleteDatabase\s*\(/, why: "端末に保存したデータの消去" },
];
// merge 指定のない丸ごと上書き(前後数行に merge が無いもの)
const OVERWRITE = [/\bsetDoc\s*\(/, /\.doc\([^)]*\)\.set\s*\(/, /\b(batch|b|tx|transaction)\.set\s*\(/];

const git = (...a) => execFileSync("git", a, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
const files = git("diff", "--name-only", "--diff-filter=ACMRD", `${base}...HEAD`).split("\n").filter(Boolean);
const hits = [];

for (const f of files) {
  const w = WATCH_FILES.find((x) => x.re.test(f));
  if (w) hits.push({ where: f, why: w.why });
  if (!CODE.test(f) || BUILT.test(f) || !existsSync(f)) continue;
  const lines = readFileSync(f, "utf8").split("\n");
  // 追加された行の行番号を差分から読む
  const diff = git("diff", "-U0", `${base}...HEAD`, "--", f);
  let n = 0;
  for (const l of diff.split("\n")) {
    const h = l.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/);
    if (h) { n = Number(h[1]); continue; }
    if (l.startsWith("+++")) continue;
    if (!l.startsWith("+")) continue;
    const text = l.slice(1);
    const at = `${f}:${n}`;
    if (!/^\s*(\/\/|\*)/.test(text)) {
      for (const p of PATTERNS) if (p.re.test(text)) hits.push({ where: at, why: p.why, code: text.trim() });
      for (const re of OVERWRITE) {
        const m = re.exec(text);
        if (!m) continue;
        // 呼び出しの括弧が閉じるまで(次の行以降も含めて)の中に merge: true があるかを見る
        const rest = lines.slice(n - 1).join("\n").slice(m.index + m[0].length);
        let depth = 1, i = 0;
        for (; i < rest.length && i < 4000 && depth > 0; i++) depth += rest[i] === "(" ? 1 : rest[i] === ")" ? -1 : 0;
        if (!/merge\s*:\s*true/.test(rest.slice(0, i))) hits.push({ where: at, why: "merge 指定のない丸ごと上書き", code: text.trim() });
      }
    }
    n++;
  }
}

const approved = process.env.APPROVED === "1";
const out = [];
if (!hits.length) {
  out.push("データを消したり上書きしたりする恐れのある変更は見つかりませんでした。");
} else {
  out.push(`確認が必要な変更が ${hits.length} 件あります:`);
  for (const h of hits) out.push(`- ${h.why}  ${h.where}${h.code ? `\n    ${h.code.slice(0, 160)}` : ""}`);
  out.push(
    approved
      ? "\nラベル「データ変更OK」が付いているため、確認済みとして合格にします。"
      : "\nこの PR は自動では本番に反映しません。内容を確認し、問題なければ PR にラベル「データ変更OK」を付けてください。"
  );
}
const text = out.join("\n");
console.log(text);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, "## データ保全の確認\n\n```\n" + text + "\n```\n");
process.exit(hits.length && !approved ? 1 : 0);
