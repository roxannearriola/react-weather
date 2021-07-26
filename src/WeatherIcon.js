import React from "react";

export default function WeatherIcon(props) {
	let iconUrl = `https://ecstatic-haibt-c5d4d7.netlify.app/img/${props.code}.png`;
	return <img src={iconUrl} alt={props.alt} width={props.size} />;
}
