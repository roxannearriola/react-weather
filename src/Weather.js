import React from "react";
import Form from "./Form";

import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<Form />
			<img
				src="https://ecstatic-haibt-c5d4d7.netlify.app/img/04d.png"
				alt="Broken clouds"
				width="65px"
			/>
			<h3>Broken Clouds</h3>
			<h2>21°C</h2>
			<ul>
				<li>Montreal</li>
				<li>Monday, July 12 09:54</li>
				<li>Humidity: 78%, Wind: 1 km/h</li>
			</ul>
		</div>
	);
}
