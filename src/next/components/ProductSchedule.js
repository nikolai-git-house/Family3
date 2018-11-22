import React, { Fragment } from 'react'

import Frow from './Frow'
import Theme from '../styles/theme'
import { timeFormatter } from '../lib/utils'

const monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]

export default ({ dates = [] }) => {
  const groupedDates = dates
    .map(item => ({ date: item.date && new Date(item.date), time: item.time && new Date(item.time)}))
    .filter(item => item.date !== undefined)
    .sort((lft, rgt) => lft.date - rgt.date)
    .map(item => ({time: item.time, date: {month: item.date.getMonth(), day: item.date.getDate()}}))
    .reduce((result, item) => {
      const month = result[item.date.month] || { name: monthNames[item.date.month], days: [] }
      month.days.push({day: item.date.day, time: item.time ? timeFormatter.format(item.time) : ''})
      return { ...result, [item.date.month]: month }
    }, {})

  return (
    <Fragment>
      <Frow container justify="start" items="start">
        <div className="box">
          {Object.keys(groupedDates).map(month => (
            <Frow container column key={month}>
              <div className="month-box">
                <div className="month">{groupedDates[month].name}</div>
                <Frow container justify="start">
                  <ul className="dates">
                    {groupedDates[month].days.map((item) => <li key={item.day} className="day-box">
                      <div className="day">{item.day}</div>
                      <div className="time">{item.time}</div>
                    </li>)}
                  </ul>
                </Frow>
              </div>
            </Frow>
          ))}
        </div>
      </Frow>
      <style jsx>{`
        .box {
          margin-bottom: ${ Theme.xs.vr(1) };
        }

        .dates {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .dates li {
          margin: 0;
          padding: ${ Theme.xs.vr(0.25) } 0.58333rem;
        }

        .dates li::before {
          content: none;
        }

        .dates li + li {
          border-left: 1px solid ${ Theme.colors.accent};
        }

        .day {
          font-size: 1rem;
          font-weight: 500;
          color: ${ Theme.colors.accent};
          text-align: center;
        }

        .month-box + .month-box {
          margin-left: 1.8334rem;
        }

        .month {
          font-size: 1rem;
          font-weight: 500;
          color: ${ Theme.colors.accent};
          text-align: center;
          margin-bottom: ${ Theme.xs.vr(0.5) };
        }

        .time {
          font-size: 0.66667rem;
          font-weight: 500;
          color: #666;
          margin-top: ${ Theme.xs.vr(0.25) };
        }

        @media (min-width: 992px) {
          .dates li {
            padding: ${ Theme.md.vr(0.25) } 0.58333rem;
          }

          .day {
            font-size: 1.27778rem;
          }

          .time {
            font-size: 0.83333rem;
            margin-top: ${ Theme.md.vr(0.25) };
          }

          .month {
            margin-bottom: ${ Theme.md.vr(0.5) };
          }
        }
      `}</style>
    </Fragment>
)}
