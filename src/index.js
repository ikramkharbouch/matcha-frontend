import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import App from './App';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
require('dotenv').config();

ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<App />
		<Footer />
	</React.StrictMode>, document.getElementById("root")
);

reportWebVitals();
