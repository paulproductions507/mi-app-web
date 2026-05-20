const CACHE = 'compras-zlc-v1';
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request).catch(function(){
    return caches.match(e.request);
  }));
});
