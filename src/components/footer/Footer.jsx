import React from "react";
import rydgo_logo from "../../assets/images/rydgo_logo(1).png";
import apple_img from "../../assets/images/app-store.webp";
import google_play from "../../assets/images/google-play.webp";
import "./footer.scss";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => {
	return (
		<section className="footer__container">
			<div className="footer__wrapper py-10">
				{/* LEFT FOOTER CONTENT */}
				<div className="left__footer-content">
					<img src={rydgo_logo} alt="rydgo_logo" />
					<img src={apple_img} alt="rydgo_log" />
					<img src={google_play} alt="rydgo_log" />
				</div>
				{/* MIDDLE FOOTER CONTENT 
			
				<div className="middle__footer-content">
			*/}

				<div className="footer__services">
					<h3>Services</h3>
					<ul>
						<li>Go</li>
						<li>Eat</li>
						<li>Get</li>
						<li>Pay</li>
						<li>Rydgo Plus</li>
					</ul>
				</div>

				<div className="footer__partners">
					<h3>Partners</h3>
					<ul>
						<li>Cooperate packages</li>
						<li>Restaurant delivery</li>
						<li>B2B delivery</li>
						<li>Pay merchant solutions</li>
					</ul>
				</div>

				<div className="footer__join-us">
					<h3>Join our team</h3>
					<ul>
						<li>About us</li>
						<li>engineering at Rydgo</li>
						<li>Careers</li>
						<li>Explore open roles</li>
					</ul>
				</div>

				<div className="footer__about-us">
					<h3>About us</h3>
					<ul>
						<li>Our social impact</li>
						<li>Information security</li>
						<li>Blog</li>
					</ul>
				</div>

				{/* RIGHT FOOTER CONTENT */}
				<div className="right__footer-content">
					<div className="">
						<span className="left__icon">
							<CiLocationOn />
						</span>
						<span>Ghana</span>
						<span className="right__icon">
							<FaChevronDown />
						</span>
					</div>
					<div className="">
						<span className="left__icon">
							<TfiWorld />
						</span>
						<span>English</span>
						<span className="right__icon">
							<FaChevronDown />
						</span>
					</div>
					<div className="">
						<span className="left__icon">
							<IoIosHelpCircleOutline />
						</span>
						<span>Help centre</span>
					</div>
					<div className="">
						<span className="left__icon">
							<IoIosHelpCircleOutline />
						</span>
						<span>Book your ride</span>
					</div>
				</div>
			</div>
			{/*  BELOW CONTENT */}
			<div className="below__footer-content">
				<div className="footer__rights">All rights reserved. Rydgo © 2023</div>
				<div className="flex gap-5 footer__terms">
					<h4> Terms of Service</h4>
					<h4>Privacy Policy</h4>
				</div>
				<div className="flex gap-3 footer__social-icons">
					<img src={facebook} alt="" />
					<img src={twitter} alt="" />
					<img src={linkedin} alt="" />
					<img src={instagram} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Footer;
