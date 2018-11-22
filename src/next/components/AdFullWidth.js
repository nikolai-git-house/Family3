import React, { Fragment } from 'react'

// import Frow from './Frow'
// import Theme from '../styles/theme'

/*
<img
    srcset="https://family3.ru/wp-content/uploads/2018/09/banner300.jpg 875w, https://family3.ru/wp-content/uploads/2018/09/banner260.jpg 1956w"
    sizes="(max-width: 450px) 100vw, (min-width: 451px) 100vw"
    src="https://family3.ru/wp-content/uploads/2018/09/banner260.jpg"
    alt=""
  />
 */


export default ({ desktop, mobile, url }) => (
  <Fragment>
    <a className="bnnr" href={url} rel="noopener noreferrer" target="_blank"><img className="bnnr-m" src={mobile && mobile.file} alt=""/><img className="bnnr-d" src={desktop && desktop.file} alt=""/></a>
    <style jsx>{`
      .bnnr {
        display: block;
        height: calc(100vw * 0.34286);
        // height: 150px;
        padding: 0;
        margin: 0;
        width: 100vw;
        overflow: hidden;
      }

      .bnnr-m,
      .bnnr-d {
        max-width: none;
        max-height: none;
        padding: 0;
        margin: 0;
      }

      .bnnr-m {
        display: block;
        width: 100vw;
        height: calc(100vw * 0.34286);
        // width: 438px;
        // height: 150px;
        // margin-left: calc(50vw - 219px);
      }
      .bnnr-d {
        display: none;
      }

      @media (min-width: 768px) {
        .bnnr {
          height: calc(100vw * 0.13292);
          overflow: inherit;
          width: inherit;
        }
        .bnnr-m {
          display: none;
        }
        .bnnr-d {
          display: block;
          width: 100vw;
        }
      }
    `}</style>
  </Fragment>
)
