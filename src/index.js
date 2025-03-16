import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { WeatherProvider } from './context/weatherContext'
import { ThemeProvider } from './context/themeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<WeatherProvider>
				<App />
			</WeatherProvider>
		</ThemeProvider>
	</React.StrictMode>
)
