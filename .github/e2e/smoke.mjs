// 画面の自動確認: ビルドした Hittatsu をブラウザで開き、すべての画面を順に表示して
// 「画面が真っ白になる」「エラーが出る」ものがないかを確かめる。
//   node .github/e2e/smoke.mjs [確認するフォルダ(省略時はこのリポジトリの直下)]
// localhost で開くと Hittatsu はクラウドにつながず、端末内の見本データで動く(src/budget/firebase.js の isCloudOn)。
// そのため本番のデータには一切触れない。
import { launch, listPages, serve } from "./lib.mjs";

// 本番でも出る、確認の対象外にする知らせ(外部サービスに届かないことによるもの)
const IGNORE = [/Failed to load resource/i, /net::ERR_/i, /googleapis|gstatic|google\.com|firebase/i, /favicon/i];

const dir = process.argv[2] || ".";
const { srv, base } = await serve(dir);
const browser = await launch();
const results = [];
try {
  const targets = [...listPages(dir).map((h) => ({ name: h, url: base + "index.html" + h })), { name: "project.html", url: base + "project.html" }];
  for (const t of targets) {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
    const errors = [];
    page.on("pageerror", (e) => errors.push("画面の処理でエラー: " + (e.message || String(e)).split("\n")[0]));
    page.on("console", (m) => {
      if (m.type() === "error" && !IGNORE.some((re) => re.test(m.text()))) errors.push("エラー表示: " + m.text().split("\n")[0]);
    });
    try {
      await page.goto(t.url, { waitUntil: "load", timeout: 30000 });
      await page.waitForTimeout(1500);
      const text = (await page.locator("body").innerText()).trim();
      if (text.length < 20) errors.push("画面が真っ白です(文字がほとんど表示されていません)");
    } catch (e) {
      errors.push("開けませんでした: " + (e.message || String(e)).split("\n")[0]);
    }
    results.push({ name: t.name, errors });
    console.log(`${errors.length ? "NG" : "OK"}  ${t.name}${errors.length ? "\n      " + errors.slice(0, 3).join("\n      ") : ""}`);
    await page.close();
  }
} finally {
  await browser.close();
  srv.close();
}
const bad = results.filter((r) => r.errors.length);
console.log(`\n${results.length - bad.length} / ${results.length} 画面が問題なく表示されました`);
process.exit(bad.length ? 1 : 0);
