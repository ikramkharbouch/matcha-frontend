import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import logo from "../../assets/matcha.png";

const		Register = () => {
  
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConf] = useState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();
		let error;

		error = ( !firstname || !lastname || !email || !username || !password || !passwordConfirmation )
		? "Something is missing !"
		: (
			( !/^[a-zA-Z]{3,}$/.test( firstname ) )
			? "The firstname must be contains letters only at least 3 letters !"
			: (
				( !/^[a-zA-Z]{3,}$/.test( lastname ) )
				? "The lastname must be contains letters only at least 3 letters !"
				: (
					( !/[a-zA-Z0-9-_.]{1,50}@[a-zA-Z0-9-_.]{1,50}\.[a-z0-9]{2,10}$/.test( email ) )
					? "Invalid email address !"
					: (
						( !/^[a-zA-Z]+(([-_.]?[a-zA-Z0-9])?)+$/.test( username ) )
						? "The username must be contains letters or numbers ( -, _ or . ) !"
						: (
							( username.length < 3 || username.length > 20 )
							? "The username should be between 3 and 20 characters !"
							: (
								( !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-]).{8,}$/ )
								? "The password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character !"
								: (
									( password !== passwordConfirmation )
									? "The passord confirmation doesn't match the password provided !"
									: null
								)
							)
						)
					)
				)
			)
		)
				
		if ( error ) {
			ReactDOM.render(<Alert severity="error" children={ error }></Alert>, document.getElementById('alert'));
		} else {
			axios.post(`${ process.env.REACT_APP_URL_API }/users/register`, {
				firstname: firstname,
				lastname: lastname,
				username: username,
				email: email,
				password: password,
				passwordConfirmation: passwordConfirmation
			})
			.then((response) => {
				ReactDOM.render(<Alert severity="success" children={ response.data.message }></Alert>, document.getElementById('alert'));
			})
			.catch((err) => {
				ReactDOM.render(<Alert severity="error" children={ err.response.data.error }></Alert>, document.getElementById('alert'));
			});
		}

	}

	return (
		<div className="App">
			<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-red-400">
				<div className="max-w-lg w-full space-y-10  rounded bg-white p-12">
					<div>
						<img className="mx-auto h-16 w-auto" src={logo} alt="Match logo" />
						<h2 className="mt-6 text-center text-xl md:text-3xl font-bold md:font-extrabold text-gray-900">
							Create an account
						</h2>
					</div>
					<div id="alert"></div>
					<form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
					<input type="hidden" name="remember" value="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label className="sr-only">Firstname</label>
							<input
								id="firstname"
								name="firstname"
								type="text"
								value={ firstname }
								onChange={e => setFirstname(e.target.value)}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg mt-2"
								placeholder="First name"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label className="sr-only">Lastname</label>
							<input
								id="lastname"
								name="lastname"
								type="text"
								value={ lastname }
								onChange={e => setLastname(e.target.value)}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg mt-2"
								placeholder="Last name"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label className="sr-only">Username</label>
							<input
								id="username"
								name="username"
								value={ username }
								onChange={e => setUsername(e.target.value)}
								type="text"
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-md sm:text-lg mt-2"
								placeholder="Username"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label className="sr-only">Email</label>
							<input
								id="email"
								name="email"
								type="text"
								value={ email }
								onChange={e => setEmail(e.target.value)}
								className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-md sm:text-lg mt-2"
								placeholder="Email"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label className="sr-only">Password</label>
							<input
								id="password"
								name="password"
								type="password"
								value={ password }
								onChange={e => setPassword(e.target.value)}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-md sm:text-lg mt-2"
								placeholder="Password"
								required
							/>
						</div>
						<div>
							<label className="sr-only">Confirm Password</label>
							<input
								id="passwordConfirmation"
								name="passwordConfirmation"
								type="password"
								value={ passwordConfirmation }
								onChange={e => setPasswordConf(e.target.value)}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-md sm:text-lg mt-2"
								placeholder="Confirm your password"
								required
							/>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<label className="ml-2 block md:font-bold text-sm">
								<a className="text-blue-500" href="/signin">Sign in</a>
							</label>
						</div>
						<div className="flex items-center">
							<label className="ml-2 block md:font-bold text-sm">
								<a className="text-blue-500" href="/">Home</a>
							</label>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md md:text-lg font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Register
						</button>
					</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;