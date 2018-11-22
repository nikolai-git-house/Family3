import React, { Fragment } from 'react'

import WPLink from './WPLink'
import Frow from './Frow'
import Theme from '../styles/theme'

export const TeamListItem = ({ title, position, image, wp, url, description }) => (
  <Fragment>
    <Frow container column items="start">
      <article className="box">
        <Frow xs="1/1" md="1/1">
          <div className="image">
            {image && <WPLink wp={wp}><a><img src={image.file} alt=""/></a></WPLink>}
          </div>
        </Frow>
        <Frow xs="1/1" md="1/1">
          <h2 className="list-header"><WPLink wp={wp}><a dangerouslySetInnerHTML={{__html: title}}/></WPLink></h2>
          <p className="position">{position}</p>
          <p className="description">{description}</p>
        </Frow>
      </article>
    </Frow>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.md.vr(1.5)};
      }

      .box img {
        width: 100%;
      }

      .box h2 {
        text-transform: uppercase;
        margin-bottom: ${ Theme.md.vr(0.25)};
      }

      .image {
        margin-bottom: ${ Theme.xs.vr(1)};
      }

      .position {
        font-size: 1.33333rem;
        font-weight: 600;
        margin-bottom: ${ Theme.md.vr(0.5)};
      }

      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(1.5)};
        }

        .box h2 {
          margin-bottom: ${ Theme.md.vr(0.25)};
        }

        .image {
          margin-bottom: ${ Theme.md.vr(2)};
        }

        .position {
          font-size: 1.33333rem;
          font-weight: 600;
          margin-bottom: ${ Theme.md.vr(0.5)};
        }
      }
    `}</style>
  </Fragment>
)

export default ({ children }) => (
  <Fragment>
    <Frow container gutters justify="start">
      <section className="box">
        {React.Children.toArray(children).map((item, i) => <Frow xs="1/1" md="1/2" key={i} hug>{item}</Frow>)}
      </section>
    </Frow>
    <style jsx>{`
      @media (min-width: 992px) {

      }
    `}</style>
  </Fragment>
)
