'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"Ahmadu-Suleiman.github.io/.git/config": "01a4bbc1edbcf588d6b14ea29d1d1d98",
"Ahmadu-Suleiman.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Ahmadu-Suleiman.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Ahmadu-Suleiman.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Ahmadu-Suleiman.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Ahmadu-Suleiman.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Ahmadu-Suleiman.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Ahmadu-Suleiman.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Ahmadu-Suleiman.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Ahmadu-Suleiman.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Ahmadu-Suleiman.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Ahmadu-Suleiman.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Ahmadu-Suleiman.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Ahmadu-Suleiman.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Ahmadu-Suleiman.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Ahmadu-Suleiman.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Ahmadu-Suleiman.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Ahmadu-Suleiman.github.io/.git/index": "339f78cd5be45c921e469aeb5dbbd923",
"Ahmadu-Suleiman.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Ahmadu-Suleiman.github.io/.git/logs/HEAD": "865d173dd1e5899d4839c7d34e69ec2b",
"Ahmadu-Suleiman.github.io/.git/logs/refs/heads/main": "865d173dd1e5899d4839c7d34e69ec2b",
"Ahmadu-Suleiman.github.io/.git/logs/refs/remotes/origin/HEAD": "865d173dd1e5899d4839c7d34e69ec2b",
"Ahmadu-Suleiman.github.io/.git/objects/pack/pack-b0ce2bde72113145712d11f1582b903016336b82.idx": "9f0365de1e31e3af463ffe85e875c038",
"Ahmadu-Suleiman.github.io/.git/objects/pack/pack-b0ce2bde72113145712d11f1582b903016336b82.pack": "a1d5f373ecd0ed84c4a766d5ce5794f7",
"Ahmadu-Suleiman.github.io/.git/objects/pack/pack-b0ce2bde72113145712d11f1582b903016336b82.rev": "a154ac969ef67cb570e98335b4b51e40",
"Ahmadu-Suleiman.github.io/.git/packed-refs": "9d00b77ba5529bcf451adc82a3495ac6",
"Ahmadu-Suleiman.github.io/.git/refs/heads/main": "f2330708e845905988e41ca348f104e7",
"Ahmadu-Suleiman.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Ahmadu-Suleiman.github.io/app-ads.txt": "6f4a6dc897d7d30f821c71ce12cdbfa3",
"Ahmadu-Suleiman.github.io/assets/AssetManifest.bin": "efe2f022886cfdb01dc8f41acece823d",
"Ahmadu-Suleiman.github.io/assets/AssetManifest.bin.json": "83e61bcb486a1b18cb3de47752d7ba39",
"Ahmadu-Suleiman.github.io/assets/AssetManifest.json": "a8424f1827e557dc3790a681bfc7b8a2",
"Ahmadu-Suleiman.github.io/assets/assets/fld_screenshots/0.png": "9c9e78aeeee1e9006022a678b47a6089",
"Ahmadu-Suleiman.github.io/assets/assets/fld_screenshots/1.png": "67986f6ff9c187315433ea8b4aeb2db7",
"Ahmadu-Suleiman.github.io/assets/assets/fld_screenshots/2.png": "5a75a109f75952c32c109985f23809de",
"Ahmadu-Suleiman.github.io/assets/assets/fld_screenshots/3.png": "6d15463a056cb53b5a43d6b2381639db",
"Ahmadu-Suleiman.github.io/assets/assets/fld_screenshots/4.png": "699c870876f5d0dd54ed8a4662e63843",
"Ahmadu-Suleiman.github.io/assets/assets/images/fld%2520logo.png": "acd9203a93735ebf69235b9ed1cf896e",
"Ahmadu-Suleiman.github.io/assets/FontManifest.json": "8aed64847c8f1c3c15e0fc7080bfaee5",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-BlackItalic.ttf": "047217f671c9e0849c97d43e26543046",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"Ahmadu-Suleiman.github.io/assets/fonts/Lato-ThinItalic.ttf": "2b26bc77c3f9432c9d4ca4911520294d",
"Ahmadu-Suleiman.github.io/assets/fonts/MaterialIcons-Regular.otf": "1e478c7dd88a8a58a4d47ca6dcf83cc0",
"Ahmadu-Suleiman.github.io/assets/NOTICES": "17401c1b871e0803bb778e51ea151a56",
"Ahmadu-Suleiman.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"Ahmadu-Suleiman.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d4e4589e3a7fbf0c31bc31ae825591a0",
"Ahmadu-Suleiman.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"Ahmadu-Suleiman.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"Ahmadu-Suleiman.github.io/assets/packages/wakelock_plus/assets/no_sleep.js": "9c3aa3cd0b217305aa860decab3d9f42",
"Ahmadu-Suleiman.github.io/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"Ahmadu-Suleiman.github.io/canvaskit/canvaskit.js": "4d65242fccdb38953e45f906580087a5",
"Ahmadu-Suleiman.github.io/canvaskit/canvaskit.js.symbols": "68b4c27088ca664bd398c84602f6de11",
"Ahmadu-Suleiman.github.io/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"Ahmadu-Suleiman.github.io/canvaskit/chromium/canvaskit.js": "9fc614fc55d9c852d4cb69570e9eb2fa",
"Ahmadu-Suleiman.github.io/canvaskit/chromium/canvaskit.js.symbols": "6d72c539b91c938625180cd26d5af7c7",
"Ahmadu-Suleiman.github.io/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"Ahmadu-Suleiman.github.io/canvaskit/skwasm.js": "01111146932af09cee166932d1a83d3c",
"Ahmadu-Suleiman.github.io/canvaskit/skwasm.js.symbols": "ae71f1f1dabb12c89961a6be7d646b79",
"Ahmadu-Suleiman.github.io/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"Ahmadu-Suleiman.github.io/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"Ahmadu-Suleiman.github.io/favicon.png": "dc82e02f2b38f6f0122ed53d421b3045",
"Ahmadu-Suleiman.github.io/flutter.js": "5bc83814f3f68c3e5f8f6b6bdeab1f50",
"Ahmadu-Suleiman.github.io/flutter_bootstrap.js": "99e1fb50c235017b5d7ee63a121515df",
"Ahmadu-Suleiman.github.io/icons/Icon-192.png": "ad446c311c13c0c3436744d96205b0e7",
"Ahmadu-Suleiman.github.io/icons/Icon-512.png": "9329cfa651c83148bc2ea3718684247c",
"Ahmadu-Suleiman.github.io/icons/Icon-maskable-192.png": "ad446c311c13c0c3436744d96205b0e7",
"Ahmadu-Suleiman.github.io/icons/Icon-maskable-512.png": "9329cfa651c83148bc2ea3718684247c",
"Ahmadu-Suleiman.github.io/index.html": "0322007c5a2a66352b54619fca2898b2",
"Ahmadu-Suleiman.github.io/main.dart.js": "d32f781f11ace5fe4cc8be67eea509e2",
"Ahmadu-Suleiman.github.io/manifest.json": "b14f40b7d9a407e183850537c58dd7ce",
"Ahmadu-Suleiman.github.io/version.json": "54e79c4092f48fd83e2d4f3e54bc9064",
"app-ads.txt": "6f4a6dc897d7d30f821c71ce12cdbfa3",
"assets/AssetManifest.bin": "1ad842dcdbd83a1089604a46550e3b40",
"assets/AssetManifest.bin.json": "72630d940fd659411b0411b38112f717",
"assets/AssetManifest.json": "fc3bc86f6bd7b64811ebe38e12b534b3",
"assets/assets/images/fld%2520logo.png": "acd9203a93735ebf69235b9ed1cf896e",
"assets/assets/images/logo.png": "83fd7388cfd308ca45d0c0a527beb1e9",
"assets/assets/images/me.png": "02bce5c59b213eaf4bbe28b94100b67d",
"assets/FontManifest.json": "8aed64847c8f1c3c15e0fc7080bfaee5",
"assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/fonts/Lato-BlackItalic.ttf": "047217f671c9e0849c97d43e26543046",
"assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/fonts/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/fonts/Lato-ThinItalic.ttf": "2b26bc77c3f9432c9d4ca4911520294d",
"assets/fonts/MaterialIcons-Regular.otf": "1e478c7dd88a8a58a4d47ca6dcf83cc0",
"assets/NOTICES": "f5123ef677d2abb90e831ab85d66ed4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d4e4589e3a7fbf0c31bc31ae825591a0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"favicon.png": "4bee5daac975b55c5870668421d9c756",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3afaa0757b8751a8cd6bc7ed415c89f1",
"icons/Icon-192.png": "473441df5c0a5a9369c15bd8dea6e2be",
"icons/Icon-512.png": "58207acec11adb84299a71d476bcd1a1",
"icons/Icon-maskable-192.png": "473441df5c0a5a9369c15bd8dea6e2be",
"icons/Icon-maskable-512.png": "58207acec11adb84299a71d476bcd1a1",
"index.html": "0e38496e08f043fa3239877fa555167a",
"/": "0e38496e08f043fa3239877fa555167a",
"main.dart.js": "c024e742876479982301140ffeec3060",
"manifest.json": "487d2f79e0dd7578b1f447dc7e4b7c49",
"version.json": "7e6b7a7096424bf9f73b183809f4dc2f"};
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
