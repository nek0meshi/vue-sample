'use strict'

const express = require('express')
const app = express()

const articles = [...Array(20).keys()]
  .map(i => i + 1)
  .map(i => ({
    id: i,
    title: '記事のタイトル' + i,
    text: '記事の本文' + i
  }))

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', 'http://localhost:8080')
  next()
})

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/articles', (req, res) => {
  res.send({
    'articles': articles
  })
})
app.get(
  '/articles/:userId',
  (req, res) => {
    res.send(articles.find(a => a.id == req.params.userId))
  }
)

app.listen(9010, () => console.log('Example app listening on port 9010!'))