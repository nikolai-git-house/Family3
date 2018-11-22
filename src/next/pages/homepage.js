import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Frow from '../components/Frow'
import Theme from '../styles/theme'
import WPLink from '../components/WPLink'
import HomepageTitle from '../components/HomepageTitle'
import HomepageSlider from '../components/HomepageSlider'
import { ProductsListItemPrices } from '../components/ProductPrices'
import { onFetchMore, acfImage } from '../lib/utils'
import Testimonials from '../components/Testimonials'
// import Testimonial from '../components/Testimonial'
import Head from '../components/Head'
import { LoadMoreButton } from '../components/Button'
import HyperComments from '../components/HyperComments'
import { HomepageArticlesListItem } from '../components/Articles'

const TESTIMONIALS_PER_PAGE = 4
const ARTICLES_PER_PAGE = 4

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
       variables={{ page_id: query.page_id }}
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
         {(data && !error) && <div>
           <Head
             title={data.page.title.rendered}
             description=""
             url={data.page.link}
             ogImage=""
           />
         <Frow container gutters>
             <div className="sliders">
               <Frow xs="1/1" md="1/2">
                 <section>
                   <HomepageTitle title={data.page.acf.products_courses.title} link={data.page.acf.products_courses.link}/>
                   <Query
                     // variables={{ products: (data.page.acf.products_courses.products || []).map(({ product }) => `include[]=${ product.ID }`).join('&') }}
                     variables={{
                       products: data.page.acf.products_courses.products ? data.page.acf.products_courses.products.filter(({ product }) => !!product.ID).map(({ product }) => product.ID) : [0]
                     }}
                     query={gql`
                       query ProductsQuery($products: [String!]) {
                         products(orderby: "include", include: $products, acf_only: "list") @rest(type: "Product", path: "/wp/v2/products?{args}") {
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
                     >{({ loading, error, data: acfData }) => (
                     (acfData && !error) && <HomepageSlider items={(data.page.acf.products_courses.products || []).filter(({ product }) => !!product.ID).map(({ product, text, picture }, i) => ({
                         title: text || product.post_title,
                         picture: picture,
                         wp: product,
                         info: <Fragment>
                           <div className="authors">{(acfData.products[i].acf.teachers.persons || []).map(({ person }, i) => <span key={person.ID || i}><WPLink wp={person}><a>{person.post_title}</a></WPLink></span>)}</div>
                           <ProductsListItemPrices variant="compact" prices={acfData.products[i].acf.prices}/>
                         </Fragment>
                       }))}/>
                   )}</Query>
                 </section>
               </Frow>
               <Frow xs="1/1" md="1/2">
               <section>
                 <HomepageTitle title={data.page.acf.articles_materials.title} link={data.page.acf.articles_materials.link}/>
                 <HomepageSlider items={(data.page.acf.articles_materials.articles || []).filter(({ article }) => !!article.ID).map(item => ({
                   title: item.text || item.article.post_title,
                   picture: item.picture,
                   wp: item.article
                 }))}/>
               </section>
               </Frow>
             </div>
           </Frow>
           <section className="bg-red unbox">
             <HomepageTitle variant="white" title={data.page.acf.articles_articles.title} link={data.page.acf.articles_articles.link}/>
             {data.page.acf.articles_articles.articles && <Query
               variables={
                 data.page.acf.articles_articles.latest_articles && data.page.acf.articles_articles.latest_articles === true
                 ? { orderby: 'date', categories: [data.page.acf.articles_articles.articles_category], per_page: data.page.acf.articles_articles.number_of_latest_items || ARTICLES_PER_PAGE }
                 : { orderby: 'include', articles: data.page.acf.articles_articles.articles.filter(({ article }) => !!article.ID).map(({ article }) => article.ID) }}
               query={gql`
                 query ArticlesQuery($orderby: String!, $articles: [String!], $per_page: String, $categories: [String!]) {
                   articles(orderby: $orderby, include: $articles, per_page: $per_page, categories: $categories, acf_only: "list") @rest(type: "Post", path: "/wp/v2/posts?{args}") {
                     id
                     type
                     link
                     title
                     template
                     acf
                     date
                   }
                 }
               `}
               >{({ loading, error, data: acfData }) => (
               (acfData && !error) && <div className="articles-on-red">
                 <Frow container row="start" items="start" gutters>
                   {acfData.articles.map((article, i) => (
                     <HomepageArticlesListItem
                      key={article.ID || i}
                      article={article}
                      title={ data.page.acf.articles_articles.latest_articles && data.page.acf.articles_articles.latest_articles === true
                        ? article.title.rendered
                        : data.page.acf.articles_articles.articles[i].text || article.title.rendered}
                      author={article.acf.author && article.acf.author.post_title}
                      date={article.date}
                      image={acfImage(article.acf.image)}
                    />
                     // <Frow key={article.ID || i} xs="1/1" md="1/2" hug>
                     //   <article className="article-on-red">
                     //     <h2 className="header-on-red"><WPLink wp={article}><a dangerouslySetInnerHTML={{__html: text || article.post_title}}/></WPLink></h2>
                     //     <footer className="info-on-red">{acfData.articles[i].acf.author && acfData.articles[i].acf.author.post_title} {acfData.articles[i].date && dateFormatter.format(new Date(acfData.articles[i].date))}</footer>
                     //   </article>
                     // </Frow>
                   ))}
                 </Frow>
               </div>
             )}</Query>}
           </section>

           <section className="testimonials-box">
             <HomepageTitle title={data.page.acf.testimonials.title} link={data.page.acf.testimonials.link}/>

             <Query
                 query={gql`
                   query TestimonialsCountQuery {
                     count @rest(type: "TestimonialCount", path: "/wp/v2/testimonials/count") {
                       count
                     }
                   }
                 `}
               >{({loading: countLoading, error: countError, data: { count }}) => (
                 <Query
                   variables={{
                     per_page: TESTIMONIALS_PER_PAGE,
                     offset: 0,
                   }}
                   query={gql`
                     query TestimonialsQuery($per_page: String!, $offset: String!) {
                       testimonials(per_page: $per_page, offset: $offset) @rest(type: "Testimonial", path: "/wp/v2/testimonials?{args}") {
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
                     <Testimonials count={count.count} items={testimonials} exclude={["title"]} addButtonTitle="Оставить отзыв о нас"/>
                     <Frow container row="center">
                       <div className="load-more-box">
                         {testimonials.length < count.count && <LoadMoreButton loading={testimonialsLoading} onClick={onFetchMore(fetchMore, testimonials.length, 'testimonials')} />}
                       </div>
                     </Frow>
                   </Fragment>
                 )}}</Query>
               )}</Query>
           </section>


           {data.page.acf.allow_comments &&
             <section>
               <HyperComments/>
             </section>}


         </div>}
         <style jsx>{`
           .sliders {
             margin-bottom: ${ Theme.xs.vr(1) };
           }

           .sliders section + section {
             margin-top: ${ Theme.xs.vr(2) };
           }

           .bg-red {
             background-color: ${ Theme.colors.accent };
             color: #fff;
             padding-top: ${ Theme.xs.vr(0.75)};
             padding-bottom: ${ Theme.xs.vr(0.75)};
             margin-bottom: ${ Theme.xs.vr(1) };
           }

           .bg-red a {
             color: #fff;
           }

           .authors {
             margin-bottom: ${ Theme.xs.vr(0.25) };
           }

           .authors a {
             font-weight: 700;
             color: #000;
             font-size: 0.88889rem;
             text-decoration: none;
           }

           .authors a:hover {
             text-decoration: underline;
           }

           .authors span + span::before {
             content: ", ";
           }

           .testimonials-box {
             margin-bottom: ${ Theme.xs.vr(1) };
           }

           .load-more-box {
             margin-top: ${ Theme.xs.vr(0.5)};
           }

           @media (min-width: 992px) {
             .sliders {
               margin-bottom: ${ Theme.md.vr(3) };
             }

             .sliders section + section {
               margin-top: 0;
             }

             .bg-red {
               padding-top: ${ Theme.md.vr(1.75)};
               padding-bottom: ${ Theme.md.vr(1.75)};
               margin-bottom: ${ Theme.md.vr(3) };
             }

             .authors {
               margin-bottom: ${ Theme.md.vr(0.5) };
             }

             .testimonials-box {
               margin-bottom: ${ Theme.md.vr(3) };
             }

             .load-more-box {
               margin-top: 0;
             }
           }
         `}</style>
       </Fragment>
     )}</Query>
   )
  }
}

export default Page
