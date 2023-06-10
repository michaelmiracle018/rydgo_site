import React, { useEffect, useRef, useState } from "react";
import rydgo_logo from "../../assets/images/rydgo_logo(1).png";
import "../../styles/driverSignUpNav.scss";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "../../assets/images/after.png";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const DriverSignUpNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const subLinksRef = useRef(null);
	const [countryState, setCountryState] = useState({
		loading: false,
		countries: [],
		errorMessage: "",
	});
	const [selectedCountry, setSelectedCountry] = useState();
	const { loading, errorMessage, countries } = countryState;

	const searchSelectedCountry = countries.find((obj) => {
		if (obj.name.common === selectedCountry) {
			return true;
		}
		return false;
	});

	const openSidebar = () => {
		setIsOpen(true);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch spinner
				setCountryState({
					...countryState,
					loading: true,
				});

				//  fetch data
				const dataUrl = `https://restcountries.com/v3.1/all`;
				const response = await axios.get(dataUrl);
				setCountryState({
					...countryState,
					countries: response.data,
					loading: false,
				});
			} catch (error) {
				setCountryState({
					...countryState,
					loading: false,
					errorMessage: "Sorry Something went wrong",
				});
			}
		};

		fetchData();
	}, []);
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		const smLinksHeight = subLinksRef.current.getBoundingClientRect().height;
		const totalHeight = smLinksHeight + linksHeight;

		if (showLinks) {
			linksContainerRef.current.style.height = `240px  `;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);
	return (
		<>
			<main className="driver__nav-container">
				<section className="driver__signup-nav">
					<nav>
						<div className="nav-center">
							<div className="nav-header">
								<img src={rydgo_logo} className="logo" alt="logo" />
								<button
									className="nav-toggle"
									onClick={() => setShowLinks(!showLinks)}
								>
									{showLinks === false ? <FaBars /> : <FaTimes />}
								</button>
							</div>

							<div className="links-container" ref={linksContainerRef}>
								<ul className="links" ref={linksRef}>
									<li className="link" ref={subLinksRef}>
										<div className="flex gap-1">
											<h5>Discover</h5>
											<div className="mt-0">
												<RiArrowDownSFill />
											</div>
										</div>
										<ul className="submenu">
											<li>Get a rydgo</li>
											<li>How it works</li>
											<li>Fair estimator</li>
										</ul>
									</li>
									<li className="link" ref={subLinksRef}>
										<div className="flex gap-1">
											<h5>Ride</h5>
											<div className="mt-0">
												<RiArrowDownSFill />
											</div>{" "}
										</div>
										<ul className="submenu">
											<li>Our cities</li>
											<li>Blog</li>
											<li>Press</li>
										</ul>
									</li>
									<li className="link">
										<h5>Help</h5>
									</li>
								</ul>
							</div>

							<div className="sign__in-btn">
								<button className="sign__in">Sign In</button>
								{/* HAMBURGER FOR SMALL SCREEN*/}
							</div>
						</div>
					</nav>

					<div className="driver__right-content"></div>
				</section>

				{/* TEXT AND SIGN UP CARD CONTENT   */}

				<section className="card__signup-container">
					<div className="driver__signup-text">
						<h3>Your time. Your day.</h3>
						<h3>Your life.</h3>
						<p>Drive with Rydgo and be a Captain</p>
					</div>

					<div className="signup__box">
						<div className="card">
							<form action="">
								<h3>Create a new account</h3>
								<div className="input__container">
									<div className="select__input">
										<select
											value={selectedCountry}
											onChange={(e) => setSelectedCountry(e.target.value)}
										>
											<option disabled>--Select Country--</option>
											{countries.map((item) => {
												return (
													<option key={uuidv4()} value={item.name.common}>
														{item.name.common}
													</option>
												);
											})}
										</select>
									</div>
									<div className="first__input">
										<img
											src={
												searchSelectedCountry && searchSelectedCountry.flags.png
											}
											alt=""
										/>
										<p>
											{" "}
											{searchSelectedCountry && searchSelectedCountry.idd.root}
											{searchSelectedCountry &&
												searchSelectedCountry.idd.suffixes}
										</p>
										<input type="text" />
									</div>
									<div className="second__input">
										<input type="text" placeholder="Referral ID (optional)" />
									</div>
									<button className="register__btn">Sign up now</button>
								</div>
							</form>
						</div>
					</div>
				</section>
				{/* END OF TEXT AND SIGN UP CARD CONTENT   */}
			</main>
		</>
	);
};

export default DriverSignUpNav;
