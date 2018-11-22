import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import WPLink from '../components/WPLink'

import ACFContent from '../components/ACFContent'
import ACFTextBlock from '../components/ACFTextBlock'

const acfBlocks = {
  "text_block": ACFTextBlock
}

 const Page = ({ query }) => (
  <Query
    variables={{page_id: query.page_id, main_id: query.main_id}}
    query={gql`
      query Query($page_id: String!, $main_id: String!){
        page(id: $page_id) @rest(type: "Page", path: "/wp/v2/pages/:id") {
          id
          title
          link
          type
          acf
        }
      }
    `}
  >{({ loading, error, data }) => (
    <Fragment>
      {(!loading && !error) && <article>
        <h1 dangerouslySetInnerHTML={{__html: data.page.title.rendered}}/>
        <ACFContent object={data.page} blocks={acfBlocks} />
      </article>}
      <style jsx>{`
        @media (min-width: 992px) {

        }
      `}</style>
    </Fragment>
  )}</Query>
)

Page.getInitialProps = async ({ query }) => {

  return { query }
}

export default Page
