import React, { Fragment } from 'react'
import Frow from './Frow'
import Theme from '../styles/theme'
// import { BuyButton } from './Button'
import TicketButton from './TicketButton'
import ProductPurchase from './ProductPurchase'
import { getActivePrice } from './ProductPrices'


export default ({ object, block }) => {
  const activePrice = getActivePrice(object.acf.prices)

  const { price } = activePrice.activeDiscount === null ? activePrice.fullPrice : activePrice.activeDiscount

  return (
  <Fragment>
    <Frow container row="center">
      <div className="box">
        <ProductPurchase product={object}>{({ onClick }) => (
            <TicketButton variant={ price.value === 0 ? "green" : "inline" } autowidth onClick={onClick}>{price.value !== 0 && <span className="price">{price.formatted}</span>}<span className="label">{block.caption || (price.value === 0 ? "Бесплатно" : "Купить")}</span></TicketButton>
        )}</ProductPurchase>
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
