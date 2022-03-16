const staticCacheName = "site-static-v3";//cache versioning...
const assets = [
  "/",
  "/index.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/js/app.js",
  "/js/ui.js",
  "/js/materialize.min.js",
  "/css/styles.css",
  "/css/materialize.min.css",
  "/img/dish.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
  "https://unpkg.com/pwacompat",
];
//self refers to servive worker itself
//add install event
//listen to install event
self.addEventListener("install", (evt) => {
  //console.log("service worker installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

//add activate event
//listen to activate event
self.addEventListener("activate", (evt) => {
  //console.log("service worker activated");
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
        //delete old cache version
      );
    })
  );
});

//add fetch event
//listen to fetch event
self.addEventListener("fetch", (evt) => {
  //console.log("fetch event", evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
      //return resource from cache api if exists otherwise from server
    })
  );
});
