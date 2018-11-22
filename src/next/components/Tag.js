import React, { Fragment, Component } from 'react'

import WPLink from './WPLink'
import Frow from './Frow'
import Theme from '../styles/theme'
import { IconCircleArrowLeft, IconCircleArrowRight } from './Icons'

export class TagsLine extends Component {

  state = {
    position: 0,
    maxPosition: 0,
    scrollDelta: 0,
  }

  swipeData = {
    startedTimestamp: null,
    startPoint: {},
    lastTimestamp: null,
    lastPoint: {},
  }

  boxRef = React.createRef()
  itemsRef = React.createRef()

  leftClicked = (e) => {
    e.preventDefault()
    this.setState({ position: this.state.position + this.state.scrollDelta })
  }

  rightClicked = (e) => {
    e.preventDefault()
    this.setState({ position: this.state.position - this.state.scrollDelta })
  }

  calcMaxPosition() {
    if(this.boxRef.current && this.itemsRef.current) {
      const maxPosition = (this.itemsRef.current.scrollWidth/this.boxRef.current.clientWidth - 1) * -this.boxRef.current.clientWidth

      // console.log(this.itemsRef.current.offsetWidth, this.itemsRef.current.scrollWidth)

      if(maxPosition <= 0 && this.state.maxPosition !== maxPosition) {
        this.setState({ maxPosition, scrollDelta:  this.boxRef.current.clientWidth * 0.7 })
      }
    }
  }

  swipeStart = (e) => {
    if(e.touches.length !== 1) {
      return
    }

    const touch = e.touches.item(0)

    this.swipeData = {
      startedTimestamp: new Date(),
      startPoint: {x: touch.screenX, y: touch.screenY },
      lastTimestamp: new Date(),
      lastPoint: {x: touch.screenX, y: touch.screenY },
    }
  }

  swipeMove = (e) => {
    if(e.touches.length !== 1) {
      return
    }

    const touch = e.touches.item(0)

    const delta = touch.screenX - this.swipeData.lastPoint.x

    this.swipeData = {
      ...this.swipeData,
      lastTimestamp: new Date(),
      lastPoint: {x: touch.screenX, y: touch.screenY },
    }

    const newPosition = this.state.position + delta

    if(newPosition >= this.state.maxPosition && newPosition<=0) {
      this.setState({ position: this.state.position + delta })
    }
  }

  swipeEnd = (e) => {

  }

  componentDidMount() {
    this.calcMaxPosition()
  }

  componentDidUpdate() {
    this.calcMaxPosition()
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Frow container row="start" items="center" nowrap>
          <section className="box" ref={this.boxRef} onTouchStart={this.swipeStart} onTouchMove={this.swipeMove} onTouchEnd={this.swipeEnd}>
            <Frow xs="1/10" md="1/10" style={{ opacity: this.state.position < 0 ? 1: 0, zIndex: this.state.position < 0 ? 10: 1 }}>
              <div className="arrow-btn left">
                <Frow hidden={['xs']}><button onClick={this.leftClicked}><IconCircleArrowLeft/></button></Frow>
              </div>
            </Frow>
            <Frow container nowrap row="start" style={{transform: `translateX(${ this.state.position }px)`}}>
              <div className="items" ref={this.itemsRef}>
                {children}
              </div>
            </Frow>
            <Frow xs="1/10" md="1/10" style={{ opacity: this.state.position >= this.state.maxPosition ? 1: 0, zIndex: this.state.position >= this.state.maxPosition ? 10: 1 }}>
              <div className="arrow-btn right">
                <Frow hidden={['xs']}><button onClick={this.rightClicked}><IconCircleArrowRight/></button></Frow>
              </div>
            </Frow>
          </section>
        </Frow>
        <style jsx>{`
          .box {
            position: relative;
            width: 100%;
            overflow: hidden;
            margin-bottom: ${ Theme.xs.vr(1) };
          }

          .items {
            position: relative;
            z-index: 5;
            transition: transform 0.5s ease-out;
          }

          .items > :global(*) {
            flex: 1 0 auto;
          }

          .arrow-btn {
            position: absolute;
            z-index: 10;
            top: calc( 50% - 16px);
            transition: opacity 0.3s linear;
          }

          .arrow-btn button {
            border: none;
            padding: 0;
            background: none;
            cursor: pointer;
          }

          .arrow-btn :global(svg) {
            width: 32px;
            height: 32px;
            fill: #c0c0c0;
          }

          .arrow-btn.left {
            left: 0;
            background: linear-gradient(to right, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0));
          }

          .arrow-btn.right {
            display: flex;
            justify-content: flex-end;
            right: 0;
            background: linear-gradient(to left, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0));
          }

          .arrow-btn.right button {
            flex: 0 0 auto;
          }

          @media (min-width: 992px) {
            .box {
              margin-bottom: ${ Theme.md.vr(2) };
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ({ text, wp, active }) => (
  <div className={`tag ${ active ? 'active' : '' }`}>
    <WPLink wp={wp}><a>{text}</a></WPLink>
    <style jsx>{`
      .tag {
        display: inline-block;
        border: 1px solid ${ Theme.colors.accent };
        border-radius: ${ Theme.xs.borderRadius.default };
        margin: ${ Theme.xs.vr(0.25) };
        font-weight: 400;
      }

      .tag a {
        display: inline-block;
        padding: 0.25rem 0.83333rem;
        text-decoration: none;
      }

      .tag.active {
        background-color: ${ Theme.colors.accent };
      }
      .tag.active a {
        color: #fff;
      }

      @media (min-width: 992px) {
        .tag {
          font-size: 0.77777rem;
          /* border-radius: ${ Theme.md.borderRadius.default }; */
        }
      }
    `}</style>
  </div>
  )
