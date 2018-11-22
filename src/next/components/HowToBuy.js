import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Frow from './Frow'
import Theme from '../styles/theme'
import SlidingPanel from './SlidingPanel'
import { acfImage } from '../lib/utils'
import { getActivePrice } from './ProductPrices'

// const steps = [
//   "Нажмите на кнопку «Хочу участвовать!» или на кнопку «Буду на всех лекциях»",
//   "Оплатите участие на странице оплаты",
//   "Получите подтверждение о регистрации и оплате на электронную почту. С этого момента вы с нами ― больше ничего подтверждать не нужно!",
//   "Ждите наших писем-напоминаний: Мы напомним о дне и времени проведения каждой встречи и пришлем вам ссылку для входа в вебинарную комнату",
//   "В день проведения каждой встречи вы будете получать от нас маленькое письмо-напоминание со ссылкой на вебинарную комнату.",
//   "Через 2-3 дня после каждой онлайн-лекции мы будем присылать вам доступ к ее записи, который будет бессрочным, чтобы вы могли возвращаться к важной для вас информации в любое время."
// ]

const HowTo = ({ children, productType, price: propsPrice, dateOf, id, type }) => {
  let priceValue, dateValue

  if(propsPrice) {
    const activePrice = getActivePrice(propsPrice)
    const { price } = activePrice.activeDiscount === null ? activePrice.fullPrice : activePrice.activeDiscount

    priceValue = price.value === 0 ? 'free' : 'paid'
  }

  if(dateOf && Array.isArray(dateOf)) {
    const today = new Date()

    const beforeAfter = dateOf
      .map((date) => (new Date(date)) <= today ? 'before' : 'after')
      .reduce((result, current) => ({...result, [current]: result[current] + 1}), {before: 0, after: 0})

    if(beforeAfter.after === 0) {
      dateValue = 'past'
    } else if(beforeAfter.before === 0) {
      dateValue = 'future'
    } else {
      dateValue = 'present'
    }
  }

  return (
    <Query
      variables={id
        ? { ids: [id] }
        : {
          category_slug: type,
          acf_rule_match: "yes",
          ...productType && { product_type: productType },
          ...priceValue && { price:  priceValue},
          ...dateValue && { date_of: dateValue },
          }
        }
      query={gql`
        query InstructionsQuery($acf_rule_match: String, $category_slug: String, $product_type: String, $price: String, $date_of: String, $ids: [String]) {
          instructions(acf_rule_match: $acf_rule_match, category_slug: $category_slug, acf_rule_product_type: $product_type, acf_rule_price: $price, acf_rule_date_of: $date_of, include: $ids) @rest(type: "Instruction", path: "/wp/v2/instructions?{args}") {
            id
            acf
          }
        }
      `}
    >{({ error, loading, data: { instructions } }) => (
    Array.isArray(instructions) && instructions[0] ? children({steps: instructions[0].acf.steps_group.steps}) : null
  )}</Query>
)}

export default ({type, ...props}) => <HowTo type="howtobuy" {...props}>{({ steps }) => <HowToBuyPanel steps={steps}/>}</HowTo>

export const HowToThankyou = ({type, ...props}) => <HowTo type="thankyou" {...props}>{({ steps }) => <HowToThankyouPanel steps={steps}/>}</HowTo>

const HowToBuyPanel = ({ steps }) => (
  <Fragment>
    <SlidingPanel title="Как приобрести и посмотреть запись?">
      <Frow container justify="start" hug>
        {
          steps.map(({ step }, i) => <Frow key={i} xs="1/1" md="1/3" container nowrap>
            <div className="step-box">
              {/* <Frow container hug nowrap> */}
                <Frow shrink={1}><span className="step-number">{(i+1)}</span></Frow>
                <Frow grow={3} container column justify="between">
                  <div className="step-content">
                    <p dangerouslySetInnerHTML={{__html: step.text}}/>
                    <div className="step-picture"><img src={acfImage(step.picture).file} alt=""/></div>
                  </div>
                </Frow>
              {/* </Frow> */}
            </div>
          </Frow>)
        }
      </Frow>
    </SlidingPanel>
    <style jsx>{`
      .step-number {
        font-size: 2.6rem;
        font-weight: 300;
        padding-right: 1rem;
        line-height: 3rem;
      }

      .step-content {
        padding-right: 2rem;
        font-size: 1.33333rem;
      }

      .step-picture {
        text-align: center;
        margin-top: ${ Theme.xs.vr(0.75)};
      }

      .step-picture img {
        width: 200px;
      }

      .step-box {
        margin-bottom: ${ Theme.xs.vr(2)};
      }

      @media (min-width: 992px) {
        .step-content {
          padding-right: 1.66667rem;
          font-size: 1rem;
          padding-right: 0.83333rem;
        }
        .step-number {

        }

        .step-picture {
          text-align: inherit;
          margin-top: ${ Theme.md.vr(1)};
        }

        .step-box {
          margin-bottom: ${ Theme.md.vr(2.75)};
        }
      }
    `}</style>
  </Fragment>
)

const HowToThankyouPanel = ({ steps }) => (
  <Fragment>
    <Frow container gutters hug justify="start">
      {steps.map(({ step }, i) => (<Frow xs="1/1" md="1/3"><div className="step">
        <Frow container nowrap items="start">
          <Frow grow={0} shrink={0}>
            <div className="step-number">{i+1}</div>
          </Frow>
          <Frow grow={1} shrink={1}>
            <div className="step-text" dangerouslySetInnerHTML={{__html: step.text}}/>
          </Frow>
        </Frow>
      </div></Frow>))}
      <style jsx>{`
        .step-number {
          font-size: 2.77778rem;
          line-height: 1;
          margin-right: 1rem;
          color: ${ Theme.colors.textGalleryGray};
        }

        .step-text {
          font-size: 0.88889rem;
          color: ${ Theme.colors.textGalleryGray};
        }

        .step {
          margin-bottom: ${ Theme.xs.vr(1)};
        }
        @media (min-width: 992px) {
          .step {
            margin-bottom: ${ Theme.md.vr(2.75)};
          }
        }
      `}</style>
    </Frow>
  </Fragment>
)
