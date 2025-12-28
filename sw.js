const CACHE_NAME = 'rooted-snohomish-cache';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './about.html',
  './submit-resource.html',
  './style.css',
  './app.js',
  './resources.js',
  './map.html',
  './map.js',
  './manifest.json'
];

// Install Event - Cache Files
self.addEventListener('install', event => {
  // Force this new service worker to become the active service worker
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
  // Take control of all pages immediately
  event.waitUntil(clients.claim());

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event - Network First, fall back to Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If we got a valid response, clone it and update the cache
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
      .catch(() => {
        // Network failed, try to serve from cache
        return caches.match(event.request);
      })
  );
});
