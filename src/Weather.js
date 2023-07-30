import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form className="search">
					<div className="row">
						<div className="col-6">
							{" "}
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<h1 className="cityname"> {weatherData.city}</h1>
				<ul>
					<li>
						{" "}
						<FormattedDate date={weatherData.date} />
					</li>
					<li className="text-capitalize" id="description">
						{weatherData.description}
					</li>
				</ul>
				<div className="row mt-3">
					<div className="col-6">
						<div className="clearfix">
							<img
								className="float-left"
								src={weatherData.iconUrl}
								alt={weatherData.description}
							/>
							<div className="float-left">
								<span className="temperature">
									{Math.round(weatherData.temperature)}
								</span>
								<span className="units">°C | °F</span>
							</div>
						</div>
					</div>
					<div className="col-6">
						<ul>
							<li id="precipitation">Precipitation: - %</li>
							<li id="humidity">Humidity: {weatherData.humidity}</li>
							<li id="wind">Wind: {weatherData.wind} km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
		let units = "metric";

		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading . . .";
	}
}
