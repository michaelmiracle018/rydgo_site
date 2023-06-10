import React, { useEffect, useState } from "react";
import "./driverSignUp.scss";
import DriverSignUpNav from "../../components/driverSignUpComponent/DriverSignUpNav";
import ownBoss from "../../assets/icons/be_own_boss_icn.svg";
import controlLife from "../../assets/icons/control_life_icn.svg";
import ownMoney from "../../assets/icons/make_your_own_money_icn.svg";


const DriverSignUp = () => {


	

	return (
		<>
			<section className="driver__signup-nav">
				<div className="driver__signup-sub">
					{/* BECOME A CAPTAIN  CONTENT   */}

					<section className="captain__container">
						<div className="captain__sub-container">
							<h2>Why become a captain? </h2>

							<div className="captain__card-content">
								<div className="captain__single-card">
									<img src={ownBoss} alt="Be your own boss" />
									<h3>Be your own boss</h3>
									<p>
										Full time? Part time? With Careem you work on your own time.{" "}
									</p>
								</div>

								<div className="captain__single-card">
									<img src={ownMoney} alt="own money" />
									<h3> Make your own money</h3>
									<p>
										You decide how much money you make and when you make it.
									</p>
								</div>
								<div className="captain__single-card">
									<img src={controlLife} alt="control life" />
									<h3>Control your own life </h3>
									<p>
										Take charge and achieve what you're working for, on your own
										terms.
									</p>
								</div>
							</div>
						</div>
					</section>
					{/* END OF BECOME A CAPTAIN CONTENT   */}
				</div>
			</section>
		</>
	);
};

export default DriverSignUp;
