import React, { Fragment } from "react";

import WPLink from "../components/WPLink";
import Frow from "./Frow";
import Theme from "../styles/theme";
import { acfImage } from "../lib/utils";
import Slider from "../components/Slider";
import { IconSolidArrowLeft, IconSolidArrowRight } from "./Icons";

export default ({ items }) => (
  <Fragment>
    <Slider>
      <Slider.Other>
        {({ active }) => (
          <Frow hidden={["xs", "sm"]} container row="center" nowrap>
            <div className="dots-box">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`dot${i === active ? " active" : ""}`}
                />
              ))}
            </div>
          </Frow>
        )}
      </Slider.Other>
      <Slider.LeftArrow>
        {({ onClick, active }) => (
          <div
            onClick={onClick}
            className={`left-arrow${active ? " active" : ""}`}
          >
            <button>
              <IconSolidArrowLeft />
            </button>
          </div>
        )}
      </Slider.LeftArrow>
      <Slider.Items xs="100%" md="100%">
        {({ active }) =>
          items.map((item, i) => (
            <div className={`picture${active === i ? " active" : ""}`} key={i}>
              <WPLink wp={item.wp}>
                <a>
                  <Slider.Picture
                    height="52.4%"
                    picture={acfImage(item.picture, "large")}
                  />
                </a>
              </WPLink>
              <div className="caption">
                <h2 className="header">
                  <WPLink wp={item.wp}>
                    <a dangerouslySetInnerHTML={{ __html: item.title }} />
                  </WPLink>
                </h2>
                {item.info && <Fragment>{item.info}</Fragment>}
              </div>
            </div>
          ))
        }
      </Slider.Items>
      <Slider.RightArrow>
        {({ onClick, active }) => (
          <div
            onClick={onClick}
            className={`right-arrow${active ? " active" : ""}`}
          >
            <button>
              <IconSolidArrowRight />
            </button>
          </div>
        )}
      </Slider.RightArrow>
    </Slider>
    <style jsx>{`
      .header,
      .header a {
        font-size: 1.25rem;
        font-weight: 300;
        color: ${Theme.colors.textDarkGray2};
        margin-bottom: ${Theme.xs.vr(1)};
      }

      .left-arrow,
      .right-arrow {
        position: absolute;
        padding-top: calc(26.2% - 1rem);
        padding-bottom: calc(26.2% - 1rem);
        width: calc(2rem + 14px);
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        opacity: 0;
        transition: opacity 0.2s linear;
        padding-left: 7px;
        padding-right: 7px;
        cursor: pointer;
      }

      .left-arrow.active,
      .right-arrow.active {
        opacity: 1;
        transition: opacity 0.2s linear;
      }

      .left-arrow {
        left: 0;
      }

      .right-arrow {
        right: 0;
      }

      .left-arrow :global(button),
      .right-arrow :global(button) {
        border: none;
        padding: 0;
        background: none;
        cursor: pointer;
      }

      .left-arrow :global(svg),
      .right-arrow :global(svg) {
        width: 2rem;
        height: 2rem;
        fill: ${Theme.colors.arrowLightGray};
      }

      @media (min-width: 992px) {
        .header,
        .header a {
          font-size: 1.33333rem;
          margin-bottom: ${Theme.md.vr(0.25)};
        }

        .left-arrow,
        .right-arrow {
          width: calc(2.22222rem + 10px);
        }

        .left-arrow {
          padding-left: 10px;
        }

        .right-arrow {
          padding-right: 10px;
        }

        .left-arrow :global(svg),
        .right-arrow :global(svg) {
          width: 2.22222rem;
          height: 2.22222rem;
        }

        .caption {
          margin-top: ${Theme.md.vr(2)};
        }

        .dots-box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding-top: calc(56.2% + 1rem);
          z-index: 0;
        }

        .dot {
          position: relative;
          background-color: ${Theme.colors.sliderDot};
          border-radius: 0.25rem;
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 0.27778rem;
          transition: background-color 0.2s linear;
        }

        .dot.active {
          background-color: ${Theme.colors.sliderDotActive};
        }
      }
    `}</style>
  </Fragment>
);
