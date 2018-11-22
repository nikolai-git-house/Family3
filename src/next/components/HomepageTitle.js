import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import WPLink from './WPLink'
import { IconAngleArrowRight } from './Icons'

export default ({ title, link, variant = 'default' }) => (
  <Fragment>
    <Frow container justify="between" items="end">
      <div className={`box ${ variant }`}>
        <Frow grow="10"><h1 className="header list-header" dangerouslySetInnerHTML={{__html: title}}/></Frow>
        <Frow>
          <WPLink wp={link}><a className="all">Все</a></WPLink>
        </Frow>
        <Frow>
          <WPLink wp={link}><a className="all all-icon"><IconAngleArrowRight/></a></WPLink>
        </Frow>
      </div>
    </Frow>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.xs.vr(2) };
      }

      .all {
        text-decoration: none;
      }

      .all:hover {
        text-decoration: underline;
      }

      .all :global(svg) {
        height: 16px;
        display: inline-block;
        margin-bottom: -2px;
      }

      .all-icon {
        padding-left: 0.6rem;
      }

      .header {
        font-size: 1.5rem;
        color: #000;
        font-weight: 300;
        margin-bottom: 0;
        line-height: 1;
      }

      .default .header {

      }

      .default .all {
        color: ${ Theme.colors.textDarkGray };
      }

      .default .all :global(svg) {
        fill: ${ Theme.colors.arrowGray };
      }

      .white .header {
        color: #fff;
      }

      .white .all {
        color: #fff;
      }

      .white .all :global(svg) {
        fill: #fff;
      }

      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(2.25) };
        }

        .header {
          font-size: 2.22222rem;
          color: ${ Theme.colors.textDarkGray };
          font-weight: 300;
        }

        .all {
          font-size: 0.88889rem;
        }
      }
    `}</style>
  </Fragment>
)
