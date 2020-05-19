import { createNamespacedHelpers } from 'vuex'

import {
  fetchArticles,
  fetchArticle
} from '@/services/articles-service'

import {
  MUTATION_SET_ARTICLES,
  MUTATION_SET_ARTICLE
} from '@/store/mutation-types/articles.js'

import {
  ACTION_FETCH_ARTICLES,
  ACTION_FETCH_ARTICLE
} from '@/store/action-types/articles.js'

export const MODULE_ARTICLES = 'articles'

export const articleMappers = createNamespacedHelpers(MODULE_ARTICLES)

const state = {
  // 一覧
  articles: [],
  // 詳細
  article: null
}

const actions = {
  [ACTION_FETCH_ARTICLES] ({ commit }) {
    fetchArticles()
      .then(json => {
        console.log(json)
        commit(MUTATION_SET_ARTICLES, json.articles)
      })
      .catch(err => {
        console.log(err)
      })
  },
  [ACTION_FETCH_ARTICLE] ({ commit }, id) {
    fetchArticle(id)
      .then(json => {
        console.log(json)
        commit(MUTATION_SET_ARTICLE, json)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mutations = {
  [MUTATION_SET_ARTICLES] (state, articles) {
    state.articles = articles
  },
  [MUTATION_SET_ARTICLE] (state, article) {
    state.article = article
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}