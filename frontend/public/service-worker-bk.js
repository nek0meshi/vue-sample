var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
  '/',
  '/articles',
  process.env.VUE_APP_API_BASE_URL,
  process.env.VUE_APP_API_BASE_URL + '/articles',
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