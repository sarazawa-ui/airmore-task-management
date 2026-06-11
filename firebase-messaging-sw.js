// Hittatsu Service Worker
// FCM バックグラウンド通知 + PWA インストール対応

importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB8QE3JylXkXWmg_rF2ZuczixnRYJZlRnE",
  authDomain: "airmore-task-management-app.firebaseapp.com",
  projectId: "airmore-task-management-app",
  storageBucket: "airmore-task-management-app.firebasestorage.app",
  messagingSenderId: "674161520247",
  appId: "1:674161520247:web:fe0e0f9d0656008fbaa072",
  measurementId: "G-VFS9X3L72E"
};

firebase.initializeApp(FIREBASE_CONFIG);
const messaging = firebase.messaging();

// アプリのベースパス（GitHub Pages のサブパス）
const APP_BASE = '/airmore-task-management/';
const ICON_192 = APP_BASE + 'icons/icon-192.png';

// バックグラウンドでの push 受信（アプリが閉じている時）
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] background message:', payload);
  const data = payload.data || {};
  const notification = payload.notification || {};
  const title = notification.title || data.title || '⏰ Hittatsu リマインド';
  const options = {
    body: notification.body || data.body || 'タスクの開始時刻が近づいています',
    icon: ICON_192,
    badge: ICON_192,
    tag: data.tag || 'hittatsu-reminder',
    requireInteraction: false,
    data: data
  };
  return self.registration.showNotification(title, options);
});

// 通知クリック → アプリを開く / 既存タブにフォーカス
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || APP_BASE;
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(APP_BASE) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

// PWA install/activate（即座にアクティブ化）
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
