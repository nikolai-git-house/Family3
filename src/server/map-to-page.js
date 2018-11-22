const pagesMap = {
  'post': '/article',
  'page': '/page',
  'f3_product': '/product',
  'f3_person': '/person',
}

module.exports = (wp, originalQuery = {}) => {
  const template = wp.template || wp.page_template || wp.post_template || ''
  const type = wp.object || wp.type || wp.post_type || 'page'
  const id = wp.object_id || wp.id || wp.ID || null
  const main_id = (wp.acf && wp.acf.main_id) || wp.main_id || null

  const pathname = template !== '' && template !== 'default' ?  `/${ template.replace('.php', '') }` : pagesMap[type] || 'page'

  let pageQuery = {}
  switch (type) {
    case 'post':
      pageQuery = { page_id: String(id), main_id: null }
      break;
    case 'page':
      pageQuery = { page_id: String(id), main_id: String(main_id) }
      break;
    case 'f3_product':
      pageQuery = { page_id: String(id), main_id: null }
      break;
    case 'f3_person':
      pageQuery = { page_id: String(id), main_id: null }
      break;
    default:
      pageQuery = { page_id: String(id), main_id: null }
  }

  return { pathname, query: Object.assign({}, originalQuery, pageQuery) }
}
