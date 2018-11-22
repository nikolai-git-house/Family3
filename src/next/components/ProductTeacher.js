import React, { Fragment } from 'react'

import Theme from '../styles/theme'
import Frow from './Frow'
import WPLink from './WPLink'

export default ({ title, image, wide, wp, children }) => (
  <Fragment>
    <Frow container gutters>
      <article className="teacher">
        <Frow xs="1/1" md={wide ? '1/2' : '1/1'} hug>
          <WPLink wp={wp}><a><img className="picture" src={image.file} alt=""/></a></WPLink>
        </Frow>
        <Frow xs="1/1" md={wide ? '1/2' : '1/1'} hug>
          <h3 className="title"><WPLink wp={wp}><a dangerouslySetInnerHTML={{__html: title}}/></WPLink></h3>
          {children}
        </Frow>
      </article>
    </Frow>
    <style jsx>{`
      .picture {
        width: 100%;
        margin-bottom: ${ Theme.xs.vr(1.5) };
      }

      .title {
        border-top: 3px solid ${ Theme.colors.accent };
        padding-top: ${ Theme.xs.vr(1.5) };
        font-weight: 600;
      }

      @media (min-width: 992px) {
        .picture {
          margin-bottom: ${ Theme.md.vr(1) };
        }
        .title {
          border-top-width: 3px;
          padding-top: ${ Theme.md.vr(1) };
        }
      }
    `}</style>
  </Fragment>
)
