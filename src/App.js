import "./App.css";
import React from "react";
import Signin from "./components/Auth/Signin";
import Register from "./components/Auth/Register";
import ResetPassword from "./components/Auth/ResetPassword";
import NewPassword from "./components/Auth/NewPassword";
import Verify from "./components/Auth/Verify";
import Home from "./components/Home";
import CompleteInfos from "./components/Auth/CompleteInfos";
import Notfound from "./components/Notfound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route path="/signin" component={ Signin } />
				<Route path="/register" component={ Register } />
				<Route path="/resetpassowrd" component={ ResetPassword } />
				<Route path="/newpassword" component={ NewPassword } />
				<Route path="/verify" component={ Verify } />
				<Route path="/complete" component={ CompleteInfos } />
				<Route component={ Notfound } />
			</Switch>
		</Router>
	);
}

export default App;