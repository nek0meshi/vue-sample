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
          if (res.ok) {
            return res.json()
          }
          throw new Error('error')
        })
        .then(json => {
          this.title = json.title
          this.text = json.text
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetch()
  }
}
</script>