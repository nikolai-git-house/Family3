import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import { LoadMore } from './Icons'
import WPLink from './WPLink'

const Button = ({ variant = 'default', wp, ...props }) => (
  <Fragment>
    {wp
      ? <WPLink wp={wp}><button className={`${ variant }`} {...props}/></WPLink>
      : <button className={`${ variant }`} {...props}/>
    }
    <style jsx>{`
      button {
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        transition: background-color 0.2s linear;
      }

      button:disabled {
        cursor: not-allowed;
        background-color: ${ Theme.colors.gray };
      }

      .default {
        background-color: ${ Theme.colors.accent };
        border-radius: ${ Theme.xs.borderRadius.default };
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        padding: ${ Theme.xs.vr(0.5)} 2rem;
        min-width: 11.2rem;
      }

      .secondary {
        background-color: ${ Theme.colors.accent };
        border-radius: ${ Theme.xs.borderRadius.default };
        color: #fff;
        padding: ${ Theme.xs.vr(0.5)} 2rem;
        min-width: 14.3rem;
        font-size: 0.83333rem;
        font-weight: 400;
      }

      .narrow {
        background-color: ${ Theme.colors.accent };
        border-radius: ${ Theme.xs.borderRadius.default };
        color: #fff;
        padding: ${ Theme.xs.vr(0.5)} 2rem;
        font-size: 0.83333rem;
        font-weight: 400;
      }

      .small {
        background-color: ${ Theme.colors.accent };
        border-radius: ${ Theme.xs.borderRadius.default };
        color: #fff;
        padding: ${ Theme.xs.vr(0.5)} 0.5rem;
        font-size: 0.83333rem;
        font-weight: 400;
      }

      .white {
        padding: ${ Theme.xs.vr(0.25)} 1.1rem;
        background-color: ${ Theme.colors.backgroundGray };
        border: 1px solid #6d6d6d;
        border-radius: ${ Theme.xs.borderRadius.default };
        color: #fff;
        font-weight: 600;
      }

      .orange {
        background-color: ${ Theme.colors.backgroundOrange };
        border-radius: ${ Theme.xs.borderRadius.default };
        /* font-size: 0.75rem; */
        font-weight: 700;
        color: #fff;
        padding: ${ Theme.xs.vr(0.5)} 2rem;
        /* min-width: 11.2rem; */
      }

      @media (min-width: 992px) {
        .default {
          font-size: 0.88889rem;
          border-radius: ${ Theme.md.borderRadius.default };
          padding: ${ Theme.md.vr(0.5)} 3.2rem;
          min-width: 18.6rem;
        }

        .secondary {
          font-size: 1rem;
          font-weight: 400;
          border-radius: ${ Theme.md.borderRadius.default };
          padding: ${ Theme.md.vr(0.5)} 2rem;
          min-width: 14.4rem;
        }

        .narrow {
          font-size: 0.88889rem;
          line-height: 1.625;
          font-weight: 600;
          border-radius: ${ Theme.md.borderRadius.small };
          padding: ${ Theme.md.vr(0.25)} 1.2rem;
        }

        .small {
          border-radius: ${ Theme.xs.borderRadius.default };
          padding: 0 0.6rem;
          font-size: 0.66667rem;
          font-weight: 400;
          line-height: 2.66667;
        }

        .white {
          padding: ${ Theme.md.vr(0.25)} 1rem;
          background-color: inherit;
          border-radius: ${ Theme.md.borderRadius.small };
          border-color: #7a7a7a;
          color: ${ Theme.colors.textGray };
          font-size: 0.66667rem;
        }

        .orange {
          border-radius: ${ Theme.md.borderRadius.default };
          padding: ${ Theme.md.vr(0.5)} 2rem;
        }
      }
    `}</style>
  </Fragment>
)

export default Button

export const LoadMoreButton = ({loading, active = true, ...props}) => (
  <Fragment>
    <Button variant="secondary" {...props}><Frow container row="center"><div className="box"><Frow><div className={`icon${loading ? ' loading' : ''}`}><LoadMore/></div></Frow><Frow hug>Загрузить ещё</Frow></div></Frow></Button>
    <style jsx>{`
      .box {
        line-height: 1rem;
      }

      .icon :global(svg) {
        width: 1.1rem;
        height: 1.1rem;
        fill: #fff;
        margin-right: 1rem;
      }

      @keyframes loader {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
      }

      .icon.loading :global(svg){
        animation: loader 1.5s infinite linear;
        transform-origin: center;
      }
    `}</style>
  </Fragment>
)
//
// export const BuyButton = ({ wp, url, children, ...props }) => (
//   <Fragment>
//     <Button variant="default" {...props}>{children || 'Купить'}</Button>
//     <style jsx>{`
//       .box {
//         line-height: 1rem;
//       }
//
//       .box :global(svg) {
//         width: 1rem;
//         height: 1rem;
//         fill: #fff;
//         margin-right: 1rem;
//       }
//     `}</style>
//   </Fragment>
// )
