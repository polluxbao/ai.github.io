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
    "revision": "163411cb9d4d97c10bf4644a61660591"
  },
  {
    "url": "assets/css/0.styles.b71c3980.css",
    "revision": "52ff472a0daeb0d1fcd35588f5be0f62"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.adb58863.js",
    "revision": "77896a411ccf36945b0844dfc35b9f4a"
  },
  {
    "url": "assets/js/11.1bccb200.js",
    "revision": "d7d883cf65db92b7b93a5f2afad8d17a"
  },
  {
    "url": "assets/js/12.1eedd005.js",
    "revision": "3cb624cf6ce51c7bd823068e78f126ec"
  },
  {
    "url": "assets/js/13.442dec39.js",
    "revision": "883c7c67949bf9d2ad6b4e3ac8977794"
  },
  {
    "url": "assets/js/14.0cbced82.js",
    "revision": "d41f1b2416dc069cd579f1d0c785dc8c"
  },
  {
    "url": "assets/js/15.92572777.js",
    "revision": "73d8d696d3376584ad9b55feedfdb825"
  },
  {
    "url": "assets/js/16.4b2b8598.js",
    "revision": "9f94bd1411d0f200d3b6c32c17b83801"
  },
  {
    "url": "assets/js/17.ec470344.js",
    "revision": "42fa25ebed2acfd295fda0b53e5e5fd2"
  },
  {
    "url": "assets/js/18.886e1ca4.js",
    "revision": "e6f1573b800be20805d4bf7f0ab4ac79"
  },
  {
    "url": "assets/js/19.536c7509.js",
    "revision": "3daf65c0273b743af4ba008f12c1dcbe"
  },
  {
    "url": "assets/js/2.741a084c.js",
    "revision": "6b726964bcbea3eaee444a9822145354"
  },
  {
    "url": "assets/js/3.240c0dee.js",
    "revision": "0a063f0987cee47328b3d27a342c829a"
  },
  {
    "url": "assets/js/4.acdda000.js",
    "revision": "1a401a8b5d25e403e38025f408c595b0"
  },
  {
    "url": "assets/js/5.02d8038a.js",
    "revision": "b181f7f7a3cbc47357d04a3b9032abdf"
  },
  {
    "url": "assets/js/6.adc5510b.js",
    "revision": "0c98dcbc7216844e378c9bd779407bd9"
  },
  {
    "url": "assets/js/7.e8dee671.js",
    "revision": "14c1cbeb6bbc710f574ee93b17909c4a"
  },
  {
    "url": "assets/js/8.9a814ceb.js",
    "revision": "d98e21e8f490857fe65e80e695892ff7"
  },
  {
    "url": "assets/js/9.e091bc90.js",
    "revision": "47fb7ec02813c94bc2e5a02257237112"
  },
  {
    "url": "assets/js/app.8de216bd.js",
    "revision": "600c91024890858d26111e61db5a2480"
  },
  {
    "url": "index.html",
    "revision": "8981b16ae72f70116e6617993713414b"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "1570ab312dfee51f0a361de50d82dbc7"
  },
  {
    "url": "index/index.html",
    "revision": "3b15f8bb8f875351b29593cbec46e5f2"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "e8254792bd8ed629996db14afe73b3a6"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "d5ffe3fc846101414781fabeb989a8c8"
  },
  {
    "url": "index/nodejs/spider.html",
    "revision": "f2abd28fe29125d6b58424c19ff003bd"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "0726651d55e0f37524c6bc2f6534c2d2"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "daf2d65203f287bb8fc9a7464f3ff263"
  },
  {
    "url": "index/react/react.html",
    "revision": "3d6052ba16ffcac121d6664b6a52ca95"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "f0d4802804ce936eba34419e5fc66ef9"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "202ca4071221005218656ae8fe61f42c"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  },
  {
    "url": "practice/practice.html",
    "revision": "7b8b075275966ed64330281cf9fee24c"
  },
  {
    "url": "practice/practice1.html",
    "revision": "39c7839be9d691cec3b3a250aa807526"
  },
  {
    "url": "project/project.html",
    "revision": "68715b3b9795a7ad4f4f89abcced8c46"
  },
  {
    "url": "project/project1.html",
    "revision": "fa7ea22603434d6e1e33b76bffedcc92"
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
