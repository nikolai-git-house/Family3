import React from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'

export default ({ author = '', children, ...props }) => (
  <Frow container>
    <section {...props}>
      <Frow xs="8/10" md="8/10">
        <blockquote>
          {children}
        </blockquote>
        <cite>{author}</cite>
      </Frow>
      <style jsx>{`
        section {
          font-family: 'Noto Serif', serif;
          line-height: 1.66667;
          /* padding: ${ Theme.xs.vr(2) } 3rem; */
          padding: ${ Theme.xs.vr(2) } 0;
        }

        blockquote {
          quotes: "«" "»" "“" "”";
          padding: 0;
          margin: 0;
        }

        blockquote::before {
          content: open-quote;
        }

        blockquote::after {
          content: close-quote;
        }

        blockquote:before,
        blockquote:after {
          display: block;
          color: ${ Theme.colors.accent };
          font-size: 3rem;
          line-height: 1;
          padding: 0;
          margin-top: -0.35rem;
          margin-bottom: 0.35rem;
          position: relative;
        }

        cite {
          font-style: italic;
        }

        @media (min-width: 992px) {
          section {
            padding: ${ Theme.md.vr(1) } 0;
            /* padding: ${ Theme.xs.vr(2.25) } 3rem; */
          }
        }
      `}</style>
    </section>
  </Frow>
)
