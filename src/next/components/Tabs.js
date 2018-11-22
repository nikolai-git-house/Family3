import React, { Component, Fragment } from 'react'

import Theme from '../styles/theme'

export default class extends Component {
  state = {
    selectedIndex: 0,
  }

  tabRefs = []
  // contentRef = React.createRef()

  render() {
    const { children } = this.props

    return (
      <section className="tabs">
        {children}
        <style jsx>{`
          .tabs {
            border-bottom: 1px solid ${ Theme.colors.accentLight };
          }
        `}</style>
      </section>
    )
  }
}

export const Tab = ({ title, children }) => (
  <Fragment>
    {title && <div className="tab-title"><h3 dangerouslySetInnerHTML={{__html: title}}/></div>}
    <div className="tab-content"><div>{children}</div></div>
    <style jsx>{`
      .tab-title,
      .tab-content {
        border: 1px solid ${ Theme.colors.accentLight };
        border-bottom: none;
      }

      .tab-title {
        font-size: 1.125rem;
        font-weight: 500;
        padding: ${ Theme.xs.vr(0.5)} 1.33333rem;
      }

      .tab-content > div {
        padding: ${ Theme.xs.vr(0.5)} 1.33333rem;
      }

      h3 {
        margin: 0;
      }

    `}</style>
  </Fragment>
)
