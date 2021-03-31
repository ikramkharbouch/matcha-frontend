import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import logo from "../../assets/matcha.png";

const		ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (evt) => {
		evt.preventDefault();
		let error;

		error = ( !email )
			? "Something is missing !"
			: (
				( !/[a-zA-Z0-9-_.]{1,50}@[a-zA-Z0-9-_.]{1,50}\.[a-z0-9]{2,10}$/.test( email ) )
				? "Invalid email address !"
				: null
			);

		if (error) {
			ReactDOM.render(
				<Alert severity="error" children={error}></Alert>,
				document.getElementById("alert")
			);
		} else {
			axios.post(`${ process.env.REACT_APP_URL_API }/users/resetpassword`, { email: email })
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
			<div className="from-blue-600 bg-gradient-to-r  min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
						<h2 className="mt-6 text-center text-xl md:text-4xl font-bold md:font-extrabold text-gray-900">
							Reset your password
						</h2>
					</div>
					<div id="alert"></div>
					<form className="mt-8 space-y-6" action="#" method="POST" onSubmit={ handleSubmit } >
						<input type="hidden" name="remember" value="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label className="sr-only">Email</label>
								<input
									id="email"
									name="email"
									type="text"
									value={ email }
									onChange={(e) => setEmail(e.target.value)}
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-md md:text-lg mt-2"
									placeholder="Email Address"
									autoComplete="off"
									required
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md md:text-lg font-medium rounded-md text-white bg-blue-600"
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

export default ResetPassword;