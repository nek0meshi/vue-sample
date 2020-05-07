<template>
  <div>
    <p>{{ $route.params.id || '' }}</p>
    <p>{{ title || '' }}</p>
    <p>{{ text || '' }}</p>
  </div>
</template>
<script>
const b_service = require('@/services/backend-service')

export default {
  data () {
    return {
      title: '',
      text: ''
    }
  },
  watch: {
    '$route' () {
      this.fetch()
    }
  },
  methods: {
    async fetch () {
      await b_service.get(`/articles/${this.$route.params.id}`)
        .then(res => {
          this.title = res.data.title
          this.text = res.data.text
        })
    }
  },
  created () {
    this.fetch()
  }
}
</script>