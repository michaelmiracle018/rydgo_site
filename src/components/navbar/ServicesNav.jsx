import React, { useEffect, useState } from "react";
import "../../styles/servicesNav.scss";
import subLinks from "../../assets/data";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

const ServicesNav = ({ openServiceNav, setOpenServiceNav }) => {
	const [category, setCategory] = useState("RIDE");
	const [allSubLinks, setAllSubLinks] = useState(subLinks);
	useEffect(() => {
		if (category === "RIDE") {
			const filteredLinks = subLinks.filter((item) => item.category === "RIDE");
			setAllSubLinks(filteredLinks);
		}

		if (category === "FOOD") {
			const filteredLinks = subLinks.filter((item) => item.category === "FOOD");
			setAllSubLinks(filteredLinks);
		}

		if (category === "ASSIST") {
			const filteredLinks = subLinks.filter((item) => item.category === "ASSIST");
			setAllSubLinks(filteredLinks);
		}
		if (category === "WALLET") {
			const filteredLinks = subLinks.filter((item) => item.category === "WALLET");
			setAllSubLinks(filteredLinks);
		}
	}, [category]);
	return (
		<section className="section__nav-container">
			<div className="servicesNav__content">
				<div className="servicesNav__wrap">
					<div className="links__content">
						<ul>
							<li
								className={`${category === "RIDE" ? "active__btn" : ""}`}
								onClick={() => setCategory("RIDE")}
							>
								Ride
							</li>
							<li
								className={`${category === "FOOD" ? "active__btn" : ""}`}
								onClick={() => setCategory("FOOD")}
							>
								Food
							</li>
							<li
								className={`${category === "ASSIST" ? "active__btn" : ""}`}
								onClick={() => setCategory("ASSIST")}
							>
								Assist
							</li>
							<li
								className={`${category === "WALLET" ? "active__btn" : ""}`}
								onClick={() => setCategory("WALLET")}
							>
								Wallet
							</li>
						</ul>
						<div className="line"></div>
						<div className="sub__links-content">
							{allSubLinks.map((link) => (
								<Link to={link.url} key={link.id}>
									{link.name}
								</Link>
							))}
						</div>

						<div className="close__btn">
							<VscChromeClose
								className="icon__btn"
								onClick={() => setOpenServiceNav(false)}
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				className="service__overlay"
				onClick={() => setOpenServiceNav(false)}
			></div>
		</section>
	);
};

export default ServicesNav;
