'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2dc676e22afedb14a8c85f7571d2c31b",
".git/config": "01a4bbc1edbcf588d6b14ea29d1d1d98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aea23bdbe732eddd83cda500f809f176",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff44d632f36f3dc7b233e68bb6354973",
".git/logs/refs/heads/main": "d7f81e678683f9ceb5a6caf541bb9c2b",
".git/logs/refs/remotes/origin/main": "e935297e78f2f9f35c9d98538feb5952",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/08/b441e12acee73ff31fb1fe16e147abc2e1b2d0": "c7d660dd81d175c8710a98870131f4dd",
".git/objects/0b/eab9df1d70667bf7287bf11a15c926b291adb9": "2345b3bddb11bc56478b8e91b008cd50",
".git/objects/0c/d889c7bb3da40825527e7c59eb64595d14aaaf": "32deb85b5ccef33aa19737e368439829",
".git/objects/0d/0f69ea0399fa45ad6e5791dc402fedf3a1a151": "4fa484b228fdcd91a44c00a131376556",
".git/objects/0d/2a4e6089a60496188555e2a2d4eff8743d67be": "24b4ad281ba853309b2e83481844c4b1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/55933044f8feccf5cfd5aa9af33b194d9e68ee": "0d0d1ffa8e48e39ac7db79b51768dd33",
".git/objects/12/f2b6c7d1475fe5a3506b8517f0cba76814f82c": "b22f94711bba114fca2ed6792382e6d0",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/bdffe03888fa60f7a2bb9ae7907eaebd2b7d46": "64b528a385787d07ca57885aae1f1acc",
".git/objects/1e/6c1ff4848f96b4cf2cb6babb00514fe2381792": "c5bb9541e489bc07b17e48532d66b698",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/ca6981d19cfcdb29c94e7fe771749dfd8f36f5": "c9f2df6afe0d0c51c77c74275cf9ee0c",
".git/objects/26/9186fe00b30812d9984d81f569a97a4599c4e9": "8256f28f7f697bf3f54f5d6c525755fb",
".git/objects/29/ee35f7409d91a25358ae430be91de7545b8c0b": "93af905cfd432c9c1b1e02cdcdec9473",
".git/objects/36/6349197221708e27cbc7d85f6e194314bbd68a": "ecff29d7a29cd50ebb01c132c84b6a03",
".git/objects/38/bf0103e3d65c37d3f95179bd97701b92a22fba": "7c81ea03c39a302ee84772d4fcc75a6f",
".git/objects/3b/6638a9c6f224490f988479da74a6f22a05e4c4": "f62d8f90a56f516c9070daab798e6fa5",
".git/objects/3d/eb1b383533d37b3636c46ebdc390264cf94a2e": "95856e7c578faf713f81ccbb3e013925",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/82766d190747a5d5438d288f936f5114764759": "7eb9dddbc14ce53a7a8feb9298bc3b1a",
".git/objects/4d/f1555e6f982bdefe51bb08f91494d7801cf0f0": "501df0419b47ce6cb435e6925bcf1a09",
".git/objects/52/6a96cb7f671bdb37e0b9d2c3a785fe75d74f99": "c997512a68d074776b1d30ddbf2716b9",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5d/f692d7302c0482697a1ae1f19853fc4b0a21df": "32cd821e47e340fd6f7d81d3b3034d4e",
".git/objects/5e/d34c5dfb603c38e08a360447c177538ed382f7": "66681013c08fbefeb4e7cc21878e5f93",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/bb6212d42deeb4f28dddd8d1e0779e6e7ee846": "9976305c088de3095fd6d1b4206acbc9",
".git/objects/6c/290ec7487094a828832ced070f1fadc0423238": "69359cd3efe9433570c5da37558be7c6",
".git/objects/6c/dfef4eca86261f073d881f7dac44a1505a1e29": "16a61432f48b9057397bca25871e028b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/7171f4ff152e6e1cc9c6072b89e58aa525c584": "25e52181500e6c351c667bc09f44c2c4",
".git/objects/76/b149f888c1c39cf2af63c3e556d3496f9aea0d": "e612d90597306f66648f737044ec7774",
".git/objects/79/c875bb82748b24b5c69120a464e666e4839716": "5dc6b14148dc727729695d2facefdf3d",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8f/cacefe0743acca40d79307eb2a45f78e25b0ef": "f543ffa9426c887c399bdc733a47ba56",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/667ec72dd9fbcaf72f5025de884d5e6de86d47": "f817f06f6b9bdf02856d09a1bc03c000",
".git/objects/9f/ec8ad71fd685c17dfe51270bdde77a88070e1e": "e5a6fb3fb92e2f344f7163e80d257f76",
".git/objects/a0/5d50320511f7ecb6076343707068c68d189981": "44d0313f4de415bfc42226b0ff484718",
".git/objects/a2/07d0efec72c0ef3dfde9beeebd7542d956bd55": "6d000ff7fb661faf9b452ffaa35a48cc",
".git/objects/a8/697ab944f2a747821b3f59c9439d45c75f256b": "7069de7b08a36fb3c593032d20fb46a3",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b1/90884d8afe87e65f361a9688a96906956259d6": "334658261afe81fa9e075e0cd6150b52",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b2/6561bbf18a206221136f5ab3383d7ed5d8ac57": "eae668e8ef0a962d302b9cfe52df4104",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/190e9540de2035fa08d3b77ee001127449df4b": "8d663d760acff59f626f9889cabb4e45",
".git/objects/b5/7ee18390c5c87d66fee547ad795031ead369e3": "f33c66e3efa4d41bd1f7d16644b52cb8",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bb/6b1963d62705eee7a488270b11c556b55d90ef": "8c6bb2c527bee6386f244befec896307",
".git/objects/bd/ad2cb62901c06b098ec5bd9dd2c2e11532953d": "8db4a64c8e4b68dc20dae77a2a8586eb",
".git/objects/c7/c48f5ef231e36fadf0fe04217b9fe3fec92426": "5a35a556534c5b2432c0ead1cf0bb36d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/0994a8c06df9afd68f91c2584e7cf6ee002833": "00440c5112a2a363e1ad789d851002f4",
".git/objects/ce/ca9cb4ee28f4cfd3f15dc5caf05da7fb138a11": "898c996ea8db28212c17168ff7a1e7ba",
".git/objects/d0/fc1791f6f4bd206a9a43f2b90c5331becc850d": "929a3a74b999cc634ae27d2eeeb381fd",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/ea/6075e18526e24d36a8d010870e571adb65f0b7": "824d4a8f04f63ac38cc3a3fa0af130a6",
".git/objects/ee/87657d8497ae430c6c2ecdac2a0e207b06bbdd": "8c62c110fe4e54d5d4e24cc9208b4f13",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/c954589f8a1685ceb64aafce230c58eb503b43": "5372c72d16672a23190ffe2a0b47a261",
".git/objects/fa/38462f747f250533d5b8e3aefe9786cf1ca56e": "c6c947c688006dcc042eccd03644a269",
".git/objects/fa/7eb8b4b98ad758c209d6078f019d0c768ce4a6": "83b4a8d21ed1b5b71813db73ceefbfda",
".git/refs/heads/main": "11f9521baa6f5846b9fef717b5fb3158",
".git/refs/remotes/origin/main": "11f9521baa6f5846b9fef717b5fb3158",
"app-ads.txt": "6f4a6dc897d7d30f821c71ce12cdbfa3",
"assets/AssetManifest.bin": "efe2f022886cfdb01dc8f41acece823d",
"assets/AssetManifest.bin.json": "83e61bcb486a1b18cb3de47752d7ba39",
"assets/AssetManifest.json": "a8424f1827e557dc3790a681bfc7b8a2",
"assets/assets/fld_screenshots/0.png": "9c9e78aeeee1e9006022a678b47a6089",
"assets/assets/fld_screenshots/1.png": "67986f6ff9c187315433ea8b4aeb2db7",
"assets/assets/fld_screenshots/2.png": "5a75a109f75952c32c109985f23809de",
"assets/assets/fld_screenshots/3.png": "6d15463a056cb53b5a43d6b2381639db",
"assets/assets/fld_screenshots/4.png": "699c870876f5d0dd54ed8a4662e63843",
"assets/assets/images/fld%2520logo.png": "acd9203a93735ebf69235b9ed1cf896e",
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
"assets/NOTICES": "b5c5b0191ae9060b5b54e8b687161b56",
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
"favicon.png": "dc82e02f2b38f6f0122ed53d421b3045",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "787c1e1aadb33adb68b06e7f6dacee49",
"icons/Icon-192.png": "ad446c311c13c0c3436744d96205b0e7",
"icons/Icon-512.png": "9329cfa651c83148bc2ea3718684247c",
"icons/Icon-maskable-192.png": "ad446c311c13c0c3436744d96205b0e7",
"icons/Icon-maskable-512.png": "9329cfa651c83148bc2ea3718684247c",
"index.html": "27b60f4eb1cbca79257abcf28826927e",
"/": "27b60f4eb1cbca79257abcf28826927e",
"main.dart.js": "c4544879dca010a5f46aa0ee4fee938a",
"manifest.json": "0c6edb84f0b2d39337670ce507ebd561",
"version.json": "54e79c4092f48fd83e2d4f3e54bc9064"};
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
