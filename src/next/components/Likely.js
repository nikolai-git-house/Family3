import React, { Fragment, Component } from 'react'

// import Frow from './Frow'
// import Theme from '../styles/theme'
import IlyabirmanLikely from 'ilyabirman-likely'

export default class Likely extends Component {
  likelyRef = React.createRef()

  componentDidMount() {
    IlyabirmanLikely.initiate(this.likelyRef.current)
  }

  componentDidUpdate() {
    this.likelyRef.current['likely'] = null
    IlyabirmanLikely.initiate(this.likelyRef.current, {forceUpdate: true})
  }

  render() {
    return (
      <Fragment>
        <div className="likely likely-small" ref={this.likelyRef}>
            <div className="facebook">Поделиться</div>
            <div className="vkontakte">Поделиться</div>
            <div className="twitter">Твитнуть</div>
        </div>
        <style jsx>{`
          .likely {
            display: block !important;
          }
          @media (min-width: 992px) {

          }
        `}</style>
      </Fragment>
    )
  }
}
