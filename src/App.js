import React, { Component } from 'react';
import { Home } from './components'
import { themes, themeContext } from './theme-context'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      theme: themes.light,
      toggleTheme: this.toggleTheme
    })
  }
  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    })
  }
  render() {
    const { Provider } = themeContext
    return <Provider value={this.state}>
      <Home />
    </Provider>
  }
}

export default App;
