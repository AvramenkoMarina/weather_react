export const DEFAULT_PLACE = {
	name: 'Kyiv',
	place_id: 'Kyiv',
	lat: '50.45466N',
	lon: '30.5238E',
	timezone: 'Europe/Kiev',
	type: 'settlement',
	country: 'Ukraine',
}
export const MEASUREMENT_SYSTEM = {
	AUTO: 'auto',
	METRIC: 'metric',
	UK: 'uk',
	US: 'us',
	CA: 'ca',
}

export const UNITS = {
	metric: {
		temperature: '°C',
		precipitation: 'mm/h',
		wind_speed: 'm/s',
		visibility: 'km',
		humidity: '%',
		uv_index: '',
		cloud_cover: '%',
	},
	us: {
		temperature: '°F',
		precipitation: 'in/h',
		wind_speed: 'mph',
		visibility: 'mi',
		humidity: '%',
		uv_index: '',
		cloud_cover: '%',
	},
	uk: {
		temperature: '°C',
		precipitation: 'mm/h',
		wind_speed: 'mph',
		visibility: 'mi',
		humidity: '%',
		uv_index: '',
		cloud_cover: '%',
	},
	ca: {
		temperature: '°C',
		precipitation: 'mm/h',
		wind_speed: 'km/h',
		visibility: 'km',
		humidity: '%',
		uv_index: '',
		cloud_cover: '%',
	},
}
