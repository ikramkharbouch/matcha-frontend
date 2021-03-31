import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import logo from "../../assets/matcha.png";

const		Newpassword = () => {
	
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const location = useLocation();
	const queryString = require("query-string");
	const parsed = queryString.parse(location.search);
	const token = parsed.token;
	
	const handleSubmit = (evt) => {
		evt.preventDefault();
		
		let error;

		error = ( !password || !passwordConfirmation )
		? "Something is missing !"
		: ( !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-]).{8,}$/.test( password ) 
			? "The password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character !"
			: ( ( password !== passwordConfirmation )
				? "The passord confirmation doesn't match the password provided !"
				: null
				)
		)

	if (error) {
		ReactDOM.render(
			<Alert severity="error" children={error}></Alert>,
			document.getElementById("alert")
		);
	} else {
		axios.patch("http://localhost:3001/api/users/newpassword", {
			token: token,
			newpassword: password,
			passwordconfirmation: passwordConfirmation
		})
		.then((response) => {
			ReactDOM.render(
				<Alert severity="success" children={response.data.message}></Alert>,
				document.getElementById("alert")
			);
		})
		.catch((err) => {
			ReactDOM.render(
				<Alert severity="error" children={err.response.data.error}></Alert>,
				document.getElementById("alert")
			);
		});
	}
  };

	return (
		<div className="App">
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
						<h2 className="mt-6 text-center text-xl md:text-3xl font-bold md:font-extrabold text-gray-900">
							Change your password
						</h2>
					</div>
					<div id="alert"></div>
					<form
						className="mt-8 space-y-6"
						action="#"
						method="POST"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="remember" value="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label className="sr-only">Password</label>
								<input
								id="password"
								name="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-md md:text-lg mt-2"
								placeholder="Password"
								autoComplete="off"
								required
								/>
							</div>
							<div>
								<label className="sr-only">Confirm Password</label>
								<input
									id="passwordConfirmation"
									name="passwordConfirmation"
									type="password"
									value={passwordConfirmation}
									onChange={(e) => setPasswordConfirmation(e.target.value)}
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-md md:text-lg mt-2"
									placeholder="Confirm Password"
									autoComplete="off"
									required
								/>
							</div>
						</div>

						<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md md:text-lg font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Reset Password
						</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}


export default Newpassword;