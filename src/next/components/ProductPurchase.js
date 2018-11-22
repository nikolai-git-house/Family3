import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
// import qs from 'qs'

import Frow from './Frow'
import Modal, { ModalCloseButton, ModalCloseButtonMobile } from './Modal'
import Theme from '../styles/theme'
import { getActivePrice } from './ProductPrices'
// import Button from '../components/Button'
import AppContext from '../components/AppContext'
import { YA_COUNTER } from '../lib/utils'
import JCSubscribeBlock from '../components/JCSubscribeBlock'

const OrderForm = ({ title, price, iframeSrc }) => (
  <Fragment>
    <h2>Оформление заказа</h2>
    <p className="title" dangerouslySetInnerHTML={{__html: title}}/>
    <div className="price">{price}</div>
    <iframe
      title="Покупка в JustClick"
      src={iframeSrc}
      frameBorder="0"
      scrolling="no"
      // onload="var th=this; setTimeout(function(){ UpdateFormHeight(pref, th); }, '+delay+')"
    ></iframe>
    <style jsx>{`
      h2 {
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      .title {
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      .price {
        color: ${ Theme.colors.accent };
        font-weight: 500;
        font-size: 1.66667rem;
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(1)};
      }

      iframe {
        width: 100%;
        height: 18rem;
        overflow: hidden;
        transition: height 0.2s ease-out;
      }

      iframe :global(.g-button) {
        background: ${ Theme.colors.accent } !important;
      }

      @media (min-width: 992px) {
        h2 {
          margin-bottom: ${ Theme.md.vr(0.5)};
        }

        .title {
          margin-bottom: ${ Theme.md.vr(0.5)};
        }

        .price {
          margin-bottom: ${ Theme.md.vr(1)};
        }

        iframe {
          width: 100%;
          height: 12rem !important;
          overflow: hidden;
          transition: height 0.2s ease-out;
        }
      }
    `}</style>
  </Fragment>
)

const SubscribeForm = ({ title, price, subscribeCode }) => {
  return (
  <Fragment>
    <h2>Регистрация</h2>
    <p className="title" dangerouslySetInnerHTML={{__html: title}}/>
    <div className="price">{price}</div>
    <JCSubscribeBlock variant="white" code={subscribeCode}/>
    <style jsx>{`
      h2 {
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      .title {
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      .price {
        color: ${ Theme.colors.accent };
        font-weight: 500;
        font-size: 1.66667rem;
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(1)};
      }


      @media (min-width: 992px) {
        h2 {
          margin-bottom: ${ Theme.md.vr(0.5)};
        }

        .title {
          margin-bottom: ${ Theme.md.vr(0.5)};
        }

        .price {
          margin-bottom: ${ Theme.md.vr(1)};
        }
      }
    `}</style>
  </Fragment>
)}

class ProductPurchase extends Component {
  state = {
    open: false,
    formType: null,
    src: null,
    formattedPrice: '',
  }

  iframeRef = React.createRef()

  showOrderForm = (jc_code, price) => {
    const parent = window.location.hash === "" ? window.location.href : window.location.href.substring(0, window.location.href.indexOf('#'))
    const formattedPrice = price.activeDiscount === null ? price.fullPrice.price.formatted : price.activeDiscount.price.formatted

    const perfChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const pref = [...Array(5)]
      .map(() => perfChars.charAt(Math.floor(Math.random()*perfChars.length)))
      .reduce((result, current) => result + current, '')
    // const delay = Math.round(Math.random()*20)+30;

    this.setState({
      formType: 'order',
      src: `https://family3.justclick.ru/order_form/?goods=${jc_code}&kupon=${price.activeDiscount ? price.activeDiscount.coupon : ''}&color=ffffff&width=350&font=14&required=show_kupon&button=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C&btn_css=g-button small red&btn_width=120&btn_height=38&btn_htop=0&__pref=${ pref }&__parent=${ encodeURIComponent(parent) }`,
      formattedPrice,
      open: true,
    })
    window.localStorage.setItem('jc_order', { jc_code, type: 'ord' })
  }

  showSubscribeForm = (jc_code, price) => {
    const formattedPrice = price.activeDiscount === null ? price.fullPrice.price.formatted : price.activeDiscount.price.formatted

    this.setState({
      formType: 'subscribe',
      formattedPrice,
      open: true,
    })

    window.localStorage.setItem('jc_order', { jc_code, type: 'reg' })
  }

  // onSubscribeSubmit = ({ name, email}) => {
  //   const formData = new FormData()
  //   formData.append('rid[0]', this.state.jcSubscribeGroup)
  //   formData.append('lead_name', name)
  //   formData.append('lead_email', email)
  //   formData.append('doneurl', 'http://192.168.1.125:3000/')
  //
  //   fetch('http://family3.justclick.ru/subscribe/process/', {
  //     method: 'POST',
  //     body: formData,
  //     mode: 'no-cors',
  //   }).then(response => {
  //     const { jc_code } = this.props.product.acf
  //     const thankyouPage = this.props.namedWP('thankyou')
  //     const query = { code: jc_code, type: 'reg'}
  //
  //     this.props.router.push(mapToPage({
  //       template: thankyouPage.template,
  //       type: thankyouPage.object,
  //       id: thankyouPage.object_id,
  //     }, query), `${thankyouPage.url}?${qs.stringify(query)}` )
  //   })
  // }

  onClick = () => {
    const { jc_code, prices, ym_targets = {} } = this.props.product.acf

    const price = getActivePrice(prices)

    // console.log(price)

    const priceValue = price.activeDiscount === null ? price.fullPrice.price.value : price.activeDiscount.price.value

    if(priceValue === 0) {
      if(ym_targets.free_target) {
        try {
          window[YA_COUNTER].reachGoal(ym_targets.free_target)
        } catch (e) {}
      }
      this.showSubscribeForm(jc_code, price)
    } else {
      if(ym_targets.paid_target) {
        try {
          window[YA_COUNTER].reachGoal(ym_targets.paid_target)
        } catch (e) {}
      }
      this.showOrderForm(jc_code, price)
    }
  }

  iframeLoaded = () => {
    // console.log('iframeLoaded')
  }

  onIFrameLoaded = () => {
    //this.iframeRef.current
  }

  onClose = () => {
    this.setState({ open: false })
    window.localStorage.removeItem('jc_order')
  }

  render() {
    const { product, children } = this.props
    return (
      <Fragment>
        {children({ onClick: this.onClick })}
        <Modal open={this.state.open} onClose={this.onClose}>
            <div className="dialog">
              <ModalCloseButton onClick={this.onClose}/>
              {this.state.formType === 'subscribe' &&
              <SubscribeForm
                title={product.title.rendered}
                price={this.state.formattedPrice}
                subscribeCode={product.acf.jc_subscribe_code}
              />}
              {this.state.formType === 'order' &&
              <OrderForm
                title={product.title.rendered}
                price={this.state.formattedPrice}
                iframeSrc={this.state.src}
              />}
              <Frow hidden={["sm", "lg"]}>
                <div className="mobile-close-box">
                  <ModalCloseButtonMobile onClick={this.onClose}/>
                </div>
              </Frow>
            </div>
        </Modal>
        <style jsx>{`
          .dialog {
            background-color: #fff;
            padding: 1.33333rem;
            width: 100%;
            min-height: 100vh;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .mobile-close-box {
            margin-top: ${ Theme.xs.vr(2) };
          }

          @media (min-width: 992px) {
            .dialog {
              width: 37.77778rem;
              height: 30vh;
              min-height: 24rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default withRouter((props) => <AppContext.Consumer>{({ namedWP }) => (<ProductPurchase namedWP={namedWP} {...props}/>)}</AppContext.Consumer>)
