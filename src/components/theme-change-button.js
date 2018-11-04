import React from 'react'
import { themeContext } from '../theme-context'
class ThemedButton extends React.Component {

    render() {
        const { Consumer } = themeContext
        return <div style={styles.buttonContainer}>
            <Consumer>
                {({ theme, toggleTheme }) => (
                    <button style={{ ...styles.buttonStyle, backgroundColor: theme.background, color: theme.foreground }} onClick={toggleTheme}>
                        Change theme
                </button>
                )}
            </Consumer>
        </div>

    }
}

export default ThemedButton
const styles = {
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '2vh'
    },
    buttonStyle: {
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        fontSize: '120%',
        borderRadius: '10px',
        outline: '0px'
    }
}
