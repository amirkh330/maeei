const staticCacheName = 'my-app-static-v1';
const contentCacheName = 'my-app-content-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then((cache) => {
        // Essential static assets (HTML, CSS, JS)
        return cache.addAll([
          '/', // Index page
          '/styles/globals.css',
          '/app.js',
        ]);
      })
      .then(() => caches.open(contentCacheName))
      .then((cache) => {
        // API endpoints or dynamic content you want to cache
        return cache.addAll([
          '/api/products', // Example API endpoint
        ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Handle static assets (cache-first strategy)
  if (requestUrl.origin === location.origin) { // Same-origin requests
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse; // Use cached version if available
          }
          return fetch(event.request); // Fetch from network if not cached
        })
    );
  } else { // Cross-origin requests
    event.respondWith(fetch(event.request)); // Fetch directly from network
  }

  // Handle API responses (network-first with caching)
  if (requestUrl.pathname.startsWith('/api')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            caches.open(contentCacheName)
              .then((cache) => cache.put(event.request, response.clone()));
          }
          return response;
        })
    );
  }
});


function checkForOfflineData() {
    // Check for stored form data (e.g., using IndexedDB)
    if (storedFormData) {
      // Loop through stored form data
      for (const data of storedFormData) {
        // Send data to your server using fetch API
        fetch('/api/submit-form', {
          method: 'POST',
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              // Clear successfully sent data from storage
              console.log('Form data submitted successfully!');
            } else {
              console.error('Error submitting form data:', response.statusText);
            }
          });
      }
    }
  }
  
  window.addEventListener('online', checkForOfflineData);