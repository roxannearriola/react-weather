import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Sat</div>
					<div className="WeatherForecast-icon">
						<img
							src={props.data.iconUrl}
							alt={props.data.description}
							width="35px"
						/>
					</div>
					<span className="WeatherForecast-max">26°</span>
					<span className="WeatherForecast-min">15°</span>
				</div>
			</div>
		</div>
	);
}
