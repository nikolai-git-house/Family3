import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import { pluralize } from '../lib/utils'
import Button from './Button'
import SelectBox from './SelectBox'
import Testimonial from './Testimonial'
import TestimonialAddDialog from './TestimonialAddDialog'

const pluralizeTestimonials = pluralize({ one: 'отзыв', few: 'отзыва', many: 'отзывов' })

export const TestimonialsList = ({ children, wide }) => (
  <Fragment>
    <Frow container gutters justify="start">
      <div className="reviews">
        {React.Children.map(children, (item, i) => (
          <Frow xs="1/1" md={wide ? '1/1' : '1/2'} key={i}>
            <div className="review">
              {item}
            </div>
          </Frow>
        ))}
      </div>
    </Frow>
    <style jsx>{`
      .reviews {
        /* margin-bottom: ${ Theme.xs.vr(0.75)}; */
      }

      .review {
        margin-bottom: ${ Theme.xs.vr(0.25)};
      }

      @media (min-width: 992px) {
        .reviews {
          /* margin-bottom: ${ Theme.md.vr(0.75)}; */
        }

        .review {
          margin-bottom: ${ Theme.md.vr(1.5)};
        }
      }
    `}</style>
  </Fragment>
)

export const TestimonialsHeader = ({ children, selectbox = true }) => {
  const [leftChild, rightChild] = React.Children.toArray(children)

  const shrinkgrow = selectbox ? 1 : 0;
  return (
  <Fragment>
    <Frow container justify="between" gutters items="end">
      <div className="subheader">
        <Frow xs={selectbox ? '1/1' : 'auto'} md="auto" shrink={shrinkgrow} grow={shrinkgrow} hug>{leftChild}</Frow>
        <Frow xs={selectbox ? '1/1' : 'auto'} md={selectbox ? '4/6' : 'auto'} shrink={shrinkgrow} grow={shrinkgrow} hug>{rightChild}</Frow>
      </div>
    </Frow>
    <style jsx>{`
      .subheader {
        margin-bottom: ${ Theme.xs.vr(2) };
      }
      @media (min-width: 992px) {
        .subheader {
          margin-bottom: ${ Theme.md.vr(2) };
          flex-wrap: nowrap;
        }
      }
    `}</style>
  </Fragment>
)}

export const TestimonialsSection = ({ title, children }) => (
  <Fragment>
    <section className="box">
      {title}
      {children}
    </section>
    <style jsx>{`
      /* .box {
        margin-bottom: ${ Theme.xs.vr(1) };
      } */

      @media (min-width: 992px) {
        .header {
          margin-bottom: ${ Theme.md.vr(0.5) };
        }

        /* .box {
          margin-bottom: ${ Theme.md.vr(1.75) };
        } */
      }
    `}</style>
  </Fragment>
)

const Testimonials = ({ title = 'Отзывы', addButtonTitle = 'Написать отзыв', count, items = [], products, selectedProduct, onProductChange, wide, buttonVariant = 'narrow', exclude = [] }) => (
  <Fragment>
    <TestimonialsSection
      title={exclude.indexOf('title') === -1 && <h1 className="header"><span dangerouslySetInnerHTML={{__html: title}}/> ({count})</h1>}
    >
      <TestimonialsHeader>
        <TestimonialAddDialog>{({ onClick }) => (
          <Button variant={buttonVariant} onClick={onClick}>{addButtonTitle}</Button>
        )}</TestimonialAddDialog>
        {(products && exclude.indexOf('filter') === -1) && <div className="filter">
          <div className="title">Выберите цикл, отзывы на который хотите посмотреть</div>
          <SelectBox value={selectedProduct} onChange={(e) => onProductChange(e.target.value)}>
            <option value=''>- Все отзывы -</option>
            {products && products.map((item, i) => <option key={item.id} value={item.id} dangerouslySetInnerHTML={{__html: item.title.rendered}}/>)}
          </SelectBox>
        </div>}
      </TestimonialsHeader>
      {count > 0
        ? <TestimonialsList wide={wide}>
        {items.map((item, i) => (
          <Testimonial
            key={item.id}
            author={item.acf.author}
            authorUrl={item.acf.profile_link}
            objectTitle={item.acf.product.post_title}
            object={item.acf.product}
            date={item.date}
          ><div className="txt-box" dangerouslySetInnerHTML={{__html: item.acf.text}}/></Testimonial>
        ))}
      </TestimonialsList>
      : <div className="be-first">Пока отзывов нет, будьте первым, кто его оставит!</div>
    }
    </TestimonialsSection>
    <style jsx>{`
      .filter {
      }

      .filter .title {
        margin: ${ Theme.xs.vr(1) } 0;
      }

      .txt-box {
        margin-bottom: -${ Theme.xs.vr(1) };
      }

      @media (min-width: 992px) {
        .header {
          margin-bottom: ${ Theme.md.vr(1) };
        }

        .filter {
          /* margin-left: 1.5rem; */
        }

        .filter .title {
          color: ${ Theme.colors.textGray };
          font-size: 0.77778rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: ${ Theme.md.vr(0.75) };
        }

        /* .filter .selector {
          height: calc(2rem + 2px);
          width: 100%;
          color: ${ Theme.colors.textGray };
          font-weight: 400;
          font-size: 0.88889rem;
          background-color: #fff;
          border: 1px solid ${ Theme.colors.borderGray };
          border-radius: ${ Theme.md.borderRadius.default };
          text-indent: 0.6rem;
        } */
        .txt-box {
          /* margin-bottom: -${ Theme.md.vr(1) }; */
        }
      }
    `}</style>
  </Fragment>
)

export default Testimonials

export const ProductTestimonials = ({ title = 'Отзывы', count, items = [], product }) => (
  <Fragment>
    <TestimonialsSection
      title={<h2 className="header" dangerouslySetInnerHTML={{__html: title}}/>}
    >
      <a name="otzyv"> </a><a name="otziv"> </a>
        <TestimonialsHeader selectbox={false}>
          <TestimonialAddDialog product={product}>{({ onClick }) => (
            <Button variant="white" onClick={onClick}>Написать отзыв</Button>
          )}</TestimonialAddDialog>
          <div className="count">{count} {pluralizeTestimonials(count)}</div>
        </TestimonialsHeader>

        {count > 0
          ? <TestimonialsList>{items.map((item, i) => (
              <Testimonial
                key={item.id}
                author={item.acf.author}
                authorUrl={item.acf.profile_link}
                // objectTitle={item.acf.product.post_title}
                // object={item.acf.product}
                date={item.date}
              ><div dangerouslySetInnerHTML={{__html: item.acf.text}}/></Testimonial>
            ))}</TestimonialsList>
          : <div className="be-first">Пока отзывов нет, будьте первым, кто его оставит!</div>
        }
    </TestimonialsSection>
    <style jsx>{`
      .count {
        color: ${ Theme.colors.textGray };
        font-size: 1.33333rem;
        flex-grow: 0 !important;
      }

      .be-first {
        text-align: center;
      }

      @media (min-width: 992px) {
        .header {
          margin-bottom: ${ Theme.md.vr(0.5) };
        }
        .count {
          font-size: 1rem;
        }
      }
    `}</style>
  </Fragment>
)
