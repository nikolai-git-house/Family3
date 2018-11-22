import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'
import HyperComments from '../components/HyperComments'

import ACFContent from '../components/ACFContent'
import ACFTextBlock from '../components/ACFTextBlock'
import ACFHighlightedBlock from '../components/ACFHighlightedBlock'
import ACFQuote from '../components/ACFQuote'
import ACFVideoBlock from '../components/ACFVideoBlock'
import ACFGalleryBlock from '../components/ACFGalleryBlock'
import ACFSubscribe from '../components/ACFSubscribe'
import ACFProducts from '../components/ACFProducts'
import ACFPersons from '../components/ACFPersons'
import ACFArticles from '../components/ACFArticles'
import ACFButton from '../components/ACFButton'

const acfBlocks = {
  "text_block": ACFTextBlock,
  "highlighted_block": ACFHighlightedBlock,
  "quote_block": ACFQuote,
  "video_block": ACFVideoBlock,
  "gallery_block": ACFGalleryBlock,
  "subscribe_block": ACFSubscribe,
  "persons_block": ACFPersons,
  "products_block": ACFProducts,
  "articles_block": ACFArticles,
  "turbo_button_block": ACFButton,
}

 const Page = ({ query }) => (
  <Query
    variables={{page_id: query.page_id}}
    query={gql`
      query Query($page_id: String!){
        page(id: $page_id) @rest(type: "Page", path: "/wp/v2/pages/{args.id}") {
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
      {(!loading && !error) && <Fragment>
          <Head
            title={data.page.title.rendered}
            description=""
            url={data.page.link}
            ogImage=""
          />
          <Breadcrumbs wp={data.page}/>
          <article>
            <h1 dangerouslySetInnerHTML={{__html: data.page.title.rendered}}/>
            <ACFContent object={data.page} blocks={acfBlocks} />
          </article>
        </Fragment>
      }
      {data.page.acf.allow_comments && <HyperComments/>}
    </Fragment>
  )}</Query>
)

Page.getInitialProps = async ({ query }) => {

  return { query }
}


export default Page
