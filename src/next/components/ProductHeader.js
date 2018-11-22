import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import ProductPrices from './ProductPrices'
import ProductPoster from './ProductPoster'
import Tag from './Tag'
import ProductSchedule from './ProductSchedule'
import { dateFormatter, formatDate } from '../lib/utils'
import WPLink from './WPLink'
import Likely from './Likely'

export const ProductHeaderTeachers = ({ teachers = [] }) => (
  <Fragment>
    <section className="teachers">{teachers.map((teacher, i) => <span key={teacher.id}><WPLink wp={teacher}><a>{teacher.title}</a></WPLink></span>)}</section>
    <style jsx>{`
      .teachers {
        font-weight: 600;
        font-size: 1.33333rem;
        margin-bottom: ${ Theme.md.vr(0.25) };
      }

      .teachers span + span::before {
        content: ", ";
      }

      .teachers a {
        text-decoration: none;
      }

      .teachers a:hover {
        text-decoration: underline;
      }
      .teachers {
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      @media (min-width: 992px) {
        .teachers {
          font-size: 1rem;
        }

        .teachers {
          margin-bottom: ${ Theme.md.vr(1)};
        }
      }
    `}</style>
  </Fragment>
)

const makePosterBackground = (posterBackground) => {
  if(posterBackground === false) {
    return {}
  }

  if(posterBackground === true) {
    return {
      backgroundImage: 'url(/static/klcsa.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top 5rem left -10%',
    }
  } else {
    return {backgroundImage: `url(${ posterBackground.file })`}
  }
}

export default ({ title, subtitle, tags, image, wp, video, dates, period, prices, pricesOnClick, teachers, posterBackground = false, exclude = [] }) => (
  <Fragment>
    <header>
      {title && React.isValidElement(title) ? title : <h1 dangerouslySetInnerHTML={{__html: title}}/>}

      {teachers && <ProductHeaderTeachers teachers={teachers}/>}
      {tags && <section>{
        tags.map((tag, i) => <Tag key={i} wp={tag.wp} text={tag.text} />)
      }</section>}
      {subtitle && <h4 dangerouslySetInnerHTML={{__html: subtitle}}/>}
    </header>
    {period && <h1 className="period">с {formatDate(period.from, dateFormatter)} по {formatDate(period.to, dateFormatter)}</h1>}
    {dates && exclude.indexOf('schedule') === -1 && <ProductSchedule dates={dates}/>}
    <div className="header-info-box unbox" style={{...posterBackground !== false && (makePosterBackground(posterBackground))}}>
      <Frow container gutters items="end">
        <div className="header-info">
          <Frow xs="1/1" md="6/10">
            <div className="poster">
              <ProductPoster
                wp={wp}
                image={image}
                video={video}
              />
            </div>
            <Frow container justify="end">
              <div className="likely-box">
                {exclude.indexOf('like') === -1 && <Likely/>}
              </div>
            </Frow>
          </Frow>
          <Frow xs="1/1" md="4/10">
            <div className="prices">
              <ProductPrices prices={prices} onClick={pricesOnClick}/>
            </div>
          </Frow>
        </div>
      </Frow>
    </div>
    <style jsx>{`
      .poster {
        /* margin-bottom: ${ Theme.xs.vr(0.5) }; */
      }

      .header-info-box {
        padding-top: ${ Theme.xs.vr(1) };
        padding-bottom: ${ Theme.xs.vr(1) };
        margin-bottom: ${ Theme.xs.vr(1) };
        background-color: ${ posterBackground !== false ? Theme.colors.accentPoster : 'none'};
      }

      .prices {
        margin-top: ${ Theme.xs.vr(1)};
      }

      .likely-box {
        margin-top: ${ Theme.xs.vr(0.25)};
      }

      @media (min-width: 992px) {
        .poster {
          margin-bottom: 0;
        }

        .header-info-box {
          margin-bottom: ${ Theme.md.vr(1.75) };
        }

        .prices {
          margin-top: 0;
          margin-bottom: ${ exclude.indexOf('like') === -1 ? Theme.md.vr(1.25) : '0' };
        }

        .likely-box {
          margin-top: ${ Theme.md.vr(0.25)};
        }
      }
    `}</style>
  </Fragment>
)
