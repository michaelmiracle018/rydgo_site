import React from "react";
import { Link } from "react-router-dom";
import "./ridebanner.scss";
import RideBannerImage from '../../../../assets/images/Rectangle15.png';

const RideBanner = () => {
	return (
		<section className="ridebanner__container">
			<div>
			<img src={RideBannerImage} alt="rideImage" width={500} className="absolute"/>

			<div className="text relative pt-28 pl-12 sm:pl-40">
				<h3 className="text-4xl sm:text-6xl text-white italic font-bold flex justify-start">On the move, <br/> so are we!</h3>

			<Link to=''>
				<button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
					Book your ride
					</button>
			</Link>
			
			</div>

			</div>
		</section>
	);
};

export default RideBanner;