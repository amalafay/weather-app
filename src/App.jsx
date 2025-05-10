import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import LocationButton from './components/LocationButton';
import WeatherInfo from './components/WeatherInfo';
import './App.css';
import { AlertCircle } from 'lucide-react';
import { BASE_URL, API_KEY, options } from './lib/utils';

function App() {
	const [weather, setWeather] = useState({});
	const [error, setError] = useState(null);
	const [city, setCity] = useState('Perú');
	const [coords, setCoords] = useState({ lat: 0, lon: 0 });
	const [value, setValue] = useState('');

	useEffect(() => {
		getWeatherByCity();
	}, [city, coords]);
	const getWeatherByCity = async () => {
		const { lat, lon } = coords;
		setError(null);
		try {
			const res = await axios.get(
				`${BASE_URL}${
					lat !== 0 && lon !== 0 ? `lat=${lat}&lon=${lon}` : `q=${city}`
				}&appid=${API_KEY}${options}`,
			);

			const timeOptions = {
				hour: '2-digit',
				minute: '2-digit',
			};

			setWeather({
				name: res.data.name,
				country: res.data.sys.country,
				sunrise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(
					[],
					timeOptions,
				),
				sunset: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(
					[],
					timeOptions,
				),
				temp: Math.ceil(res.data.main.temp),
				description: res.data.weather[0].description,
				humidity: res.data.main.humidity,
				wind_speed: res.data.wind.speed,
				wind_deg: res.data.wind.deg,
				sea_level: res.data.main.sea_level,
				pressure: res.data.main.pressure,
				visibility: res.data.visibility,
				feels_like: Math.ceil(res.data.main.feels_like),
				clouds: res.data.clouds.all,
				icon: res.data.weather[0].icon,
			});
		} catch (err) {
			if (err.response?.status === 404) {
				setError('Ciudad no encontrada');
			} else {
				setError('Error al obtener datos del clima');
			}
			console.error(err.response?.data?.message || err.message);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setCoords({ lat: 0, lon: 0 });
		setCity(value);
		setValue('');
	};

	return (
		<div className="container">
			<div className="card">
				{/* Buscador por país */}
				<div className="card_header">
					<Search
						handleSubmit={handleSubmit}
						value={value}
						setValue={setValue}
					/>
					<LocationButton setCoords={setCoords} setError={setError} />
				</div>

				<div className="card_body">
					{/* Mensaje de error */}
					{error && (
						<p className="error">
							<AlertCircle className="error_icon" />
							{error}
						</p>
					)}

					{/* Información del estado del clima */}
					{weather.name && <WeatherInfo weather={weather} />}
				</div>
			</div>
		</div>
	);
}

export default App;
