'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "52d7869ab068b99643e5ad4115034d1c",
"assets/assets/home/home_body_back_1.jpg": "368574a0dc48a11d3a10142856bc6c7a",
"assets/assets/home/home_body_comma_back.jpg": "f6a51af9c5db54b652d9053f210d7f22",
"assets/assets/home/home_body_intro_scrollDown.gif": "808204a98748dd88351daf3e17a1a2ff",
"assets/assets/home/home_body_preview_star24.png": "72a8f382bb85ff1add8b9d17a6987165",
"assets/assets/home/home_body_preview_star36.png": "0244224f40144d2196ce025b546e4244",
"assets/assets/home/home_body_service_wave_deep.png": "29d71e9b1f49ff27b8d4ea66cafd50ea",
"assets/assets/home/home_body_service_wave_ori.png": "a10c3a2a58d2c71eb0575a8f26849f37",
"assets/assets/home/home_body_service_wave_pro.png": "041c8c6ca60ff99942b508477b61b1ee",
"assets/assets/home/home_body_strengths_icon1.png": "f24d94ca5ff3d3546920ff7004a350bf",
"assets/assets/home/home_body_strengths_icon2.png": "2794e5b361ced912a1c700a00ecbada1",
"assets/assets/home/home_body_strengths_icon3.png": "5302ee541e3fbe8a25b8d9ec3a39fcbd",
"assets/assets/home/home_body_strengths_icon4.png": "ce6102eb49012e5c30ff695263cd638c",
"assets/assets/logo/Soundplatform_white_large.png": "822926f832da7590d0ec23225acb6989",
"assets/assets/logo/Soundplatform_white_small.png": "ee3a03090fc7e9284955c2a6e80d9d32",
"assets/assets/mastering/mastering_5.jpg": "6b8638a80c5b3eb58add1b464cb4b102",
"assets/font/Akronim-Regular.ttf": "08683c515d3dc8b6f4dec817c8f8d006",
"assets/font/DancingScript-Regular.ttf": "c4434ab21f7144bbcf88c9a35ae3f075",
"assets/font/Festive-Regular.ttf": "6008937a2510d28c5afa2de91840b551",
"assets/font/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/font/VarelaRound-Regular.ttf": "159cb67fc3bc762a8c3232f0a0c6728e",
"assets/font/ZCOOLKuaiLe-Regular.ttf": "1b80e6af9a598372beca579f0ac68dc7",
"assets/FontManifest.json": "796192b23b1300dda90ba42b2a5d56e3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fab7c0019083694590acf0251f9ecb3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b39655cd2581f33d3dd1b950da4313b1",
"/": "b39655cd2581f33d3dd1b950da4313b1",
"main.dart.js": "4c36fd191f2c7302a58288f730b59a56",
"manifest.json": "b9ae5adddaba815bdbff5e9d1570f28e",
"version.json": "a2cb99beb6ea3eaab8f43acbc04235ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
