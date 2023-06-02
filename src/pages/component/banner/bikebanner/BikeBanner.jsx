import React from "react";
import { Link } from "react-router-dom";
import "./bikebanner.scss";
import BikeBannerImage from '../../../../assets/images/Rectangle15.png';

const BikeBanner = () => {
	return (
		<section className="bikebanner__container">
			<div>
			<img src={BikeBannerImage} alt="bikeImage" width={500} className="absolute"/>

			<div className="text relative pt-28 pl-40 flex flex-col">
				<h3 className="text-6xl text-white italic font-bold flex justify-start">Discover the city, <br/> on two wheels.</h3>

			<Link to=''>
				<button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">Book your ride</button>
			</Link>
			
			</div>

			</div>
		</section>
	);
};

export default BikeBanner;