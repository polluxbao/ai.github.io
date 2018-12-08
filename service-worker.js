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
    "revision": "da3e638623560ed6a98426193d0a51a8"
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
    "url": "assets/js/5.f4d7ff2e.js",
    "revision": "5767b6f6d6ebbc386d50356f0de7185a"
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
    "url": "assets/js/app.2db0f130.js",
    "revision": "320a4a8ed63651c223781ce786d8a112"
  },
  {
    "url": "index.html",
    "revision": "23b061d45ba3d2c0fa1b9744a0e42a84"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "dca9b2fae0c8afe5718bdcb85a26d3be"
  },
  {
    "url": "index/index.html",
    "revision": "d0b9490ef2be279fc2ee4c0c6502dc01"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "9f3b1025271de3fb158ddaa10b828403"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "9425bb9597118df4cd4a16c4527c7908"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "c695a53898e02264936f9e6feb76e288"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "c49d7b1e09696d4764dc8a51bff7aed6"
  },
  {
    "url": "index/react/react.html",
    "revision": "e091bfc41cf7d88b202be4c4091d53a9"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "fb05fba98fde7a11caa9e4e7556d59df"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "049dccda0c55a77464172dfa8cebf100"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "801111f69ad0f71bfbe3e6258401f0e5"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "0c88e1d7ff4617e0380696081a5a6f46"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "d26bc3914865ebe58385c819dcb80e80"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "6be0194744cfbdeda1ea767921da5c11"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "390b1790d6ddbcabc41a90802e8364df"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "be9254a4493fd807aa8c3e67d60dfdb2"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "7f99fc246128afbbd81fdb3ca6fd7f1f"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "bc895eb7e64a85a14110b52b71414f6b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e18b7b664ef9c725f335df99d286dbd6"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "972ab333718303802efd6acd10babe07"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "de365e5a4be3f74582575ffe8a09a04e"
  },
  {
    "url": "zh/index.html",
    "revision": "088a4e4d01637fdb6759c051c6d98532"
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
