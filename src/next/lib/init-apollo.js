import { ApolloClient } from 'apollo-client'
import { RestLink } from 'apollo-link-rest'
import { ApolloLink } from 'apollo-link'
import { withResponseResolver } from 'apollo-link-response-resolver'
import { InMemoryCache } from 'apollo-cache-inmemory'
import getConfig from 'next/config'

import adjustProductPrices from './adjustProductPrices'

let apolloClient = null

let nodeOptions = {}
// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  const fetch = require('node-fetch')

  global.fetch = fetch
  global.Headers = fetch.Headers

  nodeOptions = {
    customFetch: fetch,
  }
  // global.Headers = global.Headers || require('fetch-headers')
}

function create(initialState) {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
  // console.log('next getConfig()', getConfig())
  if(process.browser) {
    // console.log('initialState', initialState)
  }
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([
      withResponseResolver({
        Product: {
          acf: acf => (acf.prices ? { ...acf, prices: adjustProductPrices(acf.prices) } : acf)
        }
      }),
      new RestLink({
        uri: `${ process.browser ? publicRuntimeConfig.siteUrl : serverRuntimeConfig.wpUrl }/wp-json`, // Server URL (must be absolute)
        headers: {},
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        ...nodeOptions,
        typePatcher: {
          MainMenuItem: (data) => {
            // const urlObject = new URL(data.url)
            // data.url = urlObject.pathname
            // console.log('typePatcher', data.url)
            data.children = data.children && data.children.map(item => ({__typename: 'MainMenuItem', ...item}))

            return data
          }
        }
      })
    ]),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
