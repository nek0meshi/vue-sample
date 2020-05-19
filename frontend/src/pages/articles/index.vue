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
import { articleMappers } from '@/store/modules/articles'
import { ACTION_FETCH_ARTICLES } from '@/store/action-types/articles'

const { mapState, mapActions } = articleMappers

export default {
  computed: {
    ...mapState([
      'articles',
    ])
  },

  created () {
    this[ACTION_FETCH_ARTICLES]()
  },

  methods: {
    ...mapActions([
      ACTION_FETCH_ARTICLES
    ])
  }
}
</script>