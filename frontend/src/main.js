import Vue from 'vue'
import App from '@/components/App.vue'
import VueRouter from 'vue-router'
import router from '@/router/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    })
    .catch(function (err) {
      console.log('ServiceWorker registration failed: ', err)
    })
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
