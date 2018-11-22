import React from 'react'
import NextHead from 'next/head'
import getConfig from 'next/config'
// import { string, object } from 'prop-types'

const { publicRuntimeConfig: { siteUrl } } = getConfig()

const defaultDescription = 'Family Tree сделан родителями для родителей. Мы оказываем всестороннюю информационную и психологическую поддержку семьи.'
const defaultOGURL = siteUrl
const defaultOGImage = `${siteUrl}/static/family3-logo-1024px.png`

const Head = (props) => (
  <NextHead>
    <title>Family Tree - {props.title || ''}</title>
    <meta name="description" content={(props.description || defaultDescription).replace(/<(\/?|[a-z]+)[^>]+?>/gi, '')} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${siteUrl}${props.url === '/index' ? '/' : props.url}` || defaultOGURL} />
    <meta property="og:title" content={`Family Tree${props.title ? ' - ' + props.title : ''}`} />
    <meta property="og:description" content={(props.description || defaultDescription).replace(/<(\/?|[a-z]+)[^>]+?>/gi, '')} />
    <meta name="twitter:site" content={`${siteUrl}${props.url === '/index' ? '/' : props.url}` || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={(props.ogImage && `${siteUrl}${props.ogImage.file}`) || defaultOGImage} />
    <meta property="og:image" content={(props.ogImage && `${siteUrl}${props.ogImage.file}`) || defaultOGImage} />
    <meta property="og:image:width" content={(props.ogImage && props.ogImage.width) || '512'} />
    <meta property="og:image:height" content={(props.ogImage && props.ogImage.height) || '348'} />

  </NextHead>
)
//
// Head.propTypes = {
//   title: string,
//   description: string,
//   url: string,
//   ogImage: object
// }

export default Head
