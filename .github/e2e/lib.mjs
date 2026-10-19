// 画面の自動確認で共通に使う部品(dist を配るサーバー、ブラウザ、確認する画面の一覧)
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";


// ---- 確認する画面の一覧 ----
// このリポジトリにはビルド済みのファイルしかないため、index.html が読む本体の JS から
// 画面の対応表({portal:[...],sales:XX.map(...),...})を読み取る。画面を増やしても自動で対象になる。
export function listPages(dir = ".") {
  const index = readFileSync(join(dir, "index.html"), "utf8");
  const entry = /src="\.?\/?(assets\/index-[^"]+\.js)"/.exec(index)?.[1];
  if (!entry) throw new Error("index.html から本体の JS(assets/index-*.js)が見つかりません");
  const js = readFileSync(join(dir, entry), "utf8");
  const table = /\{portal:\[[^}]*\}/.exec(js)?.[0] || "";
  const hashes = [];
  for (const m of table.matchAll(/([a-z]+):(\[[^\]]*\]|[A-Za-z0-9_$]+\.map\([^)]*\))/g)) {
    const [, sec, val] = m;
    let pages = [...val.matchAll(/"([a-z]+)"/g)].map((x) => x[1]);
    if (sec === "sales") {
      const v = val.split(".")[0].replace(/\$/g, "\\$");
      const arr = new RegExp("[,;\\s]" + v + "=\\[([\\s\\S]*?)\\](?=[,;])").exec(js)?.[1] || "";
      pages = [...arr.matchAll(/page:"([a-z]+)"/g)].map((x) => x[1]);
    }
    if (sec === "project") hashes.push("#/project/");
    else pages.forEach((p) => hashes.push(`#/${sec}/${p}`));
  }
  if (hashes.length < 20) throw new Error(`画面の一覧を読み取れませんでした(${hashes.length}件)。本体の JS の作りが変わった可能性があります`);
  return hashes;
}

// ---- dist を配る小さなサーバー ----
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json", ".woff2": "font/woff2" };
export function serve(DIST = "dist") {
  return new Promise((resolve) => {
    const srv = createServer((req, res) => {
      const p = normalize(decodeURIComponent((req.url || "/").split("?")[0])).replace(/^(\.\.[/\\])+/, "");
      const file = join(DIST, p.endsWith("/") ? p + "index.html" : p);
      try {
        const body = readFileSync(file);
        res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end();
      }
    });
    srv.listen(0, "127.0.0.1", () => resolve({ srv, base: `http://127.0.0.1:${srv.address().port}/` }));
  });
}

export function launch() {
  return chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
}
