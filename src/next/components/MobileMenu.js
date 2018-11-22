import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import { CSSTransition } from 'react-transition-group'
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import WPLink from './WPLink'
// import Frow from './Frow'
import Theme from '../styles/theme'
import { LogoFamilyTime, LogoFamilyTreeChannel, IconMenu, IconClose, IconSearch } from './Icons'
import { gotoWPRoute } from '../lib/utils'
import AppContext from '../components/AppContext'

const MobileSearch = withRouter(({ router, onClick }) => {
  const inputRef = React.createRef()
  return (
    <Fragment>
      <AppContext.Consumer>{({ namedWP }) => (
        <div className="search">
          <input type="text" placeholder="Введите поисковый запрос" defaultValue={router.query.text || ''} ref={inputRef} onKeyUp={(e) => {
            e.keyCode === 13 && gotoWPRoute({wp: namedWP('search'), fragment: {searchid: 2329793, web: 0, text: inputRef.current.value}})
            e.keyCode === 13 && onClick(e)
          }} /><button className="btn" onClick={(e) => {
            gotoWPRoute({wp: namedWP('search'), fragment: {searchid: 2329793, web: 0, text: inputRef.current.value}})
            onClick(e)
          }}><IconSearch/></button>
        </div>
      )}</AppContext.Consumer>
      <style jsx>{`
        button {
          border: none;
          background: none;
          padding: 0;
          margin: 0;
        }

        .search {
          position: relative;
          margin-bottom: ${ Theme.xs.vr(1.5) };
        }
        .search input {
          border: none;
          border-radius: ${ Theme.xs.borderRadius };
          padding: ${ Theme.xs.vr(0.5) } 2.66666rem ${ Theme.xs.vr(0.5) } 1.33333rem;
          width: 100%;
          background: #f95c3c;
          color: #fff;
        }

        .search :global(svg) {
          position: absolute;
          top: calc(50% - 8px);
          right: calc(1.33333rem - 8px);
          display: inline-block;
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .search input::placeholder {
          color: #f0f0f0;
        }
      `}</style>
    </Fragment>
)})


export default class MobileMenu extends Component {
  state = {
    open: false,
  }

  scrollRef = React.createRef()

  openTapped = (e) => {
    this.setState({ open: true })
    // document.body.style.overflow = 'hidden'
    // document.body.style.height = '100vh'
    // disableBodyScroll()
    // setTimeout(() => disableBodyScroll(this.scrollRef.current), 500)
    // setTimeout(() => console.log(this.scrollRef), 1500)
  }

  closeTapped = (e) => {
    console.log('currentTarget', e.currentTarget, 'target', e.target)
    if(e.currentTarget === e.target || e.currentTarget.nodeName.toLowerCase() === 'button' || e.target.nodeName.toLowerCase() === 'a' || e.currentTarget.nodeName.toLowerCase() === 'a') {
      // e.stopPropagation()
      // enableBodyScroll(this.scrollRef.current)
      this.setState({ open: false })
    }
  }

  render() {
    const { mainMenu = [] } = this.props

    return <Fragment>
      <div className="menu-open">
        <button onClick={this.openTapped}><IconMenu/></button>
      </div>
      <CSSTransition
        in={this.state.open}
        classNames="mobile-menu"
        timeout={400}
        mountOnEnter
        unmountOnExit
        >{
        (state) => (
          <div className="mobile-menu" onClick={this.closeTapped}>
            <section>
              <div className="menu-close">
                <button onClickCapture={this.closeTapped}><IconClose/></button>
              </div>
              <div className="scroll" ref={this.scrollRef}>
                <MobileSearch onClick={this.closeTapped}/>
                {/* <div className="search">
                  <input type="text" placeholder="Введите поисковый запрос"/><IconSearch/>
                </div> */}
                <nav>
                  <ul>{
                    mainMenu.filter(item => item.classes.indexOf('hidden') === -1).map((item, i) => <li key={i}>
                      <WPLink key={i} wp={item}><a>{item.title}</a></WPLink>
                      {item.children && <ul className="sub-nav">{
                        item.children.filter(item => item.classes.indexOf('hidden') === -1).map((subItem, j) => <li key={j}><WPLink wp={subItem}><a>{subItem.title}</a></WPLink></li>)
                      }</ul>}
                    </li>)
                    }</ul>
                </nav>
                <section className="contact-us">
                  <h1>Связаться с нами</h1>
                  <p><a href="tel:+79850545463">+7&nbsp;985&nbsp;054&nbsp;54&nbsp;63</a></p>
                </section>
                <AppContext.Consumer>{({ namedWP }) => (
                  <Fragment>
                    <div className="logo-secondary">
                      <WPLink wp={namedWP("products.club")}><a onClickCapture={this.closeTapped}><LogoFamilyTime height={42} style={{fill: '#fff', display: 'inline-block', marginRight: 16}} /></a></WPLink>
                      <WPLink wp={namedWP("products.channel")}><a onClickCapture={this.closeTapped}><LogoFamilyTreeChannel height={38} style={{fill: '#fff', display: 'inline-block'}}/></a></WPLink>
                    </div>
                    <section className="policy">
                      <WPLink wp={namedWP("privacy")}><a>Политика конфиденциальности</a></WPLink>
                    </section>
                  </Fragment>
                )}</AppContext.Consumer>
              </div>
            </section>
          </div>
      )}</CSSTransition>
      <style jsx>{`
        h1 {
          color: #fff;
        }

        button {
          border: none;
          background: none;
          padding: 0;
          margin: 0;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        .menu-open :global(svg),
        .menu-close :global(svg) {
          width: 24px;
          height: 24px;
          cursor: pointer;
          fill: #fff;
        }

        .menu-close {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding-top: calc(${ Theme.xs.vr(0.75)} + 15px);
          margin-bottom: ${ Theme.xs.vr(0.75) };
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10000;
        }
        .mobile-menu-enter {
          background-color: rgba(0, 0, 0, 0);
        }
        .mobile-menu-enter-active {
          background-color: rgba(0, 0, 0, 0.5);
          transition: all 300ms linear;
        }
        .mobile-menu-enter-done,
        .mobile-menu-exit {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .mobile-menu-exit-active {
          background-color: rgba(0, 0, 0, 0);
          transition: all 300ms linear;
        }

        .scroll {
          overflow-y: auto;
          max-height: calc(100vh - ${ Theme.xs.vr(1.5)} - 15px - 24px);
          padding-bottom: 80px;
        }

        .mobile-menu > section {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          color: #fff;
          background-color: ${ Theme.colors.accent };
          padding-right: 15px;
          padding-left: 3.75rem;
          z-index: 10100;
        }
        .mobile-menu-enter > section {
          transform: translateX(100%);
        }
        .mobile-menu-enter-active > section {
          transform: translateX(0);
          transition: all 300ms ease-out;
        }
        .mobile-menu-enter-done > section,
        .mobile-menu-exit > section {
          transform: none;
        }
        .mobile-menu-exit-active > section {
          transform: translateX(100%);
          transition: all 300ms ease-out;
        }

        .mobile-menu nav {
          margin-bottom: ${ Theme.xs.vr(1.5) };
        }

        .mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-menu nav a {
          display: block;
          font-size: 1.33333rem;
          font-weight: normal;
          color: #fff;
          text-transform: uppercase;
          line-height: 1.8;
        }

        .mobile-menu .sub-nav {
          padding-left: 2rem;
        }

        .mobile-menu .sub-nav a {
          font-size: 1rem;
          line-height: 2;
        }

        .contact-us {
          margin-bottom: ${ Theme.xs.vr(1.75) };
        }

        .contact-us h1 {
          font-size: 1.33333rem;
          font-weight: normal;
          text-transform: uppercase;
          padding: 0;
          margin: 0;
          margin-bottom: ${ Theme.xs.vr(0.5) };
        }

        .contact-us p {
          font-size: 1.33333rem;
          font-weight: 300;
        }

        .logo-secondary {
          margin-bottom: ${ Theme.xs.vr(1.75) };
        }

        .policy {
          margin-bottom: ${ Theme.xs.vr(1.75) };
        }

        .policy a {
          text-transform: uppercase;
          color: #fff;
        }

      `}</style>
    </Fragment>
  }
}
