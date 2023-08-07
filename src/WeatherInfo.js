import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1> {props.data.city}</h1>
			<ul>
				<li>
					{" "}
					<FormattedDate date={props.data.date} />
				</li>
				<li className="text-capitalize" id="description">
					{props.data.description}
				</li>
			</ul>
			<div id="center-text" className="row mt-3">
				<div className="col-6">
					<div className="clearfix d-flex align-items-center">
						<div className="float-left">
							<WeatherIcon
								code={props.data.icon}
								alt={props.data.description}
								size={62}
							/>
						</div>
						<div className="float-left">
							<WeatherTemperature celsius={props.data.temperature} />
						</div>
					</div>
				</div>
				<div className="col-6">
					<ul id="temperature-description">
						<li id="precipitation">Precipitation: - %</li>
						<li id="humidity">Humidity: {props.data.humidity}</li>
						<li id="wind">Wind: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
