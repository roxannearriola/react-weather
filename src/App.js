import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Weather App</h1>
				<footer>
					This project was coded by Roxanne A. and is{" "}
					<a
						href="https://github.com/roxannearriola/react-weather"
						target="_blank"
						rel="noreferrer"
					>
						open-sourced on GitHub
					</a>{" "}
					and{" "}
					<a
						href="https://eager-joliot-601a25.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						hosted on Netlify
					</a>
					.
				</footer>
			</div>
		</div>
	);
}
