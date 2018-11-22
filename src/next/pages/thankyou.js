import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Frow from '../components/Frow'
import Theme from '../styles/theme'
import WPLink from '../components/WPLink'
import ProductPoster from '../components/ProductPoster'
import { acfImage, scheduleOrPeriod } from '../lib/utils'
import Head from '../components/Head'
import { HowToThankyou } from '../components/HowToBuy'
import AppContext from '../components/AppContext'

// import HyperComments from '../components/HyperComments'

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

const headerText = {
  ord: 'Спасибо, что преобрели',
  reg: 'Спасибо, что зарегистрировались на'
}

 const Page = ({ query }) => (
  <Query
    variables={{page_id: query.page_id, code: query.code || '-'}}
    query={gql`
      query Query($page_id: String!, $code: String!){
        page(id: $page_id) @rest(type: "Page", path: "/wp/v2/pages/{args.id}") {
          id
          title
          link
          type
          acf
        }

        products(acf_jc_code: $code, per_page: "1") @rest(type: "Product", path: "/wp/v2/products/?{args}") {
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
    const product = data.products && data.products[0]
    return (
    <Fragment>
      <Head
        title={data.page.title.rendered}
        description=""
        url={data.page.link}
        ogImage=""
      />
      <article>
        {(product && !error)
          ? <Frow container items="start" gutters>
              <section className="product">
                <Frow xs="1/1" md="1/2" hug>
                  <h2 className="list-header">{headerText[query.type === 'reg' ? 'reg' : 'ord']} &quot;<WPLink wp={product}><a dangerouslySetInnerHTML={{__html: product && product.title.rendered}}/></WPLink>&quot;</h2>
                </Frow>
                <Frow xs="1/1" md="1/2" hug>
                  <ProductPoster wp={product} image={acfImage(product.acf.picture, 'large')} />
                </Frow>
              </section>
            </Frow>
          : <h1 className="list-header">{query.type && query.type === 'reg' ? 'Спасибо за регистрацию' : 'Спасибо за покупку/регистрацию'}</h1>
        }
        {data.page.acf.steps && <section className="steps">
          <h2 className="list-header">{data.page.acf.steps.title}</h2>
          {(product && !error)
            ? product.acf.thank_you && product.acf.thank_you.ID ? <HowToThankyou id={product.acf.thank_you.ID} /> : <HowToThankyou productType={product.pure_taxonomies.f3_product_type[0].term_id} price={product.acf.prices} dateOf={scheduleOrPeriod(product)} />
            : <AppContext.Consumer>{({ options }) => <HowToThankyou id={options && options.default_thankyou && options.default_thankyou.ID} />}</AppContext.Consumer>
          }

        </section>}
        <ACFContent object={data.page} blocks={acfBlocks} />
      </article>
      <style jsx>{`
        .product,
        .steps {
          margin-bottom: ${ Theme.xs.vr(2)};
        }

        .steps h2 {
          margin-bottom: ${ Theme.xs.vr(1)};
        }

        @media (min-width: 992px) {
          .product,
          .steps {
            margin-bottom: ${ Theme.md.vr(2)};
          }

          .steps h2 {
            margin-bottom: ${ Theme.md.vr(1)};
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
