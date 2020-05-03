import VueRouter from 'vue-router'

import Foo from './Foo.vue'

const routes = [
  { path: '/foo', component: Foo }
]

export default new VueRouter({
  routes
})