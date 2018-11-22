import React, { Component } from 'react'

import WidgetCode from './WidgetCode'
import AppContext from './AppContext'

// class HyperComments extends Component {
//   componentDidMount() {
//     if(process.browser) {
//       this.initHyperComments()
//     }
//   }
//
//   attemptsCount = 0
//
//   initHyperComments = () => {
//     if(window.HC) {
//       window.HC.widget("Stream", { widget_id: hcWidgetId })
//     } else if(this.attemptsCount <= 30) {
//       this.attemptsCount = this.attemptsCount + 1
//       setTimeout(() => this.initHyperComments(), 1000)
//     }
//   }
//
//   render() {
//     return (
//      <AppContext.Consumer>{({ options }) => (
//        (options && options.hypercomments) && <div className="box">
//          <div id="hypercomments_widget"></div>
//        </div>
//      )}</AppContext.Consumer>
//    )
//   }
// }


// class HyperComments extends Component {
//   state = {
//     htmlContent: null,
//   }
//
//   insertedScripts = []
//
//   componentDidMount() {
//     if(process.browser) {
//       this.cleanHyperComments()
//       this.initHyperComments()
//     }
//   }
//
//   componentDidUpdate() {
//     if(process.browser) {
//       this.initHyperComments()
//     }
//   }
//
//   componentWillUnmount() {
//     if(process.browser) {
//       this.cleanHyperComments()
//       this.insertedScripts.forEach(el => el.parentNode && el.parentNode.removeChild(el))
//     }
//   }
//
//   initHyperComments = () => {
//     const { options } = this.props
//
//     // if(options && options.hypercomments) {
//       // console.log(options.hypercomments.match(/<script[\s\S]*?>([\s\S]*)<\/script>/i))
//       // console.log(/<([^/ ]+) ?[^>]+?>/gi.exec(options.hypercomments))
//       // console.log(stringMatchAll(/<([^/ ]+) ?[^>]+?>/gi, options.hypercomments))
//
//       // const scriptTags = stringMatchAll(/<script[\s\S]*?>([\s\S]*)<\/script>/gi, options.hypercomments)
//       // htmlContent = options.hypercomments.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '')
//       // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script defer src="data:text/javascript,${encodeURIComponent(data)}"></script>`).join("\n")
//       // scriptContent = scriptTags.map(script => btoa(script[1])).map(data => `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>`).join("\n")
//
//       // console.log(htmlContent, scriptContent)
//     // }
//
//     if(options && options.hypercomments) {
//       if(!this.state.htmlContent) {
//         const htmlContent = options.hypercomments.replace(/<script[\s\S]*?>[\s\S]*<\/script>/gi, '')
//         this.setState({ htmlContent })
//       }
//        else {
//         // const firstScript = document.getElementsByTagName('script')[0]
//         const bodyEl = document.getElementsByTagName('body')[0]
//         const scriptTags = stringMatchAll(/<script[\s\S]*?>([\s\S]*)<\/script>/gi, options.hypercomments)
//
//         scriptTags.forEach(script => {
//           const scriptEl = document.createElement("script")
//           const scriptTxt = document.createTextNode(script[1])
//           scriptEl.appendChild(scriptTxt)
//
//           this.insertedScripts = [...this.insertedScripts, scriptEl]
//           // firstScript.parentNode.insertBefore(scriptEl, firstScript)
//           bodyEl.appendChild(scriptEl)
//         })
//       }
//     }
//   }
//
//   cleanHyperComments = () => {
//     [...document.getElementsByTagName('script')].filter(el => el.src.match(/hypercomments/)).forEach(el => el.parentNode.removeChild(el));
//     [...document.getElementsByTagName('link')].filter(el => el.href.match(/hypercomments/)).forEach(el => el.parentNode.removeChild(el))
//
//     delete window.HC
//     delete window._hcwp
//     delete window.HC_LOAD_INIT
//   }
//
//   render() {
//     return (
//        <div className="box">
//          {this.state.htmlContent && <div dangerouslySetInnerHTML={{__html: this.state.htmlContent}}/>}
//        </div>
//    )
//   }
// }

/*
<div dangerouslySetInnerHTML={{__html: options.hypercomments}}/>
*/

const cleanupWidget = () => {
  WidgetCode.cleanupScripts(/hypercomments/)
  WidgetCode.cleanupLinks(/hypercomments/)
  WidgetCode.cleanupGlobals(['HC', '_hcwp', 'HC_LOAD_INIT'])
}

export default (props) => <AppContext.Consumer>{({ options }) => (
    <div className="box">
      <WidgetCode
        code={options && options.hypercomments}
        cleanup={cleanupWidget}
        {...props}
      />
    </div>
  )}</AppContext.Consumer>
