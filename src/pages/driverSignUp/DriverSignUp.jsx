import React, { useEffect, useState } from "react";
import "./driverSignUp.scss";
import DriverSignUpNav from "../../components/driverSignUpComponent/DriverSignUpNav";
import ownBoss from "../../assets/icons/be_own_boss_icn.svg";
import controlLife from "../../assets/icons/control_life_icn.svg";
import ownMoney from "../../assets/icons/make_your_own_money_icn.svg";
import road from "../../assets/images/road.jpg";
import { AiOutlineCar } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdPhoneAndroid } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import driverImg from "../../assets/images/driver_signup.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
									<div className="img__card">
										<img src={ownBoss} alt="Be your own boss" />
									</div>
									<h3>Be your own boss</h3>
									<p>
										Full time? Part time? With Rydgo you work on your own time.{" "}
									</p>
								</div>

								<div className="captain__single-card">
									<div className="img__card">
										<img src={ownMoney} alt="own money" />
									</div>
									<h3> Make your own money</h3>
									<p>
										You decide how much money you make and when you make it.
									</p>
								</div>
								<div className="captain__single-card">
									<div className="img__card">
										<img src={controlLife} alt="control life" />
									</div>
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
					{/* REQUIREMENT  CONTENT   */}

					<section className="requirement__container">
						<div className="requirement__sub-container">
							<div className="road__img">
								<img src={road} alt="road" />
								<div className="requirement__card-content">
									<div className="requirement__card">
										<h2>Requirements</h2>

										<div className="first__requirement">
											<div className="age__requirement flex gap-8 items-center">
												<div className="icon">
													<SlCalender />
												</div>
												<div className="requirement__text">
													<h3>Age</h3>
													<p>
														You have to be over 18 years of age with a valid
														driver’s license to drive with Rydgo.{" "}
													</p>
												</div>
											</div>

											<div className="phone__requirement flex gap-8 items-center">
												<div className="icon">
													<MdPhoneAndroid />
												</div>
												<div className="requirement__text">
													<h3>Smartphone </h3>
													<p>
														You will need an Android device to receive bookings
														on our app.
													</p>
												</div>
											</div>
										</div>

										<div className="second__requirement">
											<div className="car__requirement flex gap-8 items-center">
												<div className="icon">
													<AiOutlineCar />
												</div>
												<div className="requirement__text">
													<h3>Car</h3>
													<p>
														Depending on the city you want to work in, your car
														must meet some requirements.
													</p>
												</div>
											</div>

											<div className="car__requirement flex gap-8 items-center">
												<div className="icon">
													<BsPersonCheck />
												</div>
												<div className="requirement__text">
													<h3>Screening</h3>
													<p>
														The screening process may include drug tests, police
														reports, credit checks etc.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* END OF  REQUIREMENT  CONTENT   */}

					{/* SIGN UP CONTENT   */}

					<section className="signup__container">
						<div className="signup__card">
							<h3>Have you got what it takes to be a Rydgo Captain?</h3>

							<div className="signup__btn">
								<AnchorLink href={"#signUp"}>

									<button>sign up now</button>
								</AnchorLink>
							</div>
						</div>
					</section>
					{/* END OF  SIGN UP CONTENT   */}

					{/* REGISTER STEPS CONTENT   */}

					<section className="register__step-container">
						<div className="register__step-wrapper">
							<h2 className="header__text">How to get started</h2>
							<div className="register__content flex flex-col gap-10 justify-center items-center md:flex-row">
								<div className="register__step-text">
									<div className="register__text mt-1 mb-8">
										<div className="register__text-flex flex gap-4">
											<div className="number__text">
												<div className="">1</div>
											</div>
											<div>
												<h4>Register</h4>
												<p className="w-[400px] ">
													Complete the form at the top and apply to become a
													Rydgo Captain.{" "}
												</p>
											</div>
										</div>
									</div>
									<div className="register__text mt-1 mb-8">
										<div className="register__text-flex flex gap-4 ">
											<div className="number__text">
												<div className="">2</div>
											</div>
											<div>
												<h4>Train</h4>
												<p className="w-[400px] ">
													After reviewing your application we’ll invite you for
													a training session.
												</p>
											</div>
										</div>
									</div>
									<div className="register__text ">
										<div className="register__text-flex flex gap-4">
											<div className="number__text">
												<div className="">3</div>
											</div>
											<div>
												<h4>Ride</h4>
												<p className="w-[400px] ">
													When training is complete, you can start to earn
													money!
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="register__step-img">
									<img src={driverImg} alt="driverImg" />
								</div>
							</div>
						</div>
					</section>
					{/*END OF  REGISTER STEPS CONTENT   */}
				</div>
			</section>
		</>
	);
};

export default DriverSignUp;
