<template>
  <div>
    <p>{{ article.id || '' }}</p>
    <p>{{ article.title || '' }}</p>
    <p>{{ article.text || '' }}</p>
  </div>
</template>
<script>
import articles from '../../plugins/articles'

export default {
  data () {
    return {
      article: {
        type: Object,
        default: () => ({})
      }
    }
  },
  watch: {
    '$route' () {
      this.fetch()
    }
  },
  methods: {
    fetch () {
      setTimeout(() => {
        this.article = articles.find(a => a.id == this.$route.params.id)
      }, 1000)
    }
  },
  created () {
    this.fetch()
  }
}
</script>