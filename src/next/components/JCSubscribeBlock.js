import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
// import Button from './Button'
import { YA_COUNTER } from '../lib/utils'

const ymClick = (ym_target) => {
  if(ym_target) {
    try {
      window[YA_COUNTER].reachGoal(ym_target)
    } catch (e) {}
  }
}

export default ({ code, ymTarget, variant = 'default', state = false, ...props }) => (
  <Fragment>
    <form className="frm" action={code.form.action} method={code.form.method} onSubmit={() => {
      state && window.localStorage.setItem('jc_subscribe', state)
    }}>
      <Frow container>
        <section {...props} className={`box ${variant}`}>
          <Frow xs="6/10" md="4/10" container column gutters>
            <div className="form">
              {code.tags.map(({tag: Tag, attrs}, i) => (
                <Frow key={i}>
                  <div className="input-box">
                    {Tag && <Tag className="input" {...attrs.type === 'submit' && {onClick: () => ymClick(ymTarget)}} {...attrs}/>}
                  </div>
                </Frow>
              ))}
            </div>
          </Frow>
        </section>
      </Frow>
    </form>
    <style jsx>{`
      .frm {
        width: 100%;
      }

      .box.default {
        background-color: ${ Theme.colors.accentSecondary };
        padding: ${ Theme.xs.vr(2.75) } 0;
        /* margin-bottom: ${ Theme.xs.vr(1) }; */
      }

      .box.white {
        /* margin-bottom: ${ Theme.xs.vr(1) }; */
      }

      .form {
        /* margin-bottom: ${ Theme.xs.vr(1) }; */
      }

      .box :global(button) {
        width: 100%;
      }

      .input-box :global(input) {
        width: 100%;
        border: 1px solid ${ Theme.colors.gray };
        border-radius: ${ Theme.xs.borderRadius.default };
        color: #000;
        font-size: 0.83333rem;
        line-height: 2.28;
        padding: 0 0.6rem;
        margin-bottom: ${ Theme.md.vr(0.5) };
      }

      .input-box :global(input::placeholder) {
        color: ${ Theme.colors.textLightGray };
      }

      .default .input-box :global(input) {
        background-color: ${ Theme.colors.backgroundAlmostWhite };
      }

      .white .input-box :global(input) {
        background-color: #fff;
      }

      .default .input-box :global(input[type=submit]),
      .white .input-box :global(input[type=submit]) {
        background-color: ${ Theme.colors.accent };
        border-radius: ${ Theme.xs.borderRadius.default };
        color: #fff;
        padding: ${ Theme.xs.vr(0.25)} 2rem;
        font-size: 0.83333rem;
        font-weight: 400;
        margin-bottom: ${ Theme.xs.vr(0.5) };
      }

      @media (min-width: 992px) {
        .box.default {
          padding: ${ Theme.md.vr(2.75) } 0;
          /* margin-bottom: ${ Theme.md.vr(1) }; */
        }
        .box.white {
          padding: 0;
        }

        .form {
          /* margin-bottom: ${ Theme.md.vr(1) }; */
        }

        .input-box :global(input) {
          border-radius: ${ Theme.md.borderRadius.small };
          font-size: 0.72222rem;
          line-height: 2.3;
        }

        .input-box :global(input[type=submit]) {
          border-radius: ${ Theme.md.borderRadius.default };
          padding: ${ Theme.md.vr(0.25)} 2rem;
          margin-bottom: ${ Theme.md.vr(0.5) };
        }
      }
    `}</style>
  </Fragment>
)
