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
    "revision": "1c4ff59c5b33da2c6d3e1e52ed6ff7c4"
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
    "url": "assets/js/11.e95e711f.js",
    "revision": "1a3d127de700f8fbfb8c61cc948ac9c8"
  },
  {
    "url": "assets/js/12.093ae6f7.js",
    "revision": "deee7af9c0b0e3fe3d1f04b153538349"
  },
  {
    "url": "assets/js/13.6a90def7.js",
    "revision": "e32610bbbfaa405976e26d5e6aa1c064"
  },
  {
    "url": "assets/js/14.fb249827.js",
    "revision": "298b12c6e7c3819a38b83257922a1714"
  },
  {
    "url": "assets/js/15.657ac2fe.js",
    "revision": "792b9cef29492fe7784f5d5b474e7c44"
  },
  {
    "url": "assets/js/16.0bc85d5c.js",
    "revision": "c5d8e92cbcb05fff423d58772b1111a4"
  },
  {
    "url": "assets/js/17.0bdaee18.js",
    "revision": "7f39d163016e00f75eb02b4caabedde9"
  },
  {
    "url": "assets/js/2.825b0c24.js",
    "revision": "47ee7a04036ca7d3d7254e4c6cfd1bc0"
  },
  {
    "url": "assets/js/3.6d04b28e.js",
    "revision": "49b5924c3b07587725ac17e189a332ec"
  },
  {
    "url": "assets/js/4.d4832ec6.js",
    "revision": "b9a2b632ef5de0d78e20b906875828b8"
  },
  {
    "url": "assets/js/5.0856795d.js",
    "revision": "2d894695848dd5f95fbe604fa683384b"
  },
  {
    "url": "assets/js/6.d230f809.js",
    "revision": "df3e8445bd0f26ebcdbb41b08fa53e63"
  },
  {
    "url": "assets/js/7.26e51223.js",
    "revision": "3bfe474cb0b861778af6e68b4ace56cd"
  },
  {
    "url": "assets/js/8.e71fd78c.js",
    "revision": "3ca2b8df41f62e2add98db8aa97fa29b"
  },
  {
    "url": "assets/js/9.fdc54f73.js",
    "revision": "3485d89674a7b15600cf8ab31ab52851"
  },
  {
    "url": "assets/js/app.b3c91714.js",
    "revision": "0cd3b5ebfb53964ddc3863f96e127623"
  },
  {
    "url": "index.html",
    "revision": "9cf96729715243bd5eb9ccc1ce4bb2d5"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "079620e365567b9753f4f49d95f22387"
  },
  {
    "url": "index/index.html",
    "revision": "2d474d54728e221d89b2eb0ca63faebe"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "9928be79af578ac37c45945f0fafed99"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "da3c2216f64f2aa0959d9ae87117a28d"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "6445e3b674d33ea2218318a36f81005b"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "867a241d78dcdacfedd065649c80f31b"
  },
  {
    "url": "index/react/react.html",
    "revision": "ab67cbc63307d81d015fbac7e003597b"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "1f8b6cd29064cdaf0d6011dac5ccecd0"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "1d5a36981d54b5cbf0719d0dc22d73f1"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  },
  {
    "url": "practice/practice.html",
    "revision": "d0f85f4fdadb0fc60f1a9eb56c6b8996"
  },
  {
    "url": "practice/practice1.html",
    "revision": "a1dccc6d8cb1eccb00f67c63c2238a36"
  },
  {
    "url": "project/project.html",
    "revision": "9a2d1bebb85b2129f0645a473a995046"
  },
  {
    "url": "project/project1.html",
    "revision": "87be7231303dbae56acffcf89bf05d33"
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
