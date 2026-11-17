const V="rally-radar-v1";
const SHELL=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
const LIBS=["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js","https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js","https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Lato:wght@400;700&display=swap"];
self.addEventListener("install",e=>{e.waitUntil((async()=>{const c=await caches.open(V);await c.addAll(SHELL);await Promise.all(LIBS.map(u=>fetch(u,{mode:"no-cors"}).then(r=>c.put(u,r)).catch(()=>{})))})());self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request,{ignoreSearch:false}).then(hit=>{const net=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==="opaque")){const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp))}return r}).catch(()=>hit);return hit||net}))});
