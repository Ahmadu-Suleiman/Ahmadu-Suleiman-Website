'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ab5480e119eab39f49c350d9aa47d201",
".git/config": "10ea47a4157098f5c7b4818c75bcedd2",
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
".git/index": "63cde649fceaf76fad03fde8533213f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e800512dcb789bc00806d24bcfd92de",
".git/logs/refs/heads/main": "3ed5fbaf3e8ea5f62555f9084d4ea068",
".git/logs/refs/heads/master": "bac6f30980121ded0f9787c238f08731",
".git/logs/refs/remotes/origin/main": "4e514137e92ff5271c9c28a44e4ed8e6",
".git/logs/refs/remotes/origin/master": "feea913572939bb7f1c83be499414170",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/02/ffd5b9dd277053f30f1fa17ec6d4a60ef042fa": "44575981b9f7277e353f2b1b5722a8b6",
".git/objects/0d/0f69ea0399fa45ad6e5791dc402fedf3a1a151": "4fa484b228fdcd91a44c00a131376556",
".git/objects/0d/d006c070faeed72e1cbb3201409f15668e100d": "aa8d01d4ff9a7f76ef7d8bd634052ec0",
".git/objects/0f/a22e6581400393426a3752aa22ba3631ff6a54": "adca70252b1017cdea0f8a8ecee74df9",
".git/objects/12/f2b6c7d1475fe5a3506b8517f0cba76814f82c": "b22f94711bba114fca2ed6792382e6d0",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/22/f046f3fb64bd4d6b48692faa42d42628da9fb9": "59752477abf0c40d900b530857977b75",
".git/objects/23/c7b06e8822a5704ccd4c37014f94b760a4950d": "cdeb5e16749cfaff6154b7fc5ecd04b5",
".git/objects/23/f7b0a7ac94989af8463d11fd7762ccd491612d": "b01dec4f0a27c63012f04a883f42f713",
".git/objects/29/703cfdc85a5af22b5c6f59c3c0dda460607380": "d82aaa89e09ca1df2ed2395de053525f",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/36ac6d255b7f81bb4c4f26048d5dcbd775e1b5": "5557905c8663159949fe7b169dee32c5",
".git/objects/3d/aad20ecd10f406a93735d6a9c40445a4af2e4c": "1e7a2d6bcae560aa224d8e9ef4034541",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/9421f51c7b43f10506abd0cc537eae726df359": "c3dc90d9cf103b61877312526c602841",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/45/e465bf6adde57e20e0eb1c25566a773fa36d11": "3316ce447a8bf9aa9cad6b39f90271fa",
".git/objects/47/4df22156c3bc9494f12d0e8b9439097114d672": "cc1b2194d7894af713e9bcd45fa3c1cc",
".git/objects/49/0989f8728a09b7c1613e860c263d3e30e79f96": "9c67e6c1d4f40dea24b0379ba1dd2fc0",
".git/objects/4a/07ed5c5c8eee6ba9d36eca7c07acf189215652": "158c0b7a7ae2c7cd0135770b0573531a",
".git/objects/4d/82766d190747a5d5438d288f936f5114764759": "7eb9dddbc14ce53a7a8feb9298bc3b1a",
".git/objects/4d/f1555e6f982bdefe51bb08f91494d7801cf0f0": "501df0419b47ce6cb435e6925bcf1a09",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/818eeb89385a5660d14c5f8a619d238ec5dc6e": "773cb2f26e538bafc8cbe0a2df16cb61",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/b025c36a12471e833f3a6d6ee4f0670c0acbe5": "711cfd8efc37d72d7c9f3a8fcdfd5b01",
".git/objects/67/9f5ccb6b82a6519c01edbc790577bd3ead29f9": "c13d1a713921b86d4b3ace97ff62a0ea",
".git/objects/69/cb2a1391369f4ccbda9e0b0527942b91f8be4a": "c822712e3a86741bdfc2d3d722d95b3f",
".git/objects/6a/ab01a010338f46b401b73c3c366e072bd00b83": "8043c686ae1450521af6b5436275805d",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/75/6bb4485f29f56b9837855a148f3f9026be301e": "2956ba929ff8067cf62eaaf4a06fe982",
".git/objects/76/b149f888c1c39cf2af63c3e556d3496f9aea0d": "e612d90597306f66648f737044ec7774",
".git/objects/82/e06d92a8be148070bc6e296e29ec69b2e51169": "e5b998b7f3a884f02a82cdaac98950dd",
".git/objects/88/549eb86a03dbc3824a6631f7342eeb088541f8": "782bd974e0e295c8b8c60ccd449c49af",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/fc675c9ac0218ac8c13198c9a0cc0fa38658b8": "de9c9ae60ae207528652d7324c5a0d70",
".git/objects/8d/1908b8fde1f26812b06c734386b68c6365ae0d": "11f66a47ec8e572315224084630f2801",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/cacefe0743acca40d79307eb2a45f78e25b0ef": "f543ffa9426c887c399bdc733a47ba56",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/97/1c548adec480a406120a379cde7fea71143239": "ab63995aef4a1c870043e2f6f70598f1",
".git/objects/9a/d620e321d40b82ed7bd6b6e13f5b0a6270fc76": "d7750087b5238c236ccb518a14d0416e",
".git/objects/a0/5d50320511f7ecb6076343707068c68d189981": "44d0313f4de415bfc42226b0ff484718",
".git/objects/a4/dac08992d457aea4028f4a158b0c6dc64dbe57": "e85f9097dd837844af7f337037ed2c4e",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/97510c6f8ea02195617d6448a0c3fa63e4f78f": "c35e317d0e0b1f4cd04e75c100f3a6a2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/ba/f686feda292b74847673d6298eaa694c91ca80": "1de4733984bffcd2565ed7ed8bf979a4",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "d782f8a82d795ae96da7df117f4c51bd",
".git/objects/c3/e74150a76e4c8d04891ccd4796d51b9785e4e9": "b83478b01898037ad4ee91c4cf50ea5b",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "963cafb9d7043e8a4b08248318128b18",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/98c40d48b745d1de55983af80e574ba7349fb9": "9e5ea054bc7994e61b850f2d935332e0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/fa/8540561ef9431ac2daceefed912b121017d349": "dbb435be5a7523d05973d1684302ece8",
".git/refs/heads/main": "7285d3ac39064c55181ff420ff77bba7",
".git/refs/heads/master": "7285d3ac39064c55181ff420ff77bba7",
".git/refs/remotes/origin/main": "7285d3ac39064c55181ff420ff77bba7",
".git/refs/remotes/origin/master": "7285d3ac39064c55181ff420ff77bba7",
"app-ads.txt": "6f4a6dc897d7d30f821c71ce12cdbfa3",
"assets/AssetManifest.bin": "a31eb320a75b77d5a6f21f962f3ec263",
"assets/AssetManifest.bin.json": "f57cdea8be4bc26d61e385637fc05311",
"assets/AssetManifest.json": "2609c256b7eb3fda44cfcbeb072b46d2",
"assets/assets/images/logo.png": "538852031080801eb0b08a0471ac1eb1",
"assets/assets/images/me.png": "02bce5c59b213eaf4bbe28b94100b67d",
"assets/assets/images/others/background.png": "ff9d024a5549554bc5121cefacf63b61",
"assets/assets/images/others/kasulogo.png": "85c4b392828d2dee630c8a55e1776c94",
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
"assets/fonts/MaterialIcons-Regular.otf": "90b2458cff01a078ae50cb1feb45e072",
"assets/NOTICES": "0a9393016b85ac78360fe49804546254",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "48aa35141658b3cfd78c29d5e77484ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "d82a9d3861c8f2e3f829076a3682aafa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6b1440525828e8a41fe0ebfb1995811d",
"icons/Icon-192.png": "b8bfa51d511104b4025019247434d231",
"icons/Icon-512.png": "cf15ee7db621fdc21541d7a4742aa86b",
"icons/Icon-maskable-192.png": "b8bfa51d511104b4025019247434d231",
"icons/Icon-maskable-512.png": "cf15ee7db621fdc21541d7a4742aa86b",
"index.html": "b67d2d1163219abb3cc274b9adb00c46",
"/": "b67d2d1163219abb3cc274b9adb00c46",
"main.dart.js": "4875aa1671ab43fa1122a8122621d952",
"manifest.json": "805a47f8a8cacb5e95973263b434b647",
"splash/img/dark-1x.png": "e22547ccd9902407afc960002f197bc7",
"splash/img/dark-2x.png": "62e7cd71d5b1e3da74f121060f758bd0",
"splash/img/dark-3x.png": "0d63ebf07d9add182a1649f56ccb02d4",
"splash/img/dark-4x.png": "a2fbf1aad7cdf9e64be14b372e25a102",
"splash/img/light-1x.png": "e22547ccd9902407afc960002f197bc7",
"splash/img/light-2x.png": "62e7cd71d5b1e3da74f121060f758bd0",
"splash/img/light-3x.png": "0d63ebf07d9add182a1649f56ccb02d4",
"splash/img/light-4x.png": "a2fbf1aad7cdf9e64be14b372e25a102",
"version.json": "bc9342c0c159969e9262d8e5378ff4d3"};
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
