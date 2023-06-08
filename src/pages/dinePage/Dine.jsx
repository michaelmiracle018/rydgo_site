import React, { useState } from "react";
import DineBanner from "../component/banner/dinebanner/DineBanner";
//import DineBannerImage from "../../assets/images/Rectangle15.png";
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

const Dine = () => {
	const [isTimeText, setIsTimeText] = useState(false);
	const [isReferralText, setIsReferralText] = useState(false);

	return (
		<>
			<DineBanner />


			<div className="flex flex-col justify-center items-center my-20 mx-10">

            <h4 className="text-5xl font-bold">Rydine</h4>
			<small className="text-xl mt-2 text-[#ff0000]">
			Enjoy exclusive discounts at Ghana’s top restaurants, only with Rydgo Dine.
			</small>

            </div>


			<section className="ride__page-container">
				<div className="ride__page-content">
					<div className="bg__image"></div>

					{/* RIDE COMFORT CONTENT*/}

					<section className="ride_comfort__container">
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
										<h4 className="white__text">Let RyDineOut be your guide.</h4>
										<p className="py-6">
										With just a tap, you unlock a world of new experiences, unparalleled flavours, and unforgettable memories. Expand your palate and discover new favourite places around Ghana.
										</p>
										{/* <WhiteButton>Book your ride</WhiteButton> */}
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

					<section className="slide__content-about">
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
									<HText>Check the vibe.</HText>
									<p className="py-6">
									Know all about the ambiance, menu, amenities and more, even before you visit the restaurant.
									</p>
									<RedButton>Try Rydine</RedButton>
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

					<section className="ride_max__container">
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
										<h4 className="white__text">We’ll take you there.</h4>
										<p className="py-6">
										Take full advantage of your Rydgo app. Book a ride in a tap, straight from Rydgo ride. Choose from our fleet of cars or taxi.
										</p>
										<WhiteButton>Try Rydine</WhiteButton>
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
					>
						<div className="engineer__content center__item">
							<div className="text__content">
								<motion.div variants={textAnimate}>
									<HText>Pay with your RydWallet.</HText>
								</motion.div>
								<motion.div variants={textAnimate}>
									<p className="py-6">
									Pay the restaurant bill and even add a tip using your saved cards, Apple Pay or Rydgo wallet balance.
									</p>
									<RedButton>Try Rydine</RedButton>
								</motion.div>
							</div>
							<motion.div variants={imageAnimate}>
								<div className="img__wrap">
									<img src={KidsCarImage} alt="kidsCar" />
								</div>
							</motion.div>
						</div>
					</motion.div>


					<section className="driver__card-info-container">
				{/* DRIVER CARD CONTENT */}

				<div className="single__card-info">
					<div className="card__img">
						<img src={referral} alt="cash" />
					</div>
					<div className="card__info-text">
						<div>
							<h4>Instant booking</h4>
							<p>
							Make reservations with Rydine
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
							<h4>Bill split</h4>
							<p>
							Share the load with your friends and family
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
							<h4>...and many more!</h4>
							<p>
							Watch this space for more updates
							</p>
						</div>
					</div>
				</div>
			</section>





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
										When you end a trip that was paid for using a card or mobile
										money, Rydgo at one time credits your wallet. Within 24
										hours, wallet credits will be made available to provide
										drivers access to their funds. Pertaining to T&C
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
										Build up Gh2.00 cedis or further awards for each successful
										referral, and relying on the promotional term, the rider
										obtains discounts or ride credits. To prevent drivers from
										living out of money, Rydgo makes sure that drivers who
										take...
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

						<div className="single__card-info drop-shadow-md">
							<div className="card__img">
								<img src={cash} alt="cash" />
							</div>
							<div className="card__info-text">
								<div>
									<h4>Make Payment</h4>
									<p>
										Build up Gh2.00 cedis or further awards for each successful
										referral, and relying on the promotional term, the rider
										obtains discounts or ride credits.To prevent living drivers
										...
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
		</>
	);
};

export default Dine;
