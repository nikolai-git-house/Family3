import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
// import gql from 'graphql-tag'

import Frow from './Frow'
import Theme from '../styles/theme'
import { IconClose, IconSliders } from './Icons'
// import { CSSTransition } from 'react-transition-group'
import SelectBox from './SelectBox'

export default class Filter extends Component {
  state = {
    open: false,
    openSlidingBox: false,
    filter: {
      from: '',
      to: '',
      author: '',
      tags: [],
    }
  }

  boxRef = React.createRef()

  onToggle = () => {
    if(this.state.open === false) {
      this.setState({ open: true, openSlidingBox: true, filter: this.props.defaultVariables })
    } else {
      this.setState({ openSlidingBox: false })
      setTimeout(() => this.setState({ open: false }), 250)
    }
  }

  today = () => new Date().toISOString().split('T')[0]

  resetFilters = () => this.setState({ filter: { from: '', to: '', author: '', tags: [] }})

  selectAuthor = (author) => this.setState({ filter: {...this.state.filter, author }})

  changeFrom = (from) => this.setState({ filter: {...this.state.filter, from }})

  changeTo = (to) => this.setState({ filter: {...this.state.filter, to }})

  toggleTagSelect = (id) => {
    const tags = this.state.filter.tags.indexOf(id) === -1
      ? [...this.state.filter.tags, id]
      : this.state.filter.tags.filter(item => item !== id)

      this.setState({ filter: {...this.state.filter, tags }})
  }

  applyFilter = () => {
    this.props.applyFilter(this.state.filter)
    this.onToggle()
  }

  render() {
    return (
      <Fragment>
          <div className={`box${ this.state.open ? ' open' : '' }`} ref={this.boxRef} onClick={(e) => e.target === this.boxRef.current && this.onToggle()}>
            <div className={`wrapper${ this.state.openSlidingBox ? ' open' : '' }`}>
              <Query query={this.props.query}>{({ loading, error, data }) => (
                <Frow container>
                  <div className="sliding-box bg-red unbox">
                    <Frow grow={0} shrink={0} xs="1/1" md="1/1">
                      <div className="">
                        <Frow container>
                          <Frow grow={0} shrink={0} xs="1/1" md="1/2">
                            <div className="range-box">
                              <FilterByDate from={this.state.filter.from} to={this.state.filter.to} changeFrom={this.changeFrom} changeTo={this.changeTo}/>
                            </div>
                          </Frow>
                          <Frow grow={0} shrink={0} xs="1/1" md="1/2">
                            <div className="authors-box">
                              <FilterByAuthor selected={this.state.filter.author} onChange={this.selectAuthor} items={data && data.persons ? data.persons.map(item => ({value: item.id, text: item.title.rendered})) : []}/>
                            </div>
                          </Frow>
                        </Frow>
                      </div>
                    </Frow>
                    <Frow grow={0} shrink={0} xs="1/1" md="auto"><div className="tags-label">Теги</div></Frow>
                    <Frow grow={1} shrink={1} xs="1/1" md="auto">
                      <div className="tags">
                        <FilterByTags
                          tags={data && data.tags ? data.tags.map(item => ({id: item.id, text: item.name, selected: this.state.filter.tags.indexOf(item.id) !== -1})) : []}
                          onClick={this.toggleTagSelect}
                        />
                      </div>
                    </Frow>
                    <Frow grow={0} shrink={0} xs="1/1" md="1/1">
                      <div className="bottom-box">
                        <div className="reset-box">
                          <a onClick={this.resetFilters}>Сбросить все фильтры</a>
                        </div>
                        <div className="show-box">
                          <Query
                            fetchPolicy='network-only'
                            variables={this.props.countVariables(this.state.filter.from, this.state.filter.to, this.state.filter.author, this.state.filter.tags)}
                            query={this.props.countQuery}
                          >{({ loading, error, data }) => (
                            <FilterResultsButton
                              onClick={this.applyFilter}
                              count={data && data.count ? data.count.count : 0}
                              pluralize={this.props.pluralize}
                              zeroTitle={this.props.zeroTitle}
                            />
                          )}</Query>
                        </div>
                      </div>
                    </Frow>
                    {/* <Frow grow={0} shrink={0} xs="1/1" md="1/1">
                    </Frow> */}
                  </div>
                </Frow>
              )}</Query>

              <FilterTab onClick={this.onToggle} isOpen={this.state.open}/>
            </div>
          </div>
        <style jsx>{`
          .box {
            position: absolute;
            left: 0;
            right: 0;
            padding: 0;
            z-index: 100;
            height: 2.83333rem;
            overflow: hidden;
          }

          .box.open {
            height: calc(100vh - 55px - ${ Theme.xs.vr(1.75)} - 90px);
          }


          .sliding-box {
            position: relative;
            height: calc(100vh - 55px - ${ Theme.xs.vr(1.75)} - 90px - 2.83333rem);
            /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0); */
            /* transition: box-shadow: 0.2s linear; */
            flex-direction: column;
            flex-wrap: nowrap;
          }

          .wrapper {
            transform: translateY(calc(-100% + 2.83333rem));
            transition: transform 0.2s ease-out;
          }

          .wrapper.open {
            transform: translateY(0);
            /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
          }

          .range-box {
            padding-top: ${ Theme.xs.vr(0.5) };
          }

          .bg-red {
            background-color: ${ Theme.colors.accent };
            color: #fff;
          }

          .bg-red, .range-box, .authors-box {
            padding-bottom: ${ Theme.xs.vr(1) };
          }

          .bg-red.unbox {
            margin: 0;
          }

          .tags-label {
            font-size: 1.33333rem;
            font-weight: 600;
          }

          .tags {
            overflow-y: scroll;
          }

          .bottom-box {
          }

          .reset-box {
            border-top: 1px solid rgba(255, 255, 255, 0.7);
            text-align: right;
            padding-top: ${ Theme.xs.vr(0.5) };
            font-size: 0.83333rem;
          }

          .reset-box a {
            color: #000;
            text-decoration: underline;
          }

          .show-box {
            padding-top: ${ Theme.xs.vr(1) };
            text-align: center;
          }

          @media (min-width: 992px) {
            .box {
              margin-top: -1rem;
              /* height: auto; */
            }

            .box.open {
              max-height: calc(100vh - 95px - ${ Theme.md.vr(1.75)} - 55px - 0.94444rem);
            }

            .sliding-box {
              /* height: calc(100vh - 95px - ${ Theme.md.vr(1.75)} - 55px - 0.94444rem - 2.83333rem); */
              height: auto;
              max-height: calc(100vh - 95px - ${ Theme.md.vr(1.75)} - 55px - 0.94444rem - 2.83333rem);
              flex-direction: row;
              flex-wrap: wrap;
            }

            .tags-label {
              font-size: 0.88889rem;
              font-weight: 600;
              width: 4rem;
            }

            .tags {
              width: calc(100% - 4rem);
              max-height: calc(100vh - 95px - ${ Theme.md.vr(1.75)} - 55px - 0.94444rem - 2.83333rem - 15rem);
            }

            .authors-box {
            }

            .range-box,
            .authors-box {
              padding-top: ${ Theme.md.vr(1.5) };
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export const FilterTab = ({ onClick, isOpen }) => (
  <Fragment>
    <Frow container centered>
      <div className={`box${ isOpen ? '' : '' }`}>
        <Frow container centered hug>
          <div className="corner left-top"></div>
          <div className="corner left-bottom"></div>
          <Frow container centered>
            <button className="btn" onClick={onClick}>
              <div className="txt">Фильтр</div>
              <div className="icon">
                <IconClose className={isOpen ? 'show' : ''}/>
                <IconSliders className={isOpen ? '' : 'show'}/>
              </div>
            </button>
          </Frow>
          <div className="corner right-bottom"></div>
          <div className="corner right-top"></div>
        </Frow>
      </div>
    </Frow>
    <style jsx>{`
      .box {
        height: 2.83333rem !important;
      }

      .btn {
        border: none;
        padding: 0;
        margin: 0;
        background: ${ Theme.colors.accent };
        color: #fff;
        cursor: pointer;
        /* height: 2.83333rem; */
      }

      .icon {
        position: relative;
        width: 1.33333rem;
        height: 1.33333rem;
      }

      .icon :global(svg) {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.33333rem;
        height: 1.33333rem;
        fill: #fff;
        opacity: 0;
        transition: opacity 0.2s linear;
      }

      .icon :global(.show) {
        opacity: 1;
      }

      .txt {
        margin-right: 0.66667rem;
        font-size: 1.16667rem;
        text-transform: uppercase;
      }

      .corner {
        width: 1.41667rem;
        /* overflow: hidden; */
      }

      .corner.left-top,
      .corner.right-top {
        align-self: flex-start;
        height: 1.41667rem;
        border-radius: 1.41667rem;
      }
      .corner.left-top {
        box-shadow: 0.708335rem -0.708335rem 0 ${ Theme.colors.accent };
      }
      .corner.right-top {
        box-shadow: -0.708335rem -0.708335rem 0 ${ Theme.colors.accent };
      }

      .corner.left-bottom,
      .corner.right-bottom {
        height: 2.83333rem;
        background-color: ${ Theme.colors.accent };
      }

      .corner.left-bottom {
        border-bottom-left-radius: 1.41667rem;
      }

      .corner.right-bottom {
        border-bottom-right-radius: 1.41667rem;
      }

      @media (min-width: 992px) {
        .txt {
          font-size: 0.77778rem;
        }

        .icon :global(svg) {
          width: 1.33333rem;
          height: 1.33333rem;
        }
      }
    `}</style>
  </Fragment>
)

export const FilterByDate = ({ from ,to, changeFrom, changeTo }) => (
  <Fragment>
    <Frow container items="baseline" nowrap>
      <Frow xs="2/10" md="auto" grow={0}>
        <div className="label">По дате</div>
      </Frow>
      <Frow xs="8/10" md="auto" grow={1}>
        <div className="input-box">
          <Frow container items="baseline" justify="start" nowrap>
            <Frow xs="auto" grow={1} shrink={1}>
              <input className="input" value={from} onChange={(e) => changeFrom(e.target.value)} type="date"/>
            </Frow>
            <Frow xs="auto" grow={0} shrink={0}><div className="between-inputs">-</div></Frow>
            <Frow xs="auto" grow={1} shrink={1}>
              <input className="input" value={to} onChange={(e) => changeTo(e.target.value)} type="date"/>
            </Frow>
          </Frow>
        </div>
      </Frow>
    </Frow>
    <style jsx>{`
      .label {
        font-size: 1.33333rem;
        font-weight: 600;
        white-space: nowrap;
      }

      .input {
        font-size: 1rem;
        border: 1px solid #fff;
        border-radius: ${ Theme.xs.borderRadius.default};
        background: none;
        color: #fff;
        max-width: calc(50% - 1rem) !important;
        line-height: 2.2;
        padding: 0 0.6rem;
        min-height: 2.5rem;
      }

      .between-inputs {
        margin: 0 0.6rem;
      }

      @media (min-width: 992px) {
        .label {
          font-size: 0.88889rem;
          font-weight: 600;
          padding-right: 0.83335rem;
          width: 4.2rem;
        }

        .input-box {
          width: calc(100% - 4.2rem);
        }

        .input {
          font-size: 0.88889rem;
          max-width: 10rem !important;
          line-height: 1.75;
          border-radius: ${ Theme.md.borderRadius.default};
          appearance: none;
          min-height: auto;
        }
      }
    `}</style>
  </Fragment>
)

export const FilterByAuthor = ({ items, selected, onChange }) => (
  <Fragment>
    <Frow container items="baseline">
      <Frow xs="2/10" md="auto" grow={0}>
        <div className="label">Автор</div>
      </Frow>
      <Frow xs="8/10" md="auto" grow={1} hug>
        <SelectBox variant="white" value={selected} onChange={(e) => onChange(e.target.value)}>
          <option></option>
          {items.map(item => (<option value={item.value} key={item.value}>{item.text}</option>))}
        </SelectBox>
      </Frow>
    </Frow>
    <style jsx>{`
      .label {
        font-size: 1.33333rem;
        font-weight: 600;
      }

      @media (min-width: 992px) {
        .label {
          font-size: 0.88889rem;
          font-weight: 600;
          padding: 0 0.83335rem 0 1.66667rem;
        }
      }
    `}</style>
  </Fragment>
)

export const FilterByTags = ({ tags, onClick }) => (
  <Fragment>
    <Frow container justify="start" hug>
      {tags.map((item, i) => (
        <Frow xs="1/1" md="auto" hug key={item.id}><FilterTag onClick={() => onClick(item.id)} selected={item.selected}>{item.text}</FilterTag></Frow>
      ))}
    </Frow>
    <style jsx>{`
      @media (min-width: 992px) {

      }
    `}</style>
  </Fragment>
)

export const FilterTag = ({ children, selected, onClick }) => (
  <Fragment>
    <Frow container nowrap items="baseline">
      <div className={`tag${ selected ? ' selected' : '' }`} onClick={onClick}>
        <Frow grow={1} shrink={1}>
          <div>{children}</div>
        </Frow>
        <Frow grow={0} shrink={0}><div className="btn"><IconClose/></div></Frow>
      </div>
    </Frow>
    <style jsx>{`
      .tag {
        font-size: 1.33333rem;
        font-weight: 300;
        padding: ${ Theme.xs.vr(0.5)} 1rem;
      }

      .selected {
        background-color: ${ Theme.colors.backgroundRed };
      }

      .btn {
        background: none;
        border: none;
        padding: 0;
        opacity: 0;
        transition: opacity 0.1s linear;
      }

      .selected .btn {
        opacity: 1;
      }

      .btn :global(svg) {
        fill: #fff;
        width: 1rem;
        height: 1rem;
      }

      @media (min-width: 992px) {
        .tag {
          font-size: 0.77778rem;
          padding: ${ Theme.md.vr(0.25)} 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0);
          border-radius: ${ Theme.md.borderRadius.default };
          transition: border 0.1s linear;
          cursor: pointer;
          margin: 0 0.22rem ${ Theme.md.vr(0.25)} 0.22rem;
        }

        .selected {
          background: none;
          border: 1px solid rgba(255, 255, 255, 1);
        }

        .btn {
          padding-left: 0.5rem;
        }

        .btn :global(svg) {
          width: 0.66667rem;
          height: 0.66667rem;
        }
      }
    `}</style>
  </Fragment>
)

export const FilterResultsButton = ({ pluralize, count, zeroTitle, onClick }) => (
  <Fragment>
    <button onClick={onClick} disabled={count === 0}>{count === 0 ? zeroTitle : `Показать ${count} ${pluralize(count)}`}</button>
    <style jsx>{`
      button {
        border: none;
        border-radius: ${ Theme.xs.borderRadius.default };
        background-color: #fff;
        color: ${ Theme.colors.accent};
        font-size: 1.33333rem;
        font-weight: 600;
        padding: 0.66667rem 1.2rem;
        cursor: pointer;
        transition: all 0.2s linear;
      }

      button:disabled {
        background: none;
        color: #fff;
        cursor: default;
      }

      @media (min-width: 992px) {
        button {
          font-size: 0.88889rem;
        }
      }
    `}</style>
  </Fragment>
)
