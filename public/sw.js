if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>a(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/182-142fc9803389b1a3.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/213-423e5ba4e8dff6ca.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/322-bce8204fd088b5b3.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/403-02347665c994d757.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/47-f65d8655f9c93c3f.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/601-5844a55cfb525128.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/648-fb53743a7b3fbd77.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/830-98245d3697328d36.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/85.79d4aa12289a6206.js",revision:"79d4aa12289a6206"},{url:"/_next/static/chunks/886-65587ec7d8996f1c.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/app/_not-found/page-e8e72559e08fde5f.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/app/doctor-register/page-dd7ac1994066813c.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/app/layout-99f325d7b0958899.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/app/list/page-308fb948ca45f172.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/app/page-6f7b1f126ea17070.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/fd9d1056-6d951ce2b13bc6fd.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/main-app-c84b2406357d434b.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/main-de475b5cd0fbb8cc.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-40e6f197d2ea34ad.js",revision:"ybu6nG_cwCa3sMHoR_OAy"},{url:"/_next/static/css/3a5414e1ba7ab28c.css",revision:"3a5414e1ba7ab28c"},{url:"/_next/static/media/YekanBakh-VF.861d3efe.ttf",revision:"861d3efe"},{url:"/_next/static/media/YekanBakhFaNum-VF.7bf1671a.WOFF",revision:"7bf1671a"},{url:"/_next/static/media/YekanBakhFaNum-VF.cb293c33.woff2",revision:"cb293c33"},{url:"/_next/static/media/maeei bg.e88d54e8.png",revision:"8ae1fd66605b942a462e655f7ba101ba"},{url:"/_next/static/ybu6nG_cwCa3sMHoR_OAy/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/ybu6nG_cwCa3sMHoR_OAy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fonts/YekanBakh-VF.ttf",revision:"2ad27993d239c2d2785cea8e51a4a970"},{url:"/fonts/YekanBakhFaNum-VF.WOFF",revision:"2e09a80898124cee6ae15709ee6fcfd9"},{url:"/fonts/YekanBakhFaNum-VF.woff2",revision:"6ecddc21593e4299e236ec98d8676002"},{url:"/icon-192x192.png",revision:"8ddd85dc208e206e53580504dc42cb80"},{url:"/icon-512x512.png",revision:"8ddd85dc208e206e53580504dc42cb80"},{url:"/images/maeei bg.png",revision:"8ae1fd66605b942a462e655f7ba101ba"},{url:"/images/maeei.png",revision:"5215c91440614efecd270459ed707178"},{url:"/manifest.json",revision:"1a7abaafc4765d94b94b93a1c0ff0faf"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
