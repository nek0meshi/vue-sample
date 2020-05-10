var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
  '/',
  '/articles',
  'http://localhost:9010/',
  'http://localhost:9010/articles',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache)
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        return response || fetch(event.request)
      })
  );
});