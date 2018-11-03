import React from 'react'
import { themeContext } from '../theme-context'
class Home extends React.Component {

    render() {
        const { Consumer } = themeContext
        return (
            <Consumer >
                {({ theme }) => (
                    <div style={{ backgroundColor: theme.background, color: theme.foreground }}>
                        {console.log(theme.background)}
                        <h1>Hello world</h1>
                    </div>
                )}
            </Consumer>
        )
    }
}
export default Home