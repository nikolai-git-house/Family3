import React, { Fragment } from 'react'
import Frow from './Frow'
import Theme from '../styles/theme'
import Button from './Button'
// import WPLink from './WPLink'


export default ({ object, block }) => {
  return (
  <Fragment>
    <Frow container centered>
      <div className="box">
        <Button wp={block.link[0]}>{block.caption}</Button>
      </div>
    </Frow>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      .price,
      .label {
        color: #fff;
        font-weight: 700;
      }

      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(1) };
        }
      }
    `}</style>
  </Fragment>
)}
