import React, { Fragment } from 'react'
import Frow from './Frow'
import Theme from '../styles/theme'
import Button from './Button'

export default ({ caption, link }) => {
  return (
  <Fragment>
    <Frow container centered>
      <div className="box">
        <Button onClick={() => { window.open(link)}}>{caption}</Button>
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
