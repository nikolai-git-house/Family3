// const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
// const withSass = require('./withSass')
const webpack = require('webpack')

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, {defaultConfig}) => {
  const baseConfig = withSass({
      serverRuntimeConfig: {
        wpUrl: process.env.WP_URL,
      },
      publicRuntimeConfig: {
        siteUrl: process.env.SITE_URL,
        hcWidgetId: process.env.HC_WIDGET_ID,
      },
      includePaths: ['node_modules/'],
      webpack: (config, options) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty'
        }

        config.plugins.push(new webpack.DefinePlugin({
          BUILD_TS: Date.now().toString(),
        }))

      // console.log(options)

      return config
      }
  })

  if( phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD ) {
    const withOptimizedImages = require('next-optimized-images')
    return withOptimizedImages(baseConfig)
  }

return baseConfig
}
