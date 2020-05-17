'use strict'

require('dotenv').config()

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
  res.append('Access-Control-Allow-Origin', process.env.FRONTEND_HOST)
  next()
})

app.get('/api', (req, res) => res.send('Hello World!'))
app.get('/api/articles', (req, res) => {
  res.send({
    'articles': articles
  })
})
app.get(
  '/api/articles/:userId',
  (req, res) => {
    res.send(articles.find(a => a.id == req.params.userId))
  }
)

const PORT = 9010
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))