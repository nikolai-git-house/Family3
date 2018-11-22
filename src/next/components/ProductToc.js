import React from 'react'

// import Frow from './Frow'
// import Tabs, { Tab } from '../components/Tabs'
import SlidingPanel from '../components/SlidingPanel'
import Theme from '../styles/theme'

const TOC = ({ title = 'Программа', children }) => (
  <section className="box">
    <h2 dangerouslySetInnerHTML={{__html: title}}/>
    <div>{
      children && React.Children.map(children, (item, i) => React.cloneElement(item, { ...item.props, openOnMount: i === 0, stacked: true }))
    }</div>
    <style jsx>{`
      .box {
        margin-bottom: ${ Theme.xs.vr(1)};
      }
      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(1.75)};
        }
      }
    `}</style>
  </section>
)

export const TOCItem = ({ title = null, children, stacked, openOnMount }) => (
  <SlidingPanel bar title={<h3 style={{margin: 0}} dangerouslySetInnerHTML={{__html: title}}/>} stacked={stacked} openOnMount={openOnMount}>{children}</SlidingPanel>
)

export default TOC
