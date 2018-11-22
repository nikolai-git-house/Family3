import React from 'react'

import AppContext from './AppContext'
import Theme from '../styles/theme'
import WPLink from './WPLink'

// const

export default ({ wp }) => {
  if(!wp) {
    return null
  }
  return (
    <AppContext.Consumer>{({ namedWP, pageBreadcrumbs }) => {
      const homepage = namedWP('homepage')

      if(!homepage) {
        return null
      }

      let nav = [{...homepage, title: 'Главная'}]
      switch (wp.type) {
        case 'f3_product':
          const productType = wp.pure_taxonomies.f3_product_category[0] ? wp.pure_taxonomies.f3_product_category[0].slug : ''
          const productsPage = namedWP(`products.${productType}`)
          if(productsPage) {
            const productBC = pageBreadcrumbs(productsPage.object_id)
            nav = [...nav, ...productBC, {...wp, title: wp.title.rendered}]
          } else {
            nav = [...nav, {...wp, title: wp.title.rendered}]
          }
          break;
        case 'f3_person':
          const personType = wp.pure_taxonomies.f3_person_category[0] ? wp.pure_taxonomies.f3_person_category[0].slug : ''
          const personsPage = namedWP(`persons.${personType}`)
          if(personsPage) {
            const personBC = pageBreadcrumbs(personsPage.object_id)
            nav = [...nav, ...personBC, {...wp, title: wp.title.rendered}]
          } else {
            nav = [...nav, {...wp, title: wp.title.rendered}]
          }
          break;
        case 'post':
          const postType = wp.pure_taxonomies.categories[0] ? wp.pure_taxonomies.categories[0].slug : ''
          const postsPage = namedWP(`${postType}`)
          if(postsPage) {
            const postsBC = pageBreadcrumbs(postsPage.object_id)
            nav = [...nav, ...postsBC, {...wp, title: wp.title.rendered}]
          } else {
            nav = [...nav, {...wp, title: wp.title.rendered}]
          }
          break;
        case 'page':
          const pageBC = pageBreadcrumbs(wp.id)
          nav = pageBC.length > 0 ? [...nav, ...pageBC] : [...nav, {...wp, title: wp.title.rendered}]
          break;
        default:
      }

// console.log('nav', nav)
      return (<nav>
        {nav.map((item, i) => (
          i === nav.length - 1 ? <span key={item.id || i} dangerouslySetInnerHTML={{__html: item.title}}/> : <span key={item.id || i}><WPLink wp={item}><a>{item.title}</a></WPLink></span>
        ))}
        <style jsx>{`
          nav {
            font-size: 0.66666rem;
            font-weight: normal;
            margin-bottom: ${ Theme.xs.vr(1) };
          }

          span + span::before {
            content: "-";
            padding: 0 0.4rem;
          }

          @media (min-width: 992px) {
            nav {
              margin-bottom: ${ Theme.md.vr(0.25) };
            }
          }
        `}</style>
      </nav>)
    }}</AppContext.Consumer>
)}
