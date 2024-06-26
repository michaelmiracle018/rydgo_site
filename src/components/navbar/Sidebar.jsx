import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ServicesSidebar from "./ServicesSidebar";
import "../../styles/sidebar.scss";
import { TfiWorld } from "react-icons/tfi";

const Sidebar = ({ setIsOpen, isOpen }) => {
	const [isOpenServices, setIsOpenServices] = useState(false);
	const [isOpenPartners, setIsOpenPartners] = useState(false);
	const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);

	return (
		<div>
			<div>
				<div className={`sidebar__wrap ${isOpen ? " show" : ""} `}>
					<ul>
						<li>
							<div
								className="link__flex"
								onClick={() => setIsOpenServices(!isOpenServices)}
							>
								<span>Our Services</span>
								<div>
									{isOpenServices ? <FaChevronUp /> : <FaChevronDown />}{" "}
								</div>
							</div>
							{isOpenServices && <ServicesSidebar />}
						</li>
						<li>
							<Link to="/rider" className="link__flex">Riders</Link>
						</li>
						<li>
							<Link to="/driver" className="link__flex">Drivers</Link>
						</li>
						<li>
							<div
								className="link__flex"
								onClick={() => setIsOpenPartners(!isOpenPartners)}
							>
								<span>Partners</span>
								<div>
									{isOpenPartners ? <FaChevronUp /> : <FaChevronDown />}
								</div>
							</div>
							{isOpenPartners && (
								<div>
									<ul className="sub__links">
										<li>
											<Link to="/rydgo-for-business">Corporate Packages</Link>
										</li>
										<li>
											<Link to="/restaurant-partner-signup">Restaurant Delivery</Link>
										</li>
										<li>
											<Link to="/rydgo-express">B2B Delivery</Link>
										</li>
									</ul>
								</div>
							)}
						</li>
						<li>
							<Link to="/rydgo-tuesday" className="link__flex">Rydgo Tuesday</Link>
						</li>
						<li>
							<div
								className="link__flex"
								onClick={() => setIsOpenAboutUs(!isOpenAboutUs)}
							>
								About us
								<div>{isOpenAboutUs ? <FaChevronUp /> : <FaChevronDown />}</div>
							</div>
							{isOpenAboutUs && (
								<div>
									<ul className="sub__links">
										<li>
											<Link to="/about-us">About Us</Link>
										</li>
										<li>
											<Link to="/rydgo-social-impact">Our Social Impact</Link>
										</li>
										<li>
											<Link to="/rydgo-engineer">Engineering at Rydgo</Link>
										</li>
										{/* 
										<li>
										<Link to="/">Careers</Link>
										</li>
									*/}
									</ul>
								</div>
							)}
						</li>

						<li>
							<div className="flex justify-between p-8">
								<div className="flex gap-2 ">
									<div>
										<TfiWorld />
									</div>
									<div className="">English</div>
								</div>
								<div className="">
									<FaChevronDown />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
