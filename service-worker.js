const CACHE_NAME = "buszy-cache-v1";
const urlsToCache = [
  "/buszy.html",
  "/css/style.css",
  "/css/style-breakpoints.css",
  "/css/dark-mode.css",
  "/js/navtabs.js",
  "/buszy/buszy.js",
  "/img/core-img/favicon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});