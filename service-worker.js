/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2e34948567424a088b07a3c431586137"
  },
  {
    "url": "assets/css/0.styles.10c9f81d.css",
    "revision": "6b2b1955f18e052fc682efcce695cba0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bd848d0e.js",
    "revision": "ea520cf447eff2894684b3c456df8173"
  },
  {
    "url": "assets/js/11.c11ff7bf.js",
    "revision": "811432de7980aed7bc7d9a52bdac22fc"
  },
  {
    "url": "assets/js/12.a7aa1dec.js",
    "revision": "45511f47ea7b0b87e1cc07f0441d995a"
  },
  {
    "url": "assets/js/13.b704eae9.js",
    "revision": "ecd625b17377458b5f6638c6b1fc8ba5"
  },
  {
    "url": "assets/js/2.a7ca3485.js",
    "revision": "50ba215be602f45efe1b56a367abd6e4"
  },
  {
    "url": "assets/js/3.ce84b3ea.js",
    "revision": "c6580be4ec38c178f00333ee6fb217c8"
  },
  {
    "url": "assets/js/4.44e38898.js",
    "revision": "3152b252c8524b4fd9c2a788bdecb9fe"
  },
  {
    "url": "assets/js/5.51c94e02.js",
    "revision": "b50e302618324c456a27fc35cd6aa253"
  },
  {
    "url": "assets/js/6.b8ac0dc3.js",
    "revision": "fd54c4fdf809aa39542de6a8baaa6e61"
  },
  {
    "url": "assets/js/7.5ff6e069.js",
    "revision": "f8074b204ae7b489400effb8735c4fa2"
  },
  {
    "url": "assets/js/8.e6397dd0.js",
    "revision": "e45064c56f42fe2c67846b109874bafa"
  },
  {
    "url": "assets/js/9.2dd460f2.js",
    "revision": "80501db0ce273162bd1de1ac499033c2"
  },
  {
    "url": "assets/js/app.ae8d1806.js",
    "revision": "b98f9a5f9aaa50c8fe98a586ad70124a"
  },
  {
    "url": "index.html",
    "revision": "7c4132c4da5a31958b549dbfe387e63c"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "e304445533692b05988b4437d9d13f44"
  },
  {
    "url": "index/index.html",
    "revision": "a53a7e7e89a5d901e1d6ce58ef0a2bbc"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "8961ebba106899292ab98ce9134ee5aa"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "10940db8558ffa2b2e37d3c804e1b5d3"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "cc3c7df9eab1b3b5ce3da420f1431d58"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "2dc3bb7c9f321d92f041f6895a79e17c"
  },
  {
    "url": "index/react/react.html",
    "revision": "b0f1197049be4f7018d3ac384e0aa51c"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "262b279fc5e83eaf8eb061881745b3ca"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "ee3a8c0969281a659afb13f7e4405342"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
