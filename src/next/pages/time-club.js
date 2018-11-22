import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'
import qs from 'qs'

import WPLink from '../components/WPLink'
import { acfImage, updateCurrentRoute } from '../lib/utils'
import Frow from '../components/Frow'
import Theme from '../styles/theme'
import { LoadMoreButton } from '../components/Button'
import ProductListItem from '../components/ProductListItem'
import Filter from '../components/FilterSlotFill'
import FilterComponent from '../components/Filter'
import { pluralize, onFetchMore } from '../lib/utils'
import Head from '../components/Head'
// import HyperComments from '../components/HyperComments'

import Breadcrumbs from '../components/Breadcrumbs'

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

//  const Page = ({ query }) => (
//   <Query
//     variables={{page_id: query.page_id}}
//     query={gql`
//       query Query($page_id: String!){
//         page(id: $page_id) @rest(type: "Page", path: "/wp/v2/pages/{args.id}") {
//           id
//           title
//           link
//           type
//           acf
//         }
//       }
//     `}
//   >{({ loading, error, data }) => (
//     <Fragment>
//       {(!loading && !error) && <Fragment>
//           <Breadcrumbs wp={data.page}/>
//           <article>
//             <h1 dangerouslySetInnerHTML={{__html: data.page.title.rendered}}/>
//             <ACFContent object={data.page} blocks={acfBlocks} />
//           </article>
//         </Fragment>
//       }
//     </Fragment>
//   )}</Query>
// )
//
// Page.getInitialProps = async ({ query }) => {
//
//   return { query }
// }


const PRODUCTS_PER_PAGE = 10

const pluralizeFilter = pluralize({ one: 'найденное мероприятие', few: 'найденных мероприятия', many: 'найденных мероприятий' })

const filterVariables = (category) => (from, to, author, tags) => ({
  'f3_product_category': category,
  ...from && { 'acf_after': from },
  ...to && { 'acf_before': to },
  ...author && { 'acf_teacher': author },
  ...tags.length > 0 && { tags }
})

class Page extends Component {
  static async getInitialProps({ query }) {
    return { query }
  }

  state = {
    offset: 0,
  }

  filterResults = (filter) => {
    updateCurrentRoute({ fragment: {...filter}, internal: {offset: 0} })
  }

  render() {
    const { query } = this.props

    const { from = '', to = '', author = '', tags = [] } = query
    const filter = { from, to, author, tags }

    return (
      <Query
        variables={{
          page_id: query.page_id,
        }}
        query={gql`
          query PageQuery($page_id: String!) {
            page(id: $page_id) @rest(type: "Page", path: "/wp/v2/pages/{args.id}") {
              id
              title
              link
              type
              acf
            }
          }
        `}
      >{({loading: pageLoading, error: pageError, data: { page }}) => (
        <Query
          fetchPolicy="cache-and-network"
          variables={{
            ...filterVariables(query.main_id || null)(filter.from, filter.to, filter.author, filter.tags)
          }}
          query={gql`
            query ProductsCountQuery($acf_after: String, $acf_before: String, $acf_teacher: String, $tags: [String], $f3_product_category: String) {
              count(acf_after: $acf_after, acf_before: $acf_before, acf_teacher: $acf_teacher, tags: $tags, f3_product_category: $f3_product_category) @rest(type: "ProductCount", path: "/wp/v2/products/count?{args}") {
                count
              }
            }
          `}
        >{({loading: countLoading, error: countError, data: { count }}) => (
          <Query
            fetchPolicy="cache-and-network"
            variables={{
              per_page: PRODUCTS_PER_PAGE,
              offset: 0,
              ...filterVariables(query.main_id || null)(filter.from, filter.to, filter.author, filter.tags)
            }}
            query={gql`
              query CoursesQuery($per_page: String!, $offset: String!, $acf_after: String, $acf_before: String, $acf_teacher: String, $tags: [String], $f3_product_category: String) {
                products(per_page: $per_page, offset: $offset, acf_after: $acf_after, acf_before: $acf_before, acf_teacher: $acf_teacher, tags: $tags, f3_product_category: $f3_product_category, acf_only: "list") @rest(type: "Product", path: "/wp/v2/products?{args}") {
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
            onCompleted={(data) => {
              console.log('onCompleted', data)
            }}
          >{({loading: productsLoading, error: productsError, data: { products }, fetchMore, variables}) => {
// console.log('variables', variables, 'this.state.offset:', this.state.offset, 'productsLoading:', productsLoading, 'products:', products, 'products.length <= this.state.offset:', products.length <= this.state.offset)
//             if(this.state.offset && !productsLoading && products && products.length <= this.state.offset) {
//               // onFetchMore(fetchMore, products.length, 'products')()
// console.log('fetchMore', products.length)
//             }

            return (
            (page && !pageError) && <Fragment>
              <Filter.Fill>
                <FilterComponent
                  pluralize={pluralizeFilter}
                  zeroTitle="Мероприятий не найдено"
                  defaultVariables={filter}
                  query={gql`
                    query FilterQuery {
                      # from @rest(type: "Product", path: "/wp/v2/products?per_page=1&order=asc&orderby=date") {
                      #   id
                      #   date
                      # }
                      persons @rest(type: "Person", path: "/wp/v2/persons?per_page=100&orderby=title&order=asc") {
                        id
                        title
                      }

                      tags @rest(type: "Tag", path: "/wp/v2/tags?per_page=100&orderby=count&order=desc") {
                        id
                        name
                      }
                    }
                  `}
                  countVariables={filterVariables(query.main_id)}
                  countQuery={gql`
                    query CountQuery($acf_after: String, $acf_before: String, $acf_teacher: String, $tags: [String], $f3_product_category: String) {
                      count(acf_after: $acf_after, acf_before: $acf_before, acf_teacher: $acf_teacher, tags: $tags, f3_product_category: $f3_product_category) @rest(type: "ProductCount", path: "/wp/v2/products/count?{args}") {
                        count
                      }
                    }
                  `}
                  applyFilter={this.filterResults}
                />
              </Filter.Fill>
              <Head
                title={page.title.rendered}
                description=""
                url={page.link}
                ogImage=""
              />
              <Breadcrumbs wp={page}/>
              <h1 dangerouslySetInnerHTML={{__html: page.title.rendered}}/>
              <section>
                <ACFContent object={page} blocks={acfBlocks} />

                {
                  (count && products) && <Fragment>{products.map((product) => (
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
                    ))}
                    <Frow container row="center" hug>
                      {products.length < count.count && <LoadMoreButton loading={productsLoading} onClick={onFetchMore(fetchMore, products.length, 'products')} />}
                    </Frow>
                  </Fragment>
                }
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
        )}</Query>
      )}</Query>
    )
  }
}

export default withRouter(Page)
