// Hittatsu バックアップ共通処理
//  - Firestore の全コレクションを再帰的に読み書きする
//  - 保存先は Google ドライブ（サービスアカウントで共有フォルダへアクセス）
//
// 必要な環境変数
//   GCP_SA_KEY        … サービスアカウントの JSON（GitHub Secrets に登録）
//   GDRIVE_FOLDER_ID  … 保存先の Google ドライブ フォルダ ID
import admin from "firebase-admin";
import { google } from "googleapis";

export const BACKUP_PREFIX = "hittatsu-backup-";

function serviceAccount() {
  const raw = process.env.GCP_SA_KEY;
  if (!raw) throw new Error("GCP_SA_KEY が設定されていません（GitHub Secrets を確認してください）");
  try {
    return JSON.parse(raw);
  } catch (e) {
    throw new Error("GCP_SA_KEY が JSON として読み取れません: " + e.message);
  }
}

export function initFirestore() {
  const cred = serviceAccount();
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(cred), projectId: cred.project_id });
  }
  return admin.firestore();
}

export function driveClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount(),
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  return google.drive({ version: "v3", auth });
}

export function folderId() {
  const id = process.env.GDRIVE_FOLDER_ID;
  if (!id) throw new Error("GDRIVE_FOLDER_ID が設定されていません（GitHub Secrets を確認してください）");
  return id;
}

// ===== Firestore の値 ⇔ JSON =====
// Timestamp / GeoPoint / DocumentReference / Buffer はそのままでは JSON にできないため、
// 復元時に元の型へ戻せる形（$型名）に包んで保存する。
function encode(v) {
  if (v === null || v === undefined) return null;
  if (v instanceof admin.firestore.Timestamp) return { $ts: v.toDate().toISOString() };
  if (v instanceof admin.firestore.GeoPoint) return { $geo: [v.latitude, v.longitude] };
  if (v instanceof admin.firestore.DocumentReference) return { $ref: v.path };
  if (Buffer.isBuffer(v)) return { $bytes: v.toString("base64") };
  if (Array.isArray(v)) return v.map(encode);
  if (typeof v === "object") {
    const o = {};
    for (const [k, val] of Object.entries(v)) o[k] = encode(val);
    return o;
  }
  return v;
}

function decode(v, db) {
  if (v === null || typeof v !== "object") return v;
  if (Array.isArray(v)) return v.map((x) => decode(x, db));
  if (v.$ts) return admin.firestore.Timestamp.fromDate(new Date(v.$ts));
  if (v.$geo) return new admin.firestore.GeoPoint(v.$geo[0], v.$geo[1]);
  if (v.$ref) return db.doc(v.$ref);
  if (v.$bytes) return Buffer.from(v.$bytes, "base64");
  const o = {};
  for (const [k, val] of Object.entries(v)) o[k] = decode(val, db);
  return o;
}

// ===== 書き出し =====
// ルートから全コレクションをたどる。サブコレクションも再帰的に含めるため、
// 新しいコレクションを追加してもこのコードを直す必要はない。
async function dumpCollection(col, out) {
  const snap = await col.get();
  for (const doc of snap.docs) {
    out[doc.ref.path] = encode(doc.data());
    const subs = await doc.ref.listCollections();
    for (const sub of subs) await dumpCollection(sub, out);
  }
}

export async function exportAll(db) {
  const docs = {};
  const cols = await db.listCollections();
  for (const col of cols) await dumpCollection(col, docs);
  return {
    version: 1,
    project: serviceAccount().project_id,
    // 実行時刻は呼び出し側から渡さず、ここで確定させる（1回の実行で1つの時刻）
    takenAt: new Date().toISOString(),
    docCount: Object.keys(docs).length,
    docs,
  };
}

// ===== 復元 =====
// 既定は「上書き（バックアップ後に増えた項目は残す）」。
// wipe=true のときはバックアップに無い項目を削除し、取得時点の状態に完全に戻す。
export async function importAll(db, backup, { wipe = false } = {}) {
  const paths = Object.keys(backup.docs);
  let written = 0;
  for (let i = 0; i < paths.length; i += 400) {
    const batch = db.batch();
    for (const p of paths.slice(i, i + 400)) {
      batch.set(db.doc(p), decode(backup.docs[p], db));
      written++;
    }
    await batch.commit();
  }

  let deleted = 0;
  if (wipe) {
    const current = {};
    const cols = await db.listCollections();
    for (const col of cols) await dumpCollection(col, current);
    const extra = Object.keys(current).filter((p) => !(p in backup.docs));
    for (let i = 0; i < extra.length; i += 400) {
      const batch = db.batch();
      for (const p of extra.slice(i, i + 400)) {
        batch.delete(db.doc(p));
        deleted++;
      }
      await batch.commit();
    }
  }
  return { written, deleted };
}

// ===== Google ドライブ =====
export async function uploadJson(drive, name, text) {
  const res = await drive.files.create({
    requestBody: { name, parents: [folderId()], mimeType: "application/json" },
    media: { mimeType: "application/json", body: text },
    fields: "id, name, size",
    supportsAllDrives: true,
  });
  return res.data;
}

export async function listBackups(drive) {
  const res = await drive.files.list({
    q: `'${folderId()}' in parents and name contains '${BACKUP_PREFIX}' and trashed = false`,
    orderBy: "name desc",
    fields: "files(id, name, size, createdTime)",
    pageSize: 200,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  return res.data.files || [];
}

export async function downloadJson(drive, fileId) {
  const res = await drive.files.get({ fileId, alt: "media", supportsAllDrives: true }, { responseType: "text" });
  return typeof res.data === "string" ? JSON.parse(res.data) : res.data;
}

export async function deleteFile(drive, fileId) {
  await drive.files.delete({ fileId, supportsAllDrives: true });
}
