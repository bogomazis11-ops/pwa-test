self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Ne pas cacher les données (toujours les charger en ligne)
  if (url.pathname.endsWith('/data.json')) {
    return; 
  }

  // Pour tous les fichiers statiques, on laisse passer la requête normale
});
