import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { acfImage } from '../lib/utils'
import ProductTeacher from './ProductTeacher'
import Frow from './Frow'
import Theme from '../styles/theme'

export default ({ block }) => (
  <Query
    variables={{ persons: block.persons.map(({ person }) => person.ID || 0) }}
    query={gql`
      query PersonsBlockQuery($persons: [String!]) {
        persons(orderby: "include", include: $persons) @rest(type: "Person", path: "/wp/v2/persons?{args}") {
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
      {block.title && <h2 dangerouslySetInnerHTML={{__html: block.title}}/>}
      {(!loading && !error) && <Frow container items="start" justify="start" gutters>
        <section>
        {
          data.persons.map((person, i) => {
            const wide = data.persons.length % 2 !== 0 && i === data.persons.length - 1
            return (
            <Frow key={person.id} xs="1/1" md={wide ? "1/1" : "1/2"} hug>
              <ProductTeacher
                title={person.title.rendered}
                image={acfImage(person.acf.photo_embed, 'large')}
                wp={person}
                wide={wide}
              ><div dangerouslySetInnerHTML={{__html: person.acf.embed_description }}/></ProductTeacher>
            </Frow>
          )})
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
