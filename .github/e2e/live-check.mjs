// 反映後の確認: 公開中の Hittatsu を実際に開き、画面が真っ白になっていないか・エラーが出ていないかを確かめる。
//   node .github/e2e/live-check.mjs <公開URL>
// 本番ではログインが必要なため、ログイン前に表示される画面(index.html と project.html)までを確かめる。
// 中の全画面は、反映前に同じファイルで確認済み(smoke.mjs)。
import { launch } from "./lib.mjs";

const IGNORE = [/Failed to load resource/i, /net::ERR_/i, /googleapis|gstatic|google\.com|firebase/i, /favicon/i];
const site = (process.argv[2] || "").replace(/\/?$/, "/");
if (!/^https?:\/\//.test(site)) {
  console.error("使い方: node .github/e2e/live-check.mjs <公開URL>");
  process.exit(2);
}

const browser = await launch();
let bad = 0;
try {
  for (const name of ["index.html", "project.html"]) {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
    const errors = [];
    page.on("pageerror", (e) => errors.push("画面の処理でエラー: " + (e.message || String(e)).split("\n")[0]));
    page.on("console", (m) => {
      if (m.type() === "error" && !IGNORE.some((re) => re.test(m.text()))) errors.push("エラー表示: " + m.text().split("\n")[0]);
    });
    try {
      // 古い版が残らないよう、毎回ちがう問い合わせ文字列を付けて開く
      const res = await page.goto(site + name + "?check=" + Date.now(), { waitUntil: "load", timeout: 60000 });
      if (!res || res.status() >= 400) errors.push(`開けませんでした(応答 ${res ? res.status() : "なし"})`);
      await page.waitForTimeout(4000);
      const text = (await page.locator("body").innerText()).trim();
      if (text.length < 10) errors.push("画面が真っ白です(文字がほとんど表示されていません)");
    } catch (e) {
      errors.push("開けませんでした: " + (e.message || String(e)).split("\n")[0]);
    }
    console.log(`${errors.length ? "NG" : "OK"}  ${name}${errors.length ? "\n      " + errors.slice(0, 3).join("\n      ") : ""}`);
    if (errors.length) bad++;
    await page.close();
  }
} finally {
  await browser.close();
}
process.exit(bad ? 1 : 0);
