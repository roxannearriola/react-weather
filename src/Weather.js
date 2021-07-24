import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function search() {
		const apiKey = "b511e89f29c4deb143d80dc884ca0735";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			iconUrl: `https://ecstatic-haibt-c5d4d7.netlify.app/img/${response.data.weather[0].icon}.png`,
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
				<div className="form">
					<form className="row mb-5" onSubmit={handleSubmit}>
						<div className="col-8">
							<input
								type="search"
								className="form-control"
								placeholder="Enter a city"
								autoFocus="on"
								onChange={handleCityChange}
							/>
						</div>

						<div className="col-4">
							<input
								type="submit"
								value="Search"
								className="btn btn-light w-100"
							/>
						</div>
					</form>
				</div>
				<WeatherInfo data={weatherData} />
				<WeatherForecast data={weatherData} />
			</div>
		);
	} else {
		search();
		return <Loader type="ThreeDots" color="#30cfd0" height={100} width={100} />;
	}
}
