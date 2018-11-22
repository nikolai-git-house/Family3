const path = require('path')

const items = [
  {
    url: '/robots.txt',
    file: 'robots.txt',
    options: {
      root: path.join(__dirname, '../next/static/'),
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      }
    },
  }
]

module.exports = (req, res, next) => {
  const found = items.filter(item => item.url === req.url)

  // console.log(req.url, found)

  if(found.length === 0) {
    return next()
  }

  res.status(200).sendFile(found[0].file, found[0].options)
}
