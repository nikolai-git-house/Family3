import React, { Fragment } from 'react'

import Theme from '../styles/theme'
import TicketButton from './TicketButton'
import Frow from './Frow'
// import css from 'styled-jsx/css'
// import { priceFormatter, dateFormatter } from '../lib/utils'

const adaptDiscounts = (discounts) => discounts.map(discount => {
  let result = { from: discount.from.formatted, to: discount.to.formatted, status: discount.status }

  switch (discount.status) {
    case 'past':
      result = {...result,
                  variant: 'gray',
                  price: {formatted: discount.price.formatted, classname: 'outdated-price'},
                  label: {classname: 'outdated-label', value: 'Просрочено'}
                }
      break;
    case 'future':
      result = {...result,
                  variant: 'gray',
                  price: {formatted: discount.price.formatted, classname: 'future-price'},
                  label: {classname: 'future-label', value: 'Скоро'}
                }
      break;
    case 'active':
      result = {...result,
                  price: {formatted: discount.price.formatted, classname: 'active-price'},
                  variant: discount.price.value === 0 ? 'green' : 'default',
                  label: discount.price.value === 0 ? null : {classname: 'active-label', value: 'Купить'},
                }
      break;
    default:
  }

  return result
})

const adaptFullPrice = (full_price) => {
  return {
    status: full_price.status,
    price: {
      formatted: full_price.price.formatted,
      classname: full_price.status === 'active' ? 'active-price' : 'future-price',
    },
    from: full_price.from && full_price.from.formatted,
    variant: full_price.status !== 'active' ? 'gray' : full_price.price.value === 0 ? 'green' : 'default',
    label: full_price.price.value === 0 ? null : {
      classname: full_price.status === 'active' ? 'active-label' : 'future-label',
      value: full_price.status === 'active' ? 'Купить' : 'Скоро',
    }
  }
}

export const getMaxActiveDiscount = (discounts) => discounts.filter(discount => discount.status === 'active').reduce((result, current) => result === null || current.price.value > result.price.value ? current : result, null)

export const getActivePrice = (prices) => {
  const activeDiscount = getMaxActiveDiscount(prices.discounts) //prices.discounts.filter(discount => discount.status === 'active').reduce((result, current) => result === null || current.prcie > result.price ? current : result, null)

  return {
    fullPrice: {
      classname: prices.full_price.price.value === 0 ? 'free' : 'number',
      price: { ...prices.full_price.price },
    },
    activeDiscount: activeDiscount === null ? null : {
      classname: activeDiscount.price.value === 0 ? 'free' : 'number',
      price: { ...activeDiscount.price },
      coupon: activeDiscount.coupon,
    },
    label: activeDiscount === null ? null : {
      value: `до ${activeDiscount.to.formatted}`,
    }
  }
}

export const ProductsListItemPrices = ({ prices, variant = 'default' }) => {
  if(!prices) {
    return null
  }

  const price = getActivePrice(prices)

  return (
    <div className={`box ${ variant }`}>
      {price.activeDiscount
        ? <Fragment><span className="discounted">{price.fullPrice.price.formatted}</span>&nbsp;<span className={price.activeDiscount.classname}>{price.activeDiscount.price.formatted}</span></Fragment>
        : <span className={price.fullPrice.classname}>{price.fullPrice.price.formatted}</span>
      } {price.label && <span className="description">{price.label.value}</span>}
      <style jsx>{`
        .default .box {
          font-size: 1.33333rem;
        }

        .default .discounted {
          color: #e02e12;
          font-weight: 400;
          text-decoration: line-through;
        }

        .default .free {
          color: #198300;
          font-weight: 700;
        }

        .default .number {
          color: #e02e12;
          font-weight: 700;
        }

        .default .description {
          color: #737373;
        }

        .compact .box {
          font-size: 1rem;
        }

        .compact .discounted {
          color: #e02e12;
          font-weight: 400;
          text-decoration: line-through;
        }

        .compact .free {
          color: #198300;
          font-weight: 700;
        }

        .compact .number {
          color: #e02e12;
          font-weight: 700;
        }

        .compact .description {
          color: #737373;
        }
      `}</style>
    </div>
  )
}

export default ({ prices, onClick = () => {} }) => {
// console.log(prices)
  if(!prices) {
    return null
  }

  const adaptedDiscounts = adaptDiscounts(prices.discounts || [])
  const fullPrice = adaptFullPrice(prices.full_price)

  return (
  <Fragment>
    <div className="box">
      <Frow container column xs="8/10" md="8/10" justify="start">
        <div className="list">
          {adaptedDiscounts && adaptedDiscounts.map(({price, from, to, variant, label, status, coupon }, i) => (
            <Fragment>
              <div className="interval">Цена с {from} по {to}</div>
              <TicketButton variant={variant} onClick={status === 'active' ? onClick : undefined}><span className={price.classname}>{price.formatted}</span>{label && <span className={label.classname}>{label.value}</span>}</TicketButton>
            </Fragment>
          ))}
          {fullPrice.from && <div className="interval">Цена с {fullPrice.from}</div>}
          <TicketButton variant={fullPrice.variant} onClick={fullPrice.status === 'active' ? onClick : undefined}><span className={fullPrice.price.classname}>{fullPrice.price.formatted}</span>{fullPrice.label && <span className={fullPrice.label.classname}>{fullPrice.label.value}</span>}</TicketButton>
        </div>
      </Frow>
    </div>

    <style jsx>{`
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .list {
        align-items: center;
      }

      .price-item {
        margin-bottom: ${ Theme.xs.vr(1) };
        text-align: center;
      }

      .interval {
        margin-bottom: ${ Theme.md.vr(0.5) };
        font-weight: 600;
      }

      :global(.button) + :global(.button),
      :global(.button) ~ .interval {
        margin-top: ${ Theme.md.vr(1) };
      }

      .outdated-price {
        font-weight: 400;
        text-decoration: line-through;
      }

      .outdated-label,
      .future-label,
      .active-label {
        font-weight: 600;
      }

      .future-price {
        font-weight: 400;
      }

      .active-price {
        font-weight: 700;
      }

      @media (min-width: 992px) {
        .box {
          align-items: flex-start;
        }

        .list {
          align-items: flex-start;
        }

        :global(.button) + :global(.button),
        :global(.button) ~ .interval {
          margin-top: ${ Theme.md.vr(1) };
        }

        .interval {
          font-weight: 600;
          font-size: 0.77778rem;
        }

        .outdated-price {
          font-weight: 400;
          text-decoration: line-through;
        }

        .outdated-label,
        .future-label,
        .active-label {
          font-weight: 600;
        }

        .future-price {
          font-weight: 400;
        }

        .active-price {
          font-weight: 700;
        }
      }
    `}</style>
  </Fragment>
)}
