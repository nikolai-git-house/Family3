import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { stringMatchAll } from '../lib/utils'

class WidgetCode extends Component {
  static propTypes = {
    code: PropTypes.string,
    cleanup: PropTypes.func,
    component: PropTypes.element,
  }

  state = {
    htmlContent: null,
  }

  insertedScripts = []

  static cleanupScripts(regexp) {
    [...document.getElementsByTagName('script')].filter(el => el.src && el.src.match(regexp)).forEach(el => el.parentNode.removeChild(el));
  }

  static cleanupLinks(regexp) {
    [...document.getElementsByTagName('link')].filter(el => el.src && el.src.match(regexp)).forEach(el => el.parentNode.removeChild(el));
  }

  static cleanupGlobals(names) {
    names.forEach(name => delete window[name])
  }

  componentDidMount() {
    if(process.browser) {
      this.props.cleanup && this.props.cleanup()
      this.initWidget()
    }
  }

  componentDidUpdate() {
    if(process.browser) {
      this.initWidget()
    }
  }

  componentWillUnmount() {
    if(process.browser) {
      this.props.cleanup && this.props.cleanup()
      this.insertedScripts.forEach(el => el.parentNode && el.parentNode.removeChild(el))
    }
  }

  initWidget = () => {
    const { code } = this.props

    // if(options && options.hypercomments) {
      // console.log(options.hypercomments.match(/<script[\s\S]*?>([\s\S]*)<\/script>/i))
      // console.log(/<([^/ ]+) ?[^>]+?>/gi.exec(options.hypercomments))
      // console.log(stringMatchAll(/<([^/ ]+) ?[^>]+?>/gi, options.hypercomments))

      // const scriptTags = stringMatchAll(/<script[\s\S]*?>([\s\S]*)<\/script>/gi, options.hypercomments)
      // htmlContent = options.hypercomments.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '')
      // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script defer src="data:text/javascript,${encodeURIComponent(data)}"></script>`).join("\n")
      // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>`).join("\n")

      // console.log(htmlContent, scriptContent)
    // }

    if(code) {
      if(!this.state.htmlContent) {
        const htmlContent = code.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '')
        this.setState({ htmlContent })
      }
       else {
        // const firstScript = document.getElementsByTagName('script')[0]
        const bodyEl = document.getElementsByTagName('body')[0]
        const scriptTags = stringMatchAll(/<script([^>]+?)>([\s\S]*?)<\/script>/gi, code)

        scriptTags.forEach(script => {
          const scriptEl = document.createElement("script")
          const scriptProps = stringMatchAll(/(\S+)\s*=\s*("([\s\S]+?)"|'([\s\S]+?)'|(\S+))/gi, script[1])
          scriptProps.forEach(prop => {
            scriptEl.setAttribute(prop[1], prop[3] || prop[4] || prop[5])
          })
          const scriptTxt = document.createTextNode(script[2])
          scriptEl.appendChild(scriptTxt)

          this.insertedScripts = [...this.insertedScripts, scriptEl]
          // firstScript.parentNode.insertBefore(scriptEl, firstScript)
          bodyEl.appendChild(scriptEl)
        })
      }
    }
  }

  render() {
    const {component: Component = 'div', code, cleanup, ...props} = this.props
    return this.state.htmlContent ? <Component {...props} dangerouslySetInnerHTML={{__html: this.state.htmlContent}}/> : null
  }
}

export default WidgetCode
