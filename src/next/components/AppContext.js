import React, { Component } from 'react'

const AppContext = React.createContext({
  namedWP: () => null,
  setRoutingMenu: () => null,
})

export default {
  Provider: class AppContextProvider extends Component {

    state = {
      routingMenu: [],
      mainMenu: [],
      options: {},
    }

    setRoutingMenu = (routingMenu) => routingMenu !== this.state.routingMenu && this.setState({ routingMenu })

    setMainMenu = (mainMenu) => mainMenu !== this.state.mainMenu && this.setState({ mainMenu })

    setOptions = (options) => options !== this.state.options && this.setState({ options })

    namedWP = (name) => {
      const result = this.state.routingMenu.filter(item => item.title === name).reduce((_, current) => current, null)
      // console.log(name, this.routingMenu, result)
      return result
    }

    pageBreadcrumbs = (id) => {
      const reducer = (result, item, i) => {
        // console.log('item.object_id, id', item.object_id, id)
        if(item.object_id === id) {
          return [...result, item]
        }
         else if(item.children) {
          const children = item.children.reduce(reducer, [])
          if(children.length > 0) {
            return [...result, item, ...children]
          }
        }
        return result
      }

      const result = this.state.mainMenu.reduce(reducer, [])
// console.log('pageBreadcrumbs', result)
      return result
    }

    render() {
      return (
        <AppContext.Provider value={{
          namedWP: this.namedWP,
          pageBreadcrumbs: this.pageBreadcrumbs,
          setRoutingMenu: this.setRoutingMenu,
          setMainMenu: this.setMainMenu,
          options: this.state.options,
          setOptions: this.setOptions,
        }}>{this.props.children}</AppContext.Provider>
      )
    }
  },
  Consumer: AppContext.Consumer
}
