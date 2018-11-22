import React, { Component  } from 'react'
import qs from 'qs'

// import Frow from './Frow'
// import Theme from '../styles/theme'

class Provider extends Component {
  callback = (e) => {
    this.props.onSuccess && this.props.onSuccess(e.detail)
    // console.log(e.detail)
  }

  componentDidMount() {
    document.addEventListener('loginCallback', this.callback)
  }

  componentWillUnmount() {
    document.removeEventListener('loginCallback', this.callback)
  }

  render() {
    return this.props.children
  }
}

class Popup extends Component {
  onClick = () => {
    const width = this.props.width || 600
    const height = this.props.height || 500

    const options = {
      width: width,
      height: height,
      top: Math.floor(window.screenY + ((window.outerHeight - height) / 2.5)),
      left: Math.floor(window.screenX + ((window.outerWidth - width) / 2))
    }

    window.open(this.props.url, 'social_login', qs.stringify(options, { delimiter: ',' })) //qs.stringify(options, ',')
  }

  render() {
    return this.props.children({ onClick: this.onClick })
  }
}

export default { Provider, Popup }
