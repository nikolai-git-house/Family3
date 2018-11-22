import React, { Fragment } from 'react'
import Frow from './Frow'
import Theme from '../styles/theme'
import Button from './Button'


export default ({ block }) => (
  <Fragment>
    <Frow container centered>
      <div className="box">
        <Button>Перейти на другой продукт</Button>
      </div>
    </Frow>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.xs.vr(1) };
      }

      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(1) };
        }
      }
    `}</style>
  </Fragment>
)
