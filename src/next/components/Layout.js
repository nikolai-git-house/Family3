import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import AppContext from './AppContext'

import Frow from './Frow'
import { acfImage } from '../lib/utils'

import Header from './Header'
import Footer from './Footer'
import Filter from './FilterSlotFill'

import AdFullWidth from './AdFullWidth'

export const Layout = ({children, ...props}) => (
  <AppContext.Provider>
    <Filter.Provider>
      <Query
        query={gql`
          query OptionsQuery {
            options @rest(type: "Options", path: "/acf/v3/options/options") {
              acf
            }
          }
        `}
      >{({ data }) => (
        <AppContext.Consumer>{({ setOptions }) => {
          (data && data.options) && setOptions(data.options.acf)
        }}</AppContext.Consumer>
      )}</Query>
      <Frow container column justify="between" className="sitebox" hug>
        <LayoutHeader/>
        <Frow grow={10}>
          <main>
            {children}
          </main>
        </Frow>
        <Footer />
      </Frow>
    </Filter.Provider>
  </AppContext.Provider>
)

const LayoutHeader = withRouter(({ firstPage, router }) => (  <Query query={gql`
    query globalInfoQuery {
      mainMenu @rest(type: "MainMenuItem", path: "/wp-api-menus/v2/menu-locations/main-menu") {
        url
        title
        attr
        classes
        object_id
        object
        template
        main_id
        children {
          url
          title
          attr
          classes
          parent
          object_id
          object
          template
          main_id
        }
      }

      routingMenu @rest(type: "RoutingMenuItem", path: "/wp-api-menus/v2/menu-locations/routing-menu") {
        url
        title
        object_id
        object
        template
        main_id
      }
    }
  `}>{
    (dataProps) => {

      return <AppContext.Consumer>{({ setRoutingMenu, setMainMenu, options }) => {
          setRoutingMenu(dataProps.data.routingMenu)
          setMainMenu(dataProps.data.mainMenu)
          return (
          <Fragment>
            {(options.banner && options.banner.show) && <AdFullWidth desktop={acfImage(options.banner.desktop, 'original')} mobile={acfImage(options.banner.mobile, 'original')} url={options.banner.link ? options.banner.link.url : ''}/>}
            <Header
              firstPage={router.asPath === '/'}
              mainMenu={dataProps.data.mainMenu}
              subMenu={dataProps.data.mainMenu.filter((item) => router.asPath.substr(0, item.url.length) === item.url).map(item => item.children).pop() || []}
            />
          </Fragment>
        )}}</AppContext.Consumer>

    }
  }
  </Query>
))

export default Layout
