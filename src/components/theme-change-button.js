import React from 'react'
import { themeContext } from '../theme-context'
class ThemedButton extends React.Component {

    render() {
        const { Consumer } = themeContext
        return <Consumer>
            {({ theme, toggleTheme }) => (
                <button style={{ backgroundColor: theme.background }} onClick={toggleTheme}>
                    {console.log('toggle : ', toggleTheme)}
                    Change theme
                </button>
            )}
        </Consumer>
    }
}

export default ThemedButton