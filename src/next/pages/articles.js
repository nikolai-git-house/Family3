import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Frow from '../components/Frow'
import Articles from '../components/Articles'
// import Tag, { TagsLine } from '../components/Tag'
import { LoadMoreButton } from '../components/Button'
import { acfImage, updateCurrentRoute, onFetchMore } from '../lib/utils'
import Theme from '../styles/theme'
import { pluralize } from '../lib/utils'
import Filter from '../components/FilterSlotFill'
import FilterComponent from '../components/Filter'
import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'
// import HyperComments from '../components/HyperComments'

const ARTICLES_PER_PAGE = 10

const pluralizeFilter = pluralize({ one: 'найденную статью', few: 'найденных статьи', many: 'найденных статей' })

const filterVariables = (category) => (from, to, author, tags) => ({
  'categories': category,
  ...from && { 'after': from },
  ...to && { 'before': to },
  ...author && { 'acf_author': author },
  ...tags.length > 0 && { tags }
})

class Page extends Component {
  static async getInitialProps({ query }) {
    return { query }
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
          variables={{
            ...filterVariables(query.main_id || null)(filter.from, filter.to, filter.author, filter.tags)
          }}
          query={gql`
            query ArticlesCountQuery($after: String, $before: String, $acf_author: String, $tags: [String], $categories: String) {
              count(after: $after, before: $before, acf_author: $acf_author, tags: $tags, categories: $categories) @rest(type: "PostCount", path: "/wp/v2/posts/count?{args}") {
                count
              }
            }
          `}
        >{({loading: countLoading, error: countError, data: { count }}) => (
          <Query
            variables={{
              per_page: ARTICLES_PER_PAGE,
              offset: 0,
              ...filterVariables(query.main_id || null)(filter.from, filter.to, filter.author, filter.tags)
            }}
            query={gql`
              query ArticlesQuery($per_page: String!, $offset: String!, $after: String, $before: String, $acf_author: String, $tags: [String], $categories: String) {
                articles(per_page: $per_page, offset: $offset, after: $after, before: $before, acf_author: $acf_author, tags: $tags, categories: $categories, acf_only: "list") @rest(type: "Article", path: "/wp/v2/posts?{args}") {
                  id
                  title
                  link
                  type
                  template
                  pure_taxonomies
                  acf
                }
              }
            `}
          >{({loading: articlesLoading, error: articlesError, data: { articles }, fetchMore, variables}) => {
// console.log(articles)

            return (
            (page && !pageError) && <Fragment>
              <Head
                title={page.title.rendered}
                url={page.link}
              />
              <Breadcrumbs wp={page}/>
              <section>
                <Filter.Fill>
                  <FilterComponent
                    pluralize={pluralizeFilter}
                    zeroTitle="Статей не найдено"
                    defaultVariables={filter}
                    query={gql`
                      query FilterQuery {
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
                      query CountQuery($after: String, $before: String, $acf_author: String, $tags: [String], $categories: String) {
                        count(after: $after, before: $before, acf_author: $acf_author, tags: $tags, categories: $categories) @rest(type: "PostCount", path: "/wp/v2/posts/count?{args}") {
                          count
                        }
                      }
                    `}
                    applyFilter={this.filterResults}
                  />
                </Filter.Fill>
                <h1 dangerouslySetInnerHTML={{__html: page.title.rendered}}/>
                <Articles wide items={articles.map((article) => ({title: article.title.rendered, image: article.acf.image && acfImage(article.acf.image, 'large'), wp: article, snippet: article.acf.excerpt}))} />
                <Frow container row="center" hug>
                    {articles.length < count.count && <LoadMoreButton loading={articlesLoading} onClick={onFetchMore(fetchMore, articles.length, 'articles')} />}
                </Frow>
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
