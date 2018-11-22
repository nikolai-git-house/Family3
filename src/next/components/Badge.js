import React from 'react'

import { BadgeFree, BadgeDiscount } from './Icons'

const badges = {
  free: BadgeFree,
  discount: BadgeDiscount,
}

export default ({ variant }) => {
  const Badge = badges[variant] || null
  return (
  <div className="badge">
    <Badge />
    <style jsx>{`
      .badge {
        position: absolute;
        top: -0.83333rem;
        right: -0.83333rem;
        z-index: 100;
      }

      .badge :global(svg) {
        width: 65px;
        height: 65px;
      }

      @media (min-width: 992px) {
        .badge :global(svg) {
          width: 91px;
          height: 91px;
        }
      }
    `}</style>
  </div>
  )
}
