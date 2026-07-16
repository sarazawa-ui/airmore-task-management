# Hittatsu バックアップ / 復元

全 Firestore データ（プロジェクト・商談・予算・マスタ・ユーザー設定）を **平日 23:59（日本時間）** に
**Google ドライブ**へ自動バックアップします。GitHub のサーバーで動くため、PC の電源やブラウザには依存しません。

> **バックアップを Git（このリポジトリ）に保存していない理由**
> このリポジトリは GitHub Pages で配信するため **公開**されています。ここにデータを置くと、
> 得意先・案件・金額・メールアドレスが全世界から閲覧でき、Git 履歴に残るため後から取り消せません。
> そのため非公開の Google ドライブへ保存します。

| | |
|---|---|
| 実行タイミング | 平日 23:59 JST（cron `59 14 * * 1-5` = UTC） |
| 保存先 | Google ドライブの指定フォルダ |
| ファイル名 | `hittatsu-backup-YYYYMMDD-HHMM.json` |
| 保持期間 | 90 日（`backup.yml` の `KEEP_DAYS`）。直近 1 件は必ず残します |

---

## セットアップ（初回のみ）

### 1. サービスアカウントを作る

1. [Google Cloud コンソール → サービスアカウント](https://console.cloud.google.com/iam-admin/serviceaccounts?project=airmore-task-management-app)
2. 「サービスアカウントを作成」→ 名前は `hittatsu-backup` など
3. ロールに **「Cloud Datastore ユーザー」**（Firestore の読み書き）を付与
4. 作成後、そのアカウントの「キー」タブ → 「鍵を追加」→ **JSON** → ダウンロード
5. **表示されるメールアドレス**（`hittatsu-backup@....iam.gserviceaccount.com`）を控える

> ダウンロードした JSON は誰でもデータを読める鍵です。リポジトリには絶対に置かないでください
> （`.gitignore` で除外済みですが、GitHub Secrets に登録したらファイルは削除してください）。

### 2. Google ドライブに保存先フォルダを作る

1. Google ドライブでフォルダを作る（例: `Hittatsu バックアップ`）
2. そのフォルダを **手順 1 で控えたサービスアカウントのメールアドレス**に「編集者」で共有
3. フォルダを開き、URL の末尾がフォルダ ID
   `https://drive.google.com/drive/folders/`**`1AbCdEf...`** ← この部分

### 3. GitHub に登録する

リポジトリ → Settings → Secrets and variables → Actions → 「New repository secret」

| 名前 | 中身 |
|---|---|
| `GCP_SA_KEY` | ダウンロードした JSON の**中身をすべて**貼り付け |
| `GDRIVE_FOLDER_ID` | 手順 2 のフォルダ ID |

### 4. 動作確認

Actions → 「Hittatsu バックアップ」→ 「Run workflow」で手動実行し、
ドライブにファイルができることを確認してください。以後は平日 23:59 に自動実行されます。

---

## 復元する

Actions → **「Hittatsu 復元」** → 「Run workflow」

1. **まず確認だけ**する（`confirm` は空のまま）
   - `file` に戻したいバックアップ名を入れて実行すると、**何件が戻り・上書きされるか**だけを表示します。この時点では一切書き込みません
   - `file` も空なら、バックアップの一覧が表示されます
2. 内容に納得したら `confirm` に **`復元する`** と入力して再実行

| 入力 | 意味 |
|---|---|
| `file` | 復元するバックアップ名（例 `hittatsu-backup-20260715-2359.json`） |
| `confirm` | `復元する` と入力したときだけ実際に書き込みます |
| `wipe` | ON にすると、**バックアップ取得後に追加されたデータも削除**して取得時点に完全に戻します |

**`wipe` の扱いに注意してください。** 既定（OFF）は「バックアップの内容で上書きし、その後に増えたデータは残す」
安全側の動作です。ON にすると取得時点以降の入力が消えます。消える件数は確認時に表示されます。

復元は運用中のデータを書き換えます。実行前に手動バックアップを取っておくことをおすすめします。

---

## 手元で実行する

```bash
cd backup
npm install
export GCP_SA_KEY="$(cat ~/hittatsu-backup-key.json)"
export GDRIVE_FOLDER_ID="1AbCdEf..."

node backup.js                                      # バックアップ
node restore.js --list                              # 一覧
node restore.js --file hittatsu-backup-20260715-2359.json              # 確認のみ
node restore.js --file hittatsu-backup-20260715-2359.json --confirm 復元する   # 復元
```

## バックアップの中身

Firestore のルートから全コレクションを再帰的に取得するため、**新しいコレクションを足しても
このコードを直す必要はありません**（プロジェクト・商談・予算・マスタ・設定すべてを含みます）。

```json
{
  "version": 1,
  "takenAt": "2026-07-15T14:59:03.000Z",
  "docCount": 1234,
  "docs": { "salesWs/エアモア/deals/csv-abc": { "title": "…" } }
}
```

日時などの型は `{"$ts": "..."}` の形で保存し、復元時に元の型へ戻します。

読み出せたドキュメントが 0 件のときは異常とみなして中止します（空の内容で上書きし続けて、
正常なバックアップが保持期間切れで消えるのを防ぐため）。
