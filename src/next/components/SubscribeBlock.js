import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import Button from './Button'

export default ({ buttonTitle = "Подписаться на рассылку", nameTitle = "Имя", emailTitle = "e-mail", children, ...props }) => (
  <Fragment>
    <Frow container>
      <section {...props} className="box">
        <Frow xs="6/10" md="7/10" container gutters>
          <div className="form">
            <Frow xs="1/1" md="3/10" hug>
              <input type="text" placeholder={nameTitle}/>
            </Frow>
            <Frow xs="1/1" md="3/10" hug>
              <input type="text" placeholder={emailTitle}/>
            </Frow>
            <Frow xs="1/1" md="4/10" hug>
              <Button variant="small">{buttonTitle}</Button>
            </Frow>
          </div>
        </Frow>
        <Frow xs="6/10" md="7/10" container gutters hug>
          <Frow xs="1/1" md="1/1">{children || <div>Фактом подписки Вы соглашаетесь с <a href="">условиями пользовательского соглашения</a></div>}</Frow>
        </Frow>
      </section>
    </Frow>
    <style jsx>{`
      .box {
        background-color: ${ Theme.colors.accentSecondary };
        padding: ${ Theme.xs.vr(2.75) } 0;
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      .form {
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      .box :global(button) {
        width: 100%;
      }

      .box input {
        width: 100%;
      }

      .box input {
        border: 1px solid ${ Theme.colors.gray };
        border-radius: ${ Theme.xs.borderRadius.default };
        color: ${ Theme.colors.textLightGray };
        background-color: ${ Theme.colors.backgroundAlmostWhite };
        font-size: 0.83333rem;
        line-height: 2.28;
        padding: 0 0.6rem;
        margin-bottom: ${ Theme.md.vr(0.5) };
      }

      @media (min-width: 992px) {
        .box {
          padding: ${ Theme.md.vr(2.75) } 0;
          margin-bottom: ${ Theme.md.vr(1) };
        }

        .form {
          margin-bottom: ${ Theme.md.vr(1) };
        }

        .box input {
          border: 1px solid ${ Theme.colors.gray };
          border-radius: ${ Theme.md.borderRadius.small };
          font-size: 0.72222rem;
          color: ${ Theme.colors.textLightGray };
          line-height: 2.3;
        }
      }
    `}</style>
  </Fragment>
)
