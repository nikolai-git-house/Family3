const fetch = require('node-fetch')
const mapToPage = require('./map-to-page')
const ssrCache = require('./ssr-cache')
// const getUpdated = require('./get-updated')

module.exports.bypassHandler = (app) => {
  const handler = app.getRequestHandler()

  return (req, res, next) => {
    // console.log('- -', req.url)
    if(req.url.substr(0, 6) === '/_next' || req.url.substr(0, 7) === '/static') {
      handler(req, res)
    } else {
      next()
    }
  }
}

//TODO: make Custom Link component
//TODO: refactor page selection based on urldata - convert switch (urldata.post_type) to object in next.config.js
module.exports.wpHandler = (app) => {
  const cachedRender = process.env.NODE_ENV === 'production' ? ssrCache(app) : (req, res, pathname, query) => app.render(req, res, pathname, query)

  return async (req, res, next) => {
  // console.log('= =', req.originalUrl)
  const urldataRaw = await fetch(`${process.env.WP_URL}/wp-json/f3/v1/map?url=${req.originalUrl === '/' ? '/index' : req.originalUrl}`)
  let urldata = null

  try {
    urldata = await urldataRaw.json()
  } catch (e) {
    return next()
  }

  console.log('= =', req.originalUrl, urldata.link)

  if(urldata === null || urldata.id === null) {
    return next()
  }

  if(req.originalUrl !== '/' && urldata.link.toLowerCase() !== req.originalUrl.split('?')[0].toLowerCase()) {
    const originalQuery = req.originalUrl.split('?')[1]
    console.log('redirect', urldata.link)
    return res.redirect(301, `${process.env.SITE_URL}${urldata.link}${originalQuery ? '?'+originalQuery : ''}`)
  }

  // let ifModifiedSince = null
  // let lastModifiedDate = null
  // try {
  //   ifModifiedSince = Date.parse(req.get('if-modified-since'))
  //   lastModifiedDate = null //getUpdated()
  // } catch (e) {
  //
  // }

  // console.log('check if modified', ifModifiedSince, lastModifiedDate)
  //
  // if(ifModifiedSince && lastModifiedDate && !isNaN(ifModifiedSince) && !isNaN(lastModifiedDate)) {
  //   if(lastModifiedDate - ifModifiedSince <= 0) {
  //     return res.sendStatus(304)
  //   }
  // }

  const { template, id, type, acf: { main_id } } = urldata

  const page = mapToPage({ template, id, type, main_id }, req.query)

  console.log('page object:', page)

  res.set('Cache-Control', 'public, max-age=0')
  cachedRender(req, res, page.pathname, page.query)
  // app.render(req, res, page.pathname, page.query)
}}
