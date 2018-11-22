import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import withApolloClient from '../lib/with-apollo-client'
import Layout from '../components/Layout'
import LoadingProgress from '../components/LoadingProgress'

import '../styles/style.scss'

if(process.browser) {
  require('intl')
  require('intl/locale-data/jsonp/ru-RU')
}

class SiteApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  setMenuToContext = (main, routing) => {

  }

  render () {
    const {Component, pageProps, apolloClient} = this.props

    return <Container>
      <LoadingProgress/>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Container>
  }
}

export default withApolloClient(SiteApp)
