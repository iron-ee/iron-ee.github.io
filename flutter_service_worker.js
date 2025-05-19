'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2ff67286cfc725e73b236d037f670ae5",
"version.json": "c244a3418f94275a0c933d95299305b3",
"index.html": "bd17f64ce3b9dd4dc0ac6795cf15ee9b",
"/": "bd17f64ce3b9dd4dc0ac6795cf15ee9b",
"main.dart.js": "6bd1ca54f52b5014f979316c839e5aa1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "07900924db56dfba3c182c2f3ec83830",
"assets/AssetManifest.json": "e6592f2bc4c926fa7ff7a2954fa03e46",
"assets/NOTICES": "8dd244f7e97213626d5ae1f24260b0c4",
"assets/FontManifest.json": "31d2280ea739b0f7187fbc2824cf1824",
"assets/AssetManifest.bin.json": "d7c87fa56ea36a1ffd9e0c2b72883084",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a6dd9d55b026025804a03a50170c0202",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/ic_visibility_on.svg": "d4efe1b547891aa7f3377fedf8bec63d",
"assets/assets/images/ic_time.svg": "ef7a31e9317011d7d562abddb32f173c",
"assets/assets/images/ic_wav.svg": "5556215b8b682f1d21e497285fe7ea85",
"assets/assets/images/ic_check_box_disable.svg": "29c989a033aec08b779acdf268021813",
"assets/assets/images/ic_file_name.svg": "b5f878b97648bc0bfd029daa007b0062",
"assets/assets/images/ic_goal.svg": "bb81253f741152256d27cb0e864d659c",
"assets/assets/images/ic_more_dot.svg": "f0fdae4d4a5a130f9f2e654a41ce9c57",
"assets/assets/images/ic_file_video.svg": "db79c531686de290305acc98bcfdd894",
"assets/assets/images/ic_upload.svg": "04c7d03d0548897b507b1f310a1fec0a",
"assets/assets/images/ic_warning_triangle.svg": "bc133010779d49da3e53ecc033d24bde",
"assets/assets/images/ic_close.svg": "9a8ef888721f1d2107f26f146c84c64b",
"assets/assets/images/ic_file_upload_rectangle.svg": "f541d74dd5260e8e379ef058b125bd02",
"assets/assets/images/ic_refresh.svg": "fd369380aa026c8ededbdd692c84d69e",
"assets/assets/images/ic_calendar.svg": "7100f78990a0812ff1dadc20410702c8",
"assets/assets/images/ic_file.svg": "cf935d212a096a5aeb81003331549c64",
"assets/assets/images/ic_arrow_left.svg": "3a892db767b12ffc725133207d1a1b86",
"assets/assets/images/ic_write.svg": "2858f1044f5710515eaf01776f00c0d7",
"assets/assets/images/ic_equalizer.png": "3ea76d70225bf0cce692a760a73e5612",
"assets/assets/images/ic_arrow_right.svg": "b1aa3c693be0fa401e2bb463ac7abc6d",
"assets/assets/images/ic_munute_emblem.png": "6c0383e7837e736d2e71014ab5791a8b",
"assets/assets/images/ic_check_box_enable.svg": "e0ba20bfd3893191a76180a0d3bc94c7",
"assets/assets/images/ic_mov.svg": "15d819601ccfb865aa618cb62411307b",
"assets/assets/images/ic_arrow_double_left.svg": "01b6bc936b24e7ffc054baa24ffcc0bc",
"assets/assets/images/ic_warning_circle.svg": "7d98eade7063e10c361642690b91f0c2",
"assets/assets/images/ic_check_circle_done.svg": "b1d0c5b0c06da1d5bec8877b3eee8e1b",
"assets/assets/images/ic_visibility_off.svg": "3d12ae3a7d09f4c783d8ea6563d37d45",
"assets/assets/images/ic_check.svg": "5c9e45567157ba37463e4ac2824718b3",
"assets/assets/images/ic_arrow_down.svg": "2551038cc5c6998bdafef17126e0f1ae",
"assets/assets/images/ic_comment_arrow.svg": "2a82adfd6d70411188eaa03bffdcfd3a",
"assets/assets/images/ic_delete_text.svg": "4be063c4c60dc925d76159d7c3bb3651",
"assets/assets/images/ic_file_music.svg": "1737ca2d025ab5fc21b2aae0cb977537",
"assets/assets/images/ic_arrow_right_up.svg": "5bae965dc05c5cbb0cf8271020b0600c",
"assets/assets/images/ic_check_box_enable_2.svg": "e6cc0dda3fd53d47e2886e5e673068fd",
"assets/assets/images/ic_mp4.svg": "3342e59297b56e09577da6db09561c47",
"assets/assets/images/ic_participant_add.svg": "371e03468900a4ca58400f45d83a1dc8",
"assets/assets/images/logo.svg": "c377d478c58ac893ed94ef5c64590c16",
"assets/assets/images/ic_mp3.svg": "26653fa06c6e5edf4559b1b1200094ef",
"assets/assets/images/ic_arrow_double_right.svg": "96c577990f5114e93a64bd52d77d177a",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
