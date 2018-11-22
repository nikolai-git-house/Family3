import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Head from '../components/Head'
import { acfImage, onFetchMore } from '../lib/utils'
import Frow from '../components/Frow'
import Theme from '../styles/theme'
import { LoadMoreButton } from '../components/Button'
import Team, { TeamListItem } from '../components/Team'
import ACFTextBlock from '../components/ACFTextBlock'
import Breadcrumbs from '../components/Breadcrumbs'

const PERSONS_PER_PAGE = 10

class Page extends Component {
  static async getInitialProps({ query }) {
    return { query }
  }

  render() {
    const { query } = this.props

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
            f3_person_category: query.main_id || null,
          }}
          query={gql`
            query PersonsCountQuery($tags: [String], $f3_person_category: String) {
              count(tags: $tags, f3_person_category: $f3_person_category) @rest(type: "PersonCount", path: "/wp/v2/persons/count?{args}") {
                count
              }
            }
          `}
        >{({loading: countLoading, error: countError, data: { count }}) => (
          <Query
            variables={{
              per_page: PERSONS_PER_PAGE,
              offset: 0,
              f3_person_category: query.main_id || null,
            }}
            query={gql`
              query PersonsQuery($per_page: String!, $offset: String!, $tags: [String], $f3_person_category: String) {
                persons(per_page: $per_page, offset: $offset, tags: $tags, f3_person_category: $f3_person_category, acf_only: "list") @rest(type: "Person", path: "/wp/v2/persons?{args}") {
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
          >{({loading: personsLoading, error: personsError, data: { persons }, fetchMore, variables}) => {
            return (
            (page && !pageError) && <Fragment>
              <Head
                title={page.title.rendered}
                description=""
                url={page.link}
                ogImage=""
              />
              <Breadcrumbs wp={page}/>
              <section>
                <h1 dangerouslySetInnerHTML={{__html: page.title.rendered}}/>
                {page.acf.text && <ACFTextBlock block={{ text: page.acf.text }}/>}
                <Team>{persons.map((person, i) => (
                  <TeamListItem
                    key={i}
                    wp={person}
                    title={person.title.rendered}
                    position={person.acf.position}
                    image={acfImage(person.acf.photo_team, 'large')}
                    description={person.acf.short_description}
                  />
                  )
                )}
                </Team>
                <Frow container row="center" hug>
                    {persons.length < count.count && <LoadMoreButton loading={personsLoading} onClick={onFetchMore(fetchMore, persons.length, 'persons')} />}
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
