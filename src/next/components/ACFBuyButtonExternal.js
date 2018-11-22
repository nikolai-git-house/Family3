import React, { Fragment } from 'react'
import Frow from './Frow'
import Theme from '../styles/theme'
import TicketButton from './TicketButton'
import { priceFormatter } from '../lib/utils'

export default ({ object, block }) => {
  return (
  <Fragment>
    <Frow container row="center">
      <div className="box">
        <TicketButton variant={ block.price === 0 ? "green" : "inline" } autowidth onClick={() => { window.open(block.link)}}>{block.price !== 0 && <span className="price">{priceFormatter.format(block.price)}</span>}<span className="label">{block.caption}</span></TicketButton>
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
