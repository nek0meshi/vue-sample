import Vue from 'vue'
import App from '@/components/App.vue'
import VueRouter from 'vue-router'
import router from '@/router/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
