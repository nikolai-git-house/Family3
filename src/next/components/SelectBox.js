import React, { Fragment } from 'react'

// import Frow from './Frow'
import Theme from '../styles/theme'

export default ({ children, variant = 'default', style, ...props }) => (
  <Fragment>
    <div className={`select-box ${variant}`} style={{...style}}>
      <select {...props}>
        {children}
      </select>
    </div>
    <style jsx>{`
      .select-box {
        display: inline-block;
        position: relative;
        max-width: 100%;
        vertical-align: top;
        height: calc(2rem + 2px);
      }

      .select-box select {
        display: block;
        position: relative;
        vertical-align: top;
        appearance: none;
        max-width: 100%;
        padding: calc(0.375rem - 1px) 2.5rem calc(0.375rem - 1px) calc(0.625rem - 1px);
        height: calc(2rem + 2px);
        font-size: 16px;
      }

      .select-box::after {
        content: ' ';
        display: block;
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        transform: rotate(-45deg);
        transform-origin: center;
        border: 2px solid ${ Theme.colors.gray };
        border-radius: 1px;
        border-right: 0;
        border-top: 0;
        right: 1rem;
        top: 0.65rem;
        z-index: 10;
      }

      .default select {
        color: ${ Theme.colors.textGray };
        font-weight: 400;
        font-size: 0.88889rem;
        background-color: #fff;
        border: 1px solid ${ Theme.colors.borderGray };
        /* text-indent: 0.6rem; */
        border-radius: ${ Theme.xs.borderRadius.default };
      }

      .white select {
        color: #fff;
        /* font-weight: 400;
        font-size: 0.88889rem; */
        background: ${ Theme.colors.accent };
        border: 1px solid #fff;
        text-indent: 0.6rem;
        border-radius: ${ Theme.xs.borderRadius.default };
      }

      .white::after {
        border-color: #fff;
      }

      .white option {
        color: #000;
      }

      @media (min-width: 992px) {
        .select-box select {
          font-size: 1rem;
        }

        .default select {
          border-radius: ${ Theme.md.borderRadius.default };
        }
        .white select {
          font-size: 0.88889rem;
          height: calc(1.66667rem + 2px);
          border-radius: ${ Theme.md.borderRadius.default };
        }

        .white::after {
          top: 0.5rem;
          right: 0.7rem;
        }
      }
    `}</style>
  </Fragment>
)
