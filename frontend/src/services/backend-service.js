// const axios = require('axios')

export function get (url, config = {}) {
  return fetch('http://localhost:9010' + url, config)
}