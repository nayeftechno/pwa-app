//self refers to servive worker itself

//add install event
//listen to install event
self.addEventListener("install", (evt) => {
  console.log("service worker installed");
});
//add activate event
//listen to activate event
self.addEventListener("activate", (evt) => {
  console.log("service worker activated");
});
