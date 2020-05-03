export default [...Array(20).keys()]
  .map(i => i + 1)
  .map(i => ({
    id: i,
    title: '記事のタイトル' + i,
    text: '記事の本文' + i
  }))