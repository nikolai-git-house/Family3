import React from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import Badge from './Badge'
import WPLink from './WPLink'

export default ({ id, badge, image, video, wp, url, exclude = [] }) => {
  return (
    <div className="poster">
      {video
        ? <div className="video-box"><div className="video-frame" dangerouslySetInnerHTML={{__html: video}}/></div>
        : image && image.file ? (wp ? <WPLink wp={wp}><a><img src={image.file} alt=""/></a></WPLink> : <img src={image.file} alt=""/>) : <div className="img-placeholder"></div>
      }
      {badge && <Badge variant={badge} />}
      <style jsx>{`
        .img-placeholder {
          width: 100%;
          padding-bottom: 52.4%;
          background: linear-gradient(-30deg, rgba(240,240,240,0.1), rgba(245,245,245,1) 50%, rgba(240,240,240,0.1));
        }

        .poster {
          position: relative;
          /* margin-right: 15px; */
          z-index: 11;
        }

        .poster img {
          position: relative;
          width: 100%;
          z-index: 10;
        }

        .video-box {
          position: relative;
          padding-bottom: calc(100% * 0.56);
        }

        .video-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-frame > :global(iframe) {
          width: 100% !important;
          height: 100% !important;
        }

        @media (min-width: 992px) {
        }
      `}</style>
    </div>
  )
}
