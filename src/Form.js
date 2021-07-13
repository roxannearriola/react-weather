import React from "react";

import "./Form.css";

export default function Form() {
	return (
		<div className="Form">
			<form className="row">
				<div className="col-6">
					<input
						type="search"
						className="form-control"
						placeholder="Enter a city"
						autoFocus="on"
					/>
				</div>

				<div className="col-2">
					<button type="submit" className="btn btn-primary">
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
