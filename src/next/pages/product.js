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
import ProductListItem from '../components/ProductListItem'
import Head from '../components/Head'
import HyperComments from '../components/HyperComments'
import { LoadMoreButton } from '../components/Button'
import AudioFileLink from '../components/AudioFileLink'
import TranscriptionFileLink from '../components/TranscriptionFileLink'

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
        query Query($page_id: String!){
          product(id: $page_id) @rest(type: "Product", path: "/wp/v2/products/{args.id}?_embed") {
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
        {(data.product && !error) && <Fragment>
            <Head
              title={data.product.title.rendered}
              description={data.product.acf.short_description}
              url={data.product.link}
              ogImage={acfImage(data.product.acf.picture, 'large')}
            />
            <Breadcrumbs wp={data.product}/>
            <article>
            <ProductPurchase product={data.product}>{({ onClick }) => (
              <AppContext.Consumer>{({ namedWP }) => {
                const listPage = data.product ? namedWP(`products.${data.product.pure_taxonomies.f3_product_category[0].slug}`) : {}
                return (
                <ProductHeader
                  title={data.product.title.rendered}
                  subtitle={data.product.acf.short_description}
                  tags={(data.product.pure_taxonomies.tags || []).map((tag, i) => ({ text: tag.name, wp: {...listPage, query: {tags: [tag.term_id]}} }))}
                  posterBackground={data.product.pure_taxonomies.f3_product_type[0].slug === 'cycle' ? (data.product.acf.background_picture ? acfImage(data.product.acf.background_picture, 'large') : true) : false}
                  image={data.product.acf.details_media_selector !== 'video' && acfImage(data.product.acf.details_picture, 'large')}
                  video={data.product.acf.details_media_selector === 'video' && data.product.acf.details_video}
                  dates={(data.product.acf.schedule || []).map(item => ({date: item.date, time: item.time}))}
                  prices={data.product.acf.prices}
                  pricesOnClick={onClick}
                />
              )}}</AppContext.Consumer>
            )}</ProductPurchase>

            {data.product.acf.details_audio_file && <AudioFileLink caption={data.product.acf.details_audio_file.caption || ''} link={data.product.acf.details_audio_file.link || ''} />}

            {data.product.acf.details_text_link && <TranscriptionFileLink caption="Ссылка на файл с текстом (откроется в новом окне)" link={data.product.acf.details_text_link.url} />}

            <ACFContent object={data.product} blocks={acfBlocks} />

            {data.product.acf.teachers.persons && <ACFPersons block={data.product.acf.teachers}/>}

            {data.product.acf.subproducts
            ? <Query
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
                  <Fragment>
                   <TOC title={data.product.acf.subproducts.title}>
                     {subdata.products && subdata.products.map((subproduct, i) => (
                        <TOCItem key={subproduct.id} title={`${ i + 1 }. ${ subproduct.title.rendered }`}>
                          <div dangerouslySetInnerHTML={{__html: subproduct.acf.TOC.TOC}}/>
                          <Frow container centered gutters>
                            <div className="buttons-box">
                              {subproduct.acf.TOC.button_caption && (
                                <Frow xs="1/1" md="auto">
                                  <div className="subproduct-button">
                                    <WPLink wp={subproduct}><Button variant="orange">{subproduct.acf.TOC.button_caption}</Button></WPLink>
                                  </div>
                                </Frow>
                              )}
                              {subproduct.acf.TOC.buy_button_caption && (
                                <Frow xs="1/1" md="auto">
                                  <div>
                                    <ACFBuyButton object={subproduct} block={{ caption: subproduct.acf.TOC.buy_button_caption }} />
                                  </div>
                                </Frow>
                              )}
                            </div>
                          </Frow>
                        </TOCItem>
                     ))}
                   </TOC>
                   <div className="btn-after-toc">
                     <ACFBuyButton object={data.product} block={{ }} />
                   </div>
                 </Fragment>
              )}</Query>
            : data.product.acf.TOC && <TOC>
                 <TOCItem>
                  <div dangerouslySetInnerHTML={{__html: data.product.acf.TOC.TOC}}/>
                </TOCItem>
               </TOC>}

            {(data.product.acf.parent_product && Array.isArray(data.product.acf.parent_product.products)) && <Fragment>
              <section dangerouslySetInnerHTML={{__html: data.product.acf.parent_product.text}}/>
              <Query
                 variables={{ products: (data.product.acf.parent_product.products || []).map(({product}) => product.ID)}}
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
                     subdata.products && subdata.products.map((product, i) => (
                       <ProductListItem
                         key={product.id}
                         id={product.id}
                         wp={product}
                         title={product.title.rendered}
                         image={acfImage(product.acf.picture, 'large')}
                         teachers={product.acf.hide_persons ? [] : (product.acf.teachers.persons || []).map(({ person }) => ({ title: person.post_title, id: person.ID, url: `/persons/teachers/${person.post_name}`}))}
                         dates={(product.acf.schedule || []).map(item => item.date)}
                         prices={product.acf.prices}
                         wide
                       />
                     ))
                )}</Query>
            </Fragment>}

 {/* productType={data.product.pure_taxonomies.f3_product_type[0].term_id} */}
{/*
            <AppContext.Consumer>{({ options }) => (
              options && <HowToBuy id={(data.product.acf.how_to_buy && data.product.acf.how_to_buy.ID) || (options.default_how_to_buy && options.default_how_to_buy.ID)}/>
            )}</AppContext.Consumer>
 */}
            {data.product.acf.how_to_buy && data.product.acf.how_to_buy.ID
              ? <HowToBuy id={data.product.acf.how_to_buy.ID}/>
              : <HowToBuy productType={data.product.pure_taxonomies.f3_product_type[0].term_id} price={data.product.acf.prices} dateOf={(data.product.acf.schedule || []).map(item => item.date)} />
            }


            {(data.product.acf.similar_products && Array.isArray(data.product.acf.similar_products.products)) && <ACFProducts block={data.product.acf.similar_products} />}


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
          .buttons-box {
            margin-top: ${ Theme.xs.vr(2)};
          }

          .subproduct-button {
            margin-bottom: ${ Theme.xs.vr(1) };
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .testimonials-box {
            margin-bottom: margin-bottom: ${ Theme.xs.vr(1) };
          }

          .btn-after-toc {
            margin: ${ Theme.xs.vr(3) };
          }

          @media (min-width: 992px) {
            .buttons-box {
              margin-top: ${ Theme.md.vr(2)};
            }

            .subproduct-button {
              margin-bottom: ${ Theme.md.vr(1) };
            }

            .testimonials-box {
              margin-bottom: ${ Theme.md.vr(1.75) };
            }

            .btn-after-toc {
              margin: ${ Theme.md.vr(4) };
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
