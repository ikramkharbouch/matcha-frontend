import React from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import axios from "axios";

const		Verify = () => {
	const location = useLocation();
	const queryString = require("query-string");
	const parsed = queryString.parse(location.search);
	const token = parsed.token;
	
	axios.patch(`${ process.env.REACT_APP_URL_API }/users/verify`, { token: token })
	.then((response) => {
		ReactDOM.render(
			<Alert severity="success" children={response.data.message}></Alert>,
			document.getElementById("alert")
		);
	})
	.catch((error) => {
		if ( typeof error.response == 'undefined' ) {
			ReactDOM.render(
				<Alert severity="error" children="An error has occurred, try later !"></Alert>,
				document.getElementById("alert")
			);
		} else {
			ReactDOM.render(
				<Alert severity="error" children={error.response.data.error}></Alert>,
				document.getElementById("alert")
			);
		}
	});

	return (
		<div className="App">
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
				<div id="alert"></div>
				</div>
			</div>
		</div>
	);
}

export default Verify;