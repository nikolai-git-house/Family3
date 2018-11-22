import React from 'react'
// import Frow from './Frow'
import Theme from '../styles/theme'

export default ({ block }) => (
  <section className="box">
    {block.title && <h2 dangerouslySetInnerHTML={{__html: block.title}}/>}
    <div className="frame-box">
      <div className="frame" dangerouslySetInnerHTML={{__html: block.video}}/>
    </div>
    <style jsx>{`
      .box {
        margin-top: ${ Theme.xs.vr(1) };
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      .frame-box {
        position: relative;
        padding-bottom: calc(100% * 0.56);
      }

      .frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .frame > :global(iframe) {
        width: 100% !important;
        height: 100% !important;
      }

      @media (min-width: 992px) {
        .box {
          margin-top: ${ Theme.md.vr(2) };
          margin-bottom: ${ Theme.md.vr(2) };
        }
      }
    `}</style>
  </section>
)
