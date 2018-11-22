import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Tag, { TagsLine } from '../components/Tag'
import Theme from '../styles/theme'
import ArticleImage from '../components/ArticleImage'
import { acfImage, linkToPostsList } from '../lib/utils'
import WPLink from '../components/WPLink'
import AppContext from '../components/AppContext'
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
import ACFButton from '../components/ACFButton'
import ACFArticles from '../components/ACFArticles'
import ACFBuyButtonExternal from '../components/ACFBuyButtonExternal'

const acfBlocks = {
  "text_block": ACFTextBlock,
  "highlighted_block": ACFHighlightedBlock,
  "quote_block": ACFQuote,
  "video_block": ACFVideoBlock,
  "gallery_block": ACFGalleryBlock,
  "subscribe_block": ACFSubscribe,
  "persons_block": ACFPersons,
  "products_block": ACFProducts,
  "turbo_button_block": ACFButton,
  "ext_purchase_button_block": ACFBuyButtonExternal,
}

 const Page = ({ query }) => (
    <Query
      variables={{page_id: query.page_id, main_id: query.main_id}}
      query={gql`
        query Query($page_id: String!, $main_id: String!){
          post(id: $page_id) @rest(type: "Post", path: "/wp/v2/posts/{args.id}?_embed") {
            id
            title
            link
            type
            pure_taxonomies
            acf
          }
        }
      `}
    >{({ loading, error, data }) => {
      return (
      <Fragment>
        {(data && data.post && !error) && <Fragment>
          <Head
            title={data.post.title.rendered}
            description={data.post.acf.excerpt}
            url={data.post.link}
            ogImage={acfImage(data.post.acf.image, 'large')}
          />
          <Breadcrumbs wp={data.post}/>
          <article>
          <h1 dangerouslySetInnerHTML={{__html: data.post.title.rendered}}/>
          <AppContext.Consumer>{({ namedWP }) => {
            const listPage = data.post ? namedWP(`${data.post.pure_taxonomies.categories[0].slug}`) : {}
            return (
            <TagsLine>
              {
                (data.post.pure_taxonomies.tags || []).map((tag, i) => (<Tag key={tag.term_id} text={tag.name} wp={{...listPage, query: {tags: [tag.term_id]}}} />))
              }
            </TagsLine>
          )}}</AppContext.Consumer>
          <section className="subheader" dangerouslySetInnerHTML={{__html: data.post.acf.brief}}/>
          <ArticleImage image={acfImage(data.post.acf.image, 'large')} />

          <ACFContent object={data.post} blocks={acfBlocks} />

          <div className="author">
            <WPLink wp={data.post.acf.author}><a>{data.post.acf.author.post_title}</a></WPLink>
          </div>

          {Array.isArray(data.post.acf.similar_articles.articles) && <ACFArticles block={data.post.acf.similar_articles} />}

          {data.post.acf.allow_comments && <HyperComments/>}
          </article>
          </Fragment>}
        <style jsx>{`
          .subheader {
            font-weight: 700;
            line-height: 2;
            margin-bottom: ${ Theme.xs.vr(1) };
          }

          .author {
            text-align: right;
            margin-bottom: ${ Theme.xs.vr(1.75) };
          }
          .author a {
            font-style: italic;
          }

          @media (min-width: 992px) {
            .subheader {
              margin-bottom: ${ Theme.md.vr(2) };
            }
          }
        `}</style>
      </Fragment>
    )}}</Query>
)

Page.getInitialProps = async ({ query }) => {

  return { query }
}

export default Page
