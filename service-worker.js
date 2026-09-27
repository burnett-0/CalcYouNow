var CACHE_NAME = "calcyounow-v2";
var APP_SHELL = ["./", "./index.html", "./manifest.json", "./logo-mark.png", "./favicon.png",
  "./icon-192.png", "./icon-512.png", "./icon-192-maskable.png", "./icon-512-maskable.png"];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(function (cache) { return cache.addAll(APP_SHELL); })
    .then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).then(function (response) {
    if (response && response.status === 200 && response.type === "basic") {
      var copy = response.clone();
      caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
    }
    return response;
  }).catch(function () {
    return caches.match(event.request).then(function (cached) {
      return cached || (event.request.mode === "navigate" ? caches.match("./index.html") : undefined);
    });
  }));
});
