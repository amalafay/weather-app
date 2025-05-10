import {
	MapPin,
	Droplets,
	CircleGauge,
	Wind,
	Eye,
	Cloudy,
	Thermometer,
} from 'lucide-react';
import React from 'react';
import './WeatherInfo.css';

function WeatherInfo({ weather }) {
	return (
		<div className="card_info">
			<h1 className="card_title">
				<MapPin className="card_icon" />
				{weather.name}, <span className="card_span">{weather.country}</span>
			</h1>

			<img
				className="card_image"
				src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
				alt={weather.description}
			/>

			<h1 className="card_temp">
				{weather.temp} °C / {(weather.temp * 1.8 + 32).toFixed(1)} °F{' '}
			</h1>
			<p className="card_description">
				<q>{weather.description}</q>
			</p>
			<div className="card_details">
				<p className="card_details-item">
					<Droplets className="card_details-icon" />
					<span className="card_details-item-text">
						Humedad
						<span className="card_details-item-value">
							{weather.humidity} %
						</span>
					</span>
				</p>

				<p className="card_details-item">
					<CircleGauge className="card_details-icon" />
					<span className="card_details-item-text">
						Presión
						<span className="card_details-item-value">
							{weather.pressure} hpa
						</span>
					</span>
				</p>

				<p className="card_details-item">
					<Eye className="card_details-icon" />
					<span className="card_details-item-text">
						Visibilidad
						<span className="card_details-item-value">
							{weather.visibility} km
						</span>
					</span>
				</p>

				<p className="card_details-item">
					<Wind className="card_details-icon" />
					<span className="card_details-item-text">
						Viento
						<span className="card_details-item-value">
							{weather.wind_speed} km/h
						</span>
					</span>
				</p>

				<p className="card_details-item">
					<Cloudy className="card_details-icon" />
					<span className="card_details-item-text">
						Nubes
						<span className="card_details-item-value">{weather.clouds} %</span>
					</span>
				</p>

				<p className="card_details-item">
					<Thermometer className="card_details-icon" />
					<span className="card_details-item-text">
						Sensación
						<span className="card_details-item-value">
							{weather.feels_like} °C
						</span>
					</span>
				</p>
			</div>
		</div>
	);
}

export default WeatherInfo;
