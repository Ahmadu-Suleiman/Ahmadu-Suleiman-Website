'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8b56bcd1cf91777083e27fd6c0a1ce2d",
".git/config": "84b7afa7398cc386b67a277bc8873e77",
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
".git/index": "5e466c2d07aea0d1b34469fc401e1c0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c6fbabb46820152e40e1441d279fb6c",
".git/logs/refs/heads/main": "9542afc25858ad463aba5851789f28f8",
".git/logs/refs/remotes/origin/main": "3402d355aeebf2c7fc28a7052082400f",
".git/logs/refs/remotes/origin/master": "23f1ded8c595efce4e1c527140fc9015",
".git/objects/00/8981dfe00c83b02ea1364eb77412e90e1c49ab": "b4188de56db28bbb00cc6d8bce770afb",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/0f69ea0399fa45ad6e5791dc402fedf3a1a151": "4fa484b228fdcd91a44c00a131376556",
".git/objects/12/f2b6c7d1475fe5a3506b8517f0cba76814f82c": "b22f94711bba114fca2ed6792382e6d0",
".git/objects/17/ff9304d9e739bf136bc0a3b04bcdba7ded492a": "1db1c1b1c536e5b411c3de086c483624",
".git/objects/1b/bdffe03888fa60f7a2bb9ae7907eaebd2b7d46": "64b528a385787d07ca57885aae1f1acc",
".git/objects/1d/f1a53283254c69d4525eec4a0ddc4683546fb3": "2ab1157a29bcbb66072518491d01c9bc",
".git/objects/23/c7b06e8822a5704ccd4c37014f94b760a4950d": "cdeb5e16749cfaff6154b7fc5ecd04b5",
".git/objects/23/f7b0a7ac94989af8463d11fd7762ccd491612d": "b01dec4f0a27c63012f04a883f42f713",
".git/objects/25/9b6fb59062bbe6b7b1014b510ca04efab9e574": "97231feb0ab5ed686f915d7250606700",
".git/objects/26/2edb9afdd3b5097ec4dda19c31df56ccdb48e6": "af198cbd6d9efa126280abea0b4f057b",
".git/objects/29/703cfdc85a5af22b5c6f59c3c0dda460607380": "d82aaa89e09ca1df2ed2395de053525f",
".git/objects/29/ee35f7409d91a25358ae430be91de7545b8c0b": "93af905cfd432c9c1b1e02cdcdec9473",
".git/objects/2b/000e65895add62cd5208ce88b35b12d78b4ae0": "d8836ec61f997dde0c772d93aecde30e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/36ac6d255b7f81bb4c4f26048d5dcbd775e1b5": "5557905c8663159949fe7b169dee32c5",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/aad20ecd10f406a93735d6a9c40445a4af2e4c": "1e7a2d6bcae560aa224d8e9ef4034541",
".git/objects/3d/b66d688b86d2f6743b75f1e59d83850209c74a": "305d13d6b638ab4aa74fb13bb7074dad",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/44/8f65ac9571399e10e06dc485c26ad6c834b742": "48048071503b2665124f79b9533701b5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/d2ccd2b5f372cbc57787d9d5513a7280b6ecc7": "3186b7803d5a596ac43cb9f2e1ffe764",
".git/objects/4a/07ed5c5c8eee6ba9d36eca7c07acf189215652": "158c0b7a7ae2c7cd0135770b0573531a",
".git/objects/4d/82766d190747a5d5438d288f936f5114764759": "7eb9dddbc14ce53a7a8feb9298bc3b1a",
".git/objects/4d/f1555e6f982bdefe51bb08f91494d7801cf0f0": "501df0419b47ce6cb435e6925bcf1a09",
".git/objects/52/865dbea0d00abab311383b11456486ad71bb39": "d6400f4f1d6d648b5a3d7e332a7e37c8",
".git/objects/53/58f3e975b2c96737836aee9fcc56a94fbb64c5": "04e5b374b1d6e8ff853be2c9b25a323a",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/b31ebd1036ed4c03dcd1fc8e607b8d353f838b": "3a0dab2e924f8bd735a945cb999633f4",
".git/objects/5b/818eeb89385a5660d14c5f8a619d238ec5dc6e": "773cb2f26e538bafc8cbe0a2df16cb61",
".git/objects/5f/9a1e5b9bdada1c6317dc19d311988fa95c7c28": "e827d91eec7856d93487ef27479cefed",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/61/1716e0bbe01089365be79ecea28681a5bf33da": "b02d3f225e68b600536c1ee0abc9a9cf",
".git/objects/64/d9a69979f0689b37aae7f5ca1c18c94251fe95": "142836534004c80ccc8f609bf842ad3d",
".git/objects/67/a38db6eb6f1a2ad9a45549765be5e295378785": "580cdf4fd3fa96f79ff524f9d20262dc",
".git/objects/69/cb2a1391369f4ccbda9e0b0527942b91f8be4a": "c822712e3a86741bdfc2d3d722d95b3f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/13073ef6d46869cba9f2f7a7f3357b5b52f8d8": "5c9d0b2649088c47490b4c09f3e4c11d",
".git/objects/75/6bb4485f29f56b9837855a148f3f9026be301e": "2956ba929ff8067cf62eaaf4a06fe982",
".git/objects/76/b149f888c1c39cf2af63c3e556d3496f9aea0d": "e612d90597306f66648f737044ec7774",
".git/objects/76/ed4b58a6e87dccc6087e56fb25b6bad44bf157": "1b82ada7ea7f0fe4ec464dc57dbafe4b",
".git/objects/79/c875bb82748b24b5c69120a464e666e4839716": "5dc6b14148dc727729695d2facefdf3d",
".git/objects/7c/adf5c8bc3816f28dbf6092750f18310cccb521": "c49ace408385486ee72a29c34764b04b",
".git/objects/81/1545da656e9b7d40def4075ecb74754721ba79": "0f7eab8eb915dc83ec3f9f463fc051b8",
".git/objects/82/e06d92a8be148070bc6e296e29ec69b2e51169": "e5b998b7f3a884f02a82cdaac98950dd",
".git/objects/83/6e4801d9031e67e4bf6fcfaca45b8bbb0be44b": "aacc9be75f4d002b38f15e075cc7d0b4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/549eb86a03dbc3824a6631f7342eeb088541f8": "782bd974e0e295c8b8c60ccd449c49af",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/8a/8090892040fdc3341f785d42d0a0ddcaeaa602": "3ef92faf628e8b7112a3c68c87d38f9a",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8f/af3db65b211398de3328fa38f70890790e42df": "dd664916fe707d5c01347fd38a1b75a4",
".git/objects/8f/cacefe0743acca40d79307eb2a45f78e25b0ef": "f543ffa9426c887c399bdc733a47ba56",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/1c548adec480a406120a379cde7fea71143239": "ab63995aef4a1c870043e2f6f70598f1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/d620e321d40b82ed7bd6b6e13f5b0a6270fc76": "d7750087b5238c236ccb518a14d0416e",
".git/objects/a0/5d50320511f7ecb6076343707068c68d189981": "44d0313f4de415bfc42226b0ff484718",
".git/objects/a2/4f4aa49e24608c74938c0a171b2a5ab4c1ce28": "010319994e1b7018516868c3dd45945a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/97510c6f8ea02195617d6448a0c3fa63e4f78f": "c35e317d0e0b1f4cd04e75c100f3a6a2",
".git/objects/b0/9cad60a2b02340ddfab5d1624ac863d646d785": "ce46efe02f7c487ea264e9ed6c7a7d99",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b5/de7af3a114195fbb958494d63eccf5a541369d": "6342df3cb921841ab89447750cf5e8d2",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bb/7809dc52f8f4545ef0dac6b69f225e0aac9b6d": "6070c035c99e7e3bc8f1cf76f074791e",
".git/objects/bb/e4611b1d49a135bcf93667df1167c01d09b5cd": "520dd1ad8cd4986bc36842d13c8e7d3f",
".git/objects/bc/aad26df658ee7ffcb2bcb9583fee4f6b401030": "343d5a80e1e4393608f11fe49118f524",
".git/objects/bd/d3c548c2cd6b2cd41b58459532a823486dfff4": "7f83c91412b77963f266242d0f0c8b7a",
".git/objects/c3/e74150a76e4c8d04891ccd4796d51b9785e4e9": "b83478b01898037ad4ee91c4cf50ea5b",
".git/objects/c7/893acac67ef6a4b8cc3af0ccab19ff732556f1": "112d9646ad8b30880969e14dbb630e26",
".git/objects/c7/c48f5ef231e36fadf0fe04217b9fe3fec92426": "5a35a556534c5b2432c0ead1cf0bb36d",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d8/98c40d48b745d1de55983af80e574ba7349fb9": "9e5ea054bc7994e61b850f2d935332e0",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/e6/358d83977eed549ec4dbf992f3d2e5cad96c1b": "da2698215171d856464a56b426327bcc",
".git/objects/e6/3d2c512c70dd9d7efad2dd220be0b5b725a92a": "eda092b4e0abfdbe30ff8ba6bffdcf5c",
".git/objects/f0/7e1c9a6644968418d141530b5c2cbded3883f5": "616ff355f6fad971cceae033755eeb76",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/41008942a8bc286840ea05c29e5e2d92e799fa": "d09a7d01f034f676ed6aad4d7655b8d5",
".git/objects/f6/1fbeedf14610a1ccf05b7b43c02fb11dfbbfd5": "fdd9adf8263ba068fcc59966c8ab6273",
".git/objects/f9/80bc4570a434bf49841f7d6ee131735c695604": "869f4588ce46db03490831df13509ea3",
".git/objects/fa/7eb8b4b98ad758c209d6078f019d0c768ce4a6": "83b4a8d21ed1b5b71813db73ceefbfda",
".git/objects/fc/215debe6f014da93373eb26d0e569fcb6d12af": "b01823cc3212f6a9547ba2d79d240a1f",
".git/refs/heads/main": "77e4d0c0472ba58cc2b81ffb0502590a",
".git/refs/remotes/origin/main": "77e4d0c0472ba58cc2b81ffb0502590a",
".git/refs/remotes/origin/master": "77e4d0c0472ba58cc2b81ffb0502590a",
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
"assets/fonts/MaterialIcons-Regular.otf": "73539f121ac2b0d5b3b967af3c6a6f4f",
"assets/NOTICES": "bfaaeb6fe1b100dada587aa7e7753eba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d4e4589e3a7fbf0c31bc31ae825591a0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d82a9d3861c8f2e3f829076a3682aafa",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5968041965fcc0de89e0a9d484629c10",
"icons/Icon-192.png": "b8bfa51d511104b4025019247434d231",
"icons/Icon-512.png": "cf15ee7db621fdc21541d7a4742aa86b",
"icons/Icon-maskable-192.png": "b8bfa51d511104b4025019247434d231",
"icons/Icon-maskable-512.png": "cf15ee7db621fdc21541d7a4742aa86b",
"index.html": "0e38496e08f043fa3239877fa555167a",
"/": "0e38496e08f043fa3239877fa555167a",
"main.dart.js": "d7c6af9d10f36a568fe1a72ee31f7186",
"manifest.json": "8a8b61fd4a68ec4814caa7ec80511da2",
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
