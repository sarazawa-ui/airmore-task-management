// 各種マスタを各社別に戻す(一回きりの作業)。内容は split-masters-lib.js
//   node split-masters.js                       … 確認だけ(件数を出す。何も書かない)
//   node split-masters.js --confirm 各社別に写す … 写して、各社別の印を付ける(先にバックアップを取ること)
import admin from "firebase-admin";
import { initFirestore } from "./lib.js";
import { splitMasters } from "./split-masters-lib.js";
const i = process.argv.indexOf("--confirm");
const write = i >= 0 && process.argv[i + 1] === "各社別に写す";
const db = initFirestore();
await splitMasters(db, { write, serverTs: () => admin.firestore.FieldValue.serverTimestamp() });
