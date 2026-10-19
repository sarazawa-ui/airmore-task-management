// Google Chat の「Hittatsuお知らせ」スペースへ知らせる。
//   node .github/e2e/notify.mjs "<本文>"
// 送り先の URL は GitHub の秘密の設定 GOOGLE_CHAT_WEBHOOK に入れる(このリポジトリは公開のため、ファイルには書かない)。
// 未設定のときは何もせずに終わる(知らせが届かないだけで、ほかの処理は止めない)。
const url = process.env.GOOGLE_CHAT_WEBHOOK;
const text = process.argv[2] || "";
if (!url) {
  console.log("GOOGLE_CHAT_WEBHOOK が未設定のため、スペースへの知らせは送りませんでした。\n" + text);
  process.exit(0);
}
const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json; charset=UTF-8" }, body: JSON.stringify({ text }) });
console.log(res.ok ? "スペースへ知らせました。" : `スペースへの知らせに失敗しました(応答 ${res.status})`);
