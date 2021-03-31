import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CompleteInfos() {

  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [tags, setTags] = useState("");
  const [sexprefs, setSexPrefs] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
	const getData = () => {
		axios.get("http://localhost:3001/api/tags/list")
		.then((response) => response.data.data)
		.then((data) => setOptions(data))
		.catch((err) => {
		  console.log(err);
		});
	};

	getData();
  }, []);

  const handleSubmit = (evt) => {
	evt.preventDefault();

	let error;

	console.log(gender);
	console.log(bio);
	console.log(tags);
	console.log(sexprefs);
  };

  const [hiddenDiv, setHiddenDiv] = useState("one");
  const goToNext = () => setHiddenDiv("two");
  const goToPrevious = () => setHiddenDiv("one");

  return (
	<>
		{/* First Div */}
		<div className="container h-screen w-full" style={{ display: hiddenDiv === "one" ? "flex" : "none" }} >
			<form onSubmit="handleSubmit" >
				<div className="rounded self-center h-auto shadow-2xl flex w-full">
					<div className="w-full p-8 lg:p-2 md:m-2 lg:m-8">
						<h1 className="text-center mb-6 text-xl font-semibold text-gray-800">Complete infos</h1>
				
					</div>
				</div>
			</form>
			<div>
				<button
					onClick={() => { goToPrevious(); }}
					className="mt-8 group relative flex justify-center py-2 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
				>
					Previous
				</button>
				<button
					onClick={() => { goToNext(); }}
					className="mt-8 group relative flex justify-center py-2 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
				>
					Next
				</button>
			</div>
			{/* <div className="rounded self-center h-auto shadow-2xl flex w-full">
				<div className="w-full p-8 lg:p-2 md:m-2 lg:m-8">
					<h1 className="text-center mb-6 text-xl font-semibold text-gray-800">Complete infos</h1>
					<form onSubmit={handleSubmit}>
					<label className="text-xl font-semibold float-left mt-2 mb-4">
						Gender
					</label>
					<select
						id="cars"
						name="cars"
						className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg mt-2"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
					>
						<option value="volvo">Female</option>
						<option value="saab">Male</option>
					</select>
					<div className="mt-6">
						<label className="text-xl font-semibold float-left mb-4">
						Bio
						</label>
						<textarea
						className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg mt-4 pt-4"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
						></textarea>
					</div>
					<div className="mt-6">
						<label className="text-xl font-semibold float-left mb-4">
						Tags
						</label>
						<select
						id="cars"
						name="cars"
						className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg mt-2"
						value={tags}
						onChange={(e) => setTags(e.target.value)}
						>
						{options.map((option) => (
							<option value={option.name} key={option.name}>
							{option.name}
							</option>
						))}
						</select>
					</div>
					<div className="mt-6">
						<label className="text-xl font-semibold float-left mb-4">
						Sexual Preferences
						</label>
						<select
						id="cars"
						name="cars"
						className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg mt-2"
						value={sexprefs}
						onChange={(e) => setSexPrefs(e.target.value)}
						>
						<option value="men">Men</option>
						<option value="women">Women</option>
						<option value="both">Both</option>
						</select>
					</div>
					<button
						onClick={() => { goToPrevious(); }}
						className="mt-8 group relative flex justify-center py-2 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						Previous
					</button>
					<button
						onClick={() => { goToNext(); }}
						className="mt-8 group relative flex justify-center py-2 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						Next
					</button>
					</form>
				</div>
			</div> */}
		</div>

	  {/* Second Div */}

	  <div
		style={{ display: hiddenDiv === "two" ? "flex" : "none" }}
		className="flex container h-screen w-full"
	  >
		<div className="rounded h-3/6 self-center shadow-2xl w-full">
		  <div className="w-full p-8 lg:p-2 md:m-2 lg:m-8">
			<form onSubmit={handleSubmit}>
			  <h1 className="text-center mb-6 text-4xl font-semibold text-gray-700">
				Upload Pictures
			  </h1>

			  <div className="flex flex-col">
				<div className="">
				  <label className="text-xl font-semibold mt-2 float-left">
					Upload profile picture
				  </label>
				</div>

				<div className="flex mt-8">
				  <div className="rounded-full h-28 w-28 flex items-center justify-center bg-indigo-600 text-white font-bold">
					Preview
				  </div>
				  <div className="m-4 w-6/12 lg:w-4/12">
					<input
					  type="file"
					  name="fileToUpload"
					  id="fileToUpload"
					  className="float-left mt-4 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
					/>
				  </div>
				</div>
			  </div>

			  <div className="flex flex-col mt-8">
				<div className="">
				  <label className="text-xl font-semibold mt-2 float-left">
					Upload 4 other pictures
				  </label>
				</div>
				<div className="flex flex-col mt-4">
				  <div className="w-full lg:w-4/12">
					<input
					  type="file"
					  name="fileToUpload"
					  id="fileToUpload"
					  className="float-left mt-4 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
					/>
				  </div>
				  <div className="w-full lg:w-4/12">
					<input
					  type="file"
					  name="fileToUpload"
					  id="fileToUpload"
					  className="float-left mt-4 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
					/>
				  </div>
				  <div className="w-full lg:w-4/12">
					<input
					  type="file"
					  name="fileToUpload"
					  id="fileToUpload"
					  className="float-left mt-4 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
					/>
				  </div>
				  <div className="w-full lg:w-4/12">
					<input
					  type="file"
					  name="fileToUpload"
					  id="fileToUpload"
					  className="float-left mt-4 w3 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
					/>
				  </div>
				</div>
			  </div>

			  <button className="mt-8 group relative flex justify-center py-2 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
				Finish
			  </button>
			</form>
		  </div>
		</div>
	  </div>
	</>
  );
}
