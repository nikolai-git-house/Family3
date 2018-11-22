import React, { Component } from 'react'

const Context = React.createContext({ Fill: null, setFill: () => {} })

class FillSetter extends Component {
  componentWillUnmount() {
    this.props.setFill(null)
  }

  render() {
    // console.log('FillSetter', this.props.children)
    this.props.setFill(this.props.children)

    return null
  }
}

export default {
  Provider: class SlotFillProvider extends Component {
    state = {
      Fill: null,
    }

    setFill = (Fill) => Fill !== this.state.Fill && this.setState({ Fill })

    render() {
      return (
        <Context.Provider value={{
          Fill: this.state.Fill,
          setFill: this.setFill,
        }}>
          {this.props.children}
        </Context.Provider>
      )
    }
  },

  Slot: () => (
    <Context.Consumer>{({ Fill }) => Fill}</Context.Consumer>
  ),

  Fill: ({children}) => (<Context.Consumer>{({ setFill }) => (
    <FillSetter setFill={setFill}>{children}</FillSetter>
  )}</Context.Consumer>
)
}
