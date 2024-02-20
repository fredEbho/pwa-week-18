var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'product.js',
    'site.webmanifest',
    'images/Yarn.jpg',
    'images/KittyLitter.jpg',
    'images/Pointer.jpg',
    'images/CatFood_.jpg',
    'images/Cat_house_.jpg',
    'images/images.jpg',
]

self.addEventListener('install', (e) => {
    console.log('[Service worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all files')
            return cache.addAll(cacheFiles);
        })
    )
})
self.addEventListener('fetch', function (e) {
    e.respondWith(
        //check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
            // 'r' is the matching file if it exists in the cache
            return r;
        })
    )
})
