import React from "react";
import FormattedDate from "./FormattedDate";

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
			<div className="row mt-3">
				<div className="col-6">
					<div className="clearfix">
						<img
							className="float-left"
							src={props.data.iconUrl}
							alt={props.data.description}
						/>
						<div className="float-left">
							<span className="temperature">
								{Math.round(props.data.temperature)}
							</span>
							<span className="units">°C | °F</span>
						</div>
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li id="precipitation">Precipitation: - %</li>
						<li id="humidity">Humidity: {props.data.humidity}</li>
						<li id="wind">Wind: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
