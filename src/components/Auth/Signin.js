import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { Alert } from "@material-ui/lab";
import logo from "../../assets/matcha.png";

const			Signin = () => {
	
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const	handleSubmit = (evt) => {
		evt.preventDefault();
		let error;
		
		error = (!username || !password) ? "Something is missing !" : null
		
		if ( error ) {
			ReactDOM.render(
				<Alert severity="error" children={error}></Alert>, document.getElementById('alert')
			);
		} else {
			axios.post(`${ process.env.REACT_APP_URL_API }/users/login`, {
				username: username,
				password: password
			})
			.then((response) => {
				// Save token in local storage
				console.log( response.data );
			})
			.catch((error) => {
				ReactDOM.render(
					<Alert severity="error" children={error.response.data.error}></Alert>, document.getElementById('alert')
				);
			});
		}
	}
	
	// On event succuess while auth to google
	const		googleSuccess = async ( response ) => {
		axios.post(`${ process.env.REACT_APP_URL_API }/users/auth/google`, {
			tokenId: response.tokenId,
			googleId: response.googleId
		})
		.then((response) => {
			// Save token in local storage
			console.log( response.data );
		})
		.catch((error) => {
			ReactDOM.render(
				<Alert severity="error" children={ error.response.data.error }></Alert>, document.getElementById('alert')
			);
		});
	}

	// On event failure while auth to google
	const		googleFailure = (error) => {
		ReactDOM.render(
			<Alert severity="error" children="Unsuccessful login with google"></Alert>, document.getElementById("alert")
		);
	};

	return (
		<div className="App">
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-green-400 to-blue-500">
				<div className="max-w-lg w-full space-y-8 rounded bg-white p-12">
					<div className="pb-12">
						<img className="mx-auto h-14 md:h-18 w-auto" src={ logo } alt="Matcha logo" />
						<h2 className="mt-6 text-center text-lg md:text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h2>
					</div>
					<div id="alert"></div>
					<form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
						<div className="rounded-md shadow-lg -space-y-px my-12">
							<div>
								<label className="sr-only">Username</label>
								<input
									type="text"
									id="username"
									name="username"
									value={username}
									onChange={e => setUsername(e.target.value)}
									placeholder="Username"
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500"
									autoComplete="off"
									required
								/>
							</div>
							<div>
								<label className="sr-only">Password</label>
								<input
									type="password"
									id="password"
									name="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder="Password"
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 rounded-b-md focus:outline-none focus:ring-indigo-500"
									autoComplete="off"
									required
								/>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="float-left">
								<label className="ml-2 block text-xs md:text-sm">
									Don't have an account ? <a className="text-blue-500" href="/register">Sign up</a>
								</label>
							</div>
							<div className="float-right">
								<a href="/resetpassowrd" className="text-xs md:text-sm font-medium text-red-500">
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md md:text-lg font-medium rounded-md text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
							Login
							</button>
						</div>
						<div>
							<GoogleLogin
								clientId= { process.env.REACT_APP_CLIENT_ID }
								render={renderProps => (
									<button
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
										className="w-full group relative flex justify-center  py-2 px-4 border border-transparent border-red-500 text-md md:text-lg font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										<FcGoogle size={28} className="mx-2" /> Sign in with google
									</button>
								)}
								onSuccess={googleSuccess}
								onFailure={googleFailure}
								cookiePolicy={'single_host_origin'}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signin;