//check service worker support
//register service worker with browser
//to implement app like behaviour into our website
if ("serviceWorker" in navigator) {
  //navigator object provides information about the web browser and its capabilities.
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      console.log("service worker registered");
      //console.log(reg);
    })
    .catch((err) => {
      console.log("service worker not registered", err);
    });
}