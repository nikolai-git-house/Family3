import React from 'react'
import Link from 'next/link'
import qs from 'qs'
import { mapToPage } from '../lib/utils'

export default ({ wp, children }) => {
  // console.log('WPLink', wp)
  // console.log({ template: wp.template || wp.page_template || '', type: wp.object || wp.type, id: wp.object_id || wp.id, main_id: wp.acf.main_id || null })

  const wpLink = (wp && (wp.link || wp.url || wp.post_link)) || ''

  // console.log(wpLink)

  return (
  <Link href={wp ? mapToPage(wp, wp.query || {}) : {}} as={wp ? `${wpLink.substr(-6) === '/index' ? wpLink.substr(0, wpLink.length - 5) : wpLink}${wp.query ? '?'+qs.stringify(wp.query) : ''}` : ''}>{children}</Link>
)}
