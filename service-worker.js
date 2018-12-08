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
    "revision": "2e5c3ea0218388adcb7d57ded46cb528"
  },
  {
    "url": "assets/css/0.styles.6299c255.css",
    "revision": "ea08f40668c3da4aed99080154dff65a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.34a9514c.js",
    "revision": "427836c85486adf4d4913ff59c605c64"
  },
  {
    "url": "assets/js/11.235277b9.js",
    "revision": "43cb88be6e48c5f91a162132d3dd95cf"
  },
  {
    "url": "assets/js/12.4459f301.js",
    "revision": "3bbcad12bb5bfadab02874d078740221"
  },
  {
    "url": "assets/js/13.bf4ce6f9.js",
    "revision": "6a424ff09acff447b261ae56941587da"
  },
  {
    "url": "assets/js/14.1a05422f.js",
    "revision": "ff519760647f297e46a1876e33cd6f19"
  },
  {
    "url": "assets/js/15.2bd1fd0d.js",
    "revision": "256bc8e3ce9491fbc18d1be10dcd80b9"
  },
  {
    "url": "assets/js/16.0aab88ca.js",
    "revision": "4f07106b5cf1f23b5e02f6894961bc42"
  },
  {
    "url": "assets/js/17.9a9806cc.js",
    "revision": "572c45c8b351d4d8abc01a8fcc156499"
  },
  {
    "url": "assets/js/18.34fd5e11.js",
    "revision": "2799aa0a4b5c78c3b79cca002428ac98"
  },
  {
    "url": "assets/js/19.bacccd8e.js",
    "revision": "f9d20b573fc63898ed78b754e8c9f568"
  },
  {
    "url": "assets/js/2.c85d3bd6.js",
    "revision": "8ded3885a4bf8f913c8c3f878d08b36b"
  },
  {
    "url": "assets/js/20.631a1188.js",
    "revision": "ca41ba0b9ef0650a4d9038fc6af85051"
  },
  {
    "url": "assets/js/21.e60aa228.js",
    "revision": "48a55840b35f3af457852e392a7606bb"
  },
  {
    "url": "assets/js/22.2b99fc29.js",
    "revision": "618acc3db4dfc41a916c887586616e38"
  },
  {
    "url": "assets/js/23.9f359df7.js",
    "revision": "5f740b4d07bad83a015b3c9f22a8febd"
  },
  {
    "url": "assets/js/24.a790d517.js",
    "revision": "b02fbb2edaebb28db61d42d2f0e2f37c"
  },
  {
    "url": "assets/js/25.554055e3.js",
    "revision": "d4e0cbb0ce898ffce209dbfc3545d0da"
  },
  {
    "url": "assets/js/3.5f49e162.js",
    "revision": "4fd93e09891f8a6cd80b8d78cde1c353"
  },
  {
    "url": "assets/js/4.ee90f6c6.js",
    "revision": "6b4b0c4df7a4e14b9ff6027ab744aa4e"
  },
  {
    "url": "assets/js/5.c4a3e01e.js",
    "revision": "effd49d1e0ed2c314b9c7aee30fbcc2b"
  },
  {
    "url": "assets/js/6.fe3ee08c.js",
    "revision": "ac4b5763a39d3c27f8a1023cb5aea05b"
  },
  {
    "url": "assets/js/7.347628e0.js",
    "revision": "9e425b43c7a5dfa55aa5cd1cba2f4498"
  },
  {
    "url": "assets/js/8.aa05974d.js",
    "revision": "59b30218df78ae10ebe17f42e74b48ab"
  },
  {
    "url": "assets/js/9.e29c4885.js",
    "revision": "a0dbdb6150480aa1fdab984d03b4bf60"
  },
  {
    "url": "assets/js/app.3e4da124.js",
    "revision": "ba9240b19f9b7c7e657513fcc8b326ef"
  },
  {
    "url": "index.html",
    "revision": "b3e4248659db0ceecc281604fe577afe"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "478ed8ed619ffc90d1a7be0f9d343187"
  },
  {
    "url": "index/index.html",
    "revision": "98fd28a9ca1c91936fdd187a1d3856ca"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "1c1fb500689d871627863a38a1a9b1c0"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "8b3a1aeee36eeaeed74075edde4bf3df"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "a3a22d1590f256fc2b4644e09a74019a"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "44564c10cc8e72e7e189269c3d1a55c4"
  },
  {
    "url": "index/react/react.html",
    "revision": "bffa33c9344efcc9f439f11bdbc364fb"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "eb0e3dbbf8ad8ff332b6d63b414cf474"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "f0553830cb069d2cef92b8ea80b36ee8"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d5e56df0b32a2ce90f4dfc2300e64074"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "a5f288396ab089e715a71ab529d26f17"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "6b28b12b5a902c4360ff5d7075b84168"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "67344d7fb86e9fbebbf19f7cd1ded6ae"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "6df1269566e55a3f09d5bdb4088e7d2a"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "c9e5c2f9e1bc7228ac2eb6254aee5af4"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "cf77d1e8669b70339981ec6d11b3dc5c"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "dc270a58f3ac1199dd1b6d21a38b7c6d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "0b3be567e20433292788640947780d41"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "79da5a5f8ac28bcdbf25b24aefa591cd"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "d7e9b596199cfcc73694259be6bf84b1"
  },
  {
    "url": "zh/index.html",
    "revision": "2284b934ea250f2599a9c34ece2b68bb"
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
