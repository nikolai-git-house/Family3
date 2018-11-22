import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { acfImage } from '../lib/utils'
import Articles from './Articles'
// import Frow from './Frow'
import Theme from '../styles/theme'

export default ({ block }) => (
  <Query
    variables={{ articles: (block.articles || []).map(({ article }) => article.ID) }}
    query={gql`
      query ArticlesBlockQuery($articles: [String!]) {
        articles(orderby: "include", include: $articles) @rest(type: "Post", path: "/wp/v2/posts?{args}") {
          id
          type
          link
          title
          template
          acf
        }
      }
    `}
  >{({ loading, error, data }) => {
    // const products = block.products.map(product => ({...product, acf: data.acfs.filter(item => item.id === product.ID).map(item => item.acf).reduce((result, current) => current)}))
    // console.log('ACFProducts: ', products)

    return (
    <Fragment>
      <section>
        {block.title && <h2 dangerouslySetInnerHTML={{__html: block.title}}/>}
        {(!loading && !error) && <Articles exclude={['excerpt']} items={data.articles.map((article) => ({title: article.title.rendered, image: article.acf.image && acfImage(article.acf.image, 'large'), wp: article, snippet: article.acf.excerpt}))}/>}
      </section>

      <style jsx>{`
        section {
          margin-bottom: ${ Theme.xs.vr(1) };
        }

        @media (min-width: 992px) {
          section {
            margin-bottom: ${ Theme.md.vr(1.75) };
          }

          h1 {
            margin-bottom: ${ Theme.md.vr(0.25) };
          }
        }
      `}</style>
    </Fragment>
  )}}</Query>
)
