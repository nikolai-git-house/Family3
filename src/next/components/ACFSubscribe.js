import React, { Fragment } from 'react'

import JCSubscribeBlock from './JCSubscribeBlock'
import Theme from '../styles/theme'

export default ({ block }) => (
  <Fragment>
    <div className="box">
      <JCSubscribeBlock code={block.code} ymTarget={block.ym_target}/>
    </div>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.xs.vr(1) };
      }
      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(1) };
        }
      }
    `}</style>
  </Fragment>
)
