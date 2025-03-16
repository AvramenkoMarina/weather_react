import { createContext, useEffect, useState } from 'react'
import { DEFAULT_PLACE, MEASUREMENT_SYSTEM, UNITS } from '../constants'
import { getWeatherData } from '../api'

const WeatherContext = createContext()

function WeatherProvider({ children }) {
	const [place, setPlace] = useState(DEFAULT_PLACE)
	const [loading, setLoading] = useState(true)
	const [currentWeather, setCurrentWeather] = useState({})
	const [hourlyForecast, setHourlyForecast] = useState([])
	const [dailyForecast, setDailyForecast] = useState([])
	const [measurementSystem, setMeasurementSystem] = useState(
		MEASUREMENT_SYSTEM.AUTO
	)
	const [units, setUnits] = useState({})

	console.log('Place ID:', place.place_id)

	useEffect(() => {
		async function _getWeatherData() {
			setLoading(true)

			try {
				const cw = await getWeatherData(
					'current',
					place.place_id,
					measurementSystem
				)
				setCurrentWeather(cw.current)
				setUnits(UNITS[cw.units])

				const hf = await getWeatherData(
					'hourly',
					place.place_id,
					measurementSystem
				)
				setHourlyForecast(hf.hourly.data)

				const df = await getWeatherData(
					'daily',
					place.place_id,
					measurementSystem
				)
				setDailyForecast(df.daily.data)

				setLoading(false)
			} catch (error) {
				console.error('Error fetching weather data:', error)
				setLoading(false) // При помилці завжди вимикаємо лоадер
			}
		}

		_getWeatherData()
	}, [place, measurementSystem])

	return (
		<WeatherContext.Provider
			value={{
				place,
				setPlace,
				loading,
				currentWeather,
				hourlyForecast,
				dailyForecast,
				measurementSystem,
				setMeasurementSystem,
				units,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}

export { WeatherProvider }
export default WeatherContext
