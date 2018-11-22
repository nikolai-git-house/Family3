import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// import WPLink from '../components/WPLink'
import Theme from '../styles/theme'
import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'
import HyperComments from '../components/HyperComments'
import { acfImage } from '../lib/utils'
import PersonPicture from '../components/PersonPicture'

import ACFContent from '../components/ACFContent'
import ACFTextBlock from '../components/ACFTextBlock'
import ACFHighlightedBlock from '../components/ACFHighlightedBlock'
import ACFQuote from '../components/ACFQuote'
import ACFVideoBlock from '../components/ACFVideoBlock'
import ACFGalleryBlock from '../components/ACFGalleryBlock'
import ACFSubscribe from '../components/ACFSubscribe'
import ACFProducts from '../components/ACFProducts'
import ACFArticles from '../components/ACFArticles'
import ACFButton from '../components/ACFButton'

const acfBlocks = {
  "text_block": ACFTextBlock,
  "highlighted_block": ACFHighlightedBlock,
  "quote_block": ACFQuote,
  "video_block": ACFVideoBlock,
  "gallery_block": ACFGalleryBlock,
  "subscribe_block": ACFSubscribe,
  "products_block": ACFProducts,
  "articles_block": ACFArticles,
  "turbo_button_block": ACFButton,
}

 const Page = ({ query }) => (
  <Query
    variables={{page_id: query.page_id, main_id: query.main_id}}
    query={gql`
      query Query($page_id: String!, $main_id: String!){
        person(id: $page_id) @rest(type: "Page", path: "/wp/v2/persons/{args.id}") {
          id
          title
          link
          type
          pure_taxonomies
          acf
        }
      }
    `}
  >{({ loading, error, data }) => (
    <Fragment>
      {(!loading && !error) && <article>
        <Head
          title={data.person.title.rendered}
          description={data.person.acf.short_description}
          url={data.person.link}
          ogImage={acfImage(data.person.acf.photo_team, 'large')}
        />
        <Breadcrumbs wp={data.person}/>
        <h1 dangerouslySetInnerHTML={{__html: data.person.title.rendered}}/>
        <div className="picture">
          <PersonPicture image={acfImage(data.person.acf.photo, 'large')}/>
        </div>
        <ACFContent object={data.person} blocks={acfBlocks} />
        {data.person.acf.allow_comments && <HyperComments/>}
      </article>}
      <style jsx>{`
        .picture {
          margin-bottom: ${ Theme.xs.vr(1)};
        }
        @media (min-width: 992px) {
          .picture {
            margin-bottom: ${ Theme.md.vr(2)};
          }
        }
      `}</style>
    </Fragment>
  )}</Query>
)

Page.getInitialProps = async ({ query }) => {

  return { query }
}

export default Page
