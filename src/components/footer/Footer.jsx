import React from "react";
import rydgo_logo from "../../assets/images/rydgo_logo.png";

const Footer = () => {
	return (
		<section className="footer__container">
			<div className="footer__wrapper">
				<div className="footer__img">
					<img src={rydgo_logo} alt="rydgo_logo" />
				</div>
				
			</div>
		</section>
	);
};

export default Footer;
