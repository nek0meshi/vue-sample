<template>
  <div>
    <ul>
      <li
        v-for="a in articles"
        :key = a.id
      >
        <router-link :to="`./articles/${a.id}`">
          {{ a.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import articles from '../../plugins/articles'

export default {
  data () {
    return {
      articles: {
        type: Array,
        default: () => []
      }
    }
  },
  created () {
    setTimeout(() => {
      this.articles = articles
    }, 1000)
  }
}
</script>