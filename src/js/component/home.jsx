import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
			<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} className="mx-auto" />
			</p>
			<a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block mt-4">
				If you see this green button... Tailwind is working...
			</a>
			<p className="mt-4">
				Made by{" "}
				<a href="http://www.4geeksacademy.com" className="text-blue-500">
				4Geeks Academy
				</a>
				, with love!
			</p>
			</div>
	);
};

export default Home;
