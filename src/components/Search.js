import { useContext, useState } from 'react'
import { searchPlaces } from '../api'
import '../styles/components/Search.scss'
import WeatherContext from '../context/weatherContext'

function Search() {
	const { setPlace } = useContext(WeatherContext)
	const [text, setText] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [openSearchResults, setOpenSearchResults] = useState(false)

	async function onSearch(e) {
		setText(e.target.value)

		try {
			const data = await searchPlaces(e.target.value)

			// Переконаємося, що data — це масив, інакше ставимо порожній масив
			setSearchResults(Array.isArray(data) ? data : [])
			setOpenSearchResults(Array.isArray(data) && data.length > 0)
		} catch (error) {
			console.error('Помилка під час пошуку місць:', error)
			setSearchResults([])
			setOpenSearchResults(false)
		}
	}

	const changePlace = place => {
		setPlace(place)
		setText('')
		setOpenSearchResults(false)
	}

	return (
		<>
			<div className='search-container'>
				<div className='search-icon'>
					<i className='bi bi-search'></i>
				</div>
				<div className='search-input'>
					<input
						type='text'
						name='search-city'
						placeholder='Search city ...'
						value={text}
						onChange={onSearch}
					/>
				</div>
				{openSearchResults && (
					<div className='search-results'>
						<div className='results-container'>
							{searchResults.map(place => (
								<div
									className='result'
									key={place.place_id}
									onClick={() => changePlace(place)}
								>
									{place.name}, {place.adm_area1}, {place.country}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default Search
