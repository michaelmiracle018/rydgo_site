import React, { useState } from "react";
import driverImage from "../../assets/images/Drivers Page Top.png";
import "./driver.scss";
import google__app from "../../assets/images/Google Play.png";
import apple__app from "../../assets/images/Google Play.png";
import cash from "../../assets/icons/CARD.png";
import time from "../../assets/icons/24-7.png";
import referral from "../../assets/icons/REFERRAL.png";
import map from "../../assets/icons/MAP.png";
import OnBoarding from "./OnBoarding";

import QuestionPage from "../QuestionPage";

const Driver = () => {
	const [isTimeText, setIsTimeText] = useState(false);
	const [isReferralText, setIsReferralText] = useState(false);
	const [isMapText, setIsMapText] = useState(false);

	return (
		<section className="driver__container">
			<div>
				<section className="hero__container">
					{/* HERO CONTENT */}
					<div className="hero__img">
						<img src={driverImage} alt="driverImage" />
					</div>

					<div className="hero__content">
						<h1 className="hero__title">
							FEEL LIKE A BOSS WITH LESS COMMISSION
						</h1>
						<p className="hero__para1">
							Drive with a company that has your best interests in mind. What
							are you up for today?
						</p>

						<div className="hero__download">
							<img src={google__app} alt="" />
							<img src={apple__app} alt="" />
						</div>

						<div className="hero__paragraph-text">
							<p>
								To ensure that drivers progress more, Rydgo works instantly with
								them. Moving on Rydgo is a driver
								<br />
								for your tomorrow, appreciation to our inexpensive commission
								rates and welfare programs. Quick
								<br />
								payments, exceptional driver support, and welfare programs.
							</p>

							<p>
								These are just a few examples of how we are bringing about
								modification and inaugurating the bar of the <br />
								ride-hailing.
							</p>
						</div>
					</div>
				</section>

				<section className="driver__card-info-container">
					{/* DRIVER CARD CONTENT */}

					<div className="single__card-info">
						<div className="card__img">
							<img src={cash} alt="cash" />
						</div>
						<div className="card__info-text">
							<div>
								<h4>Save payments everyday</h4>
								<p>
									When you end a trip that was paid for using a card or mobile
									money, Rydgo at one time credits your wallet. Within 24 hours,
									wallet credits will be made available to provide drivers
									access to their funds. Pertaining to T&C
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
								<h4>24/7 driver assistance</h4>
								<p>
									Build up Gh2.00 cedis or further awards for each successful
									referral, and relying on the promotional term, the rider
									obtains discounts or ride credits. To prevent drivers from
									living out of money, Rydgo makes sure that drivers who take...
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
							<img src={referral} alt="cash" />
						</div>
						<div className="card__info-text">
							<div>
								<h4>Recommendations of drivers to riders</h4>
								<p>
									Build up Gh2.00 cedis or further awards for each successful
									referral, and relying on the promotional term, the rider
									obtains discounts or ride credits.To prevent living drivers
									...
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
										{isReferralText ? "see less" : "see more"}
									</button>
								</p>
							</div>
						</div>
					</div>

					<div className="single__card-info">
						<div className="card__img">
							<img src={map} alt="cash" />
						</div>
						<div className="card__info-text">
							<div>
								<h4>Before accepting a ride, have your destination in mind</h4>
								<p>
									When you accept tours, Rydgo adequately provides the trip
									details, Rydgo is there are no surprises. To further enhance
									driver safeness,...
									{isMapText && (
										<div>
											operating to confirm that users supply accurate
											information.
										</div>
									)}
									<button
										className="see__more-btn"
										onClick={() => setIsMapText(!isMapText)}
									>
										{isMapText ? "see less" : "see more"}
									</button>
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="driver__steps-container">
					{/* STEPS TO FOLLOW  CONTENT */}

					<OnBoarding />
				</section>

				{/* QUESTIONS FAQ  CONTENT */}
				<QuestionPage />
			</div>
		</section>
	);
};

export default Driver;
