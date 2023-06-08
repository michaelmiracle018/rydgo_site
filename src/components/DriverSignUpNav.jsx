import React from "react";
import rydgo_logo from "../assets/images/rydgo_logo(1).png";
import "../styles/driverSignUpNav.scss";
import { RiArrowDownSFill } from "react-icons/ri";

const DriverSignUpNav = () => {
	return (
		<>
			<section className="driver__signup-nav">
				<div>
					{/* DRIVER LEFT CONTENT   */}
					<div className="driver__left-content">
						<img src={rydgo_logo} alt="rydgo" />
						<div className="links__container">
							<ul className="menu">
								<li className="link">
									<div className="flex gap-1">
										<h5>Discover</h5>
										<div className="mt-1">
											<RiArrowDownSFill />
										</div>
									</div>
									<ul className="submenu">
										<li>Get a rydgo</li>
										<li>How it works</li>
										<li>Fair estimator</li>
									</ul>
								</li>
								<li className="link">
									<div className="flex gap-1">
										<h5>Ride</h5>
										<div className="mt-1">
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
					</div>

					{/* DRIVER RIGHT CONTENT   */}

					<div className="driver__right-content"></div>
				</div>
			</section>
		</>
	);
};

export default DriverSignUpNav;
