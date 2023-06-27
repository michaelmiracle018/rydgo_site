import React, { useEffect, useState } from "react";
import RideBanner from "../component/banner/ridebanner/RideBanner";
import "../ridePage/ride.scss";
import HText from "../../shared/HText";
import RedButton from "../../shared/RedButton";
import WhiteButton from "../../shared/WhiteButton";
import ComfortCareImage from "../../assets/images/comfort.png";
import ExecutiveCarImage from "../../assets/images/executive.png";
import MaxCarImage from "../../assets/images/max.png";
import KidsCarImage from "../../assets/images/kids.png";
import car1 from "../../assets/images/hyundai_PNG11217 1.png";
import car2 from "../../assets/images/red-hyundai-car-png-15 2.png";
import { motion } from "framer-motion";
import { imageAnimate } from "../../animations";
import { textAnimate } from "../../animations";

import cash from "../../assets/icons/CARD.png";
import time from "../../assets/icons/24-7.png";
import referral from "../../assets/icons/REFERRAL.png";
import QuestionPage from "../../components/QuestionPage";
import GoWrap from "../../components/Go/GoWrap";

const Ride = () => {
	const [isTimeText, setIsTimeText] = useState(false);
	const [isReferralText, setIsReferralText] = useState(false);
	const [showTopBtn, setShowTopBtn] = useState(false);
	

	return (
		<>
			<section>
				<RideBanner />
				{/* GO CONTENT  */}
				<div>
					<GoWrap />
				</div>
				<section className="driver__card-info-container">
					{/* DRIVER CARD CONTENT */}

					<div className="single__card-info">
						<div className="card__img">
							<img src={referral} alt="cash" />
						</div>

						<div className="card__info-text">
							<div>
								<h4>Choose your ride</h4>
								<p>
									Select from a wide range of options and get your ride within
									minutes, or schedule one for later.
								</p>
							</div>
						</div>
					</div>

					<div className="single__card-info">
						<div className="card__img">
							<img src={time} alt="cash" />
						</div>
						<div className="card__info-text">
							<div>
								<h4>Track your ride</h4>
								<p>
									Track your ride in real time from the moment a Captain is
									assigned until you arrive at your destination.
									{isTimeText && (
										<div>
											a discount on ride are promptly credited to their wallet
											tracking the trip. T&C applied.
										</div>
									)}
									<button
										className="see__more-btn"
										onClick={() => setIsTimeText(!isTimeText)}
									>
										{isTimeText ? "see less" : "see more"}
									</button>
								</p>
							</div>
						</div>
					</div>

					<div className="single__card-info">
						<div className="card__img">
							<img src={cash} alt="cash" />
						</div>
						<div className="card__info-text">
							<div>
								<h4>Pay securely</h4>
								<p>
									Card, Rydgo Pay, Apple Pay or cash; you can pay securely on
									Rydgo. ...
									{isReferralText && (
										<div>
											from out of money, Rydgo makes sure that drivers who take
											a discount on ride are promptly credited to their wallet
											tracking the trip. T&C applied.
										</div>
									)}
									<button
										className="see__more-btn"
										onClick={() => setIsReferralText(!isReferralText)}
									>
										{isTimeText ? "see less" : "see more"}
									</button>
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="ride__page-container">
					<div className="ride__page-content">
						<div className="bg__image"></div>

						{/* RIDE COMFORT CONTENT*/}

						<section className="ride_comfort__container" id="Extra">
							<div className="center__item">
								<div className="ride_comfort__wrap">
									<motion.div
										initial={"hidden"}
										whileInView={"visible"}
										viewport={{ once: false, amount: 0.5 }}
										transition={{ staggerChildren: 0.5 }}
										variants={imageAnimate}
									>
										<div className="ride_comfort__img">
											<img
												src={ComfortCareImage}
												alt="comfortCar"
												style={{ width: "580px", borderRadius: "25px" }}
											/>
										</div>
									</motion.div>

									<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 0.9 }}
										variants={{
											hidden: { opacity: 0, x: 50 },
											visible: { opacity: 1, x: 0 },
										}}
									>
										<div className="ride_comfort__text ">
											<h4 className="white__text">Extra</h4>
											<p className="py-6">
												This category allows riders to share a ride with others
												who are travelling in the same direction, which can help
												to reduce costs and minimise the environmental impact of
												transportation.
											</p>
											<WhiteButton>Book your ride</WhiteButton>
										</div>
									</motion.div>
								</div>
							</div>
							{/* CAR CONTENT*/}

							<div className="car__image car1">
								<img src={car1} alt="" />
							</div>
							<div className="car__image car2">
								<img src={car2} alt="" />
							</div>
							<div className="car__image car3">
								<img src={car2} alt="" />
							</div>
						</section>

						<section className="slide__content-about" id="Rydgo">
							{/* EXECUTIVE CONTENT*/}

							<div className="ride__content center__item">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ delay: 0.2, duration: 0.9 }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										visible: { opacity: 1, x: 0 },
									}}
									className="text__content"
								>
									<div>
										<HText>Rydgo</HText>
										<p className="py-6">
											This category offers affordable, basic rides for those who
											want to get from point A to point B without any frills
											This category offers rides for short distances or within a
											specific neighborhood or area, with smaller vehicles that
											can navigate narrow streets and alleys
										</p>
										<RedButton>Book your ride</RedButton>
									</div>
								</motion.div>
								<motion.div
									initial={"offscreen"}
									whileInView={"onscreen"}
									viewport={{ once: false, amount: 0.5 }}
									transition={{ staggerChildren: 0.5 }}
									variants={imageAnimate}
								>
									<div className="img__wrap">
										<img src={ExecutiveCarImage} alt="executiveCar" />
									</div>
								</motion.div>
							</div>
						</section>

						{/* RIDE MAX CONTENT*/}

						<section className="ride_max__container" id="Premier">
							<div className="center__item">
								<div className="ride_max__wrap">
									<motion.div
										initial={"hidden"}
										whileInView={"visible"}
										viewport={{ once: false, amount: 0.5 }}
										transition={{ staggerChildren: 0.5 }}
										variants={imageAnimate}
									>
										<div className="ride_max__img">
											<img
												src={MaxCarImage}
												alt="maxCar"
												style={{ width: "580px", borderRadius: "25px" }}
											/>
										</div>
									</motion.div>
									<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 0.9 }}
										variants={{
											hidden: { opacity: 0, x: 50 },
											visible: { opacity: 1, x: 0 },
										}}
									>
										<div className="ride_max__text ">
											<h4 className="white__text">Premier</h4>
											<p className="py-6">
												This category offers a more luxurious experience, with
												higher-end vehicles and professional drivers who are
												trained in customer service.
											</p>
											<WhiteButton>Book your ride</WhiteButton>
										</div>
									</motion.div>
								</div>
							</div>
							{/* CAR CONTENT*/}

							<div className="car__image car1">
								<img src={car1} alt="" />
							</div>
							<div className="car__image car2">
								<img src={car2} alt="" />
							</div>
							<div className="car__image car3">
								<img src={car2} alt="" />
							</div>
						</section>

						{/* Kids CONTENT*/}
						<motion.div
							initial={"offscreen"}
							whileInView={"onscreen"}
							viewport={{ once: false, amount: 0.5 }}
							transition={{ staggerChildren: 0.5 }}
							id="Kids"
						>
							<div className="engineer__content center__item">
								<div className="text__content">
									<motion.div variants={textAnimate}>
										<HText>Kids</HText>
									</motion.div>
									<motion.div variants={textAnimate}>
										<p className="py-6">
											Kids are on the move too. Book a Kids ride that includes a
											child seat. Our wonderful Captains will also help you with
											those tricky buckles if you need it.
										</p>
										<RedButton>Read more</RedButton>
									</motion.div>
								</div>
								<motion.div variants={imageAnimate}>
									<div className="img__wrap">
										<img src={KidsCarImage} alt="kidsCar" />
									</div>
								</motion.div>
							</div>
						</motion.div>

						{/* EXPLORE MORE WITH RYDGO CONTENT */}

						<div className="flex justify-center items-center mx-10">
							<h4 className="text-5xl font-bold">Explore more with Rydgo</h4>
						</div>

						<section className="exploreMore__card-info-container">
							{/* EXPLORE MORE WITH RYDGO CARD */}

							<div className="single__card-info drop-shadow-md">
								<div className="card__img">
									<img src={referral} alt="cash" />
								</div>
								<div className="card__info-text">
									<div>
										<h4>Eat Anytime</h4>
										<p>
											When you end a trip that was paid for using a card or
											mobile money, Rydgo at one time credits your wallet.
											Within 24 hours, wallet credits will be made available to
											provide drivers access to their funds. Pertaining to T&C
										</p>
									</div>
								</div>
							</div>

							<div className="single__card-info drop-shadow-md">
								<div className="card__img">
									<img src={time} alt="cash" />
								</div>
								<div className="card__info-text">
									<div>
										<h4>Get Anything</h4>
										<p>
											Build up Gh2.00 cedis or further awards for each
											successful referral, and relying on the promotional term,
											the rider obtains discounts or ride credits. To prevent
											drivers from living out of money, Rydgo makes sure that
											drivers who take...
											{isTimeText && (
												<div>
													a discount on ride are promptly credited to their
													wallet tracking the trip. T&C applied.
												</div>
											)}
											<button
												className="see__more-btn"
												onClick={() => setIsTimeText(!isTimeText)}
											>
												{isTimeText ? "see less" : "see more"}
											</button>
										</p>
									</div>
								</div>
							</div>

							<div className="single__card-info drop-shadow-md">
								<div className="card__img">
									<img src={cash} alt="cash" />
								</div>
								<div className="card__info-text">
									<div>
										<h4>Pay</h4>
										<p>
											Build up Gh2.00 cedis or further awards for each
											successful referral, and relying on the promotional term,
											the rider obtains discounts or ride credits.To prevent
											living drivers ...
											{isReferralText && (
												<div>
													from out of money, Rydgo makes sure that drivers who
													take a discount on ride are promptly credited to their
													wallet tracking the trip. T&C applied.
												</div>
											)}
											<button
												className="see__more-btn"
												onClick={() => setIsReferralText(!isReferralText)}
											>
												{isTimeText ? "see less" : "see more"}
											</button>
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* MOST ASKED QUESTIONS */}
						<QuestionPage />
					</div>
				</section>
			</section>
		</>
	);
};

export default Ride;
