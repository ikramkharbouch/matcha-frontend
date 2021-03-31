import React from "react";
import { FcLike } from "react-icons/fc";

const			Footer = () => {
  return (
	<>
		<div className="w-full flex items-center justify-center text-gray-900 text-sm md:text-md py-2">
			<p>Made by </p><FcLike /><p> for 1337 - All rights reserved -</p>
		</div>
	</>
  );
}

export default Footer;