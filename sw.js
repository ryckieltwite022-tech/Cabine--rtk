const CACHE_NAME = 'cabine-rtk-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Laisse passer les requêtes réseau normalement (indispensable pour Firebase)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
