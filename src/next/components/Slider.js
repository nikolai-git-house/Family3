import React, { Fragment, Component } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'

const SliderContext = React.createContext({
  onClickLeft: () => {},
  onClickRight: () => {},
  setLength: () => {},
  setInfinite: () => {},
  // setShift: () => {},
  activeItem: 0,
  animate: true,
  // shift: 0,
  duration: 300,
  activeLeft: false,
  activeRight: true,
})

export default class extends Component {
  state = {
    activeItem: 0,
    animate: true,
    duration: 300,
    activeLeft: false,
    activeRight: false,
  }

  contextData = {
    length: 0,
    // shift: 0,
    infinite: false,
  }

  swipeData = {
    startedTimestamp: null,
    startPoint: {},
    lastTimestamp: null,
    lastPoint: {},
  }

  leftClicked = (e) => {
    e.preventDefault()
    const activeItem = this.state.activeItem - 1;

    if(this.contextData.infinite) {
      this.setState({ activeItem })

      if(activeItem < 0) {
        setTimeout(() => {
            this.setState({ animate: false, activeItem: this.contextData.length - 1 })
            setTimeout(() => {
              this.setState({ animate: true })
            }, 50)
          }, this.state.duration + 10)
      }
    } else if(activeItem >= 0) {
      this.setState({ activeItem })
      this.setActiveArrows(activeItem)
    }

  }

  rightClicked = (e) => {
    e.preventDefault()
    const activeItem = this.state.activeItem + 1;

    if(this.contextData.infinite) {
      this.setState({ activeItem })

      if(activeItem >= this.contextData.length) {
        setTimeout(() => {
            this.setState({ animate: false, activeItem: 0 })
            setTimeout(() => {
              this.setState({ animate: true })
            }, 50)
          }, this.state.duration + 10)
      }
    } else if(activeItem <= this.contextData.length - 1) {
      this.setState({ activeItem })
      this.setActiveArrows(activeItem)
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

    // e.preventDefault()
    const touch = e.touches.item(0)

    this.swipeData = {
      ...this.swipeData,
      lastTimestamp: new Date(),
      lastPoint: {x: touch.screenX, y: touch.screenY },
    }
  }

  swipeEnd = (e) => {
    const deltaX = this.swipeData.lastPoint.x - this.swipeData.startPoint.x
    const deltaY = this.swipeData.lastPoint.y - this.swipeData.startPoint.y
    // const deltaT = this.swipeData.lastTimestamp - this.swipeData.startedTimestamp

    console.log('deltaY', Math.abs(deltaY), 'deltaX', Math.abs(deltaX))

    if(Math.abs(deltaY) >= Math.abs(deltaX)) {
      return
    }

    e.preventDefault()
    if(deltaX <0) {
      this.rightClicked(e)
    } else {
      this.leftClicked(e)
    }
  }

  setLength = (length) => {
    if(this.contextData.length === length) {
      return
    }

    this.contextData.length = length
    setTimeout(() => this.setActiveArrows(this.state.activeItem), 0)
}
  // setShift = (shift) => shift !== this.state.shift && this.setState({ shift })
  setInfinite = (infinite) => {
    if(this.contextData.infinite === infinite) {
      return
    }

    this.contextData.infinite = infinite
    this.setActiveArrows(this.state.activeItem)
  }

  setActiveArrows = (activeItem) => this.contextData.infinite === true
                            ? this.setState({activeLeft: true, activeRight: true })
                            : this.setState({activeLeft: activeItem > 0, activeRight: activeItem < this.contextData.length - 1 })

  static LeftArrow = ({ children }) => (
    <SliderContext.Consumer>{
      ({ onClickLeft, activeLeft }) => children({ onClick: onClickLeft, active: activeLeft })
    }</SliderContext.Consumer>
  )

  static RightArrow = ({ children }) => (
    <SliderContext.Consumer>{
      ({ onClickRight, activeRight }) => children({ onClick: onClickRight, active: activeRight })
    }</SliderContext.Consumer>
  )

  static Other = ({ children }) => (
    <SliderContext.Consumer>{({ activeItem }) => {
      return children({ active: activeItem })
    }}</SliderContext.Consumer>
  )

  static Items = ({ children, xs = '100%', sm, md = '100%', lg, augment = 0, infinite = false }) => (
    <SliderContext.Consumer>{
      ({ activeItem, setLength, setInfinite, animate }) => {
        const childrenArray = React.Children.toArray(children({ active: activeItem }))

        const childrenItems = augment > 0 ? [...childrenArray.slice(-augment), ...childrenArray, ...childrenArray.slice(0, augment)] : childrenArray

        // console.log(childrenItems)

        setLength(childrenArray.length)
        setInfinite(infinite)
        // setShift(augment)

        return (
        <Fragment>
          <Frow container nowrap row="start" items="start">
            <div className="items" style={{ transition: animate ? 'transform 0.3s ease-out' : 'none', transform: `translateX(calc(-${ 100 / childrenItems.length }% * ${ activeItem + augment }))` }}>
              {childrenItems.map((item, i) => React.cloneElement(item, { ...item.props, key: i }))}
            </div>
          </Frow>
          <style jsx>{`

            .items {
              position: relative;
              margin-left: calc(50% - ${ xs } / 2);
              min-width: calc(${ xs } * ${ childrenItems.length });
              max-width: calc(${ xs } * ${ childrenItems.length });
              z-index: 1;
            }

            .items > :global(*) {
              width: calc(${ xs });
            }

            @media (min-width: 992px) {
              .items {
                margin-left: calc(50% - ${ md } / 2);
                min-width: calc(${ md } * ${ childrenItems.length });
                max-width: calc(${ md } * ${ childrenItems.length });
              }

              .items > :global(*) {
                width: calc(${ md });
              }
            }
          `}</style>
        </Fragment>
      )}
    }</SliderContext.Consumer>
  )

  static Picture = ({ picture, height = '66.5%' }) => (
    <Fragment>
      <div className="img" style={{ ...picture.file && {backgroundImage: `url(${ picture.file })`} }}/>
      <style jsx>{`
        .img {
          width: 100%;
          padding-bottom: ${ height };
          background-repeat: no-repeat no-repeat;
          background-position: center center;
          background-size: contain;
        }

        @media (min-width: 992px) {
          .img {
            /* height: 512px; */
          }
        }
      `}</style>
    </Fragment>
  )


  render() {
    const { children } = this.props
    return (
      <SliderContext.Provider value={{
        onClickLeft: this.leftClicked,
        onClickRight: this.rightClicked,
        activeItem: this.state.activeItem,
        setLength: this.setLength,
        setInfinite: this.setInfinite,
        // shift: 0,
        // setShift: this.setShift,
        animate: this.state.animate,
        activeLeft: this.state.activeLeft,
        activeRight: this.state.activeRight,
      }}>
        <Fragment>
          <Frow container row="start" nowrap>
            <section className="slider-box" onTouchStart={this.swipeStart} onTouchMove={this.swipeMove} onTouchEnd={this.swipeEnd}>
              {children}
            </section>
          </Frow>
          <style jsx>{`
            .slider-box {
              overflow: hidden;
              /* background-color: #00f3ff; */
              position: relative;
              width: 100%;
            }

            @media (min-width: 992px) {

            }
          `}</style>
        </Fragment>
      </SliderContext.Provider>
    )
  }
}
