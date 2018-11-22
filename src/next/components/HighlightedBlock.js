import React from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'

export default ({ children, ...props }) => (
  <Frow container>
    <section {...props} className="highlighted">
      <Frow xs="8/10" md="8/10" hug>{children}</Frow>
      <style jsx>{`
        .highlighted {
          background-color: ${ Theme.colors.accentSecondary };
          font-family: 'Noto Serif', serif;
          /* line-height: 1.48; */
          line-height: 1.66667;
          /* padding: ${ Theme.xs.vr(2) } 3rem; */
          padding: ${ Theme.xs.vr(2) } 0;
          margin-bottom: ${ Theme.xs.vr(1) };
        }

        @media (min-width: 992px) {
          .highlighted {
            padding: ${ Theme.md.vr(2) } 0;
            margin-bottom: ${ Theme.md.vr(1) };
          }
        }
      `}</style>
    </section>
  </Frow>
)
