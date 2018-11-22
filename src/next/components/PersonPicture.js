import React, { Fragment } from 'react'

// import Frow from './Frow'
// import Theme from '../styles/theme'

export default ({ image }) => (
  <Fragment>
    <div className="box">
      {console.log('PersonPicture', Number(image.width))}
      <img src={image.file} className={(Number(image.width) || 1)/(Number(image.height) || 1) >=1 ? 'img-h' : 'img-v'} alt=""/>
    </div>
    <style jsx>{`
      .img-h {
        width: 100%;
      }

      .img-v {
        height: 230px;
      }

      @media (min-width: 992px) {
        .img-h {
          width: 80%;
        }

        .img-v {
          height: 514px;
        }
      }
    `}</style>
  </Fragment>
)
