import React from "react";
import { Link } from "react-router-dom";
import "./paybanner.scss";
import PayBannerImage from '../../../../assets/images/Rectangle15.png';

const PayBanner = () => {
	return (
		<section className="paybanner__container">
			<div>
			<img src={PayBannerImage} alt="payImage" width={500} className="absolute"/>

			<div className="text relative pt-28 pl-40">
				<h3 className="text-6xl text-white italic font-bold flex justify-start">Ride, Payment, <br/> Simple</h3>

			<Link to=''>
				<button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
					Find out more
					</button>
			</Link>
			
			</div>

			</div>
		</section>
	);
};

export default PayBanner;