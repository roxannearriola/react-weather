import React, { useState } from "react";
import Form from "./Form";
import FormattedDate from "./FormattedDate";

import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		setWeatherData({
			ready: true,
			iconUrl: "https://ecstatic-haibt-c5d4d7.netlify.app/img/04d.png",
			description: response.data.weather[0].description,
			temperature: response.data.main.temp,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<Form />
				<img
					src={weatherData.iconUrl}
					alt={weatherData.description}
					width="65px"
				/>
				<h3>{weatherData.description}</h3>
				<br />
				<span className="temperature">
					{Math.round(weatherData.temperature)}
				</span>
				<span className="unit">°C</span>
				<ul className="mt-1">
					<li>
						<strong>{weatherData.city}</strong>
					</li>
					<li>
						<FormattedDate date={weatherData.date} />
					</li>
					<li>
						Humidity: {weatherData.humidity}%, Wind:{" "}
						{Math.round(weatherData.wind)} km/h
					</li>
				</ul>
			</div>
		);
	} else {
		const apiKey = "b511e89f29c4deb143d80dc884ca0735";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return <Loader type="ThreeDots" color="#30cfd0" height={100} width={100} />;
	}
}
