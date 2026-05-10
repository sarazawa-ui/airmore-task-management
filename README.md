# AirMore Task Management App

株式会社エアモア向けのチームタスク管理アプリです。Googleアカウントでログインし、Firebase Firestoreでリアルタイム同期します。

## 機能

- 📊 ダッシュボード（KPI、メンバー別進捗、プロジェクト進捗）
- 🎯 プロジェクト管理（階層的タスク分解、進捗自動算出）
- 📅 週間カレンダー（Googleカレンダー連携、ドラッグ&ドロップで時刻調整）
- 📄 メンバー別週報（KPT振り返り、印刷/PDF出力）
- ✉️ タスク完了通知メール、開始10分前リマインドメール
- ☁️ Firebase Firestoreでリアルタイム同期

## アクセス方法

公開URL: https://[your-github-username].github.io/airmore-task/

ワークスペースに参加するには、オーナーから招待URLを受け取ってアクセスしてください。

## オーナー初期設定

1. Firebase Console (https://console.firebase.google.com/) でプロジェクトを作成
2. Firestore Database を有効化（ロケーション：asia-northeast1）
3. Authentication → Google ログインを有効化
4. Authorized domains に `[your-github-username].github.io` を追加
5. Firestore セキュリティルールを設定（下記）
6. Google Cloud Console で以下のAPIを有効化:
   - Google Calendar API
   - Gmail API
7. アプリにアクセス → 右上 ⚙ → クラウド同期 → Firebase Config を貼り付け → ログイン

### Firestore セキュリティルール

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /workspaces/{wsId} {
      allow read, write: if request.auth != null
        && request.auth.token.email in resource.data.memberEmails;
      allow create: if request.auth != null
        && request.auth.token.email == request.resource.data.ownerEmail;
    }
  }
}
```

## メンバー招待

オーナーが「⚙設定 → クラウド同期 → 招待URLをコピー」してチームに共有。
受信者は URL を開いて Googleログインするだけで自動参加します。

## 技術スタック

- 純粋なHTML/CSS/JavaScript（フレームワークレス）
- Firebase Authentication（Googleログイン）
- Cloud Firestore（リアルタイム同期）
- Google Calendar API（予定取得）
- Gmail API（通知メール送信）
- ホスティング: GitHub Pages
