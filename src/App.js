import {useState} from 'react';
import logo from './assets/logo.svg';
import dark from './assets/dark.svg';
import light from './assets/light.svg';
import { ThemeContext } from './context'
import './App.css';

import classNames from 'classnames';

function App() {
	const [theme, setTheme] = useState('dark');

	const changeTheme =()=>{
		setTheme((currentTheme)=>{
			if(currentTheme === 'dark'){
				return 'light';
			}
			return 'dark';
		})
	}


	return (
		<ThemeContext.Provider value={theme}>
			<div className={classNames("App", theme)}>
				<button className="change-theme" onClick={changeTheme}>
					{
						theme ==="dark"?
						<img src={light} className="light" alt="light" />
						:
						<img src={dark} className="dark" alt="dark" />
					}
				</button>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
