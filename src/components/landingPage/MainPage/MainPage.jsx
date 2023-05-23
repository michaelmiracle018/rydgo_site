import React from "react";
import "../../../styles/mainPage.scss";
import Slider from "../Slide";
import HText from "../../../shared/HText";
import RedButton from "../../../shared/RedButton";
import WhiteButton from "../../../shared/WhiteButton";

import womanImage from "../../../assets/images/happy-woman.png";
import happyWoman from "../../../assets/images/smiley-woman-holding-up-her-car-keys 1.png";
import car1 from "../../../assets/images/hyundai_PNG11217 1.png";
import car2 from "../../../assets/images/red-hyundai-car-png-15 2.png";
import youngMan from "../../../assets/images/portrait-young-handsome-male 1.png";
import friendsImg from "../../../assets/images/young-friends-looking-smartphone-street 1.png";

const MainPage = () => {
	return (
		<section className="main__page-container">
			<div className="main__page-content">
				<div className="bg__image"></div>
				{/* SLIDE CONTENT*/}
				<section className="slide__content-about">
					<div className="slide__wrap">
						<Slider />
					</div>
					{/* ABOUT CONTENT*/}

					<div className="about__content">
						<div className="text__content">
							<HText>About us</HText>
							<p className="py-6">
								Rydgo’s mission is to simplify and improve the lives of people
								and build an awesome organisation that inspires. Learn more
								about our purpose, people and services.
							</p>
							<RedButton>Read more</RedButton>
						</div>
						<div className="img__wrap">
							<img src={womanImage} alt="" />
						</div>
					</div>
				</section>
				{/* CAPTAIN CONTENT*/}

				<section className="captain__content">
					<div className="captain__img">
						<img src={happyWoman} alt="" />
					</div>
					<div className="captain__text ">
						<h4 className="white__text">Captain</h4>
						<p className="py-6">
							Drive with Rydgo and earn with every ride. Choose your own hours,
							enjoy amazing Captain rewards and get professional training.
						</p>
						<WhiteButton>Read more</WhiteButton>
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

				{/* ENGINEERING CONTENT*/}
				<div className="about__content">
					<div className="text__content">
						<HText>Engineering at Rydgo</HText>
						<p className="py-6">
							Rydgo is creating cutting-edge technology every day across five
							tech sites in USA and Ghana, in a mission to build a lasting tech
							institution that inspires.
						</p>
						<RedButton>Read more</RedButton>
					</div>
					<div className="img__wrap">
						<img src={youngMan} alt="" />
					</div>
				</div>

				{/* SOCIAL IMPART CONTENT*/}
				<div className="social__content">
					<div className="social__wrap-img">
						<img src={friendsImg} alt="" />
					</div>
					<div className="social__text-content">
						<HText>Our Social Impact</HText>
						<p className="py-6">
							Rydgo is creating cutting-edge technology every day across five
							tech sites in USA and Ghana, in a mission to build a lasting tech
							institution that inspires.
						</p>
						<RedButton>Read more</RedButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainPage;
