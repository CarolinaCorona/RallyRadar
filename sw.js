const V="rally-radar-v5";
const SHELL=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./firebase-config.js"];
const FB="https://www.gstatic.com/firebasejs/10.12.2/";
const LIBS=["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js","https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js","https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Lato:wght@400;700&display=swap",FB+"firebase-app-compat.js",FB+"firebase-auth-compat.js",FB+"firebase-firestore-compat.js"];
const HOSTS=["cdnjs.cloudflare.com","fonts.googleapis.com","fonts.gstatic.com","www.gstatic.com"];
self.addEventListener("install",e=>{e.waitUntil((async()=>{const c=await caches.open(V);await c.addAll(SHELL);await Promise.all(LIBS.map(u=>fetch(u,{mode:"no-cors"}).then(r=>c.put(u,r)).catch(()=>{})))})());self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  /* only handle our own files and the font/library hosts; never touch Firebase/Firestore traffic */
  if(r.method!=="GET"||!(u.origin===location.origin||HOSTS.includes(u.hostname)))return;
  if(u.pathname.endsWith("firebase-config.js")){
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp)).catch(()=>{});return res}).catch(()=>caches.match(r)));return;
  }
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{
      if(res&&(res.ok||res.type==="opaque")){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp)).catch(()=>{})}
      return res;
    }).catch(()=>hit||(r.mode==="navigate"?caches.match("./index.html"):undefined));
    return hit||net;
  }));
});
