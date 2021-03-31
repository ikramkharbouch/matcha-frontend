import React from "react";
import ImageCouple from "../assets/png-couple.png";

const		Home = () => {
	return (
		<>
			<div className="w-full min-h-screen bg-gradient-to-r from-purple-600 to-red-400 flex flex-row flex-wrap lg:flex-nowrap">
				<div className="w-full lg:w-3/6 m-8">
					<img src={ ImageCouple } className="h-auto md:h-auto " alt="Lovers pic"/>
				</div>
				<div className="w-full lg:w-3/6 text-left flex flex-col m-6 md:mr-10">
					<h1 className="text-white text-5xl md:text-8xl font-semibold mt-12">
						Search<span className="text-purple-600">.</span> Match
						<span className="text-purple-600">.</span> Date
						<span className="text-purple-600">.</span>
					</h1>
					<p className="text-gray-900 text-xl md:text-2xl mt-12">
						Cum saepe multa, tum memini domi in hemicyclio sedentem, ut solebat, cum et ego essem una et pauci admodum familiares,
						in eum sermonem illum incidere qui tum forte multis erat in ore. Meministi enim profecto, Attice, et eo magis,
						quod P. Sulpicio utebare multum, cum is tribunus plebis capitali odio a Q. Pompeio, qui tum erat consul, dissideret,
						quocum coniunctissime et amantissime vixerat, quanta esset hominum vel admiratio vel querella.
					</p>
					<p className="text-gray-900 text-xl md:text-2xl mt-12">
						Nunc vero inanes flatus quorundam vile esse quicquid extra urbis pomerium nascitur aestimant praeter orbos et caelibes,
						nec credi potest qua obsequiorum diversitate coluntur homines sine liberis Romae.
					</p>
					<a href="/register" className="w-30 self-center lg:self-start mt-12 py-2 px-4 border border-transparent text-md md:text-base font-medium rounded-md text-white bg-purple-600" >
						Get Started
					</a>
				</div>
			</div>
		</>
	);
}

export default Home;