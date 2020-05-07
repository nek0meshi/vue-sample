import VueRouter from 'vue-router'

import Articles from '@/pages/articles/index.vue'
import ArticleDetail from '@/pages/articles/_id.vue'

const routes = [
  { path: '/articles', component: Articles },
  { path: '/articles/:id', component: ArticleDetail },
]

export default new VueRouter({
  routes
})