import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
// import { withRouter } from 'next/router'
// import qs from 'qs'

// import WPLink from '../components/WPLink'
import { acfImage, updateCurrentRoute } from '../lib/utils'
import Frow from '../components/Frow'
import Theme from '../styles/theme'
import { LoadMoreButton } from '../components/Button'
import ProductListItem from '../components/ProductListItem'
import Filter from '../components/FilterSlotFill'
import FilterComponent from '../components/Filter'
import { pluralize, onFetchMore } from '../lib/utils'
import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'
// import HyperComments from '../components/HyperComments'
// import FetchMoreQueue from '../lib/FetchMoreQueue'

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

  // state = {
  //   itemsLength: PRODUCTS_PER_PAGE,
  // }

  // queryState = {
  //   offset: 0,
  //   itemsLength: PRODUCTS_PER_PAGE,
  // }

  // queue = new FetchMoreQueue()

  filterResults = (filter) => {
    updateCurrentRoute({ fragment: {...filter}, internal: {offset: 0} })
  }

  updateOffset = (itemsLength) => {
    // console.log('updateOffset', (this.props.query.offset || 0), '<', this.state.itemsLength - PRODUCTS_PER_PAGE)
    // if((this.props.query.offset || 0) < this.state.itemsLength - PRODUCTS_PER_PAGE) {
      // this.setState({ itemsLength })
      // updateCurrentRoute({ fragment: { offset: itemsLength - PRODUCTS_PER_PAGE }, replace: true })
    // }
  }

  componentDidMount() {
console.log('componentDidMount', this.props)
    // setTimeout(() => this.updateOffset(), 500)
  }

  componentDidUpdate() {
console.log('componentDidUpdate', this.props)
    // setTimeout(() => this.updateOffset(), 500)
  }

  render() {
    const { query } = this.props

    const { from = '', to = '', author = '', tags = [] } = query
    const filter = { from, to, author, tags }

    // console.log('this.props.query.offset:', this.props.query.offset, 'this.queryState.offset:', this.queryState.offset, 'this.queryState.itemsLength:', this.queryState.itemsLength)

    return (
      <Query
        // fetchPolicy="cache-and-network"
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
            // fetchPolicy="cache-and-network"
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
            // this.state.itemsLength !== products.length && this.updateOffset( products.length )

// console.log('variables', variables)
// console.log('this.props.query.offset:', this.props.query.offset, 'this.queryState.offset:', this.queryState.offset, 'productsLoading:', productsLoading, 'products.length', products.length, 'this.queryState.itemsLength:', this.queryState.itemsLength)
// console.log('this.props.query.offset:', this.props.query.offset, 'this.state.offset:', this.state.offset, 'productsLoading:', productsLoading, 'products.length', products.length, 'this.state.itemsLength:', this.state.itemsLength)
// console.log('this.props.query.offset:', this.props.query.offset, 'productsLoading:', productsLoading, 'products.length', products.length, 'error:', productsError)

            // if(!productsLoading) {
            //   if(products.length !== this.queryState.itemsLength) {
            //     this.queryState.itemsLength = products.length
            //     if(products.length <= (this.props.query.offset || 0)) {
            //       // this.queue.add(fetchMore, products.length, 'products')
            //       onFetchMore(fetchMore, products.length, 'products')()
            //     }
            //   }
            // }

            // if(!productsLoading) {
            //   const queryOffset = this.props.query.offset || 0
            //   if(queryOffset > this.queryState.offset) {
            //     this.queryState.offset = products.length
            //     onFetchMore(this.queryState.fetchMore || fetchMore, products.length, 'products')()
            //     this.queryState.fetchMore = null
            //     console.log('fetchMore 1', this.queryState.offset, products.length)
            //   } else if(products.length !== this.queryState.itemsLength) {
            //     this.queryState.itemsLength = products.length
            //     if(products.length <= queryOffset) {
            //       // setTimeout(() => onFetchMore(fetchMore, products.length, 'products')(), 500)
            //       console.log('fetchMore 2', products.length)
            //     }
            //   }
            // }

            // if(!productsLoading) {
            //   const queryOffset = this.props.query.offset || 0
            //   if(queryOffset > this.state.offset) {
            //     onFetchMore(fetchMore, products.length, 'products')()
            //     this.setState({ offset: products.length })
            //     console.log('fetchMore 1', this.state.offset, products.length)
            //   } else if(products.length !== this.state.itemsLength) {
            //     this.queryState.itemsLength = products.length
            //     this.setState({ itemsLength: products.length })
            //     if(products.length <= queryOffset) {
            //       // onFetchMore(fetchMore, products.length, 'products')()
            //       console.log('fetchMore 2', products.length)
            //     }
            //   }
            // }

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
                      persons @rest(type: "Person", path: "/wp/v2/persons?per_page=100&orderby=title&order=asc&acf_only=none") {
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

export default Page
