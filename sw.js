// Service Worker optimisé pour éviter les problèmes de cache

self.addEventListener('install', (event) => {
  console.log('SW installé');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW activé');
  clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Ne jamais mettre en cache index.html (important pour la redirection auto PWA)
  if (url.pathname.endsWith('/index.html')) {
    return fetch(event.request);
  }

  // Ne jamais mettre en cache data.json (toujours version la plus récente)
  if (url.pathname.endsWith('/data.json')) {
    return fetch(event.request);
  }

  // Par défaut, laisser passer toutes les requêtes sans cache
  return fetch(event.request);
});
