import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { acfImage } from '../lib/utils'
import ProductListItem from './ProductListItem'
import Frow from './Frow'
import Theme from '../styles/theme'

export default ({ block }) => (
  block.products && <Query
    variables={{ products: (block.products || []).map(({ product }) => product.ID) }}
    query={gql`
      query ProductsBlockQuery($products: [String!]) {
        products(orderby: "include", include: $products) @rest(type: "Product", path: "/wp/v2/products?{args}") {
          id
          type
          link
          title
          template
          pure_taxonomies
          acf
        }
      }
    `}
  >{({ loading, error, data }) => {
    // const products = block.products.map(product => ({...product, acf: data.acfs.filter(item => item.id === product.ID).map(item => item.acf).reduce((result, current) => current)}))
    // console.log('ACFProducts: ', products)

    return (
    <Fragment>
      <h2 dangerouslySetInnerHTML={{__html: block.title}}/>
      {(!loading && !error) && <Frow container items="start" justify="start" gutters>
        <section>
        {
          (data.products || []).map((product) => (
            <Frow key={product.id} xs="1/1" md="1/2" hug>
              <ProductListItem
                id={product.id}
                wp={product}
                title={product.title.rendered}
                image={acfImage(product.acf.picture, 'large')}
                teachers={(product.acf.teachers.persons || []).map(({ person }) => ({ title: person.post_title, id: person.ID, url: `/persons/teachers/${person.post_name}`}))}
                dates={(product.acf.schedule || []).map(item => item.date)}
                prices={product.acf.prices}
                exclude={['schedule', 'teachers', 'prices']}
              />
            </Frow>
          ))
        }
        </section>
      </Frow>}

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
