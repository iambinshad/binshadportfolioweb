'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d4a37d0f626ed43d0595588b978d3d44",
"version.json": "acf6d3dd6fa2fe759a44e1699d0ba0ee",
"index.html": "915692770a3880780ab3a43e33fdf427",
"/": "915692770a3880780ab3a43e33fdf427",
"main.dart.js": "23ff6e46b663b9bc78e6970ee3886014",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "0a8c83aae740b82ba019d458c83bd3b5",
"icons/Icon-192.png": "defaf7bd3f741cb9a143ec03f1788e04",
"icons/Icon-maskable-192.png": "defaf7bd3f741cb9a143ec03f1788e04",
"icons/Icon-maskable-512.png": "26a4aaf773aa319f4a6bd70a15942ed2",
"icons/Icon-512.png": "26a4aaf773aa319f4a6bd70a15942ed2",
"manifest.json": "1703986c3ee281dd1b510c37b468ae87",
"assets/AssetManifest.json": "3df38fb8f3f9a9b8ec83c999386a784a",
"assets/NOTICES": "50ea1c667e7a5effcfbac1ebf535f96a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8f19c1d670e6fc70950d044b0f0ce496",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c439a0861cb9092aeafeb9e6e63cd45b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "44da1545af3e5cc15cb5219033b99b47",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/WhatsApp_Image_2024-09-30_at_10.14.10_AM-removebg-preview%2520(1).png": "de319d333e57b13db27269109e6b7519",
"assets/assets/images/britfort/03-removebg-preview.png": "9e744265729831484f9d03cba86d0513",
"assets/assets/images/britfort/02-removebg-preview.png": "27baffaced4647c66d9420db619847bb",
"assets/assets/images/britfort/01-removebg-preview.png": "6b5184a92dbd48f19975802127a9f4f7",
"assets/assets/images/britfort/04-removebg-preview.png": "e2156b6268ed31fd62ac5236ea2158e5",
"assets/assets/images/partner/image%2520129-1.png": "94a644ef2ed9acf92ee3fccf1198bc37",
"assets/assets/images/partner/image%2520129-2.png": "3a0dd06789e4d76cfb048718eeb5e062",
"assets/assets/images/partner/image%2520129-3.png": "1934a6f4945625bc18063f1a304d8f9d",
"assets/assets/images/partner/image%2520129-4.png": "13e6b45ea66d12f8e175c1584f7d92fa",
"assets/assets/images/partner/image%2520129.png": "aa92bbe7f8ccd858431875efb5201123",
"assets/assets/images/WhatsApp%2520Image%25202024-07-27%2520at%25204.17.46%2520PM.jpeg": "11298fa4b8c9acc1f84d5c7c5b5a6dfe",
"assets/assets/images/beatbox/Group%252021398.png": "92e869d9aff37b8dab778e704aac65c2",
"assets/assets/images/beatbox/Group%252021401.png": "42527f816c5b4a346838a3bfd94c335e",
"assets/assets/images/beatbox/Group%252021400.png": "69e628af0a0c4c1d6d6bd2e08d794d7e",
"assets/assets/images/beatbox/Group%252021399.png": "942b8f1111a7a59e51a926def413e20b",
"assets/assets/images/beatbox/Group%252021402.png": "3d1d49d6c44efa94f525e2a18bad2a08",
"assets/assets/images/beatbox/Group%252021395.png": "759c2bc21c5828fd475761fbcf76b7e8",
"assets/assets/images/cus/image%2520110.png": "e7017c4cc3dd7f72d52b2b70c0d9d2bf",
"assets/assets/images/cus/image%2520122.png": "ec2884e8d24983d8a0a0787b57c627ce",
"assets/assets/images/cus/image%2520123.png": "1fbc870da1d1ea0b149995dabf8116b5",
"assets/assets/images/cus/image%2520121.png": "1aa1fa5a1f19ca32f36bcdf30db7c867",
"assets/assets/images/cus/image%2520120.png": "9bd3f113a186c25b5f3f5df762cbed83",
"assets/assets/images/exe/image%2520129-1.png": "0563a53cbbf9016bcf10d2375cff1526",
"assets/assets/images/exe/image%2520129-2.png": "7f68b193aa37d827c87a20fa57918852",
"assets/assets/images/exe/image%2520129-3.png": "1707baf410063c3fa3f3723b235e3426",
"assets/assets/images/exe/image%2520129-4.png": "06c6f3a5400e838eecdff460b2897348",
"assets/assets/images/exe/image%2520129.png": "a14bde519bc635d72ece8c898b9c305d",
"assets/assets/images/clinic/WhatsApp_Image_2024-09-06_at_3.06.36_PM__2_-removebg-preview.png": "7e6997033905c7b4a36cb38306b25e7c",
"assets/assets/images/clinic/WhatsApp_Image_2024-09-06_at_3.06.36_PM-removebg-preview.png": "b834fa734bdfda71c768dacae55789f8",
"assets/assets/images/clinic/WhatsApp_Image_2024-09-06_at_3.06.36_PM__1_-removebg-preview.png": "5a21879302b959bce4c622658867d040",
"assets/assets/images/smartico/home%2520(1).png": "fe89665ee2165bfe1b7bd3c4f2fecc74",
"assets/assets/images/smartico/msg%2520(1).png": "5c41820bc20849fd3ba6bf9638f54cdd",
"assets/assets/images/smartico/auth%2520(1).png": "3ee53e02d5d93bff4dda1bb42e021ccb",
"assets/assets/images/smartico/detail.png": "d3d2b6ef764efb9af59ce1e3f73ef625",
"assets/assets/images/smartico/orderstatus%2520(1).png": "d40f3a96751ec56ff93c9e7ade24311c",
"assets/assets/icons/game.png": "f0826aa23bac0f8c3ec9b59785cc1498",
"assets/assets/icons/mail.png": "305a49f8f0336c3466b29f985d66610a",
"assets/assets/icons/icon%2520(1).png": "7a3032355fbc9675a8cf7a7eaffc5292",
"assets/assets/icons/github.png": "f3f1142923bf6f754ca2117db5e48976",
"assets/assets/icons/icons.png": "d868608159523ddfa9b3d53cff30078a",
"assets/assets/icons/linkedin.png": "e20ab2aad9d3eee7c957f5030dc23a72",
"assets/assets/icons/playstore.png": "9507a6993ff3ea6d52b96159054295f6",
"assets/assets/icons/computer-keyboard.png": "df903924af820a260078d8a8ff72e5c6",
"assets/assets/icons/social.png": "c73d05083cba1f74054505f85ad45205",
"assets/assets/gif/backgroud_video.gif": "1e9fec6e3160ee5a70834c1daa8ab3ef",
"assets/assets/gif/three_l6vkay.gif": "e6b21d8aab1c36dcbe9e34f8cc42c192",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
