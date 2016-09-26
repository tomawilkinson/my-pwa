self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static-v1').then(function(cache) {
      return cache.addAll([
        new Request('//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', {mode: 'no-cors'}),
        new Request('//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', {mode: 'no-cors'})
      ]);
    })
  );
});