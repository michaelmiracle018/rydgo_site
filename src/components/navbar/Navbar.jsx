import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import rydgo_logo from "../../assets/images/rydgo_logo(1).png";
import { Link, NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { FaChevronUp, FaChevronDown, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ServicesNav from "./ServicesNav";
import Sidebar from "./Sidebar";

import world from "../../assets/svg/world.svg";

import arrowDown from "../../assets/svg/arrow_down.svg";
import AboutUsNav from "./AboutUsNav";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [openServiceNav, setOpenServiceNav] = useState(false);
	const [openAboutUsNav, setOpenAboutUsNav] = useState(false);
	const headerRef = useRef(null);

	const serviceNav = () => {
		setOpenServiceNav(!openServiceNav);
		if (openAboutUsNav === true) {
			setOpenAboutUsNav(!openAboutUsNav);
		}
	};

	const aboutUsNav = () => {
		setOpenAboutUsNav(!openAboutUsNav);
		if (openServiceNav === true) {
			setOpenServiceNav(!openServiceNav);
		}
	};

	const openSidebar = () => {
		setIsOpen(true);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				headerRef.current.classList.add("header__shrink");
			} else {
				headerRef.current.classList.remove("header__shrink");
			}
		});

		return () => window.removeEventListener("scroll", null);
	}, []);

	return (
		<article ref={headerRef} className="navbar">
			<section className="navbar__container">
				<div className="navbar__sub-container">
					{/* LOGO CONTENT
					// <div className="logo__links-wrap">
				*/}
					<Link to="/">
						<img src={rydgo_logo} alt="rydgo" />
					</Link>
					{/* LINKS CONTENT*/}

					<div className="links__content">
						<ul>
							<li onClick={serviceNav}>Our Services</li>
							<Link to="/rider">
								<li>Riders</li>
							</Link>
							<Link to="/driver">
								<li>Drivers</li>
							</Link>

							<li onClick={aboutUsNav}>About Us</li>
							<li>Contact us</li>
						</ul>
					</div>

					{/* RIGHT CONTENT*/}
					<div className="right__content">
						<div className="btn__wrap">
							<button>Download the Rydgo App</button>
						</div>
						<div className="language__wrap">
							<div className="world__icon">
								<img src={world} alt="world" />
							</div>
							<div className="text">English</div>
							<div className="down__icon">
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						{/* HAMBURGER FOR SMALL SCREEN*/}

						<button className="hamburger">
							{isOpen === false ? (
								<GiHamburgerMenu onClick={openSidebar} />
							) : (
								<FaTimes onClick={closeSidebar} />
							)}
						</button>
					</div>
				</div>
				<Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
			</section>
			{openServiceNav && (
				<ServicesNav
					openServiceNav={openServiceNav}
					setOpenServiceNav={setOpenServiceNav}
				/>
			)}
			<div>
				{openAboutUsNav && <AboutUsNav setOpenAboutUsNav={setOpenAboutUsNav} />}
			</div>
		</article>
	);
};

export default Navbar;
