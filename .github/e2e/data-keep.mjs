// データ保全のテスト: 「今の本番の版」で保存されたデータを「新しい版」で開いても、
// 1件も消えないことを確かめる。
//   node .github/e2e/data-keep.mjs save   <今の版のフォルダ> <保存先.json>   … 今の版で全画面を開き、端末内のデータを書き出す
//   node .github/e2e/data-keep.mjs verify <新しい版のフォルダ> <保存先.json> … そのデータを入れて新しい版で全画面を開き、消えた記録がないか調べる
// localhost で開くとクラウドにはつながず端末内(localStorage)の見本データで動くため、本番のデータには触れない。
// 記録は「id を持つもの」を数える(得意先・案件・稟議・日報など、画面で作るものはすべて id を持つ)。
import { readFileSync, writeFileSync } from "node:fs";
import { launch, listPages, serve } from "./lib.mjs";

const [mode, dist, file] = process.argv.slice(2);
if (!["save", "verify"].includes(mode) || !dist || !file) {
  console.error("使い方: node .github/e2e/data-keep.mjs save|verify <dist> <file.json>");
  process.exit(2);
}

// 端末内のデータから「どの保存領域に・どの id の記録があるか」を集める
function collectIds(store) {
  const ids = new Set();
  const walk = (key, v, depth) => {
    if (depth > 12 || v === null || typeof v !== "object") return;
    if (Array.isArray(v)) return v.forEach((x) => walk(key, x, depth + 1));
    if (typeof v.id === "string" && v.id && !v._deleted) ids.add(`${key} / ${v.id}`);
    for (const x of Object.values(v)) walk(key, x, depth + 1);
  };
  for (const [k, raw] of Object.entries(store)) {
    try {
      walk(k, JSON.parse(raw), 0);
    } catch {}
  }
  return ids;
}

// 利用者が入力したような記録(得意先・商品・案件・商談記録・見積・稟議)を端末のデータに足す。ブラウザの中で動く。
function addSampleRecords() {
  const now = new Date().toISOString();
  const day = now.slice(0, 10);
  const month = now.slice(0, 7);
  const salesKeys = Object.keys(localStorage).filter((k) => k === "hittatsu_sales_v1" || k.startsWith("hittatsu_sales_v1::comp::"));
  if (!salesKeys.length) salesKeys.push("hittatsu_sales_v1");
  for (const k of salesKeys) {
    let d;
    try {
      d = JSON.parse(localStorage.getItem(k) || "null");
    } catch {}
    if (!d || typeof d !== "object") continue;
    const push = (name, rec) => (Array.isArray(d[name]) ? d[name] : (d[name] = [])).push(rec);
    push("members", { id: "kt_m1", name: "保全 太郎", email: "keeptest@example.com", color: "#1f3a5f" });
    push("customers", { id: "kt_c1", code: "KT001", name: "保全テスト工業株式会社" });
    push("products", { id: "kt_p1", code: "KT-P1", name: "保全テスト商品", listPrice: 10000, price: 8000 });
    push("deals", {
      id: "kt_d1", title: "保全テスト案件", customerId: "kt_c1", customerCode: "KT001", memberId: "kt_m1",
      stage: "B", expectedMonth: month, amount: 80000, nas: [], attachments: [], createdAt: now,
      items: [{ id: "kt_di1", productId: "kt_p1", name: "保全テスト商品", qty: 10, price: 8000 }],
    });
    push("activities", { id: "kt_a1", dealId: "kt_d1", customerId: "kt_c1", memberId: "kt_m1", date: day, type: "visit", summary: "保全テストの商談記録" });
    push("quotes", {
      id: "kt_q1", number: "KT-0001", dealId: "kt_d1", issueDate: day, customerName: "保全テスト工業株式会社",
      lines: [{ id: "kt_ql1", name: "保全テスト商品", qty: 10, unit: "個", price: 8000 }],
      validityText: "発行日より30日", paymentText: "別途打ち合わせ", note: "", createdAt: now,
    });
    localStorage.setItem(k, JSON.stringify(d));
  }
  let r;
  try {
    r = JSON.parse(localStorage.getItem("hittatsu_ringi_v1") || "null");
  } catch {}
  if (r && Array.isArray(r.ringis)) {
    r.ringis.push({
      id: "kt_r1", no: "KT-R1", type: (r.routes && r.routes[0] && r.routes[0].type) || "general", title: "保全テスト稟議", body: "保全テスト",
      fields: {}, attachments: [], applicantId: "kt_m1", dept: "営業", status: "draft", stageIndex: 0, stages: [], comments: [], history: [],
      createdAt: now, updatedAt: now,
    });
    localStorage.setItem("hittatsu_ringi_v1", JSON.stringify(r));
  }
}

const { srv, base } = await serve(dist);
const browser = await launch();
let code = 0;
try {
  const ctx = await browser.newContext();
  if (mode === "verify") {
    const saved = JSON.parse(readFileSync(file, "utf8"));
    // ページを開く前に、今の版が保存したデータを端末に入れておく
    await ctx.addInitScript((data) => {
      if (sessionStorage.getItem("__seeded")) return;
      localStorage.clear();
      for (const [k, v] of Object.entries(data)) localStorage.setItem(k, v);
      sessionStorage.setItem("__seeded", "1");
    }, saved);
  }
  const page = await ctx.newPage();
  if (mode === "save") {
    // 見本データは得意先・案件・稟議などが空のため、そのままでは「消えた」に気づけない。
    // 一度開いて端末に保存領域を作らせてから、利用者が入力したような記録を足して読み込み直す。
    await page.goto(base + "index.html", { waitUntil: "load", timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(1500);
    await page.evaluate(addSampleRecords);
    await page.reload({ waitUntil: "load" }).catch(() => {});
    await page.waitForTimeout(1500);
  }
  for (const h of listPages(dist)) {
    await page.goto(base + "index.html" + h, { waitUntil: "load", timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(800);
  }
  await page.goto(base + "project.html", { waitUntil: "load", timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(800);
  const store = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).filter((k) => k !== "__seeded").map((k) => [k, localStorage.getItem(k)])));

  if (mode === "save") {
    // 見本データは消えても読み込み直しで同じ id のまま作り直されるため、それだけでは「消えた」に気づけない。
    // そこで、記録の一覧ごとに「利用者が追加した記録」に見立てた複製を1件ずつ足しておく(id は見本に無いもの)。
    let added = 0;
    const addCopies = (v, depth) => {
      if (depth > 12 || v === null || typeof v !== "object") return;
      if (Array.isArray(v)) {
        const first = v.find((x) => x && typeof x === "object" && !Array.isArray(x) && typeof x.id === "string" && !x._deleted);
        v.forEach((x) => addCopies(x, depth + 1));
        if (first) {
          const c = JSON.parse(JSON.stringify(first));
          c.id = `keeptest${added++}x${first.id}`;
          // コードや番号が同じだと重複として1件にまとめられるので、目印を付けて別物にする
          for (const k of ["code", "no", "number", "name", "title"]) if (typeof c[k] === "string") c[k] += "(保全テスト)";
          v.push(c);
        }
        return;
      }
      Object.values(v).forEach((x) => addCopies(x, depth + 1));
    };
    for (const k of Object.keys(store)) {
      try {
        const v = JSON.parse(store[k]);
        addCopies(v, 0);
        store[k] = JSON.stringify(v);
      } catch {}
    }
    writeFileSync(file, JSON.stringify(store));
    console.log(`今の版のデータを書き出しました(保存領域 ${Object.keys(store).length} 個・記録 ${collectIds(store).size} 件、うち追加した記録 ${added} 件)`);
  } else {
    const before = collectIds(JSON.parse(readFileSync(file, "utf8")));
    const after = collectIds(store);
    const lost = [...before].filter((x) => !after.has(x));
    console.log(`記録 ${before.size} 件のうち、新しい版で開いたあとに残っていたもの: ${before.size - lost.length} 件`);
    if (lost.length) {
      console.log(`\n消えた記録が ${lost.length} 件あります(保存領域 / id):`);
      lost.slice(0, 30).forEach((x) => console.log("  - " + x));
      code = 1;
    } else if (before.size < 10) {
      console.log("調べられた記録が少なすぎます。見本データの作り方が変わった可能性があります");
      code = 1;
    } else {
      console.log("消えた記録はありませんでした。");
    }
  }
} finally {
  await browser.close();
  srv.close();
}
process.exit(code);
