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
    "revision": "00ecb90df768f0dc16763ebd644f33b3"
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
    "url": "assets/js/10.23f2345e.js",
    "revision": "f8b44f94dc398167bf2bf4298a691552"
  },
  {
    "url": "assets/js/11.d664a04a.js",
    "revision": "b2cb3aae797bb1f1d15f5aa4b87ec267"
  },
  {
    "url": "assets/js/12.7b6822fd.js",
    "revision": "a606418787a62cee4d3782fdcc7864cc"
  },
  {
    "url": "assets/js/13.50b973d1.js",
    "revision": "1305e9bdf7966f658b426dbe5d50758b"
  },
  {
    "url": "assets/js/14.e09bac1a.js",
    "revision": "5c83a3d0a573aeeb0abc9ad6bbc038b7"
  },
  {
    "url": "assets/js/15.91f76d37.js",
    "revision": "2c3a5c14b7fac28926a5c3dfaa2d73e4"
  },
  {
    "url": "assets/js/16.6711fb40.js",
    "revision": "a975c639f0c4f608f7d0f83d730310d1"
  },
  {
    "url": "assets/js/17.58f91d98.js",
    "revision": "f864e5d65823132d8f5e5678f7ebcba5"
  },
  {
    "url": "assets/js/18.d5aaa755.js",
    "revision": "a0775594b43637344913de8c7d71d7e8"
  },
  {
    "url": "assets/js/19.b4933cf0.js",
    "revision": "b7ddb2cafc69ae872c4083d8bf93084c"
  },
  {
    "url": "assets/js/2.58998d8f.js",
    "revision": "cee69c7ced5ece48b97dd5364614791e"
  },
  {
    "url": "assets/js/3.15875227.js",
    "revision": "e8d2057966f45292b12945b938b1b4dd"
  },
  {
    "url": "assets/js/4.73afaff6.js",
    "revision": "c83ad37f529dfc0841c1f22e370cd5f2"
  },
  {
    "url": "assets/js/5.00903268.js",
    "revision": "226dff984e1da16dd0c9e348fd81672a"
  },
  {
    "url": "assets/js/6.e23af3ba.js",
    "revision": "30f2afe48cf7fee777ee0a1d858906d3"
  },
  {
    "url": "assets/js/7.51f2db0b.js",
    "revision": "9115ac2cc7ac3046cee842a54b18c2c6"
  },
  {
    "url": "assets/js/8.f2fd8516.js",
    "revision": "2990cb111a0a264de20a90aa4316992f"
  },
  {
    "url": "assets/js/9.32285102.js",
    "revision": "79d537876483c559647a1baba543d493"
  },
  {
    "url": "assets/js/app.106a7f5a.js",
    "revision": "2b0562d8a673f89e64bca50935da3f96"
  },
  {
    "url": "index.html",
    "revision": "3746f2ea3d02f462946039d95403d264"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "d7e14093288af19446b5c4623038e0d9"
  },
  {
    "url": "index/index.html",
    "revision": "2659184894f6c08c0afb7e120027b7f8"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "a611474d29e0a464cb6a9f85103ae602"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "bd75f7e62165948bcde3935143c5afab"
  },
  {
    "url": "index/nodejs/spider.html",
    "revision": "da85f548ec698dc40a7675d382a0508e"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "e5d81e85eee279870944cddcc3945f63"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "6631a0aee489660ec60ec72e35970b56"
  },
  {
    "url": "index/react/react.html",
    "revision": "026805c8b661716206f81c93d2340b58"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "0c3f10ea1f3a36e9c9070af0542c9008"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "02a9644ef496af4dc637f888c965473a"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  },
  {
    "url": "practice/practice.html",
    "revision": "a6c87a07764fbaa3f45554f85599dae8"
  },
  {
    "url": "practice/practice1.html",
    "revision": "d06c280a11f0d450c68ae6dd63ba09b5"
  },
  {
    "url": "project/project.html",
    "revision": "1ebb99d4229cb5553436714c531a98ab"
  },
  {
    "url": "project/project1.html",
    "revision": "6c45a392d14c8c1038eea06215b7cf72"
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
