import Router from 'next/router'
import qs from 'qs'
const mapToPage = require('../../server/map-to-page')

export { mapToPage }

export const acfImage = (image, size = 'original') => (image && image.sizes ? {
  file: size === 'original' ? image.url : image.sizes[size],
  width: size === 'original' ? image.width : image.sizes[`${size}-width`],
  height: size === 'original' ? image.height : image.sizes[`${size}-height`],
} : {})


export const priceFormatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0, maximumFractionDigits: 0 })

export const dateFormatter = new Intl.DateTimeFormat('ru-RU', {day: '2-digit', month: '2-digit'})

export const dateFormatterFull = new Intl.DateTimeFormat('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'})

export const timeFormatter = new Intl.DateTimeFormat('ru-RU', {timeZone: 'UTC', hour: 'numeric', minute: '2-digit'})

// export const pluralRules = new Intl.PluralRules("ru-RU")

export const linkToProductsList = (product, query = {}) => ({
  template: product.pure_taxonomies.f3_product_category[0].slug,
  type: 'page',
  id: null, //28
  main_id: product.pure_taxonomies.f3_product_category[0].term_id,
  link: `/products/${product.pure_taxonomies.f3_product_category[0].slug}`,
  query
})

export const linkToPostsList = (post, query = {}) => ({
  template: post.pure_taxonomies.categories[0].slug,
  type: 'page',
  id: null, //28
  main_id: post.pure_taxonomies.categories[0].term_id,
  link: `/${post.pure_taxonomies.categories[0].slug}`,
  query
})

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals
https://www.i18next.com/translation-function/plurals
 */

export const pluralize = (selectors) => (number) => {
  let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
      return selectors['many']
    }

    n %= 10
    if (n === 1) {
      return selectors['one']
    }
    if (n >= 2 && n <= 4) {
      return selectors['few']
    }
    return selectors['many']
}

export const onFetchMore = (fetchMore, offset, key) => () => {
  console.log('onFetchMore key:', key)
  fetchMore({
    variables: {
      offset
    },
    updateQuery: (prevResult, { fetchMoreResult }) => {
      console.log('updateQuery prevResult:', prevResult, 'fetchMoreResult:', fetchMoreResult)
      return !fetchMoreResult ? prevResult : ({...prevResult, [key]: [...prevResult[key], ...fetchMoreResult[key]]})
    }
  })
  updateCurrentRoute({ internal: { offset }, replace: true })
}

export const updateCurrentRoute = ({ fragment = {}, internal = {}, replace = false, shallow = false }) => {
  if(!process.browser) {
    return
  }

  const { pathname, query, asPath } = Router

  const newQuery = {...query, ...internal, ...fragment}
  // const {page_id, main_id, ...newAsQuery} = newQuery
  const newAsPath = asPath.split("?")[0]
  const newAsQuery = qs.stringify(fragment)
  Router[replace ? "replace" : "push"]({
    pathname,
    query: newQuery,
  }, `${newAsPath}${newAsQuery ? '?' : ''}${newAsQuery}`, { shallow })
}

export const formatDate = (date, formatter) => {
  try {
    const theDate = new Date(date)
    return formatter.format(theDate)
  } catch (e) {
    return ''
  }
}

export const gotoWPRoute = ({ wp, fragment = {}, replace = false, shallow = false }) => {
  const wpLink = (wp && (wp.link || wp.url || wp.post_link)) || ''

// console.log('gotoWPRoute', mapToPage(wp, fragment))

  Router.push(mapToPage(wp, fragment), `${wpLink}?${qs.stringify(fragment)}`, { shallow })
}

export function stringMatchAll(regex, input) {
  function* exec(regex, input) {
    while (true) {
      const match = regex.exec(input)
      if(match === null) {
        break
      }

      yield match
    }
  }

  return [...exec(regex, input)]
}

export const scheduleOrPeriod = (product) => {
  if(product.acf.period && product.acf.period[0]) {
    return [product.acf.period[0].date_start, product.acf.period[0].date_end]
  } else {
    return (product.acf.schedule || []).map(item => item.date)
  }
}

export const YA_COUNTER = 'yaCounter50284909'
