import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import WPLink from '../components/WPLink'
import Frow from './Frow'
import Theme from '../styles/theme'

export const DesktopMainMenu = withRouter(({ menu = [], router }) => (
  <nav className="main-menu">
    {menu.filter(item => item.classes.indexOf('hidden') === -1).map((item, i) => <WPLink key={i} wp={item}><a className={`${router.asPath.substr(0, item.url.length) === item.url ? ' active ' : ''}`}>{item.title}</a></WPLink>)}
    <style jsx>{`
      .main-menu a {
        color: #000;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.88888rem;
        margin: 0 0.5rem;
        text-decoration: none;
      }

      .main-menu a:hover {
        text-decoration: underline;
      }

      .main-menu a:first-child {
        margin-left: 0;
      }

      .main-menu a:last-child {
        margin-right: 0;
      }

      .main-menu a.active {
        color: #fff;
      }
    `}</style>
  </nav>
))

export const DesktopSubMenu = withRouter(({ submenu = [], router }) => (
  <Fragment>
    <div className="submenu">
      <Frow visible={["md", "lg"]}>
        <nav>{
          submenu.filter(item => item.classes.indexOf('hidden') === -1).map((item, i) => <WPLink key={i} wp={item}><a className={`${router.asPath.substr(0, item.url.length) === item.url ? ' active ' : ''}`}>{item.title}</a></WPLink>)
        }</nav>
      </Frow>
    </div>
    <style jsx>{`
      .submenu {
        min-height: ${ Theme.xs.vr(2.5)};
      }

      a {
        color: ${ Theme.colors.accent };
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 0.88888rem;
        line-height: 1.5;
        margin: 0 0.5rem;
      }

      a:hover {
        text-decoration: underline;
      }

      a.active {
        color: #000;
      }

      a:first-child {
        margin-left: 0;
      }

      a:last-child {
        margin-right: 0;
      }
      @media (min-width: 992px) {
        .submenu {
          min-height: ${ Theme.md.vr(1)};
          margin-bottom: ${ Theme.md.vr(1.25)};
        }
      }
    `}</style>
  </Fragment>
))
