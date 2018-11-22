import React, { Fragment } from "react";
import Frow from "./Frow";
import Theme from "../styles/theme";
import {
  IconFacebook,
  IconInstagram,
  IconYoutube,
  IconOdnoklassniki,
  IconVkontakte
} from "./Icons";

import AppContext from "./AppContext";

const socialmediaIcons = {
  fb: <IconFacebook />,
  ig: <IconInstagram />,
  yt: <IconYoutube />,
  ok: <IconOdnoklassniki />,
  vk: <IconVkontakte />
};

export default () => (
  <footer>
    <AppContext.Consumer>
      {({ options = {} }) => (
        <Fragment>
          <div className="sub">
            {options.subscribe &&
              options.subscribe.code &&
              options.subscribe &&
              options.subscribe.code.form && (
                <form
                  action={options.subscribe.code.form.action}
                  method={options.subscribe.code.form.method}
                >
                  <Frow container centered hug>
                    {options.subscribe.code.tags.map((tag, i) => {
                      switch (tag.attrs.type) {
                        case "hidden":
                          return <input key={i} {...tag.attrs} />;
                        case "text":
                          return (
                            <Frow key={i} xs="1/1" md="auto">
                              <div className="box">
                                <input {...tag.attrs} />
                              </div>
                            </Frow>
                          );
                        case "submit":
                          return (
                            <Frow key={i} xs="1/1" md="auto">
                              <div className="box btn">
                                <button type="submit">{tag.attrs.value}</button>
                              </div>
                            </Frow>
                          );
                        default:
                          return <input key={i} {...tag.attrs} />;
                      }
                    })}
                  </Frow>
                </form>
              )}
          </div>
          <div className="info">
            <div className="box">
              © ООО "Созвездие" 2017-2018. Все права защищены.
            </div>
            <Frow container centered>
              <Frow xs="1/1" md="auto">
                <div className="box">
                  Телефон:&nbsp;+7&nbsp;985&nbsp;054&nbsp;54&nbsp;63
                </div>
              </Frow>
              <Frow xs="1/1" md="auto">
                <div className="box">
                  e-mail:&nbsp;
                  <a href="mailto:info@family3.ru">info@family3.ru</a>
                </div>
              </Frow>
            </Frow>
            <div className="socialbox">
              <Frow container centered hug>
                {options.social &&
                  options.social.items &&
                  options.social.items.map(({ name, link }, i) => (
                    <a key={i} className="link" href={link} target="_blank">
                      {socialmediaIcons[name]}
                    </a>
                  ))}
              </Frow>
            </div>
            <div className="bottom-box">
              Created by{" "}
              <a href="https://specidea.uk" target="_blank">
                Specidea
              </a>
            </div>
          </div>
        </Fragment>
      )}
    </AppContext.Consumer>
    <style jsx>{`
      .sub :global(a),
      .info :global(a),
      .sub :global(a:visited),
      .info :global(a:visited) {
        color: #fff;
      }

      input[type="text"] {
        border: 1px solid #fff;
        border-radius: ${Theme.xs.borderRadius.default};
        background: none;
        color: #fff;
        font-size: 0.83333rem;
        line-height: 2.28;
        padding: 0 0.75rem;
        width: 40%;
        min-width: 11.85rem;
      }

      input[type="text"]::placeholder {
        color: #fff;
        text-align: center;
      }

      button {
        background-color: ${Theme.colors.accent};
        color: #fff;
        border: none;
        border-radius: ${Theme.xs.borderRadius.default};
        padding: 0 1.2rem;
        width: 40%;
        min-width: 11.85rem;
        font-size: 1rem;
        line-height: 2;
      }

      .sub {
        background-color: #999;
        padding-top: ${Theme.xs.vr(0.75)};
        padding-bottom: ${Theme.xs.vr(0.75)};
      }

      .sub :global(.box) {
        text-align: center;
        padding: ${Theme.xs.vr(0.25)} 15px;
      }

      .info .box {
        text-align: center;
        padding: 0 4px;
      }

      .info {
        padding-top: ${Theme.xs.vr(1)};
        padding-bottom: ${Theme.xs.vr(1)};
        background-color: #737373;
        color: #fff;
        text-align: center;
      }

      .info :global(.link) {
        display: inline-block;
        margin: 0 0.33333rem;
      }

      .info :global(.link) :global(svg) {
        width: 28px;
        height: 28px;
        fill: #fff;
      }

      .info .socialbox {
        margin-top: ${Theme.xs.vr(1)};
      }

      .bottom-box {
        margin-top: ${Theme.xs.vr(1)};
      }

      @media (min-width: 992px) {
        input[type="text"] {
          border-radius: ${Theme.md.borderRadius.default};
          font-size: 0.77778rem;
          line-height: 2;
          max-width: 11.85rem;
          width: 100%;
        }

        input[type="text"]::placeholder {
          text-align: left;
        }

        button {
          width: auto;
          font-size: 0.77778rem;
          line-height: 2.2;
        }

        .sub {
          padding-top: ${Theme.md.vr(0.91667)}; /* baseline grid alignment */
          padding-bottom: ${Theme.md.vr(1.33333)};
        }

        .info {
          padding-top: ${Theme.md.vr(1.5)};
          padding-bottom: ${Theme.md.vr(1.83333)};
        }

        .info .box {
          text-align: center;
          padding: 0.16667rem 4px;
        }

        .info .link {
          margin: 0 0.38889rem;
        }

        .info :global(.link) :global(svg) {
          width: 48px;
          height: 48px;
          fill: #fff;
        }

        .sub .btn {
          margin-top: 0;
        }

        .info .socialbox {
          margin-top: ${Theme.md.vr(1.25)};
        }
      }
    `}</style>
  </footer>
);
