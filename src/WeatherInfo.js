import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<WeatherIcon
				code={props.data.icon}
				alt={props.data.description}
				size="65px"
			/>
			<h3>{props.data.description}</h3>
			<br />
			<WeatherTemperature celsius={props.data.temperature} />

			<ul className="mt-1">
				<li>
					<strong>{props.data.city}</strong>
				</li>
				<li>
					<FormattedDate date={props.data.date} />
				</li>
				<li>
					Humidity: {props.data.humidity}%, Wind: {Math.round(props.data.wind)}{" "}
					km/h
				</li>
			</ul>
		</div>
	);
}
