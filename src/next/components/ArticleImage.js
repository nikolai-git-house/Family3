import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import Likely from './Likely'

export default ({ image }) => (
  <Fragment>
      <div className="box unbox">
        <Frow container justify="start">
          <div>
            <Frow xs="1/1" md="6/10" hug>
              <img src={image.file} alt=""/>
            </Frow>
            <Frow xs="1/1" md="6/10" hug>
              <Frow container justify="end">
                <div className="likely-box">
                  <Likely/>
                </div>
              </Frow>
            </Frow>
          </div>
        </Frow>
      </div>
    <style jsx>{`
      .box {
        background-color: ${ Theme.colors.backgroundLightGreen};
        padding-top: ${ Theme.xs.vr(0.75)};
        padding-bottom: ${ Theme.xs.vr(0.75)};
        margin-bottom: ${ Theme.xs.vr(1)};
      }

      img {
        width: 100%;
      }

      @media (min-width: 992px) {
        .box {
          padding-top: ${ Theme.md.vr(1.75)};
          padding-bottom: ${ Theme.md.vr(1.75)};
          margin-bottom: ${ Theme.md.vr(1)};
        }
      }
    `}</style>
  </Fragment>
)
