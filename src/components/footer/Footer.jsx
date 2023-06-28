import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const Footer = () => {
	const [countryName, setCountryName] = useState("");

	useEffect(() => {
		fetch("https://api.db-ip.com/v2/free/self")
			.then(function (response) {
				return response.json();
			})
			.then((data) => {
				const country = data?.countryName;
				setCountryName(country);
			});
	}, []);

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
						<Link to="/food">
							<li>Go</li>
						</Link>
						<Link to="/rydgro">
							<li>Eat</li>
						</Link>
						<Link to="/bike">
							<li>Get</li>
						</Link>
						<Link to="/rydpay">
							<li>Pay</li>
						</Link>
						<Link to="/rydgo-tuesday">
							<li>Rydgo Tuesday</li>
						</Link>
					</ul>
				</div>

				<div className="footer__partners">
					<h3>Partners</h3>
					<ul>
						<Link to="/rydgo-for-business">
							<li>Cooperate packages</li>
						</Link>
						<Link to="/restaurant-partner-signup">
							<li>Restaurant delivery</li>
						</Link>
						<Link to="/rydgo-express">
							<li>B2B delivery</li>
						</Link>
						{/*<li>Pay merchant solutions</li>*/}
					</ul>
				</div>

				<div className="footer__join-us">
					<h3>Join our team</h3>
					<ul>
						<Link to="/about-us">
							<li>About us</li>
						</Link>
						<Link to="/rydgo-engineer">
							<li>engineering at Rydgo</li>
						</Link>
						<li>Careers</li>
						<li>Explore open roles</li>
					</ul>
				</div>

				<div className="footer__about-us">
					<h3>About us</h3>
					<ul>
						<Link to="/rydgo-social-impact">
							<li>Our social impact</li>
						</Link>
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
						<span>{countryName}</span>
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
					<a
						target="_blank"
						href="https://m.facebook.com/story.php?story_fbid=pfbid02yxxo6q75g4qz1wvbLS8tsTTf7GysuKxzGx1meoFybyE6ptfL3rZk8KgCXXTQKRD2l&id=100089560879268&mibextid=Nif5oz"
					>
						<img src={facebook} alt="" />
					</a>

					<a
						target="_blank"
						href="https://www.linkedin.com/posts/rydgo-technologies-ltd_rydgoapp-rydgo4you-ridewithrydgo-activity-7056191686959370241-Z0EA?utm_source=share&utm_medium=member_android"
					>
						<img src={linkedin} alt="" />
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/p/Crab8K_IumQ/?igshid=MDJmNzVkMjY="
					>
						<img src={instagram} alt="" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
