import React from "react";
import { Link } from "react-router-dom";
import "./taxibanner.scss";
import TaxiBannerImage from '../../../../assets/images/Rectangle15.png';


const RideBanner = () => {
	return (
		<section className="ridebanner__container">
			<div>
			<img src={TaxiBannerImage} alt="rideImage" width={500} className="absolute"/>

			<div className="rideBanner__text text relative pt-28 pl-12 sm:pl-40 flex flex-col">
				<h3 className="text-4xl sm:text-6xl text-white italic font-bold flex justify-start">Ghana's most, <br/> affordable ride.</h3>
				<small className="text-2xl mt-2 text-white">Book your Rydgo taxi on the Rydgo app</small>

			<Link to=''>
				<button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">Book your ride</button>
			</Link>
			
			</div>

			</div>
		</section>
	);
};

export default RideBanner;