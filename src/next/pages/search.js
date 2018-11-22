import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'
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

class Page extends Component {
  static async getInitialProps({ query }) {

    return { query }
  }

  queryText = ''

  attemptsCount = 0

  // yaSiteResultsRef = React.createRef()

  initYaResults = () => {
  console.log('initYaResults', this.yaSiteResultsRef.current, window.Ya.Site.Results)
    if(this.yaSiteResultsRef.current && window.Ya) {
      window.Ya.Site.Results.init()
    } else if(this.attemptsCount <= 30) {
      this.attemptsCount = this.attemptsCount + 1
      setTimeout(() => this.initYaResults(), 1000)
    }
  }

  reinitYaSearchScript = () => {
    [...document.getElementsByTagName('script')].filter(el => el.src === window.location.protocol + '//site.yandex.net/v2.0/js/all.js').map(el => el.parentNode.removeChild(el))

    setTimeout(() => {
      const yaScripts = [...document.getElementsByTagName('script')].filter(el => el.src === window.location.protocol + '//site.yandex.net/v2.0/js/all.js')
      if(yaScripts.length > 0) {
        return;
      }

      const firstScript = document.getElementsByTagName('script')[0]

      window.Ya = null

      const newScript = document.createElement('script')
      newScript.type='text/javascript'
      newScript.async=true
      newScript.charset='utf-8'
      newScript.src='//site.yandex.net/v2.0/js/all.js'

      firstScript.parentNode.insertBefore(newScript, firstScript)
    }, 10)
  }

  componentDidMount() {
    const { query } = this.props

    // console.log('this.reinitYaSearchScript()', process.browser, this.queryText, query.text)

    if(process.browser && this.queryText !== query.text) {
      console.log('this.reinitYaSearchScript()', process.browser, this.queryText, query.text)
      this.queryText = query.text
      this.reloadingScripts = true;

      (window['yandex_site_callbacks'] || (window['yandex_site_callbacks'] = [])).push(() => window.Ya.Site.Results.init())
      this.reinitYaSearchScript()
    }
  }

  componentDidUpdate() {
    const { query } = this.props

    // console.log('this.reinitYaSearchScript()', process.browser, this.queryText, query.text)

    if(process.browser && this.queryText !== query.text) {
      console.log('this.reinitYaSearchScript()', process.browser, this.queryText, query.text)
      this.queryText = query.text
      this.reloadingScripts = true;

      (window['yandex_site_callbacks'] || (window['yandex_site_callbacks'] = [])).push(() => window.Ya.Site.Results.init())
      this.reinitYaSearchScript()
    }
  }

  render() {
    const { query } = this.props

    return (
      <Fragment>
        <Query
          variables={{page_id: query.page_id}}
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
            <Head
              title={data.page.title.rendered}
              description=""
              url={data.page.link}
              ogImage=""
            />
            {<Fragment>
                {data.page && <Breadcrumbs wp={data.page}/>}
                <article>
                  <h1 dangerouslySetInnerHTML={{__html: data.page.title.rendered}}/>
                  {/* <ACFContent key={query.text || 0} object={data.page} blocks={acfBlocks} /> */}
                  {process.browser && <div key={this.props.query.text || '-'}>
                     <div id="ya-site-results" onClick={() => ({'tld': 'ru','language': 'ru','encoding': '','htmlcss': '1.x','updatehash': true})}></div>
                  </div>}
                </article>
              </Fragment>
            }
          </Fragment>
        )}</Query>
          {/* <div key={this.props.query.text || '-'} id="ya-site-results" ref={this.yaSiteResultsRef}></div> */}
      </Fragment>
   )
  }
}

export default Page
