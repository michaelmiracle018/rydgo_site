import React from "react";
import "../../styles/aboutUsSidebar.scss";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const AboutUsNav = ({ setOpenAboutUsNav }) => {
	return (
		<>
			<section className="aboutUs__nav-container">
				<div className="aboutUs__content">
					<div className="aboutUs__wrap">
						<div className="links__content">
							<ul>
								<li>
									<Link to="/">About Us</Link>
								</li>
								<li>
									<Link to="/">Our social impart</Link>
								</li>
								<li>
									<Link to="/">Engineering at Rydgo</Link>
								</li>
								<li>
									<Link to="/">Careers</Link>
								</li>
								<li>
									<Link to="/">Explore open roles</Link>
								</li><li>
									<Link to="/">Blogs</Link>
								</li>
							</ul>
							<div className="close__btn">
								<VscChromeClose
									className="icon__btn"
									onClick={() => setOpenAboutUsNav(false)}
								/>
							</div>
						</div>
					</div>
				</div>

				<div
					className="service__overlay"
					onClick={() => setOpenAboutUsNav(false)}
				></div>
			</section>
		</>
	);
};

export default AboutUsNav;
