import React, { Component } from 'react'
// import { withState } from 'recompose'

import { IconPlus, IconMinus } from './Icons'
import Theme from '../styles/theme'
import Frow from './Frow'

export default class extends Component {
  state = {
    open: false,
  }

  contentRef = React.createRef()

  toggleOpen = (e) => {
    this.setState({ open: !this.state.open })
  }

  componentDidMount() {
    if(this.props.openOnMount) {
      this.setState({ open: true })
    }
  }

  render() {
    const { children, title, stacked, bar } = this.props

    return (
      <section className={`panel ${this.state.open ? 'open' : ''}`}>
        <Frow container items="center" nowrap>
          <header className="header" onClick={this.toggleOpen}>
            <Frow grow={1} hug>{React.isValidElement(title) ? title : <span dangerouslySetInnerHTML={{__html: title}}/>}</Frow>
            <Frow shrink={1} hug>
              <div className="icon">
                <span className="plus"><IconPlus/></span>
                <span className="minus"><IconMinus/></span>
              </div>
            </Frow>
          </header>
        </Frow>
        <div className="content">
          <div ref={this.contentRef}>{children}</div>
        </div>
        <style jsx>{`
          .panel {
            border: 1px solid ${ Theme.colors.backgroundSlidingPanel };
            border-radius: ${ Theme.xs.borderRadius.default };
            margin-bottom: ${ stacked ? '2px' : Theme.xs.vr(1) };
          }

          .header {
            color: #fff;
            background-color: ${ Theme.colors.backgroundSlidingPanel };
            padding: ${ Theme.xs.vr(0.5)} 1.33333rem;
            cursor: pointer;
            transition: all 0.2s linear;
            user-select: none;
            border-radius: ${ Theme.xs.borderRadius.default };
          }

          .header :global(*) {
            color: #fff;
          }

          .header :global(svg) {
            position: absolute;
            top: 0;
            left: 0;
            width: 1.83333rem;
            height: 1.83333rem;
            transition: all 0.2s linear;
          }

          .header .icon {
            position: relative;
            width: 1.83333rem;
            height: 1.83333rem;
            margin-left: 1.33333rem;
          }

          .header .icon .plus {
            opacity: 1;
          }
          .header .icon .minus {
            opacity: 0;
          }
          header .icon .plus :global(svg) {
            fill: #fff;
          }
          .header .icon .minus :global(svg) {
            fill: ${ Theme.colors.backgroundSlidingPanel };
          }

          .content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
          }

          .content > div {
            padding: ${ Theme.xs.vr(0.5)} 0;
            margin: 0 1.33333rem;
            border-top: ${ bar ? '1px solid rgba(0,0,0,0)' : 'none'};
          }

          .open .header {
            color: inherit;
            background-color: inherit;
          }

          .open .header :global(*) {
            color: inherit;
          }

          .open .content {
            overflow: hidden;
            transition: max-height 0.3s ease-in;
          }

          .open .content {
            max-height: ${this.contentRef.current ? this.contentRef.current.clientHeight : '1000'}px;
          }

          .open .content > div {
            border-top: ${ bar ? '1px solid ' + Theme.colors.gray2 : 'none'};
          }

          .open .header .icon .plus {
            opacity: 0;
          }
          .open .header .icon .minus {
            opacity: 1;
          }

          @media (min-width: 992px) {
            .panel {
              border-radius: ${ Theme.md.borderRadius.default };
              margin-bottom: ${ stacked ? '2px' : Theme.md.vr(1.75) };
            }

            .header {
              padding: ${ Theme.md.vr(0.75)} 1.33333rem;
              border-radius: ${ Theme.xs.borderRadius.default };
            }

            .content > div {
              padding: ${ Theme.md.vr(0.75)} 0;
              margin: 0 1.33333rem;
            }
          }
        `}</style>
      </section>
    )
  }
}
