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
    "revision": "1647ab488ecbb06a6deb681cf159a77a"
  },
  {
    "url": "about/contact.html",
    "revision": "e5a5b55001f691bf62ce48856434be3b"
  },
  {
    "url": "about/contributing.html",
    "revision": "28e394947e3b24e8a68cee2c8d3122fa"
  },
  {
    "url": "about/index.html",
    "revision": "2fbe8088924dc073697d65ede0f7f3d9"
  },
  {
    "url": "about/license.html",
    "revision": "3962f0db8cd7c97b258254916b0d5343"
  },
  {
    "url": "about/roadmap.html",
    "revision": "774715f52cb0ad113be3c40fac23c5b1"
  },
  {
    "url": "api/core/application.html",
    "revision": "aba7aac9ea5b2f04f8dea868e20366b5"
  },
  {
    "url": "api/core/components.html",
    "revision": "b47cd340655fd279faeaa0644a91212c"
  },
  {
    "url": "api/core/hooks.html",
    "revision": "0b20d185122d57e7cf35b543f62136c4"
  },
  {
    "url": "api/core/index.html",
    "revision": "35d4598c84ec213738e366c16e372e0b"
  },
  {
    "url": "api/core/mixins.html",
    "revision": "77ce910d3ef80546fc984203b59e93f0"
  },
  {
    "url": "api/core/services.html",
    "revision": "f06a1ab0b41da0cbbef8b9fe0f62c055"
  },
  {
    "url": "api/index.html",
    "revision": "eb248b805a35747526bc3d0929785a60"
  },
  {
    "url": "api/map/components.html",
    "revision": "eb08be24ed775e8fa2f1d61cf828afd9"
  },
  {
    "url": "api/map/globe-mixins.html",
    "revision": "56b064ba350586f73f9d5378a3af84e6"
  },
  {
    "url": "api/map/hooks.html",
    "revision": "4fff4587aa38af252303b48622bce629"
  },
  {
    "url": "api/map/index.html",
    "revision": "2f789552cbfd99df1da4f3d5b5e1aa12"
  },
  {
    "url": "api/map/map-mixins.html",
    "revision": "5b672441546e6d4e5b365a325c9e86ff"
  },
  {
    "url": "api/map/mixins.html",
    "revision": "e5ddc7d61b9f443431e962dea9d7fb12"
  },
  {
    "url": "api/map/services.html",
    "revision": "f0d2499cf330ef6af0285b5cf4f726e8"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "daf845d23e4d20b91e631481f46a4b57"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "daadf8f4525a38bc94197b9230602538"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "ced3f25c07f10feeb01ce2e16c261736"
  },
  {
    "url": "architecture/index.html",
    "revision": "cfb79fe124036b7330985fe5c114dceb"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "361fbbc6985fa7540d67d90b4661bd53"
  },
  {
    "url": "assets/css/0.styles.d338d316.css",
    "revision": "6fc5034b17fcea0914076f16b2ba26aa"
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
    "url": "assets/img/application-hooks.e15ca2e0.svg",
    "revision": "e15ca2e0e0ce1b30ac2716348e14cc33"
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
    "url": "assets/img/timeseries.370f7197.png",
    "revision": "370f7197130302dce62fdcd4d3be49ea"
  },
  {
    "url": "assets/img/users-data-model.e037f5f6.svg",
    "revision": "e037f5f6dd66241e355c8f7b559237e4"
  },
  {
    "url": "assets/js/10.4b367e32.js",
    "revision": "ba5a01eeb9aac05112e050574f9a482f"
  },
  {
    "url": "assets/js/11.efd8aceb.js",
    "revision": "17100ea435b6e4750086ebadf644556e"
  },
  {
    "url": "assets/js/12.3890906e.js",
    "revision": "2588849b16f011e3fd91bcd9cd72022d"
  },
  {
    "url": "assets/js/13.c21cd57d.js",
    "revision": "415f93d682b888613a84cfc7d80fc1e9"
  },
  {
    "url": "assets/js/14.7a3d3938.js",
    "revision": "2c2ea4144369b760f1c45a5ab938e62c"
  },
  {
    "url": "assets/js/15.2ea31af5.js",
    "revision": "32585f5c65cd5df046b05a0cada8b624"
  },
  {
    "url": "assets/js/16.39ef36aa.js",
    "revision": "d6fbf8313f3de97d3b4bc01d7868f829"
  },
  {
    "url": "assets/js/17.f62a4f6b.js",
    "revision": "94c25bc6dde54b39223370f26dc9134d"
  },
  {
    "url": "assets/js/18.0878dbfa.js",
    "revision": "37f50d93649a21f5c0a7dbbe4d48e0e5"
  },
  {
    "url": "assets/js/19.1a6ccc4b.js",
    "revision": "9aa2b0e29cc2dcb29e06aeb151842acb"
  },
  {
    "url": "assets/js/2.deee2b8b.js",
    "revision": "ad87f5efdb57f9bc4e80a8542842d240"
  },
  {
    "url": "assets/js/20.813b16ff.js",
    "revision": "6e5fcf10aa1dfd02967d77b182b606a7"
  },
  {
    "url": "assets/js/21.22a499ee.js",
    "revision": "8f1845fa201860ece3cae9b5ca62de7c"
  },
  {
    "url": "assets/js/22.48a5d9c1.js",
    "revision": "3ce12084eb0ccd6a92b54b067633b51b"
  },
  {
    "url": "assets/js/23.4707dbff.js",
    "revision": "234a69426aa6d7a58c359c5e71890e47"
  },
  {
    "url": "assets/js/24.824ae611.js",
    "revision": "c99a9dcef9a7701de928c0d680e929b3"
  },
  {
    "url": "assets/js/25.18688935.js",
    "revision": "8be279d94766d99f66604f8a09c90540"
  },
  {
    "url": "assets/js/26.c1de103c.js",
    "revision": "b082266b052ceb3de9c6151b6a1bedc0"
  },
  {
    "url": "assets/js/27.f5f9d776.js",
    "revision": "fd4f70e195ed793c530e7edc9126a0ce"
  },
  {
    "url": "assets/js/28.eefe9272.js",
    "revision": "20f095949afea739865dc8769e5cd7bf"
  },
  {
    "url": "assets/js/29.f11e7882.js",
    "revision": "5de1a527a2716148a0c407c8e450a06d"
  },
  {
    "url": "assets/js/3.e14f8819.js",
    "revision": "a9a0f89e46443e92ba377667e4bec978"
  },
  {
    "url": "assets/js/30.0999cc41.js",
    "revision": "8137664c916e9fd04cac34c21f576274"
  },
  {
    "url": "assets/js/31.e6033c0a.js",
    "revision": "00c06a29c6f21c4dfabbfea0441e8e30"
  },
  {
    "url": "assets/js/32.920a3c95.js",
    "revision": "593c804708ca9dac5301575cb92e4dc7"
  },
  {
    "url": "assets/js/33.28443a0b.js",
    "revision": "14625a61f9dd4a94c4bfccb718e0404f"
  },
  {
    "url": "assets/js/34.97fee52f.js",
    "revision": "d8671874fd8bda4066cd1cdab0384a7b"
  },
  {
    "url": "assets/js/35.1635ae4d.js",
    "revision": "eddc9af3f7082e9bac025d6e7133b2bb"
  },
  {
    "url": "assets/js/36.95a163bd.js",
    "revision": "7fe6908f8c301c4dfadd3ac6c42c36de"
  },
  {
    "url": "assets/js/37.d2e8e7a1.js",
    "revision": "a78b2b7d57412839bca68d15288900c8"
  },
  {
    "url": "assets/js/38.943cd4d1.js",
    "revision": "f19a3af739914040b0344b22bcd99ff3"
  },
  {
    "url": "assets/js/39.79d9ea8a.js",
    "revision": "81f352e351f50449f42c53ed641e015e"
  },
  {
    "url": "assets/js/4.f9ee2bfb.js",
    "revision": "0c62c4479d5a964d8672f40b36027bd9"
  },
  {
    "url": "assets/js/40.da9fd38e.js",
    "revision": "68c426de6706f6a552176f26c968ab5c"
  },
  {
    "url": "assets/js/41.ae726b12.js",
    "revision": "3f734c31b79d469d7307b6886da631fb"
  },
  {
    "url": "assets/js/42.5dbd2b72.js",
    "revision": "20ad3d6c1057defb471290de06a9acf7"
  },
  {
    "url": "assets/js/43.07172685.js",
    "revision": "bd40b4cacdc28e193c3f665dffe2a278"
  },
  {
    "url": "assets/js/44.4fca58e6.js",
    "revision": "5b8e7d6edba59b4a7fab91061d374141"
  },
  {
    "url": "assets/js/45.36180ed1.js",
    "revision": "4553fbcd9fed9cae79bd90d635fda29f"
  },
  {
    "url": "assets/js/46.0babb81b.js",
    "revision": "05e26cd8bcde37093060e987750e675d"
  },
  {
    "url": "assets/js/47.65a69d15.js",
    "revision": "f6e1371b3ce3832b25ec2989f70ccb5f"
  },
  {
    "url": "assets/js/48.8049299d.js",
    "revision": "5f2d5bae90832424eb27177efe31a889"
  },
  {
    "url": "assets/js/49.feaf7c96.js",
    "revision": "6513ca4a19646bb504e33a3cd52a7b1e"
  },
  {
    "url": "assets/js/5.70125bb4.js",
    "revision": "4b98f0ed7a89fbb4054c4a747e96afae"
  },
  {
    "url": "assets/js/50.8494501e.js",
    "revision": "de283bb8775bc1e425c51813025bd2ee"
  },
  {
    "url": "assets/js/51.4e5a7213.js",
    "revision": "8e90daa6a1680780cb7dcd83d21111a6"
  },
  {
    "url": "assets/js/52.02579dd3.js",
    "revision": "7dce42bcc4e7eac616330282c2423474"
  },
  {
    "url": "assets/js/6.79d871bb.js",
    "revision": "6d790b982d02d82ab6ad894d500de100"
  },
  {
    "url": "assets/js/7.53dc5e32.js",
    "revision": "3fa197f9c6e1bd148e24d20afbc59582"
  },
  {
    "url": "assets/js/8.63952efe.js",
    "revision": "a0ea7d86215a372c23c14314773105f9"
  },
  {
    "url": "assets/js/9.cdfb28c3.js",
    "revision": "56da009fabcfd21503e7020a90278ce7"
  },
  {
    "url": "assets/js/app.1826e8c0.js",
    "revision": "80b3fe3daa2ed7b78e0b4f3aee33dae3"
  },
  {
    "url": "guides/basics/step-by-step.html",
    "revision": "19fac6e0faa9b395eea942c20740360f"
  },
  {
    "url": "guides/development/configure.html",
    "revision": "c97b34a1ea04d967a14f40d8297a9182"
  },
  {
    "url": "guides/development/deploy.html",
    "revision": "7712514c6e74688bd727e16907591315"
  },
  {
    "url": "guides/development/develop.html",
    "revision": "e7f249ce1c0a8f6849f613de0944fb54"
  },
  {
    "url": "guides/development/publish.html",
    "revision": "7bf1d93d3d2c4f5be3aa7953194151a2"
  },
  {
    "url": "guides/development/setup.html",
    "revision": "d0c21f18b326122664393824b1f0d9e0"
  },
  {
    "url": "guides/index.html",
    "revision": "3c13b576a7b0f144e1c5092f0903d5b0"
  },
  {
    "url": "index.html",
    "revision": "c8c8663b910a77ef3ab60b310de7ce4f"
  },
  {
    "url": "tips.html",
    "revision": "790e2c68bb88fd5d9074c0a330f59e17"
  },
  {
    "url": "tools/browsers.html",
    "revision": "99aab2171e72e1b861d3624de39d25d0"
  },
  {
    "url": "tools/cli.html",
    "revision": "0a9b94f4869c29d049daed1f38c58482"
  },
  {
    "url": "tools/db.html",
    "revision": "d6d814d2c0556b373b5ed81be5b2d329"
  },
  {
    "url": "tools/documentation.html",
    "revision": "a3efd8f87c56c294a8dff73001c33877"
  },
  {
    "url": "tools/index.html",
    "revision": "9323e3c6a33b8fc21dc462a8229894c0"
  },
  {
    "url": "tools/infrastructure.html",
    "revision": "715629d659e23c776801b9aea532dc7b"
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
