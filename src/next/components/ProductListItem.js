import React, { Fragment } from 'react'
import WPLink from '../components/WPLink'

import Frow from './Frow'
import Theme from '../styles/theme'
import ProductPoster from './ProductPoster'
import { ProductsListItemPrices } from './ProductPrices'

export const ProductListItemTeachers = ({ teachers = [] }) => (
  <Fragment>
    <section className="teachers">{teachers.map((teacher, i) => <span key={teacher.id || teacher.ID || i}><WPLink wp={teacher}><a>{teacher.title}</a></WPLink></span>)}</section>
    <style jsx>{`
      .teachers span + span::before {
        content: ", ";
      }

      .teachers a {
        font-weight: 600;
        text-decoration: none;
      }

      .teachers a:hover {
        text-decoration: underline;
      }

      .teachers {
        margin-top: ${ Theme.xs.vr(0.25)};
      }

      @media (min-width: 992px) {
        .teachers {
          font-size: 1rem;
        }

        .teachers {
          margin-top: ${ Theme.md.vr(0.25)};
        }
      }
    `}</style>
  </Fragment>
)

export default ({ id, title, wp, url, image, badge, teachers = [], prices, dates = [], wide, exclude = [] }) => {
  return (
    <Frow container gutters justify="start">
      <article>
        <Frow xs="9/10" md={wide ? "1/2" : "1/1"}>
          <div className="poster-box">
            <ProductPoster id={id} image={image} badge={badge} dates={dates} wp={wp} exclude={exclude}/>
          </div>
        </Frow>
        <Frow xs="1/1" md={wide ? "1/2" : "1/1"} hug>
          <header>
            <h2 className="list-header"><WPLink wp={wp}><a dangerouslySetInnerHTML={{__html: title}}/></WPLink></h2>
          </header>
          {exclude.indexOf('teachers') === -1 && <ProductListItemTeachers teachers={teachers} />}
          {exclude.indexOf('prices') === -1 && <section className="prices">
            <ProductsListItemPrices prices={prices}/>
          </section>}
        </Frow>
        <style jsx>{`
          article {
            margin: ${ Theme.xs.vr(2) } 0;
          }

          .poster-box {
            margin-bottom: ${ Theme.xs.vr(0.5) };
          }

          .list-header {
            margin-bottom: ${ Theme.xs.vr(0.25) };
          }

          .prices {
            font-size: 1.33333rem;
          }

          .prices div {
            margin-top: ${ Theme.xs.vr(0.25)};
          }

          @media (min-width: 992px) {
            article {
              margin: ${ Theme.md.vr(1.5) } 0;
            }

            .list-header {
              margin-bottom: ${ Theme.md.vr(0.5) };
            }

            .prices div {
              margin-top: ${ Theme.md.vr(0.25)};
            }

            .prices {
              font-size: 1.33333rem;
            }
          }
        `}</style>
      </article>
    </Frow>
  )
}
