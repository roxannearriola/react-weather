import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<WeatherForecastDay data={forecast[0]} />
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "b511e89f29c4deb143d80dc884ca0735";
		let lat = props.data.coordinates.lat;
		let lon = props.data.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
