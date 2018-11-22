import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// import WPLink from '../components/WPLink'
import Theme from '../styles/theme'
import Frow from '../components/Frow'
import Testimonials from '../components/Testimonials'
import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'
import { LoadMoreButton } from '../components/Button'
import { onFetchMore } from '../lib/utils'
// import HyperComments from '../components/HyperComments'

const TESTIMONIALS_PER_PAGE = 4

class Page extends Component {
  static async getInitialProps({ query }) {

    return { query }
  }

  state = {
    product: '',
  }

  onProductChange = (product) => this.setState({ product })

  render() {
    const { query } = this.props
    return (
     <Query
       variables={{
         page_id: query.page_id,
         main_id: query.main_id,
        }}
       query={gql`
         query Query($page_id: String!, $main_id: String!, $product: String){
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
         {(data && !error) && <Query
           ssr={false}
            query={gql`
              query ProductsQuery {
                products(per_page: 100, acf_only: "none", has_testimonials: "yes", orderby: "title", order: "asc") @rest(type: "Product", path: "/wp/v2/products?{args}") {
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
           >{({ loading: productsLoading, error: productsError, data: productsData }) => (
             <Fragment>
               <Head
                 title={data.page.title.rendered}
                 description=""
                 url={data.page.link}
                 ogImage=""
               />
               <Breadcrumbs wp={data.page}/>



               <Query
                 variables={{
                   ...this.state.product && {product: this.state.product},
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
                     ...this.state.product && {product: this.state.product},
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
                     <Testimonials title={data.page.title.rendered} count={count.count} products={productsData && productsData.products} selectedProduct={this.state.product} onProductChange={this.onProductChange} items={testimonials} wide addButtonTitle="Оставить отзыв о нас" />
                     <Frow container row="center">
                       <div className="load-more-box">
                         {testimonials.length < count.count && <LoadMoreButton loading={testimonialsLoading} onClick={onFetchMore(fetchMore, testimonials.length, 'testimonials')} />}
                       </div>
                     </Frow>
                   </Fragment>
                 )}}</Query>
               )}</Query>





             </Fragment>
         )}</Query>}
         <style jsx>{`
           .load-more-box {
             margin-bottom: margin-bottom: ${ Theme.xs.vr(1) };
           }

           @media (min-width: 992px) {
             .load-more-box {
               margin-bottom: ${ Theme.md.vr(1.75) };
             }
           }
         `}</style>
       </Fragment>
     )}</Query>
   )
  }
}

  export default Page
