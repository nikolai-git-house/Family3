import { priceFormatter, dateFormatter, formatDate } from '../lib/utils'

const adjustDiscounts = (discounts, today = new Date()) => discounts
  .map(discount => {
    const from = new Date(discount.from)
    from.setHours(0, 0, 0, 0)

    const to = new Date(discount.to)
    to.setHours(23, 59, 59, 999)

    const price = Number(discount.price)

    const formattedPrice = price === 0 ? 'Бесплатно' : priceFormatter.format(price)
    const formattedFrom = formatDate(from, dateFormatter)
    const formattedTo = formatDate(to, dateFormatter)

    return {
      ...discount,
      from: {value: from, formatted: formattedFrom},
      to: {value: to, formatted: formattedTo},
      price: { value: price, formatted: formattedPrice}
    }
  })
  .sort((l, r) => {
    const fromDelta = l.from - r.from

    return fromDelta !== 0 ? fromDelta : l.to - r.to
  })
  .map(discount => {
    if(today > discount.to.value) { //discount in past
      return {...discount, status: 'past' }
    } else if(today < discount.from.value) { //discount in future
      return {...discount, status: 'future' }
    } else {
      return {...discount, status: 'active' }
    }
  })

const adjustFullPrice = (discounts, full_price, today = new Date()) => {
  const isActiveDiscounts = discounts.filter(discount => discount.status === 'active').length > 0
  const maxFutureDate = discounts.filter(discount => today <= discount.to.value).map(discount => new Date(discount.to.value.getTime() + 1)).reduce((result, current) => current, null)
  const price = Number(full_price)
  const formattedPrice = price === 0 ? 'Бесплатно' : priceFormatter.format(price)

  return {
    price: { value: price, formatted: formattedPrice },
    status: isActiveDiscounts ? 'future' : 'active',
    from: maxFutureDate === null ? null : { value: maxFutureDate, formatted: dateFormatter.format(maxFutureDate) },
  }
}

export default (prices) => {

  const discounts = adjustDiscounts(prices.discounts || [])
  const full_price = adjustFullPrice(discounts, prices.full_price)

  return { ...prices, discounts, full_price }
}
