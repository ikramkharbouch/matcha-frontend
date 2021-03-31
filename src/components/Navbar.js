import React, { useState } from "react";
import logo from "../assets/matcha.png";

export default function Navbar() {
	var [isMenuHidden, setIsMenuHidden] = useState(true);

	const hideMenu = () => { setIsMenuHidden(!isMenuHidden); }

	return (
		<nav className="bg-white">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center md:hidden" onClick={ hideMenu }>
						{/* <!-- Mobile menu button--> */}
						<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" >
							<span className="sr-only">Open main menu</span>
							{/* <!-- Icon when menu is closed. -->
								<!--
									Heroicon name: outline/menu

									Menu open: "hidden", Menu closed: "block"
								--> */}
							<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							{/* <!-- Icon when menu is open. -->
								<!--
									Heroicon name: outline/x

									Menu open: "block", Menu closed: "hidden"
								--> */}
							<svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center">
						<div className="flex flex-shrink-0 w-full items-center justify-end md:w-auto md:justify-start">
							<a href="/">
								<img className="block md:hidden h-14 w-auto" src={logo} alt="Workflow" />
							</a>
							<a href="/">
								<img className="hidden md:block h-14 w-auto" src={logo} alt="Workflow" />
							</a>
						</div>
						<div className="hidden w-full sm:flex space-x-4 sm:ml-6">
							<div className="flex-grow" />
							<a
								href="/signin"
								className="w-28 h-10 leading-5 py-2 px-4 border border-transparent text-md text-center font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
							>
								Login
							</a>
							<a
								href="/register"
								className="w-28 h-10 leading-5 py-2 px-6 border border-transparent text-md text-center font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
							>
								Register
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			<div className={`absolute bg-blue-800 w-full ${ isMenuHidden ? "hidden" : "block" }`}>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<a
						href="/signin"
						className="text-gray-300 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Login
					</a>
					<a
						href="/register"
						className="text-gray-300 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Register
					</a>
				</div>
			</div>
		</nav>
	);
}
