import React, { Component } from 'react';
import { Home } from './components'
import { themes, themeContext } from './theme-context'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      theme: themes.light
    })
  }
  render() {
    const { Provider } = themeContext
    const theme = this.state
    return <Provider value={theme}>
      <Home />
    </Provider>
  }
}

export default App;
