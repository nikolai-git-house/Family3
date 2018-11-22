import React, { Fragment, Component } from 'react'
// import Link from 'next/link'

// import Frow from './Frow'
import Theme from '../styles/theme'
import { dateFormatter } from '../lib/utils'
import WPLink from './WPLink'

class Testimonial extends Component {
  state = {
    open: false,
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const { author, authorUrl, date, object, objectTitle, children } = this.props

    return (
     <Fragment>
       <article className={`box${this.state.open ? ' open' : ''}`}>
         <p className="header"><b>{
           authorUrl
             ? <a href={authorUrl} target="_blank">{author}</a>
             : author
           }</b> {dateFormatter.format(new Date(date))}</p>
         {object && <p className="object"><WPLink wp={object}><a>{objectTitle}</a></WPLink></p>}
         <div className="more-box">
           <div className="more">
             <button onClick={this.toggleOpen}>{this.state.open ? 'Свернуть' : 'Ещё'}</button>
           </div>
         </div>
         <div className="txt">{children}</div>
       </article>
       <style jsx>{`
         .box {
           position: relative;
           background-color: ${ Theme.colors.backgroundLightGray };
           border-radius: ${ Theme.xs.borderRadius.default };
           padding: ${ Theme.xs.vr(0.5)} 1rem;
           overflow: hidden;
         }

         .header {
           color: ${ Theme.colors.textGray };
           margin-bottom: ${ Theme.xs.vr(0.5)};
         }

         .object {
           color: ${ Theme.colors.textLightGray };
           margin-bottom: ${ Theme.xs.vr(0.5)};
         }

         .txt {
           max-height: ${ Theme.xs.vr(8)};
           overflow: hidden;
           /* transition: max-height 0.5s ease-out; */
         }

         .open .txt {
           max-height: 50%;
           margin-bottom: ${ Theme.xs.vr(1.5)};
         }

         .more-box {
           position: relative;
         }

         .open .more-box {
           position: absolute;
           bottom: ${ Theme.xs.vr(1.75)};
         }

         .open .more {
           position: absolute;
           top: 0;
         }

         .more {
           position: absolute;
           background: linear-gradient(to top, ${ Theme.colors.backgroundLightGray } 90%, rgba(245, 245, 245, 0));
           z-index: 10;
           width: 100%;

           height: ${ Theme.xs.vr(1.5)};
           border-bottom-left-radius: ${ Theme.xs.borderRadius.default };
           border-bottom-right-radius: ${ Theme.xs.borderRadius.default };
           top: ${ Theme.xs.vr(8 - 1.5)};
           padding-top: ${ Theme.xs.vr(0.5)};
         }

         .more button {
           border: none;
           background: none;
           padding: 0;
           font-weight: 600;
           text-decoration: underline;
           cursor: pointer;
         }

         @media (min-width: 992px) {
           .box {
             border-radius: ${ Theme.md.borderRadius.default };
             /* max-height: ${ Theme.md.vr(12)}; */
           }
           .header {
             margin-bottom: ${ Theme.xs.vr(0.5)};
           }

           .object {
             margin-bottom: ${ Theme.xs.vr(1)};
           }

           .txt {
             max-height: ${ Theme.md.vr(8)};
           }

           .open .txt {
              max-height: ${ Theme.md.vr(80)};
            }

           .more {
             height: ${ Theme.md.vr(1.5)};
             border-bottom-left-radius: ${ Theme.md.borderRadius.default };
             border-bottom-right-radius: ${ Theme.md.borderRadius.default };
             top: ${ Theme.md.vr(8 - 1.5)};
             padding-top: ${ Theme.md.vr(0.5)};
           }
         }
       `}</style>
     </Fragment>
   )
  }
}

export default Testimonial
