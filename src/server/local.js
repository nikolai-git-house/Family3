const path = require('path')
const fs = require('fs')
const https = require('https')
const express = require('express')
const next =require('next')
const proxy = require('http-proxy-middleware')

const {bypassHandler, wpHandler} = require('./wp-handler')
const rootStaticHandler = require('./root-static')
const passport = require('./passport')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, dir: path.resolve(__dirname, '..', 'next') })

const wpProxy = proxy(["/wp-admin", "/wp-includes", "/wp-content", "/wp-json", "/wp-login.php", "/index.php", "/wp-cron.php"], {
  target: 'https://family3.ru',
  secure: false,
  changeOrigin: true,
})

app.prepare().then(() => {
  const handler = app.getRequestHandler()
  const server = express()

  server.use(wpProxy)
  server.use(rootStaticHandler)
  passport(server)
  server.use(bypassHandler(app))
  server.use(wpHandler(app))
  server.use(handler)


  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
