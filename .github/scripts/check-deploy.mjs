// 配信ファイルの検査(GitHub Actions の「配信ファイルの検査」から実行)
// - index.html が読み込む JS/CSS が存在し、JS が文法エラーなく読めるか(画面が真っ白になる事故を防ぐ)
// - JS から読み込む分割ファイル(./xxx-HASH.js)が全部そろっているか
// - project.html の中のスクリプトが文法エラーなく読めるか
// - ビルド番号が version.json / index.html / project.html で一致しているか
import { readFileSync, existsSync, writeFileSync, mkdtempSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";
import vm from "node:vm";

const errors = [];
const read = (p) => readFileSync(p, "utf8");
const tmp = mkdtempSync(join(tmpdir(), "hittatsu-check-"));

// ES モジュールとして文法チェック(実行はしない)
const checkModule = (file) => {
  const copy = join(tmp, file.replace(/[\\/]/g, "_") + ".mjs");
  writeFileSync(copy, read(file));
  try {
    execFileSync(process.execPath, ["--check", copy], { stdio: "pipe" });
  } catch (e) {
    errors.push(`${file}: 文法エラー\n${String(e.stderr || e.message).slice(0, 2000)}`);
  }
};

// 1) index.html が読む JS/CSS と、そこから読まれる分割ファイル
const index = read("index.html");
const refs = [...index.matchAll(/(?:src|href)="\.?\/?(assets\/[^"?#]+)"/g)].map((m) => m[1]);
if (!refs.some((r) => r.endsWith(".js"))) errors.push("index.html: assets/*.js の読み込みが見つかりません");
const seen = new Set();
const queue = [...refs];
while (queue.length) {
  const f = queue.shift();
  if (seen.has(f)) continue;
  seen.add(f);
  if (!existsSync(f)) { errors.push(`${f}: ファイルがありません`); continue; }
  if (!f.endsWith(".js")) continue;
  checkModule(f);
  // import("./App-xxx.js") や from "./xxx.js" などで参照される同じフォルダのファイル
  const src = read(f);
  for (const m of src.matchAll(/["'`]\.\/([\w.-]+\.(?:js|css))["'`]/g)) queue.push(join(dirname(f), m[1]));
}
console.log(`index.html から読まれるファイル ${seen.size} 件を確認しました`);

// 2) project.html の中のスクリプト(src なしの <script>)
const project = read("project.html");
let n = 0;
for (const m of project.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)) {
  if (/type=["'](?!text\/javascript|module)/.test(m[1])) continue; // JSON などは対象外
  n++;
  try {
    if (/type=["']module/.test(m[1])) {
      const f = join(tmp, `project-inline-${n}.mjs`);
      writeFileSync(f, m[2]);
      execFileSync(process.execPath, ["--check", f], { stdio: "pipe" });
    } else new vm.Script(m[2], { filename: `project.html <script> #${n}` });
  } catch (e) {
    errors.push(`project.html の <script> #${n}: 文法エラー\n${String(e.stderr || e.message).slice(0, 2000)}`);
  }
}
console.log(`project.html の中のスクリプト ${n} 件を確認しました`);

// 3) ビルド番号の一致
const v = JSON.parse(read("version.json")).v;
const builds = [
  ...[...index.matchAll(/__HITTATSU_BUILD__ = "(\d+)"/g)].map((m) => ["index.html", m[1]]),
  ...[...project.matchAll(/__HITTATSU_BUILD__ = "(\d+)"/g)].map((m) => ["project.html", m[1]]),
  ...[...project.matchAll(/hittatsu-collab\.js\?v=(\d+)/g)].map((m) => ["project.html(collab)", m[1]]),
];
if (!builds.length) errors.push("ビルド番号(__HITTATSU_BUILD__)が見つかりません");
for (const [where, b] of builds) if (b !== v) errors.push(`${where} のビルド番号 ${b} が version.json の ${v} と違います`);
console.log(`ビルド番号 ${v} を確認しました`);

if (errors.length) {
  console.error("\n検査で問題が見つかりました:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("\n問題はありませんでした");
