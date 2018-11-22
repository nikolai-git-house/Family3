const os = require('os')
const fs = require('fs-extra')
const path = require('path')
const crypto = require('crypto')
const LRUCache = require('lru-cache')

const getUpdated = require('./get-updated')

const cachePath = process.env.SSR_CACHE || path.join(os.tmpdir(), '/ssrcache')
const cache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 15, // 15 minutes
  dispose: (name, n) => {
    const cacheFilePath = fileCachePathFromName(name)
    try {
      fs.remove(path.join(cacheFilePath, name))
    } catch (err) {
      console.log('Cache dispose error:', err)
    }
  }
})

const fileCachePathFromName = (name) => path.join(cachePath, `/${name.substring(0, 2)}/${name.substring(2, 4)}/`)

const readFileFromCache = async (name) => {
  const cacheFilePath = fileCachePathFromName(name)
  return fs.readFile(path.join(cacheFilePath, name), {encoding: 'utf8'})
}
//new Promise((resolve, reject) => fs.readFile(path.join(cachePath, `/${name.substring(0, 2)}/${name.substring(2, 4)}/`, name), {encoding: 'utf8'}, (err, data) => err ? reject(err) : resolve(data)))

const writeFileToCache = async (name, html) => {
  const cacheFilePath = fileCachePathFromName(name)
  await fs.ensureDir(cacheFilePath)
  return fs.writeFile(path.join(cacheFilePath, name), html, {encoding: 'utf8'})
}
//new Promise((resolve, reject) => fs.writeFile(path.join(cachePath, `/${name.substring(0, 2)}/${name.substring(2, 4)}/`, name), html, {encoding: 'utf8'}, (err) => err ? reject(err) : resolve()))

module.exports = (app) => {
  fs.emptyDir(cachePath)

  return async (req, res, pathname, query, force = false) => {
    const urlHash = crypto.createHash('sha1').update(req.originalUrl).digest('hex')

    console.log('urlHash', urlHash)

    if(!force && cache.has(urlHash)) {
      let cacheModifiedDate = null
      let lastModifiedDate = null
      try {
        cacheModifiedDate = cache.get(urlHash)
        lastModifiedDate = getUpdated()
      } catch (e) {

      }

      if(cacheModifiedDate && lastModifiedDate && !isNaN(cacheModifiedDate) && !isNaN(lastModifiedDate)) {
        if(lastModifiedDate <= cacheModifiedDate) {
          let cachedHtml = null
          try {
            cachedHtml = await readFileFromCache(urlHash)
          } catch (err) {
            console.log('readFileFromCache Error:', err)
          }

          if(cachedHtml) {
            console.log('response from cache')
            return res.send(cachedHtml)
          }
        }
      }
    }

    try {
      const html = await app.renderToHTML(req, res, pathname, query)

          if (res.statusCode !== 200) {
        return res.send(html)
      }

      try {
        writeFileToCache(urlHash, html)
      } catch (err) {
        console.log('writeFileToCache Error:', err)
      }
      cache.set(urlHash, Date.now())

      res.send(html)
    } catch (err) {
      app.renderError(err, req, res, pathname, query)
    }
  }
}
