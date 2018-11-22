import React, { Fragment } from 'react'
// import Frow from './Frow'
import Theme from '../styles/theme'
import { acfImage } from '../lib/utils'
import Slider from '../components/Slider'
import { IconSolidArrowLeft, IconSolidArrowRight } from './Icons'

export default ({ block }) => (
  <Fragment>
    {block.title && <h2 dangerouslySetInnerHTML={{__html: block.title}}/>}
    <section className="outer-box">
      <Slider>
        <Slider.LeftArrow>{({ onClick, active }) => (
          <div className={`left-arrow${ active ? ' active' : '' }`}>
            <button onClick={onClick}><IconSolidArrowLeft/></button>
          </div>
        )}</Slider.LeftArrow>
        <Slider.Items xs="100%" md="850px">{({ active }) => (
          block.pictures.map((item, i) => (<div className={`picture${ active === i ? ' active' : '' }`} key={i}>
            <Slider.Picture height="66.5%" picture={acfImage(item, 'large')}/>
            <div className="caption">
              <div className="number">{`${i+1}/${block.pictures.length}`}</div>
              {item.caption && <div className="text">{item.caption}</div>}
            </div>
          </div>))
        )}
        </Slider.Items>
        <Slider.RightArrow>{({ onClick, active }) => (
          <div className={`right-arrow${ active ? ' active' : '' }`}>
            <button onClick={onClick}><IconSolidArrowRight/></button>
          </div>
        )}</Slider.RightArrow>
      </Slider>
    </section>

    <style jsx>{`
      .outer-box {
        background-color: ${ Theme.colors.backgroundLightGreen};
        margin: 0 -15px;
        padding-top: ${ Theme.xs.vr(0.75)};
        padding-bottom: ${ Theme.xs.vr(0.75)};
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      .picture {
        margin: 0 15px;
      }

      .caption {
        position: relative;
        opacity: 0;
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 0.83333rem;
        transition: opacity 0.2s linear;
      }

      .active .caption {
        opacity: 1;
        transition: opacity 0.2s linear;
      }

      .caption .number {
        flex: 0 0 auto;
        font-size: 2.66667rem;
        line-height: 1;
        font-weight: 300;
        color: ${ Theme.colors.textGalleryGray };
        padding-right: 1.11111rem;
      }

      .caption .text {
        flex: 1 1 auto;
        max-width: 100%;
      }

      .left-arrow,
      .right-arrow {
        position: absolute;
        height: 100%;
        width: 4.44444rem;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        opacity: 0;
        transition: opacity 0.2s linear;
      }

      .left-arrow.active,
      .right-arrow.active {
        opacity: 1;
        transition: opacity 0.2s linear;
      }

      .left-arrow.active button,
      .right-arrow.active button {
        cursor: pointer;
      }

      .left-arrow {
        left: 0;
      }

      .right-arrow {
        left: calc(100vw - 4.44444rem);
      }

      .left-arrow button,
      .right-arrow button {
        border: none;
        padding: 0;
        background: none;
        cursor: default;
      }

      .left-arrow :global(svg),
      .right-arrow :global(svg) {
        width: 32px;
        height: 32px;
        fill: ${ Theme.colors.arrowDarkGray };
      }

      @media (min-width: 992px) {
        .outer-box {
          margin: 0 calc((50vw - 485px) * -1) ${ Theme.md.vr(1) } calc((50vw - 485px) * -1);
          padding: ${ Theme.md.vr(1.75)} 0;
        }


        .left-arrow,
        .right-arrow {
          width: 4.44444rem;
        }

        .left-arrow {
          left: calc(50vw - 470px);
        }

        .right-arrow {
          left: calc(50vw + 470px - 4.44444rem);
        }

        .picture {
          margin: 0 80px;
        }

        .caption {
          position: relative;
          min-height: 2.66667rem;
        }

        .caption .number {
          position: absolute;
          font-size: 2.66667rem;
          line-height: 1;
          font-weight: 300;
          color: ${ Theme.colors.textGalleryGray };
          right: 100%;
          top: 0;
          padding-right: 1.11111rem;
        }
      }
    `}</style>
  </Fragment>
)
