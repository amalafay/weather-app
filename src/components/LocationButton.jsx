import { LocateFixed } from 'lucide-react';
import './LocationButton.css';

function LocationButton({ setCoords, setError }) {
	const handleLocation = () => {
		if (window.navigator.geolocation) {
			const success = (pos) => {
				const { latitude, longitude } = pos.coords;
				setCoords({ lat: latitude, lon: longitude });
				setError(null);
			};

			const error = () => {
				setError('Debes permitir conocer tu ubicación');
			};

			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			setError('Geolocalización no soportada');
		}
	};

	return (
		<button
			type="button"
			onClick={handleLocation}
			className="location"
			title="Conoce el Clima en tu zona"
		>
			<LocateFixed className="location-icon" />
		</button>
	);
}

export default LocationButton;
