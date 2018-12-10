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
    "revision": "e29fac5121f0ba1bc772023abe5ed57d"
  },
  {
    "url": "assets/css/0.styles.2775fa08.css",
    "revision": "927e750fa3e9890458d4fa82f1ae97f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c044810b.js",
    "revision": "d8926bbed3d8dce492d4b90afff1d67d"
  },
  {
    "url": "assets/js/11.7529e72e.js",
    "revision": "0a01e3e164f46fd1d4f5a1e76b865b90"
  },
  {
    "url": "assets/js/12.e9c55e31.js",
    "revision": "4728c5f463d435c0123111feff1a481b"
  },
  {
    "url": "assets/js/13.0fe0179e.js",
    "revision": "744d1b8741c1c2a5e8a366221f82de56"
  },
  {
    "url": "assets/js/14.c288bd08.js",
    "revision": "785b462f939b9e6ad90e55f08b9d63a4"
  },
  {
    "url": "assets/js/15.fb69c402.js",
    "revision": "cbd9f95832f4e6ffdbfd15873a1407b0"
  },
  {
    "url": "assets/js/16.ed89f0bc.js",
    "revision": "314bbb480bc0dffe2c1e0e12b0b89674"
  },
  {
    "url": "assets/js/17.9e2f789f.js",
    "revision": "eeb5a913f4da2dc6964acec59ee251c3"
  },
  {
    "url": "assets/js/18.6d87ed36.js",
    "revision": "5bbf8e0b0ceebb6ba095c69664d74cfa"
  },
  {
    "url": "assets/js/19.7f9b44b5.js",
    "revision": "63588af0def6a1af620cf1e7afd30534"
  },
  {
    "url": "assets/js/2.3da35ebb.js",
    "revision": "36c5d7ab180d24b836e1594fa9bcc728"
  },
  {
    "url": "assets/js/20.e4bca64a.js",
    "revision": "d79bc18161be02ee2141db5ca5630817"
  },
  {
    "url": "assets/js/3.46d8b696.js",
    "revision": "dd6408ab2eef57c65d5579ae44947d36"
  },
  {
    "url": "assets/js/4.65438333.js",
    "revision": "728b12448fcd3bb6544c5d388ff02b50"
  },
  {
    "url": "assets/js/5.3954b1b6.js",
    "revision": "6b68a6b43251ac232f3ee292067c91d5"
  },
  {
    "url": "assets/js/6.a2406d44.js",
    "revision": "89e262cf6903c6090d8a4002f5589e15"
  },
  {
    "url": "assets/js/7.22120e51.js",
    "revision": "ddf79a99ee6bbe37b8056fa7f6c65ee2"
  },
  {
    "url": "assets/js/8.ef2eb4a7.js",
    "revision": "db4b8ca954c9b8c816f98abf29410715"
  },
  {
    "url": "assets/js/9.0f51abdf.js",
    "revision": "6833dc273e17d0b98969b6f236a81ba4"
  },
  {
    "url": "assets/js/app.d44a0e11.js",
    "revision": "b7e8abd37afc23f4330d95903ffab0df"
  },
  {
    "url": "index.html",
    "revision": "d579b7249aad709682d86beb0d35bd1f"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "31666adae84c42077b2b63c63f4b3c9a"
  },
  {
    "url": "index/index.html",
    "revision": "9689e1a169031473b86b8ae4a1b2ce77"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "28ded78f141d4cf5cafebc209931cf8e"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "d3c1db0ad85b1afd070bd8ab907d5cd8"
  },
  {
    "url": "index/nodejs/spider.html",
    "revision": "4aea9d7b060a2084f277793f16c0110b"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "f794db3728060c5b3f74c2aaefeed0c4"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "b9da2419e0ff6ae7a9b2f2ce2b988f06"
  },
  {
    "url": "index/react/react.html",
    "revision": "9390e244b7a21690cfc5bb81b3fc6574"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "3d2062215b49c1a9bddf3ec170e86f9b"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "70ed4401719511a2a2c262f3f031a669"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  },
  {
    "url": "practice/practice.html",
    "revision": "5f96ed2869d08df7998712dea26c88ad"
  },
  {
    "url": "practice/practice1.html",
    "revision": "9732129862f979bd6604fcbd6501e5fc"
  },
  {
    "url": "project/project.html",
    "revision": "e219754e6111937cb93a154211da4326"
  },
  {
    "url": "project/project1.html",
    "revision": "7a8f9476f1b970c9104785681090c4bf"
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
