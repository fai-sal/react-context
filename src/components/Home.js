import React from 'react'
import ThemedButton from './theme-change-button'
import { themeContext } from '../theme-context'
class Home extends React.Component {

    render() {
        const { Consumer } = themeContext
        return (
            <React.Fragment>
                <Consumer >
                    {({ theme }) => (
                        <div style={{ backgroundColor: theme.background, color: theme.foreground }}>
                            <h1>Hello world</h1>
                        </div>
                    )}
                </Consumer>
                <ThemedButton />
            </React.Fragment>
        )
    }
}
export default Home