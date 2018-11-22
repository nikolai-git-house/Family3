const fetch = require('node-fetch')

let globalUpdatedForCache = ''

const getUpdatedFromWP = async () => {
  const updatedRaw = await fetch(`${process.env.WP_URL}/wp-json/f3/v1/updated`)

  try {
    const updated = await updatedRaw.json()
    globalUpdatedForCache = Date.parse(`${updated.at}Z`)
  } catch (e) {
    return
  }

}

setInterval(getUpdatedFromWP, process.env.UPDATED_INTERVAL || 15000)

module.exports = () => globalUpdatedForCache
