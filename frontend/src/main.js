import Vue from 'vue'
import App from '@/components/App.vue'
import router from '@/router'
import store from  '@/store'
import './registerServiceWorker'

Vue.config.productionTip = false

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('service-worker.js')
//     .then(function (registration) {
//       console.log('ServiceWorker registration successful with scope: ', registration.scope)
//     })
//     .catch(function (err) {
//       console.log('ServiceWorker registration failed: ', err)
//     })
// }

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
