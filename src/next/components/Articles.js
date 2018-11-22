import React, { Fragment } from 'react'

import WPLink from '../components/WPLink'
import Frow from './Frow'
import Theme from '../styles/theme'
import { dateFormatter } from '../lib/utils'

export const ArticlesListItem = ({ title, image, wp, url, wide, exclude, children }) => (
  <Fragment>

      <Frow container gutters justify="start">
        <article className="box">
          <Frow xs={wide ? "3/4" : "1/1" } md={wide ? "4/10" : "1/1"}>
            <div className="picture">
              {image && <WPLink wp={wp}><a><img src={image.file} alt="" /></a></WPLink>}
            </div>
          </Frow>
          <Frow xs={wide ? "1/1" : "1/1"} md={wide ? "6/10" : "1/1"} hug>
            <h2 className="list-header"><WPLink wp={wp}><a dangerouslySetInnerHTML={{__html: title}}/></WPLink></h2>
            {!exclude['excerpt'] && <div><WPLink wp={wp}><a className="text" dangerouslySetInnerHTML={{ __html: children }}></a></WPLink></div>}
          </Frow>
        </article>
      </Frow>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      .picture {
        margin-bottom: ${ Theme.xs.vr(0.25) };
      }

      .picture img {
        width: 100%;
      }

      .text {
        text-decoration: none;
      }

      @media (min-width: 992px) {
        .list-header {
          margin-bottom: ${ Theme.md.vr(1.25) };
        }

        .box {
          margin-bottom: ${ Theme.md.vr(1.25) };
        }
      }
    `}</style>
  </Fragment>
)

export const HomepageArticlesListItem = ({ article, title, author, date, image }) => (
  <Fragment>
    <Frow xs="1/1" md="1/2" hug>
      <article className="article-on-red">
        <div className="picture-box">
          {image && <WPLink wp={article}><a><div className="picture" /></a></WPLink>}
        </div>
        <h2 className="header-on-red"><WPLink wp={article}><a dangerouslySetInnerHTML={{__html: title}}/></WPLink></h2>
        <footer className="info-on-red">{author} {date && dateFormatter.format(new Date(date))}</footer>
      </article>
    </Frow>
    <style jsx>{`
      .articles-on-red {
        margin: ${ Theme.xs.vr(-1) } 0;
      }

      .article-on-red {
        margin: ${ Theme.xs.vr(1) } 0;
      }

      .header-on-red,
      .header-on-red a {
        font-size: 1.25rem;
        font-weight: 300;
        color: #fff;
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      .info-on-red {
        color: #fff;
        font-size: 0.6875rem;
        font-style: italic;
      }

      .picture-box {
        display: none;
      }

      @media (min-width: 992px) {
        .articles-on-red {
          margin: ${ Theme.md.vr(-1) } 0;
        }

        .article-on-red {
          margin: ${ Theme.md.vr(1) } 0;
        }

        .header-on-red,
        .header-on-red a {
          font-size: 1.33333rem;
          margin-bottom: ${ Theme.md.vr(0.75) };
        }

        .picture-box {
          display: block;
          margin-bottom: ${ Theme.md.vr(1) };
        }

        .picture {
          width: 100%;
          background-size: cover;
        }
      }
    `}</style>
    <style jsx>{`
      .picture {
        background-image: url(${image.file});
        padding-bottom: ${image.height / image.width * 100}%;
      }
    `}</style>
  </Fragment>
)

const Articles = ({ items = [], wide, exclude = [] }) => (
  <Fragment>
    <Frow container gutters items="start" justify="start" hug>
      {items.map((item, i) => (
        <Frow key={i} xs="1/1" md={ wide ? '1/1' : '1/2' } hug>
          <ArticlesListItem title={item.title} image={item.image} wp={item.wp} wide={wide} exclude={exclude}>{item.snippet}</ArticlesListItem>
        </Frow>
        ) )}
    </Frow>
    <style jsx>{`
      @media (min-width: 992px) {

      }
    `}</style>
  </Fragment>
)

export default Articles
