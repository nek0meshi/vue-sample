import Vue from 'vue'
import VueRouter from 'vue-router'

import Articles from '@/pages/articles/index.vue'
import ArticleDetail from '@/pages/articles/_id.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/articles', component: Articles },
  { path: '/articles/:id', component: ArticleDetail },
]

export default new VueRouter({
  mode: 'history',
  routes
})