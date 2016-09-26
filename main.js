if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(sw){
    console.log('Registration worked!');
  }).catch(function(sw) {
    console.log('Registration failed!');
  });
}else {
  console.log('serviceWorker not supported!');
}