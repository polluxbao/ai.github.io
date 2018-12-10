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
    "revision": "dd24be0814da4b0d5cc1c0e63336760a"
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
    "url": "assets/js/10.b3d3f717.js",
    "revision": "00ce39c9a2d2ad8a4ad11d1ec19f0342"
  },
  {
    "url": "assets/js/11.b560612b.js",
    "revision": "080bd19b188efe08c8c0b6796d587dcb"
  },
  {
    "url": "assets/js/12.12beaafc.js",
    "revision": "6d5e63f8f115a6a6b13e496209095a5b"
  },
  {
    "url": "assets/js/13.12fb8ade.js",
    "revision": "cfcd1c8286176d63d7d4fbcd746632ed"
  },
  {
    "url": "assets/js/14.e25b3359.js",
    "revision": "d1cf18b0ce17e9bd1b2dbe08a8fe9ae1"
  },
  {
    "url": "assets/js/15.0e11e078.js",
    "revision": "3ec62cb9dc690fc5f5db987120281003"
  },
  {
    "url": "assets/js/16.43575ff2.js",
    "revision": "78e39e88b1b791c4b53ac4db5a171d88"
  },
  {
    "url": "assets/js/17.19d752ff.js",
    "revision": "b9e0b0c455281ae0b75b6ad9e8a72bc8"
  },
  {
    "url": "assets/js/18.f48f8161.js",
    "revision": "087f5cfe4cc23f71650c3594cfbcbd02"
  },
  {
    "url": "assets/js/2.825b0c24.js",
    "revision": "47ee7a04036ca7d3d7254e4c6cfd1bc0"
  },
  {
    "url": "assets/js/3.d820e7bd.js",
    "revision": "36d91404937b954185cca82551ffe2a3"
  },
  {
    "url": "assets/js/4.6cb1af63.js",
    "revision": "4b7c34bfd754117586f6d60056bb2773"
  },
  {
    "url": "assets/js/5.44cf5f3a.js",
    "revision": "a521065f31712b4091ee1a6a9ec3aad9"
  },
  {
    "url": "assets/js/6.f44d44ea.js",
    "revision": "ca73a7e737011525dcc110b12ae8ac9a"
  },
  {
    "url": "assets/js/7.6ecba2ca.js",
    "revision": "4e429800234edebdfb00f62b9d3c6751"
  },
  {
    "url": "assets/js/8.30b76ba8.js",
    "revision": "40b1871ef9f40e4955e1f7620f596bdb"
  },
  {
    "url": "assets/js/9.26523451.js",
    "revision": "afcaee8db0eac7ea404c6b8d339164ca"
  },
  {
    "url": "assets/js/app.cec1aec7.js",
    "revision": "8fdebf088cc2967f9e7a0b521fd84c66"
  },
  {
    "url": "index.html",
    "revision": "145d235501d34cb015b12419467a7e88"
  },
  {
    "url": "index/html-css/css.html",
    "revision": "aa94ae1b329e781d8827991248699018"
  },
  {
    "url": "index/index.html",
    "revision": "7a0c90907eae6a576c53941cf45f53e9"
  },
  {
    "url": "index/javascript/javascript.html",
    "revision": "856eafe365de75aa49f20ef3313469c5"
  },
  {
    "url": "index/nodejs/nodejs.html",
    "revision": "30bae3148250719409c0338e9f098946"
  },
  {
    "url": "index/nodejs/spider.html",
    "revision": "abdd2adba92097c4db0debd9ecc20c82"
  },
  {
    "url": "index/others/cmder.html",
    "revision": "8258dd62f622d3d14f90a39edb1f5eed"
  },
  {
    "url": "index/others/rap2.html",
    "revision": "6217fe3319f4eba551ffe63501e69676"
  },
  {
    "url": "index/react/react.html",
    "revision": "c3c39a58fececba25ab24b5b77326ba4"
  },
  {
    "url": "index/vue/vue.html",
    "revision": "821fd0a8db3fa370273f6cbab9db8656"
  },
  {
    "url": "index/vx/vx.html",
    "revision": "62f07d40d5a140e9971023e686fec7a3"
  },
  {
    "url": "kayle.jpg",
    "revision": "cd22739ac8df88e257bc995f02f50f9a"
  },
  {
    "url": "practice/practice.html",
    "revision": "39990011a793586e470b2dd25d814239"
  },
  {
    "url": "practice/practice1.html",
    "revision": "65805623630af32ef9e8f37c160b9fa4"
  },
  {
    "url": "project/project.html",
    "revision": "e5fd3c25602b5011b4a1064bf7502b7f"
  },
  {
    "url": "project/project1.html",
    "revision": "dbf3273f656083d6e9bb47149526bb8d"
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
