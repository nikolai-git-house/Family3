import React, { Fragment } from 'react'
import { withRouter } from 'next/router'

import AppContext from '../components/AppContext'

import Frow from './Frow'
import Theme from '../styles/theme'
import WPLink from './WPLink'
import { LogoFamilyTree, LogoFamilyTreeChannel, LogoFamilyTime, IconSearch } from './Icons'
import { DesktopMainMenu, DesktopSubMenu } from './DesktopMenu'
import MobileMenu from './MobileMenu'
import Filter from './FilterSlotFill'
import { gotoWPRoute } from '../lib/utils'

export const YaSearch = () => (
  <Fragment>
    <div className="search" dangerouslySetInnerHTML={{__html: `
<div class="ya-site-form ya-site-form_inited_no" onclick="return {'action':'http://f3.dev.specidea.uk/search/','arrow':false,'bg':'transparent','fontsize':16,'fg':'#000000','language':'ru','logo':'ww','publicname':'Yandex Site Search #2327836','suggest':true,'target':'_self','tld':'ru','type':3,'usebigdictionary':true,'searchid':2327836,'input_fg':'#e4e4e4','input_bg':'#ec6b58','input_fontStyle':'normal','input_fontWeight':'normal','input_placeholder':'Введите поисковый запрос','input_placeholderColor':'#e4e4e4','input_borderColor':'#e4e4e4'}"><form action="https://yandex.ru/search/site/" method="get" target="_self" accept-charset="utf-8"><input type="hidden" name="searchid" value="2327836"/><input type="hidden" name="l10n" value="ru"/><input type="hidden" name="reqenc" value=""/><input type="search" name="text" value=""/><input type="submit" value="Найти"/></form></div><style type="text/css">.ya-page_js_yes .ya-site-form_inited_no { display: none; }</style><script type="text/javascript">(function(w,d,c){var s=d.createElement('script'),h=d.getElementsByTagName('script')[0],e=d.documentElement;if((' '+e.className+' ').indexOf(' ya-page_js_yes ')===-1){e.className+=' ya-page_js_yes';}s.type='text/javascript';s.async=true;s.charset='utf-8';s.src=(d.location.protocol==='https:'?'https:':'http:')+'//site.yandex.net/v2.0/js/all.js';h.parentNode.insertBefore(s,h);(w[c]||(w[c]=[])).push(function(){Ya.Site.Form.init()})})(window,document,'yandex_site_callbacks');</script>
      `}}/>
      <style jsx>{`
        .search {
          padding: 0 1.33333rem;
          margin-top: -0.27778rem;
          margin-bottom: -0.27778rem;
          position: relative;
        }

        .search :global(table) {
          width: 400px !important;
        }
      `}</style>
</Fragment>
  )

export const Search = withRouter(({ router, variant = "default"}) => {
  const inputRef = React.createRef()

// ?searchid=2327836&text=мама&web=0
  return (
  <div className={`search ${ variant }`}>
    <AppContext.Consumer>{({ namedWP }) => (
      <Fragment>
        <input type="text" placeholder="Введите поисковый запрос" defaultValue={router.query.text || ''} ref={inputRef} onKeyUp={(e) => {
          e.keyCode === 13 && gotoWPRoute({wp: namedWP('search'), fragment: {searchid: 2329793, web: 0, text: inputRef.current.value}})
        }} /><button className="btn" onClick={() => {
          gotoWPRoute({wp: namedWP('search'), fragment: {searchid: 2329793, web: 0, text: inputRef.current.value}})
        }}><IconSearch/></button>
      </Fragment>
    )}</AppContext.Consumer>
    <style jsx>{`
      .search {
        padding: 0 1.33333rem;
        margin-top: -0.27778rem;
        margin-bottom: -0.27778rem;
        position: relative;
      }
      input {
        border: 1px solid #e4e4e4;
        padding: 0.777rem 2.33333rem 0.777rem 1.33333rem;
        width: 100%;
        background: none;
        color: #333;
      }

      .btn {
        border: none;
        background: none;
        padding: 0;
      }

      .search :global(svg) {
        position: absolute;
        top: calc(50% - 14px);
        right: calc(1.33333rem + 1.4435rem - 14px);
        display: inline-block;
        width: 28px;
        height: 28px;
        cursor: pointer;
      }

      input::placeholder {
        color: #999;
      }

      .default input {
        color: #fff;
      }
      .default input::placeholder {
        color: #e4e4e4;
      }
      .default :global(svg) {
        fill: #fff;
      }

      .homepage input {
        color: #000;
      }
      .homepage input::placeholder {
        color: #e4e4e4;
      }
      .homepage :global(svg) {
        fill: ${ Theme.colors.accent };
      }
    `}</style>
  </div>
)})

export default ({firstPage = false, mainMenu = [], subMenu = [], variant = firstPage ? "homepage" : "default" }) => {
  return (<header>
  <div className={`header ${variant}`}>
    <Frow container row="between" items="end">
      <AppContext.Consumer>{({ namedWP, getLogo }) => {
        const Logo = LogoFamilyTree
        return (
        <Frow shrink={1} hug>
        {firstPage ?
          <div className="logo"><LogoFamilyTree /></div>
          :
          <WPLink wp={namedWP("homepage")}><a className="logo"><Logo/></a></WPLink>
        }
        </Frow>
      )}}</AppContext.Consumer>
      <Frow grow={100} visible={["md", "lg"]} hug>
        <Search variant={variant}/>
      </Frow>
      <Frow grow={1}>
        <div className="phone">+7&nbsp;985&nbsp;054&nbsp;54&nbsp;63</div>
      </Frow>
      <Frow shrink={1} myself="center" visible={["xs", "sm"]} hug>
        <MobileMenu mainMenu={mainMenu}/>
      </Frow>
    </Frow>
    <Frow container row="between" items="end" className="hidden-xs hidden-sm" nowrap>
      <Frow grow={1}>
        <DesktopMainMenu menu={mainMenu} />
      </Frow>
      <Frow shrink={1}>
        <AppContext.Consumer>{({ namedWP }) => (
          <div className="logo-secondary">
            <WPLink wp={namedWP("products.club")}><a><LogoFamilyTime height={55} style={{display: 'inline-block', margin: '2px 16px -2px 0'}} /></a></WPLink>
            <WPLink wp={namedWP("products.channel")}><a><LogoFamilyTreeChannel height={40} style={{display: 'inline-block'}}/></a></WPLink>
          </div>
        )}</AppContext.Consumer>
      </Frow>
    </Frow>
  </div>
  <Filter.Slot/>
  <DesktopSubMenu submenu={subMenu}/>
  <style jsx>{`
    header {
      position: relative;
    }

    .phone :global(a) {
      color: #fff;
    }

    .header {
      padding-top: ${ Theme.xs.vr(0.75)};
      padding-bottom: calc(${ Theme.xs.vr(1)} - 5px);
    }

    .logo :global(svg) {
      margin-top: -2px;
      height: 74px;
      transform: translateY(2px);
      /* 55px; */
      /* margin-bottom: 5px; */
    }

    .phone {
      font-size: 1.5rem;
      text-align: center;
      color: #fff;
      font-weight: 300;
    }

    .logo-secondary {
      margin-top: ${ Theme.md.vr(0.25) };
      white-space: nowrap;
    }



    .default {
      background-color: ${ Theme.colors.accent };
    }
    .default :global(svg) {
      fill: #fff;
    }
    .default .phone {
      color: #fff;
    }

    .default .logo-secondary :global(svg) {
      fill: #fff;
    }

    .default .top-menu-active {
      color: ${ Theme.colors.accent };
    }



    .homepage {
      background-color: none;
    }
    .homepage :global(svg) {
      fill: ${ Theme.colors.accent };
    }
    .homepage .phone {
      color: ${ Theme.colors.accent };
    }

    .homepage .logo-secondary :global(svg) {
      fill: ${ Theme.colors.accent };
    }

    .homepage .top-menu-active {
      color: #fff;
    }

    @media (min-width: 992px) {
      .header {
        padding-top: ${ Theme.md.vr(1.75)};
        padding-bottom: 0.94444rem;
        margin-bottom: ${ Theme.md.vr(0.75) };
      }

      .logo :global(svg) {
        height: 118px; /* 95px; */
        transform: translateY(23px);
        margin-top: -23px !important;
      }
    }
  `}</style>
</header>)}
