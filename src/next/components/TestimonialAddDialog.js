import React, { Component, Fragment } from 'react'
// import Router from 'next/router'
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
// import qs from 'qs'

import Frow from './Frow'
import Theme from '../styles/theme'
import Modal, { ModalCloseButton, ModalCloseButtonMobile } from './Modal'
import Button from './Button'
import AppContext from './AppContext'
import SelectBox from './SelectBox'
import WPLink from './WPLink'
import {
  IconSocialLoginFacebook,
  IconSocialLoginTwitter,
  IconSocialLoginVkontakte,
  IconSocialLoginOk,
  IconClose,
} from './Icons'

import SocialLogin from './SocialLogin'

class TestimonialAddDialog extends Component {
  state = {
    open: false,
    status: 'new',
    author: '',
    profileLink: '',
    product: null,
    text: ''
  }

  static isAutoopenKeywordSpecified() {
    return window.location.hash === '#otzyv' || window.location.hash === '#otziv'
  }

  onClick = () => {
    this.setState({ open: true })
  }

  onClose = () => {
    this.setState({ open: false })
    if(TestimonialAddDialog.isAutoopenKeywordSpecified()) {

      // window.location.hash = ""
    }
  }

  onTextChange = (e) => this.setState({ text: e.target.value })

  onProductSelect = (product) => {
    // console.log('onProductSelect', product)
    this.setState({ product })
  }

  onAuthorChange = (author, profileLink) => {
    this.setState({ author, profileLink })
  }

  componentDidMount() {
    // console.log('TestimonialAddDialog#componentDidMount', this.props.product, Router.query)
    if(this.props.product && TestimonialAddDialog.isAutoopenKeywordSpecified()) {
      this.setState({ open: true })
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(!props.products && props.product && (state.product === null || props.product.id !== state.product.id)) {
      return { product: props.product }
    }

    return null
  }

  render() {
    const { children, products } = this.props

    return (
      <Fragment>
        {children({ onClick: this.onClick })}
        <Modal open={this.state.open} onClose={this.onClose}>
          {/* <Frow container center justify="center" hug> */}
            <div className="dialog">
              <ModalCloseButton onClick={this.onClose}/>
              <Mutation
                variables={{
                  input: {
                    author: this.state.author,
                    product: this.state.product && this.state.product.id,
                    profile_link: this.state.profileLink,
                    text: this.state.text,
                  }
                }}
                mutation={gql`
                  mutation CreateTestimonialMutation($input: CreateTestimonialMutationInput!) {
                    createTestimonial(input: $input)
                    @rest(type: "Testimonial", path: "/wp/v2/testimonials", method: "POST") {
                      id
                    }
                  }
                `}
                onCompleted={() => {
                  this.setState({ status: 'sent', text: '', product: null })
                }}
              >{(createTestimonial, { data, loading, error, called }) => (
                <Fragment>
                  {console.log('createTestimonial', data, loading, error, called)}
                  {(this.state.status === 'new' || this.state.status === 'sending') && <TestimonialAddForm
                    product={this.state.product}
                    products={products}
                    text={this.state.text}
                    author={this.state.author}
                    profileLink={this.state.profileLink}
                    onTextChange={this.onTextChange}
                    onProductSelect={this.onProductSelect}
                    onAuthorChange={this.onAuthorChange}
                    onSubmit={() => {
                      this.setState({ status: 'sending' })
                      createTestimonial()
                    }}
                  />}
                  {this.state.status === 'sent' && <TestimonialSentToModeration onClick={() => {
                    this.onClose()
                    this.setState({ status: 'new' })
                  }}/>}
                </Fragment>
              )}</Mutation>
              <div className="mobile-close-box">
                <ModalCloseButtonMobile onClick={this.onClose}/>
              </div>
            </div>
          {/* </Frow> */}
        </Modal>
        <style jsx>{`
          .dialog {
            background-color: #fff;
            padding: 1.33333rem;
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .mobile-close-box {
            margin-top: ${ Theme.xs.vr(2) };
          }

          @media (min-width: 992px) {
            .dialog {
              width: 47.2rem;
              min-height: 10vh;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default (props) => (
  <AppContext.Consumer>{({ user, setUser }) => (
    <TestimonialAddDialog {...props} user={user} setUser={setUser}/>
  )}</AppContext.Consumer>
)

export const TestimonialAddForm = ({ product, products, text, author, profileLink, onTextChange, onProductSelect, onSubmit, onAuthorChange }) => (
  <Fragment>
    <h2>Оставьте отзыв{!product && ' о проекте'}</h2>
    {(!products && product) && <p className="title" dangerouslySetInnerHTML={{ __html: product.title.rendered }}/>}
    {products && (
      <div className="filter">
        <div className="filter-title">Выберите цикл, отзыв на который хотите оставить</div>
        <SelectBox value={product ? product.id : ''} onChange={(e) => {
          const selectedId = Number(e.target.value)
          onProductSelect(products.filter(item => item.id === selectedId).reduce((_, current) => current, null))}
        }>
          <option>&nbsp;</option>
          {products.map((item, i) => <option key={i} value={item.id} dangerouslySetInnerHTML={{__html: item.title.rendered }}/>)}
        </SelectBox>
      </div>
    )}
    {(!products && !product) && <AppContext.Consumer>{({ namedWP }) => (
      <Fragment>
        <p>Нам очень важно ваше мнение о нашей работе, любая информация поможет нам сделать её интереснее и полезнее!</p>
        <p>Оставить отзыв на одну из наших лекций можно, перейдя на её страницу из <WPLink wp={namedWP('products.courses')}>Списка наших мероприятий</WPLink>.</p>
      </Fragment>
    )}</AppContext.Consumer>}
    <textarea className="text" autoFocus={true} value={text} onChange={onTextChange}/>
    {author
      ? <TestimonialAuthorInfo onSubmit={onSubmit} disabled={!(text.length > 0)} author={author} profileLink={profileLink} onAuthorChange={onAuthorChange}/>
      : <TestimonialSocialLogin onAuthorChange={onAuthorChange}/>
    }
    <style jsx>{`
      h2 {
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      .title {
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      .text {
        width: 100%;
        border: 1px solid ${ Theme.colors.borderGray };
        height: ${ Theme.xs.vr(10) };
        margin-bottom: ${ Theme.xs.vr(0.5)};
        font-size: 16px;
      }

      .filter {
        margin-bottom: ${ Theme.xs.vr(1)};
      }

      @media (min-width: 992px) {
        h2 {
          margin-bottom: ${ Theme.md.vr(1)};
        }

        .title {
          margin-bottom: ${ Theme.md.vr(1)};
        }

        .text {
          height: ${ Theme.md.vr(10) };
          margin-bottom: ${ Theme.md.vr(1)};
          font-size: 1rem;
        }

        .filter {
          margin-bottom: ${ Theme.md.vr(1)};
        }

        .filter-title {
          color: ${ Theme.colors.textGray };
          /* font-size: 0.77778rem; */
          /* font-weight: 600; */
          margin-bottom: ${ Theme.md.vr(0.75) };
        }

        .filter-selector {
          height: calc(2rem + 2px);
          width: 100%;
          color: ${ Theme.colors.textGray };
          font-weight: 400;
          font-size: 0.88889rem;
          background-color: #fff;
          border: 1px solid ${ Theme.colors.borderGray };
          border-radius: ${ Theme.md.borderRadius.default };
          text-indent: 0.6rem;
        }
      }
    `}</style>
  </Fragment>
)

export const TestimonialSocialLogin = ({ onAuthorChange }) => (
  <Fragment>
    <Frow container column>
      <p className="info">Для отправки отзыва зарегистрируйтесь с помощью одной из соцсетей:</p>
      <Frow container row justify="center" gutters hug>
        <SocialLogin.Provider onSuccess={(user) => onAuthorChange(user.name, user.link)}>
          <SocialLogin.Popup url="/login?provider=fb">{({ onClick }) => (<button className="btn facebook" onClick={onClick}><IconSocialLoginFacebook/></button>)}</SocialLogin.Popup>
          <SocialLogin.Popup url="/login?provider=tw">{({ onClick }) => (<button className="btn twitter" onClick={onClick}><IconSocialLoginTwitter/></button>)}</SocialLogin.Popup>
          <SocialLogin.Popup url="/login?provider=vk">{({ onClick }) => (<button className="btn vkontakte" onClick={onClick}><IconSocialLoginVkontakte/></button>)}</SocialLogin.Popup>
          <SocialLogin.Popup url="/login?provider=ok">{({ onClick }) => (<button className="btn ok" onClick={onClick}><IconSocialLoginOk/></button>)}</SocialLogin.Popup>
        </SocialLogin.Provider>
      </Frow>
    </Frow>
    <style jsx>{`
      .btn {
        border: none;
        margin: 0;
        padding: 0;
        background: none;
        cursor: pointer;
      }

      .btn :global(svg) {
        width: 44px;
        height: 44px;
      }

      .btn.facebook  :global(svg) {
        fill: ${ Theme.colors.brandFacebook };
      }

      .btn.twitter  :global(svg) {
        fill: ${ Theme.colors.brandTwitter };
      }

      .btn.vkontakte  :global(svg) {
        fill: ${ Theme.colors.brandVkontakte };
      }

      .btn.ok  :global(svg) {
        fill: ${ Theme.colors.brandOdnoklassniki };
      }

      .info {
        text-align: center;
      }

      @media (min-width: 992px) {
        .btn :global(svg) {
          width: 64px;
          height: 64px;
        }
      }
    `}</style>
  </Fragment>
)

export const TestimonialAuthorInfo = ({ onSubmit, disabled, author, profileLink, onAuthorChange }) => (
  <Fragment>
    <Frow container column="center">
      <Frow container items="center">
        <div className="box">
          <div>Отзыв будет оставлен от имени <b>{profileLink ? <a href={profileLink} rel="noopener noreferrer" target="_blank">{author}</a> : author}</b></div><button className="relogin" title="Зайти под другим именем" onClick={() => onAuthorChange('', '')}><IconClose/></button>
        </div>
      </Frow>
      <div className="button">
        <Button onClick={onSubmit} disabled={disabled}>Отправить</Button>
      </div>
    </Frow>
    <style jsx>{`
      .relogin {
        border: none;
        background: none;
        padding: 0;
        margin-left: 0.6rem;
        cursor: pointer;
      }

      .box {
        margin-bottom: ${ Theme.xs.vr(1)};
      }

      .relogin :global(svg) {
        width: 1rem;
        height: 1rem;
        fill: ${ Theme.colors.gray2};
      }

      @media (min-width: 992px) {
        .box {
          margin-bottom: ${ Theme.md.vr(1)};
        }
      }
    `}</style>
  </Fragment>
)

export const TestimonialSentToModeration = ({ onClick }) => (
  <Fragment>
    <h2>Отзыв отправлен</h2>
    <Frow container column="center">
      <p className="message">Благодарим Вас за отзыв, он отправлен на проверку модератором и скоро появится на сайте.</p>
      <div className="button">
        <Button onClick={onClick}>Закрыть</Button>
      </div>
    </Frow>
    <style jsx>{`
      h2 {
        text-align: center;
        margin-bottom: ${ Theme.xs.vr(0.5)};
      }

      .message {
        text-align: center;
      }

      @media (min-width: 992px) {
        h2 {
          margin-bottom: ${ Theme.md.vr(1)};
        }
      }
    `}</style>
  </Fragment>
)
