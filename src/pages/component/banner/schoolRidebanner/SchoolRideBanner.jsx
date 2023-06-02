import React from "react";
import { Link } from "react-router-dom";
import "./schoolRidebanner.scss";
import SchoolrideBannerImage from '../../../../assets/images/Rectangle15.png';

const SchoolRideBanner = () => {
	return (
		<section className="schoolridebanner__container">
			<div>
			<img src={SchoolrideBannerImage} alt="rideImage" width={500} className="absolute"/>

			<div className="text relative pt-28 pl-40 flex flex-col">
				<h3 className="text-6xl text-white italic font-bold flex justify-start">Custom school, <br/> ride package <br/> for your <br/> little ones</h3>

			<Link to=''>
				<button className="mt-10 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">Book your ride</button>
			</Link>
			
			</div>

			</div>
		</section>
	);
};

export default SchoolRideBanner;