const axios = require('axios')

export function get (url, config = {}) {
  return axios.get('http://localhost:9010' + url, config)
}