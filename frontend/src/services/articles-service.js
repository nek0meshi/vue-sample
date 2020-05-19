const b_service = require('@/services/backend-service')

export function fetchArticles() {
  return b_service.get('/articles')
}

export function fetchArticle(id) {
  return b_service.get(`/articles/${id}`)
}