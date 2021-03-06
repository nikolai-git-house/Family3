import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Frow from '../components/Frow'
import Theme from '../styles/theme'
import ProductHeader from '../components/ProductHeader'
import TOC, { TOCItem } from '../components/ProductToc'
import HowToBuy from '../components/HowToBuy'
import { acfImage, onFetchMore } from '../lib/utils'
import ProductPurchase from '../components/ProductPurchase'
import Button from '../components/Button'
import WPLink from '../components/WPLink'
import { ProductTestimonials } from '../components/Testimonials'
import AppContext from '../components/AppContext'
import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'
import HyperComments from '../components/HyperComments'
import { LoadMoreButton } from '../components/Button'

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
import ACFBuyButton from '../components/ACFBuyButton'
import ACFButton from '../components/ACFButton'

const acfBlocks = {
  "text_block": ACFTextBlock,
  "highlighted_block": ACFHighlightedBlock,
  "quote_block": ACFQuote,
  "video_block": ACFVideoBlock,
  "gallery_block": ACFGalleryBlock,
  "subscribe_block": ACFSubscribe,
  "articles_block": ACFArticles,
  "buy_button_block": ACFBuyButton,
  "turbo_button_block": ACFButton,
}

const TESTIMONIALS_PER_PAGE = 4

const Page = ({ query }) => (
    <Query
      variables={{ page_id: query.page_id }}
      query={gql`
        query Query($page_id: String!, $main_id: String!){
          product(id: $page_id) @rest(type: "Product", path: "/wp/v2/products/{args.id}?_embed") {
            id
            title
            link
            type
            pure_taxonomies
            acf
          }

          # testimonials(product: $page_id) @rest(type: "Testimonial", path: "/wp/v2/testimonials?per_page=4&acf_product={args.product}") {
          #   id
          #   link
          #   type
          #   acf
          #   date
          # }
        }
      `}
    >{({ loading, error, data }) => {

      return (
      <Fragment>
        {(data.product && !error) && <Fragment>
            <Head
              title={data.product.title.rendered}
              description={data.product.acf.short_description}
              url={data.product.link}
              ogImage={acfImage(data.product.acf.picture, 'large')}
            />
            <Breadcrumbs wp={data.product}/>
            <article>
              <AppContext.Consumer>{({ namedWP }) => {
                const listPage = data.product ? namedWP(`products.${data.product.pure_taxonomies.f3_product_category[0].slug}`) : {}
                return (
                <ProductHeader
                  title={data.product.title.rendered}
                  subtitle={data.product.acf.short_description}
                  period={(data.product.acf.period && data.product.acf.period[0]) && { from: data.product.acf.period[0].date_start, to: data.product.acf.period[0].date_end}}
                  tags={(data.product.pure_taxonomies.tags || []).map((tag, i) => ({ text: tag.name, wp: {...listPage, query: {tags: [tag.term_id]}} }))}
                  image={data.product.acf.details_media_selector !== 'video' && acfImage(data.product.acf.details_picture, 'large')}
                  video={data.product.acf.details_media_selector === 'video' && data.product.acf.details_video}
                />
              )}}</AppContext.Consumer>

              <div dangerouslySetInnerHTML={{__html: data.product.acf.extended_description}}/>

              {data.product.acf.subproducts && <Query
                 variables={{ products: (data.product.acf.subproducts.products || []).map(({product}) => product.ID)}}
                 query={gql`
                   query SubproductsQuery($products: [String!]){
                     products(orderby: "include", include: $products) @rest(type: "Product", path: "/wp/v2/products?{args}") {
                       id
                       title
                       link
                       type
                       pure_taxonomies
                       acf
                     }
                   }
                 `}
                >{({ loading, error, data: subdata }) => (
                  <section>
                    <h2 dangerouslySetInnerHTML={{__html: data.product.acf.subproducts.title}}/>
                    {subdata.products.map((product, i) => (
                    <ProductPurchase product={product}>{({ onClick }) => (
                      <div className="product-box">
                        <ProductHeader
                          title={<h2 className="list-header"><WPLink wp={product}><a dangerouslySetInnerHTML={{__html: product.title.rendered}}/></WPLink></h2>}
                          wp={product}
                          teachers={product.acf.teachers && product.acf.teachers.persons.map(({ person }, i) => ({wp: person, title: person.post_title}))}
                          image={product.acf.details_media_selector !== 'video' && acfImage(product.acf.details_picture, 'large')}
                          linkFromImage={true}
                          video={product.acf.details_media_selector === 'video' && product.acf.details_video}
                          prices={product.acf.prices}
                          pricesOnClick={onClick}
                          exclude={['like']}
                        />
                        <div dangerouslySetInnerHTML={{__html: data.product.acf.subproducts.products[i].product_description}}/>
                      </div>
                    )}</ProductPurchase>
                  ))}</section>
                )}</Query>}


               <ACFContent object={data.product} blocks={acfBlocks} />


               {/* <HowToBuy productType={data.product.pure_taxonomies.f3_product_type[0].term_id}/> */}

               {data.product.acf.how_to_buy && data.product.acf.how_to_buy.ID
                 ? <HowToBuy id={data.product.acf.how_to_buy.ID}/>
                 : <HowToBuy productType={data.product.pure_taxonomies.f3_product_type[0].term_id} price={data.product.acf.prices} dateOf={(data.product.acf.period && data.product.acf.period[0]) && [data.product.acf.period[0].date_start, data.product.acf.period[0].date_end]} />
               }


               <div className="testimonials-box">
               <Query
                 variables={{
                   product: query.page_id || null,
                 }}
                 query={gql`
                   query TestimonialsCountQuery($product: String) {
                     count(acf_product: $product) @rest(type: "TestimonialCount", path: "/wp/v2/testimonials/count?{args}") {
                       count
                     }
                   }
                 `}
               >{({loading: countLoading, error: countError, data: { count }}) => (
                 <Query
                   variables={{
                     per_page: TESTIMONIALS_PER_PAGE,
                     offset: 0,
                     product: query.page_id || null,
                   }}
                   query={gql`
                     query TestimonialsQuery($per_page: String!, $offset: String!, $product: String) {
                       testimonials(per_page: $per_page, offset: $offset, acf_product: $product) @rest(type: "Testimonial", path: "/wp/v2/testimonials?{args}") {
                         id
                         link
                         type
                         acf
                         date
                       }
                     }
                   `}
                 >{({loading: testimonialsLoading, error: testimonialsError, data: { testimonials }, fetchMore, variables}) => {
                   return (
                   (testimonials && !testimonialsError) && <Fragment>
                     <ProductTestimonials
                       count={count.count}
                       product={data.product}
                       items={testimonials || []}
                     />
                     <Frow container row="center" hug>
                         {testimonials.length < count.count && <LoadMoreButton loading={testimonialsLoading} onClick={onFetchMore(fetchMore, testimonials.length, 'testimonials')} />}
                     </Frow>
                   </Fragment>
                 )}}</Query>
               )}</Query>
             </div>



               {data.product.acf.allow_comments && <HyperComments/>}
          </article>
        </Fragment>}
        <style jsx>{`
          .subproduct-button {
            margin-bottom: ${ Theme.xs.vr(1) };
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .product-box {
            margin-bottom: ${ Theme.xs.vr(3)};
          }

          .testimonials-box {
            margin-bottom: margin-bottom: ${ Theme.xs.vr(1) };
          }

          @media (min-width: 992px) {
            .subproduct-button {
              margin-bottom: ${ Theme.md.vr(1) };
            }

            .product-box {
              margin-bottom: ${ Theme.md.vr(3)};
            }

            .testimonials-box {
              margin-bottom: ${ Theme.md.vr(1.75) };
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
