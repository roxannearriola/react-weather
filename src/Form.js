import React from "react";

import "./Form.css";

export default function Form() {
	return (
		<div className="Form">
			<form className="row mb-5">
				<div className="col-8">
					<input
						type="search"
						className="form-control"
						placeholder="Enter a city"
						autoFocus="on"
					/>
				</div>

				<div className="col-4">
					<input type="submit" value="Search" className="btn btn-light w-100" />
				</div>
			</form>
		</div>
	);
}
