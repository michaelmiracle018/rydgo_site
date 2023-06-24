import React, { useState } from "react";
import CarRentalBanner from "../component/banner/carRentalbanner/CarRentalBanner";
import CarRentalBannerImage from "../../assets/images/Rectangle15.png";
import "../carRentalPage/carRental.scss";
import HText from "../../shared/HText";
import RedButton from "../../shared/RedButton";
import WhiteButton from "../../shared/WhiteButton";
import TaxidriverImage from "../../assets/images/taxDriver.png";
import TaximaxImage from "../../assets/images/taxiMax.png";
import TaxikidsImage from "../../assets/images/taxiKids.png";
import car1 from "../../assets/images/hyundai_PNG11217 1.png";
import car2 from "../../assets/images/red-hyundai-car-png-15 2.png";
import { motion } from "framer-motion";
import { imageAnimate } from "../../animations";

import cash from "../../assets/icons/CARD.png";
import time from "../../assets/icons/24-7.png";
import referral from "../../assets/icons/REFERRAL.png";
import GoWrap from "../../components/Go/GoWrap";

const CarRental = () => {
	const [isTimeText, setIsTimeText] = useState(false);
	const [isReferralText, setIsReferralText] = useState(false);

	return (
		<>
			<CarRentalBanner />
			{/* GO CONTENT  */}
			<div>
				<GoWrap />
			</div>
			{/* 
<div className="flex flex-col justify-center items-center my-20 mx-10">
<h4 className="text-5xl font-bold">Car Rental</h4>
<small className="text-xl mt-2 text-[#ff0000] text-center">
No hassle, no deposit, no paperwork. Rent a car for a month, a week,
or even a day <br /> on Rydgo. Choose from a wide selection of cars
and have it delivered straight to <br /> your door.
</small>
</div>
*/}

			<section className="ride__page-container">
				<div className="ride__page-content">
					<div className="bg__image"></div>

					{/* RENT CAR CONTENT*/}

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
											src={TaxidriverImage}
											alt="taxiDriver"
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
										<h4 className="white__text">Daily</h4>
										<p className="py-6">
											Need a car for the day? You got it. Forget about long
											processes and hidden fees. All you have to do is choose
											the car type, date & time, delivery location and we’ll
											take care of the rest.
										</p>
										<WhiteButton>Rent now</WhiteButton>
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
						{/* TAXI MAX CONTENT*/}

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
									<HText>Monthly</HText>
									<p className="py-6">
										What’s the easiest way to enjoy all the perks of having a
										car without actually owning one? Rent a car the smarter way
										with Rydgo. You’ll love the flexibility, ease, and
										convenience a monthly car rental can give you.
									</p>
									<RedButton>Rent now</RedButton>
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
									<img src={TaximaxImage} alt="taxiMax" />
								</div>
							</motion.div>
						</div>
					</section>

					{/* EXPLORE MORE WITH RYDGO CONTENT */}

					<div className="flex justify-center items-center mt-40 mx-10">
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
									<h4>Pay</h4>
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
					<section className="ridebanner__container">
						<div>
							<img
								src={CarRentalBannerImage}
								alt="rideImage"
								width={500}
								height={900}
								className="absolute"
							/>

							<div className="text relative pt-10">
								<h3 className="text-3xl text-white font-bold flex justify-center items-center">
									Most asked questions
								</h3>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default CarRental;
