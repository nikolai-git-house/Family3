import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import Frow from './Frow'
import Theme from '../styles/theme'
import { IconClose } from './Icons'
import Button from './Button'

export const ModalCloseButton = ({ onClick }) => (
  <Fragment>
    <Frow hidden={["xs", "sm"]}>
      <div className="btn-close"><button onClick={onClick}><IconClose/></button></div>
    </Frow>
    <style jsx>{`
      .btn-close {
        position: absolute;
        top: 4rem;
        right: 1rem;
      }

      .btn-close button {
        border: none;
        margin: 0;
        padding: 0;
        background: none;
        cursor: pointer;
      }

      .btn-close :global(svg) {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${ Theme.colors.gray2};
      }

      @media (min-width: 992px) {
        .btn-close {
          top: 1rem;
        }
      }
    `}</style>
  </Fragment>
)

export const ModalCloseButtonMobile = ({ onClick }) => (
  <Fragment>
        <Frow hidden={["md", "lg"]} hug>
          <div className="box">
            <Button variant="white" onClick={onClick}>Закрыть</Button>
          </div>
        </Frow>
    <style jsx>{`
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @media (min-width: 992px) {
      }
    `}</style>
  </Fragment>
)

export default class extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  }

  state = {
    open: false,
    in: false,
  }

  mountNode = null

  static getDerivedStateFromProps(props, state) {
    if(props.open === state.open) {
      return null
    }

    if(props.open === true) {
      return { ...state, open: true, in: true }
    } else {
      return { ...state, in: false }
    }
  }

  componentWillUnmount() {
    if(this.mountNode !== null) {
      document.body.removeChild(this.mountNode)
      this.mountNode = null
    }
  }

  closeTapped = (e) => {
    if(e.target === e.currentTarget) {
      this.setState({ in: false })
    }
  }

  modalClosed = (e) => {
    this.setState({ open: false })
    this.props.onClose()
  }

  render() {
    const { children } = this.props

    if(!process.browser) {
      return null
    }

    if(!this.state.open) {
      if(this.mountNode !== null) {
        document.body.removeChild(this.mountNode)
        this.mountNode = null
      }

      return null
    }

    if(this.mountNode === null) {
      this.mountNode = document.createElement('div')
      document.body.appendChild(this.mountNode)
    }

    return ReactDOM.createPortal(
      (
        <Fragment>
          <CSSTransition
            classNames="modal"
            in={this.state.in}
            timeout={300}
            appear
            onExited={this.modalClosed}
          >{() => (
            <Frow container items="center" justify="center">
              <div className="dimmer" onClick={this.closeTapped}>
                {children}
              </div>
            </Frow>
          )}</CSSTransition>
          <style jsx>{`
            .dimmer {
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background: rgba(0, 0, 0, 0.3);
              z-index: 10000;
            }

            .dimmer > :global(*) {
              position: relative;
              border-radius: ${ Theme.xs.borderRadius.default };
              box-shadow: 0 12px 36px rgba(0,0,0,0.2);
            }

            .modal-appear,
            .modal-enter {
              opacity: 0;
              transition: opacity 0.2s linear;
            }

            .modal-appear-active,
            .modal-enter-active,
            .modal-enter-done,
            .modal-exit {
              opacity: 1;
              transition: opacity 0.2s linear;
            }

            .modal-exit-active,
            .modal-exit-done {
              opacity: 0;
              transition: opacity 0.2s linear;
            }

            @media (min-width: 992px) {
              .box {
                border-radius: ${ Theme.md.borderRadius.default };
              }
            }
          `}</style>
        </Fragment>
      ),
      this.mountNode)
  }
}
