import React, { Fragment } from 'react'
import Theme from '../styles/theme'

const middleDecoFills = {
  default:  Theme.colors.button,
  green: Theme.colors.green,
  gray: Theme.colors.gray,
  inline: Theme.colors.accent,
}

export default ({ children, variant="default", autowidth, ...props }) => {
  const [ firstContent, secondContent ] = React.Children.toArray(children)

// console.log(middleDecoFills[variant])

  return (
    <button className="button" disabled={variant === 'gray'} {...props}>
      <div className={`box ${ variant }`}>
        <svg
             version="1.1"
             className="left-deco"
             height="100%"
             >
          <defs>
            <path id="ticketButtonLeftCut" d="M 0 0 v 1000 a 6 6 0 0 1 0 12 v 1000 h 6 v -2012 z" />

            <clipPath id="ticketButtonCornerLeftTop">
              <rect x="5" y="0" width="100%" height="100%" />
              <rect x="0" y="5" width="100%" height="100%" />
              <circle cx="5" cy="5" r="5" />
            </clipPath>

            <clipPath id="ticketButtonCornerLeftBottom">
              <rect x="5" y="0" width="100%" height="100%" />
              <rect x="0" y="-5" width="100%" height="100%" />
              <circle cx="5" cy="100%" r="5" transform="translate(0, -5)" />
            </clipPath>
          </defs>

          <g clipPath="url(#ticketButtonCornerLeftBottom)">
            <g clipPath="url(#ticketButtonCornerLeftTop)">
              <use xlinkHref="#ticketButtonLeftCut" y="50%" transform="translate(0,-1006)" />
              <rect x="6" y="0" width="100%" height="100%"/>
            </g>
          </g>
        </svg>
        <div className="content">{ firstContent || '' }</div>
        { secondContent && (
          <Fragment>
            <svg
                 version="1.1"
                 className="middle-deco"
                 height="100%"
                 >
              <defs>
                <pattern id={`ticketButtonMiddlePattern-${ variant }`} x="0" y="0" width="12" height="6" patternUnits="userSpaceOnUse">
                  <path d="M 0,0 h 4 a 2 2 0 0 0 4 0 h 4 v 6 h -4 a 2 2 0 0 0 -4 0 h -4 z"/>
                </pattern>
              </defs>

              <rect x="0" y="0" width="12" height="100%" fill={`url(#ticketButtonMiddlePattern-${ variant })`}/>
            </svg>
            <div className="content">{ secondContent }</div>
          </Fragment>
        )}
        <svg
             version="1.1"
             className="right-deco"
             height="100%"
             >
          <defs>
            <path id="ticketButtonRightCut" d="M 6 0 v 1000 a 6 6 0 0 0 0 12 v 1000 h -6 v -2012 z" />

            <clipPath id="ticketButtonCornerRightTop">
              <rect x="-5" y="0" width="100%" height="100%" />
              <rect x="0" y="5" width="100%" height="100%" />
              <circle cx="100%" cy="5" r="5" transform="translate(-5, 0)" />
            </clipPath>

            <clipPath id="ticketButtonCornerRightBottom">
              <rect x="-5" y="0" width="100%" height="100%" />
              <rect x="0" y="-6" width="100%" height="100%" />
              <circle cx="100%" cy="100%" r="5" transform="translate(-5, -5)" />
            </clipPath>
          </defs>


          <g clipPath="url(#ticketButtonCornerRightBottom)">
            <g clipPath="url(#ticketButtonCornerRightTop)">
              <use xlinkHref="#ticketButtonRightCut" x="100%" y="50%" transform="translate(-6,-1006)" />
              <rect x="-6" y="0" width="100%" height="100%"/>
            </g>
          </g>
        </svg>
      </div>
      <style jsx>{`
        .button {
          background: none;
          border: none;
          display: block;
          width: ${ autowidth ? 'auto' : '100%' };
          cursor: pointer;
          padding: 0;
          margin: 0;
        }

        .box {
          display: flex;
          height: 3rem;
          width: auto;
          /* max-width: 100%; */
          justify-content: center;
        }

        .left-deco,
        .right-deco {
          flex: 0 0 auto;
          width: 9px;
          height: 100%;
        }

        .middle-deco {
          flex: 0 0 auto;
          width: 12px;
          height: 100%;
        }

        .content {
          flex: 1 1 auto;
          width: ${ autowidth ? 'auto' : 'calc(50% - 9px)' };
          padding: 0 calc(0.5rem + 3px);
          margin: 0 -3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.33333rem;
        }

        .default .left-deco,
        .default .right-deco,
        #ticketButtonMiddlePattern-default path
        {
          fill: ${ Theme.colors.button };
        }
        .default .content
        {
          color: #fff;
          background-color: ${ Theme.colors.button };
        }


        .green .left-deco,
        .green .right-deco,
        #ticketButtonMiddlePattern-green path
        {
          fill: ${ Theme.colors.green };
        }
        .green .content
        {
          color: #fff;
          background-color: ${ Theme.colors.green };
        }


        .gray {
          cursor: default;
        }
        .gray .left-deco,
        .gray .right-deco,
        #ticketButtonMiddlePattern-gray path
        {
          fill: ${ Theme.colors.gray };
        }
        .gray .content
        {
          color: #fff;
          background-color: ${ Theme.colors.gray };
        }

        .inline .left-deco,
        .inline .right-deco,
        #ticketButtonMiddlePattern-inline path
        {
          fill: ${ Theme.colors.accent };
        }
        .inline .content
        {
          color: #fff;
          background-color: ${ Theme.colors.accent };
        }
        .inline .content > :global(*) {
          padding: 0 0.5rem;
        }

        @media (min-width: 992px) {
          .box {
            height: 2.44445rem;
          }

          .content {
            font-size: 1rem;
            padding: 0 calc(0.5rem +1px);
          }

          .inline .content > :global(*) {
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </button>)}
