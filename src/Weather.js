import React from "react";
import "./Weather.css";

export default function Weather() {
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
			<h1 className="cityname"> New York, NY</h1>
			<ul>
				<li id="time">Wednesday 07:00</li>
				<li id="description">Mostly Cloudy</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="clearfix">
						<img
							className="float-left"
							src=" https://openweathermap.org/img/wn/10d@2x.png"
							alt="Mostly Cloudy"
						/>
						<div className="float-left">
							<span className="temperature">6</span>
							<span className="units">°C | °F</span>
						</div>
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li id="precipitation">Precipitation: 15%</li>
						<li id="humidity">Humidity: 72%</li>
						<li id="wind">Wind: 13 km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
