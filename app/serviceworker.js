// public/sw.js (optional)
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';

registerRoute(
    "https://maeei.vercel.app/api/doctor-register", // Replace with your API endpoint
  new NetworkFirst({
    cacheName: 'form-submissions',
    plugins: [
      // ...caching plugins (optional)
    ],
  })
);

// ...other Service Worker logic
