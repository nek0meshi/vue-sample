<template>
  <div>
    <p>{{ $route.params.id || '' }}</p>
    <p>{{ article.etitle || '' }}</p>
    <p>{{ article.text || '' }}</p>
  </div>
</template>
<script>
import { articleMappers } from '@/store/modules/articles'
import { ACTION_FETCH_ARTICLE } from '@/store/action-types/articles'

const { mapState, mapActions } = articleMappers

export default {
  data () {
    return {
      title: '',
      text: ''
    }
  },

  computed: {
    ...mapState([
      'article',
    ])
  },

  watch: {
    '$route' () {
      this.fetch()
    }
  },
  
  created () {
    this.fetch()
  },

  methods: {
    ...mapActions([
      ACTION_FETCH_ARTICLE
    ]),
    fetch () {
      this[ACTION_FETCH_ARTICLE](this.$route.params.id)
    }
  }
}
</script>