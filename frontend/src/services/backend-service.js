// const axios = require('axios')

export function get (url, config = {}) {
  return fetch(process.env.VUE_APP_API_BASE_URL + url, config)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('error')
    })
}