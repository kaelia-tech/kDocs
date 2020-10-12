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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0cf0868e234005f60c2487c613310780"
  },
  {
    "url": "about/contact.html",
    "revision": "e6dcc5ee061da612a2161c167a647ff7"
  },
  {
    "url": "about/contributing.html",
    "revision": "2e79ce908fda57b9c7c806ac3e28e1c0"
  },
  {
    "url": "about/index.html",
    "revision": "95a8b2ebfc5fe51ab82a633a72dd2218"
  },
  {
    "url": "about/license.html",
    "revision": "44e4c9f330d75898dcf09984b3f5dd34"
  },
  {
    "url": "about/roadmap.html",
    "revision": "a1b1062bee5b8f93c5b853b3c5c73ccf"
  },
  {
    "url": "api/core/application.html",
    "revision": "82619adf02e4bbf3168ee7ef5fcc37cb"
  },
  {
    "url": "api/core/components.html",
    "revision": "bf7458ad743a32a229d4339970a2bc7a"
  },
  {
    "url": "api/core/hooks.html",
    "revision": "1923511567ff3ce4616a9e287260533b"
  },
  {
    "url": "api/core/index.html",
    "revision": "295ca93acb4a9f337ba8825dd5c7640b"
  },
  {
    "url": "api/core/mixins.html",
    "revision": "34c348581cb0bf12d2c3f3001bb22448"
  },
  {
    "url": "api/core/services.html",
    "revision": "8cbcb4b1fe79b71096829aaf3f4fd7ce"
  },
  {
    "url": "api/index.html",
    "revision": "5ba0ec97a66e71aa05ff90532dc0a656"
  },
  {
    "url": "api/map/components.html",
    "revision": "48db56aa5bb5c1b8aad18dd9aa195cd9"
  },
  {
    "url": "api/map/hooks.html",
    "revision": "eea27aedd1c3e8111b65e279f7f0e2a4"
  },
  {
    "url": "api/map/index.html",
    "revision": "8b20d49c67d188869e3dbc17a8e8c6f3"
  },
  {
    "url": "api/map/mixins.html",
    "revision": "bfb45f3f5d571b0780c3c1b74b230097"
  },
  {
    "url": "api/map/services.html",
    "revision": "9701f7a80335c99d6da6052357636a78"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "21d03604dbe347da7882f5caa16b249a"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "9c3a070ca695507b149457e37f1910f3"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "1bea87ed2a5691aec57d540fce8daefc"
  },
  {
    "url": "architecture/index.html",
    "revision": "e9d3d94aa3d33c0e31e93aefaf0b959a"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "e61be00d4579563f39ef0001b8c6f15d"
  },
  {
    "url": "assets/css/0.styles.be5e49f6.css",
    "revision": "fae068808c1c3a8f81a1b90be35d1766"
  },
  {
    "url": "assets/img/aggregated-feature-data-model.688823b1.png",
    "revision": "688823b1d38b25a2bf17ca95920def55"
  },
  {
    "url": "assets/img/aktnmap-layout.7dce3192.png",
    "revision": "7dce31929edd640a0491536514cbe7b9"
  },
  {
    "url": "assets/img/alert-data-model.77595bb5.png",
    "revision": "77595bb53c67ef3aa32e8455a15f4cd0"
  },
  {
    "url": "assets/img/alert-hooks.a29b1547.png",
    "revision": "a29b154748a226fbbe8e6a589aa14012"
  },
  {
    "url": "assets/img/application-hooks.e15ca2e0.svg",
    "revision": "e15ca2e0e0ce1b30ac2716348e14cc33"
  },
  {
    "url": "assets/img/authorisations-hooks.223455bf.png",
    "revision": "223455bfff7bf51dddf7721b4a40d5f6"
  },
  {
    "url": "assets/img/catalog-data-model.998b319c.png",
    "revision": "998b319c85f0c564838fe6886a1aa5b3"
  },
  {
    "url": "assets/img/cd-pipeline-android.aac6a2e0.svg",
    "revision": "aac6a2e0ae4e0a08d62434fc4f9e700c"
  },
  {
    "url": "assets/img/cd-pipeline-app.f5ae4922.svg",
    "revision": "f5ae4922e9e2a5263b805ee8a1cd1779"
  },
  {
    "url": "assets/img/cd-pipeline-env.e2075fb1.svg",
    "revision": "e2075fb1bb069e7f46ea7f0a880df06b"
  },
  {
    "url": "assets/img/cd-pipeline-global.bf86d245.svg",
    "revision": "bf86d245695e16937bf9f6e08c38b0ad"
  },
  {
    "url": "assets/img/cd-pipeline-ios.b4f66a54.svg",
    "revision": "b4f66a5494f77e98899d44a066515ed0"
  },
  {
    "url": "assets/img/cd-pipeline-travis.5e40ee62.svg",
    "revision": "5e40ee62f8c213080bcd46106366ccbd"
  },
  {
    "url": "assets/img/component-view.de49f2d5.png",
    "revision": "de49f2d54005249f92b47c78e46776cc"
  },
  {
    "url": "assets/img/domain-model.0547d09f.svg",
    "revision": "0547d09ff803394e1f2d859c04728556"
  },
  {
    "url": "assets/img/editor-lifecycle.174bae43.png",
    "revision": "174bae432562fed4c258bc985253d0ac"
  },
  {
    "url": "assets/img/feature-data-model.de64ed49.png",
    "revision": "de64ed4936ffd7dc5ee67482f140cbba"
  },
  {
    "url": "assets/img/feature-hooks.725395b0.png",
    "revision": "725395b044879fab8bcffbc5b4c012e0"
  },
  {
    "url": "assets/img/global-architecture.62f2e9b2.svg",
    "revision": "62f2e9b23f59d325b00376982b49ea43"
  },
  {
    "url": "assets/img/groups-data-model.437e9630.svg",
    "revision": "437e963022b899ff09e989224a42ba90"
  },
  {
    "url": "assets/img/hooks-diagram-template.bf7579e1.png",
    "revision": "bf7579e1f6e36a2f9585242446149c20"
  },
  {
    "url": "assets/img/item-collections.59bf2c4c.png",
    "revision": "59bf2c4c802c8fc5c68c359ecfa95398"
  },
  {
    "url": "assets/img/kano-3D.65e359f9.png",
    "revision": "65e359f95783bb99097fc5b763ec4151"
  },
  {
    "url": "assets/img/kano-components.ad92b7e2.png",
    "revision": "ad92b7e2f4bf02c26bb9e24b67f19b11"
  },
  {
    "url": "assets/img/kano-layout.702937a9.png",
    "revision": "702937a910e38ce3e140ae86cbfd5b3c"
  },
  {
    "url": "assets/img/kano-weather.2b6d4bbf.png",
    "revision": "2b6d4bbfa0992bbbbaae5745b2a7db4b"
  },
  {
    "url": "assets/img/kdk-workspace.d228efd0.png",
    "revision": "d228efd0427f5ee0027e9557bf11f9c8"
  },
  {
    "url": "assets/img/layers-panel.def38fe5.png",
    "revision": "def38fe54ce12f8b11b1d523eeacbaec"
  },
  {
    "url": "assets/img/marker-cluster-2D.63ae3032.png",
    "revision": "63ae3032f9266059c3d95ccb402b0608"
  },
  {
    "url": "assets/img/marker-cluster-3D.e8927429.png",
    "revision": "e892742919b7d249bada3f31153e11fa"
  },
  {
    "url": "assets/img/organizations-data-model.0d40de04.svg",
    "revision": "0d40de04d4ac06c438ad08de62bdbf6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/storage-hooks.f7cd9bef.png",
    "revision": "f7cd9befe2f959dfbe39b009dcda2ea0"
  },
  {
    "url": "assets/img/tags-hooks.19298e57.png",
    "revision": "19298e5708cae740717b9063f3f8868c"
  },
  {
    "url": "assets/img/timeseries.370f7197.png",
    "revision": "370f7197130302dce62fdcd4d3be49ea"
  },
  {
    "url": "assets/img/users-data-model.e037f5f6.svg",
    "revision": "e037f5f6dd66241e355c8f7b559237e4"
  },
  {
    "url": "assets/img/users-hooks.506d5935.png",
    "revision": "506d59353934862bbe3bb0fb5210ffdc"
  },
  {
    "url": "assets/js/10.26226a31.js",
    "revision": "cd304242ce98bd5db99df353cbd44b7d"
  },
  {
    "url": "assets/js/11.fa7aca25.js",
    "revision": "40350e930b70ee70b61d4ca1d7c666c4"
  },
  {
    "url": "assets/js/12.52d63741.js",
    "revision": "aa5388c7ec11514f1ec8a8527faf50c9"
  },
  {
    "url": "assets/js/13.6eed20c2.js",
    "revision": "bc89fbadf319f76ce0393613b2c8e5e2"
  },
  {
    "url": "assets/js/14.14668525.js",
    "revision": "0ba1b6601f93c14f42c53d8e108b1ecb"
  },
  {
    "url": "assets/js/15.82e562f1.js",
    "revision": "3029c0771a41a88dc78424a87954875a"
  },
  {
    "url": "assets/js/16.3f18c4e0.js",
    "revision": "58b291edacb80a4ef492cf22713b404d"
  },
  {
    "url": "assets/js/17.3cd41740.js",
    "revision": "c088fe3ca867bb475a46d4a2e0cee909"
  },
  {
    "url": "assets/js/18.f61d2d33.js",
    "revision": "8631fc881d3f6855548ff37aec420445"
  },
  {
    "url": "assets/js/19.3233b61d.js",
    "revision": "8afb5c5c14fa71315fb95cff81dcc066"
  },
  {
    "url": "assets/js/2.a75dded2.js",
    "revision": "b4964084f90a19819df0b6846eddbdbd"
  },
  {
    "url": "assets/js/20.ba33e89f.js",
    "revision": "044d26c5d253a4ae8f6f971f9deb177f"
  },
  {
    "url": "assets/js/21.f0a9d6b7.js",
    "revision": "7e62864da6f3d93f51cf175a70b6cbc3"
  },
  {
    "url": "assets/js/22.35a13f6e.js",
    "revision": "ad1b373db984de4ce1b2e7c69200c83a"
  },
  {
    "url": "assets/js/23.791e98bf.js",
    "revision": "434371a6329e63f05ed31656ee6adc15"
  },
  {
    "url": "assets/js/24.8511d883.js",
    "revision": "795682c22e997930f8036700240a0f7e"
  },
  {
    "url": "assets/js/25.855384f3.js",
    "revision": "e0d2ff094c6de9fea43f05188e05d24b"
  },
  {
    "url": "assets/js/26.eab57a1c.js",
    "revision": "7ac8a1460615dacb6d925d2f0413d865"
  },
  {
    "url": "assets/js/27.1261446c.js",
    "revision": "5d1def2911bc277be392a410ea68e7a7"
  },
  {
    "url": "assets/js/28.c5d4aa9b.js",
    "revision": "1e905e73df0be39c182e8bc1a909bbda"
  },
  {
    "url": "assets/js/29.143ff4de.js",
    "revision": "33522b149cb695ed4c322f49a5e64cdb"
  },
  {
    "url": "assets/js/3.18032616.js",
    "revision": "1a5713fd29427c262f11c72d49dbd933"
  },
  {
    "url": "assets/js/30.2660e151.js",
    "revision": "3915b6dbed37daaca9953b083b794c7b"
  },
  {
    "url": "assets/js/31.3c8093f0.js",
    "revision": "27e25ea95aadbf9be319840601f89a66"
  },
  {
    "url": "assets/js/32.23e22eb9.js",
    "revision": "e81c5401da2f750b215374fb06185976"
  },
  {
    "url": "assets/js/33.323f870c.js",
    "revision": "70755ad94d0e81763b2ce701a8605564"
  },
  {
    "url": "assets/js/34.23185fe2.js",
    "revision": "1979d9a7feafadc5631c736f9d3721a5"
  },
  {
    "url": "assets/js/35.d8f566c8.js",
    "revision": "74784fb6139517064b19205daa422537"
  },
  {
    "url": "assets/js/36.04310259.js",
    "revision": "0d67ec80c6803a1378d728f9a022bafa"
  },
  {
    "url": "assets/js/37.a42d14b0.js",
    "revision": "68e6c5a353777be24f529878a229f981"
  },
  {
    "url": "assets/js/38.fc8e5c1a.js",
    "revision": "eee9c154731bdcc6b7dfd5492c1a4195"
  },
  {
    "url": "assets/js/39.63afc628.js",
    "revision": "ca9dbe4b90aceeb78b87f2ddc3be22dc"
  },
  {
    "url": "assets/js/4.edc12347.js",
    "revision": "91ecd7155bd3b9ddcf6b0de6838a489b"
  },
  {
    "url": "assets/js/40.f6f80c74.js",
    "revision": "29bb7d6b1c2739a60c67d77eb9db2c7d"
  },
  {
    "url": "assets/js/41.deb10120.js",
    "revision": "c93b95dbdcec9e83a7c7011517c3cdd0"
  },
  {
    "url": "assets/js/42.5e9a92cb.js",
    "revision": "330a49c28c529130827740b461dcf15e"
  },
  {
    "url": "assets/js/43.15092ef8.js",
    "revision": "a43732897f93eb506533f1d253e4e617"
  },
  {
    "url": "assets/js/44.bdcb495c.js",
    "revision": "5c7c688e837d43f993e66511e0b417e3"
  },
  {
    "url": "assets/js/45.33921315.js",
    "revision": "ffe13cc0d0a637479552364f1420d1f1"
  },
  {
    "url": "assets/js/5.c7114d47.js",
    "revision": "9882ce7b8831345532c80cce38e4b8e9"
  },
  {
    "url": "assets/js/6.87bf1999.js",
    "revision": "105ecca8244dc930f63f54ff5e5f0fbd"
  },
  {
    "url": "assets/js/7.145a66b6.js",
    "revision": "6b5893f5cc82e25335087655f8719e8f"
  },
  {
    "url": "assets/js/8.56d6aaeb.js",
    "revision": "441ee85189a3b76f99355ba7a08973a5"
  },
  {
    "url": "assets/js/9.83ecdb5c.js",
    "revision": "74cadb40647f7a5a344d71c6f3c4d5fb"
  },
  {
    "url": "assets/js/app.84c11a3d.js",
    "revision": "ea7a1e505e4f9c97af84d16e4c9f8ca9"
  },
  {
    "url": "guides/basics/step-by-step.html",
    "revision": "1c2807b6cf4b6b093035536e848ae850"
  },
  {
    "url": "guides/development/configure.html",
    "revision": "435d6c722bcb5bc74c98f13598a73c2c"
  },
  {
    "url": "guides/development/deploy.html",
    "revision": "c5701cb14c417463c1b3b255e60a454e"
  },
  {
    "url": "guides/development/develop.html",
    "revision": "335ddf78143120001ccdcfb72d1893b0"
  },
  {
    "url": "guides/development/publish.html",
    "revision": "ed5fd2dc5f97e8d48930cc8342bac4dc"
  },
  {
    "url": "guides/development/setup.html",
    "revision": "c7bfb188262d7ef989dae57e3ad23c2b"
  },
  {
    "url": "guides/index.html",
    "revision": "e8bad9fe3153e4dfa23672bdba76b187"
  },
  {
    "url": "index.html",
    "revision": "c755fa762878c49cf18055f42744c69d"
  },
  {
    "url": "tips.html",
    "revision": "efeec21e02b98004ee69dda4bb507635"
  },
  {
    "url": "tools/browsers.html",
    "revision": "648985e0a69b898cf5a011f8aaa326ee"
  },
  {
    "url": "tools/cli.html",
    "revision": "e2fd588eb8f161c65fcfe81744cb2cab"
  },
  {
    "url": "tools/db.html",
    "revision": "f16d20b310ebd86b1e5ee1f5f9e7e1ed"
  },
  {
    "url": "tools/documentation.html",
    "revision": "bc5b435e133541018e24e871d25b5bc0"
  },
  {
    "url": "tools/index.html",
    "revision": "2dc66136cbe906fe57e67b028b304897"
  },
  {
    "url": "tools/infrastructure.html",
    "revision": "c06200bf63409054a813facf89681f2a"
  }
].concat(self.__precacheManifest || []);
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
