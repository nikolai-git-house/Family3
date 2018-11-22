import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Router from 'next/router'

// import Frow from './Frow'
import Theme from '../styles/theme'

export default class LoadingProgress extends Component {
  state = {
    value: 0,
    show: true,
  }

  mountNode = null

  start = () => {
    this.setState({ value: 0 })
    setTimeout(() => this.setState({ show: true }), 300)
    setTimeout(() => this.inc(), 500)
  }

  finish = () => {
    this.setState({ value: 100 })
    setTimeout(() => this.setState({ show: false }), 700)
  }

  inc = () => {
    if(this.state.value < 100 && this.state.show) {
      const inc = Math.random() * 5 + 1
      this.setState({ value: this.state.value + inc })
      setTimeout(() => this.inc(), 500)
    }
  }

  componentDidMount() {
    // Router.events.on('routeChangeStart', this.start)
    // Router.events.on('routeChangeComplete', this.finish)
    // Router.events.on('routeChangeError', this.finish)

// console.log('loder did mount')
    if(process.browser) {
      // const = document.getElementById('spabarloader')

// console.log('loader did mount mountNode', this.mountNode)
      this.mountNode = document.createElement('div')
      this.mountNode.id = 'spabarloader'
      document.body.appendChild(this.mountNode)

      Router.onRouteChangeStart = () => this.start()
      Router.onRouteChangeComplete = () => this.finish()
      Router.onRouteChangeError = () => this.finish()
    }
  }

  componentWillUnmount() {

    // Router.events.off('routeChangeStart', this.start)
    // Router.events.off('routeChangeComplete', this.finish)
    // Router.events.off('routeChangeError', this.finish)
    Router.onRouteChangeStart =null
    Router.onRouteChangeComplete = null
    Router.onRouteChangeError = null

console.log('loader remove node', this.mountNode)
    if(this.mountNode !== null) {
      document.body.removeChild(this.mountNode)
      this.mountNode = null
    }
  }

  render() {
    if(!process.browser) {
      return null
    }

    if(!this.mountNode) {
      return null
    }

    return ReactDOM.createPortal(
      (
        <div style={{opacity: this.state.show === true ? 1 : 0}}>
          <div className="bar" style={{width: `${this.state.value}%`}}/>
          <style jsx>{`
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 9999;
              height: 2px;
              display: flex;
              justify-content: flex-start;
              transition: opacity 0.1s linear;

            .bar {
              position: relative;
              height: 2px;
              background: ${ Theme.colors.loader};
              box-shadow: 0 0 10px ${ Theme.colors.loader};
              transition: width 0.3s ease-out;
            }
            @media (min-width: 992px) {
            }
          `}</style>
        </div>
      ), this.mountNode)
  }
}
