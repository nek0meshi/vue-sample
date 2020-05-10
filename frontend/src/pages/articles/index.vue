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
const b_service = require('@/services/backend-service')

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
    this.fetch()
  },
  methods: {
    async fetch () {
      await b_service.get('/articles')
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('error')
        })
        .then(json => {
          console.log(json)
          this.articles = json.articles
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>