if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b994f779"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/index-D9p8NTAi.css",revision:null},{url:"assets/js/index-D3XZ82S-.js",revision:null},{url:"index.html",revision:"1d47854808db33955f57169f8ea4963a"},{url:"registerSW.js",revision:"68494f0a2decd232bc80bd1995f308bb"},{url:"manifest.webmanifest",revision:"852446f930f2e95725e8cd96874a0181"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*\.(?:mp4|webm|ogg)$/,new e.CacheFirst({cacheName:"video-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
