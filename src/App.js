import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather />
				<footer>
					This project was coded by Ally Searles and is{" "}
					<a
						href="https://github.com/allysearles/my-react-weather-project.git"
						target="_blank"
						rel="noopener noreferrer"
					>
						open-sourced{" "}
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
