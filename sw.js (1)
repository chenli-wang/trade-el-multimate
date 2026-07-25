const CACHE_NAME = "saham-analyzer-v1";
const ASSETS = ["./index.html", "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  // Never cache the live data API calls — those must always hit the network fresh.
  if (e.request.url.indexOf("finance.yahoo.com") !== -1 || e.request.url.indexOf("corsproxy.io") !== -1 ||
      e.request.url.indexOf("allorigins.win") !== -1 || e.request.url.indexOf("codetabs.com") !== -1 ||
      e.request.url.indexOf("antaranews.com") !== -1) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetchPromise = fetch(e.request)
        .then((networkRes) => {
          if (networkRes && networkRes.ok && e.request.url.indexOf(self.location.origin) === 0) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return networkRes;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
