import React from 'react'
import ThemedButton from './theme-change-button'
import { themeContext } from '../theme-context'
class Home extends React.Component {

    render() {
        const { Consumer } = themeContext
        return (
            <React.Fragment >
                <Consumer >
                    {({ theme }) => (
                        <div style={{ ...styles, backgroundColor: theme.background, color: theme.foreground }}>
                            <h1>Changing theme using context</h1>
                        </div>
                    )}
                </Consumer>
                <ThemedButton />
            </React.Fragment>
        )
    }
}
export default Home

const styles = {
    minHeight: '40vh',
    minWidth: '60vw',
    maxWidth: '60vw',
    marginLeft: '20vw',
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'100'
}