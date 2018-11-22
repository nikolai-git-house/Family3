import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import WPLink from './WPLink'

export const RecordingsListItem = ({ title, image, wp, url, persons = [] }) => (
  <Fragment>
    <Frow container column>
      <article className="box">
        <Frow xs="1/1" md="1/1">
          <WPLink wp={wp}><a><img src={image.file} alt="" className="image" /></a></WPLink>
        </Frow>
        <Frow xs="1/1" md="1/1">
          <h2 className="list-header"><WPLink wp={wp}><a dangerouslySetInnerHTML={{__html: title}}/></WPLink></h2>
          <p className="persons">
            {persons.map((person, i) => <span key={person.id}><WPLink wp={person.wp}><a>{person.title}</a></WPLink></span>)}
          </p>
        </Frow>
      </article>
    </Frow>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.xs.vr(0.5) };
      }

      .image {
        width: 100%;
        margin-bottom: ${ Theme.xs.vr(0.5) };
      }

      .box h2 {
        margin-bottom: ${ Theme.xs.vr(0.5) };
      }

      .persons a {
        font-weight: 600;
        text-decoration: none;
      }

      .persons a:hover {
        text-decoration: underline;
      }


      .persons span + span::before {
        content: ', ';
      }

      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(0.5) };
        }

        .image {
          margin-bottom: ${ Theme.md.vr(0.5) };
        }

        .box h2 {
          margin-bottom: ${ Theme.md.vr(0.25) };
        }
      }
    `}</style>
  </Fragment>
)

export default ({ children }) => (
  <Fragment>
    <Frow container gutters items="start" justify="start">
      <section>
        {React.Children.toArray(children).map((item, i) => <Frow xs="1/1" md="1/2" hug key={i}>{item}</Frow>)}
      </section>
    </Frow>
    <style jsx>{`

      @media (min-width: 992px) {

      }
    `}</style>
  </Fragment>
)
