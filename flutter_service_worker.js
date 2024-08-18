'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "88d2cfd4335179ec606e77c4b64e2555",
"assets/AssetManifest.bin.json": "1db368e0a2258aa20f12adf91fa8c4ca",
"assets/AssetManifest.json": "b0cc3bd4cfc5a4d25eb624f843c7c6d0",
"assets/assets/app_images/app_image.png": "8af78ce00a54101cde1c62a98d698920",
"assets/assets/app_images/Untitled%2520design%2520(1).png": "3da8b1694e5dcdaaec18a23323ab8625",
"assets/assets/app_images/WhatsApp%2520Image%25202024-04-18%2520at%25202.41.24%2520PM.jpeg": "8318ad1f18926a871b1c130a4b363baf",
"assets/assets/background_img/hqdefault.jpg": "10b11eb72f9844e4016d45f58f908620",
"assets/assets/background_img/indian-farmer-using-smartphone-agriculture-field%2520(1).jpg": "d9c0e95a6f343b653b15bf63c56faee0",
"assets/assets/background_img/medium-shot-agronomists-taking-picture-strawberry-with-digital-tablet_11zon.jpg": "fe465a6cd5f573491b7b5e2167d196ac",
"assets/assets/background_img/Screenshot%2520(279).png": "d706c3099f15cec656f925c338a868e1",
"assets/assets/background_img/Screenshot%2520(280).png": "c11f0ac5dfa8b1d3bacff95503af5a99",
"assets/assets/background_img/Screenshot%2520(281).png": "3e528a5e485657c662764bc1155446bf",
"assets/assets/background_img/Screenshot%2520(282).png": "54b01b8db2ce440002f0dd7ecd516686",
"assets/assets/background_img/shutterstock_1689558058.jpg": "7ce8c9c57dfdefb1dfd2dedf8ca805c9",
"assets/assets/background_img/side-view-woman-holding-some-tomatoes%2520(1).jpg": "fce5522b2164c612dd08a1b499155ab3",
"assets/assets/background_img/top-view-arrangement-with-grains-bags%2520(1).jpg": "0a74273918f37f95356eaae4d40d65d3",
"assets/assets/background_img/Untitled%2520%25E2%2580%2591%2520Made%2520with%2520FlexClip%2520(1).gif": "50538408e5f76c9e09eb935eea09c07f",
"assets/assets/background_img/Untitled%2520design%2520(3).png": "08310f0bfe966f503b68f5af6c963e34",
"assets/assets/background_img/various-grains-bags%2520(1).jpg": "b2c75c7de23588bc1d1dca247d65de1d",
"assets/assets/icons/178364778_4592a439-667d-4be7-8ac2-850b2acbaffe.svg": "2050e0618bd8178e98d4a39f204748d4",
"assets/assets/icons/270632354_7206b204-e62e-48ee-a3ea-6e14df587043.svg": "c573a76e3a19fb6c589ae48620eb9a65",
"assets/assets/icons/3139632_37521.svg": "fcbf2c1382bb349cfc5ba6f6f5a254c7",
"assets/assets/icons/circular-nature-leaves-with-fork-spoon-inside.png": "6a9358cd10e2bec6f2b25cf8a250cea8",
"assets/assets/icons/ecologo.png": "8823f2a6464d40a6c477f15ab708ad29",
"assets/assets/icons/f53ceaae-30b4-4916-8f1a-7ffe07b62b9b.jpg": "34737773f280a4f1db6e5e9ed12f8c31",
"assets/assets/icons/facebook.svg": "4a91d4f59e4347bea60d2a828f5d9045",
"assets/assets/icons/icon.png": "e768af95fa4afcd5e12357a41f75c317",
"assets/assets/icons/linkdin.svg": "b0886709346dae32792ad75dabc5e56d",
"assets/assets/icons/location_icon.png": "2aae3f00fa3d4a0bbae14959573bab5f",
"assets/assets/icons/pixelcut-export%2520(2).png": "b6d56386cbf647844ff2fefb60a309d2",
"assets/assets/icons/pixelcut-export%2520(4).jpeg": "a7f2beff9834cee761a0fdb8cce7406b",
"assets/assets/icons/play_button.png": "d747312579f2dcd06157b381274c71ba",
"assets/assets/icons/raitha_sahayak.png": "79c0e355942f8939b0e80303ab0565ab",
"assets/assets/icons/shield_check_mark_gradient.jpg": "074a655f252e24a1668536a5aa47121e",
"assets/assets/icons/twitterx.svg": "65bf079142c97a6dbc378458b3817b42",
"assets/assets/icons/whatsapp.svg": "dc618c89bef349ce1c87266568d90aa7",
"assets/assets/icons/youtube.svg": "be05a3c2b5eaf92dbf457f44feabea00",
"assets/assets/team/DSC_0024.jpg": "c788938eef917c95eae2d4fc5c320384",
"assets/assets/team/PPR_5045.JPG": "68d0d3703c39e6e7ec4da2747187702a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0b93f7fd0c9dec576675151e3b41de55",
"assets/NOTICES": "1c8d9a62ad13548c6db5b07d3e127c20",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3c8704c1920dc132ccecba2048f87c99",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d404f96e76a6cb09a1e85ec0ca5ee3b",
"/": "4d404f96e76a6cb09a1e85ec0ca5ee3b",
"main.dart.js": "6b5ec31443a8a3b4a5568a4897ae50c8",
"manifest.json": "4cec560160beb4330162b847ab7988be",
"version.json": "b9d900410f4aa3d812c623ad9471da7c"};
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
