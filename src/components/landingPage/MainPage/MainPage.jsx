import React from "react";
import "../../../styles/mainPage.scss";
import Slider from "../Slide";
import HText from "../../../shared/HText";
import RedButton from "../../../shared/RedButton";
import WhiteButton from "../../../shared/WhiteButton";

import womanImage from "../../../assets/images/happy-woman.png";
import womanCaptain from "../../../assets/images/captain_main.JPG";
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
						<img src={womanCaptain} alt="womanDriver" style={{width:'580px',borderRadius:'25px'}} />
					</div>
					<div className="captain__text ">
						<h4 className="white__text">Rydgo Women</h4>
						<p className="py-6">
						Enjoy safe and reliable rides with our specially trained female drivers. 
						We prioritise your comfort and security throughout your journey.
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
						<HText>TechForce at Rydgo</HText>
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
						<HText>Our Driving Impact</HText>
						<p className="py-6">
						At Rydgo, we are driven by a commitment to empower communities and create a lasting social impact. Here's how we strive to make a difference...
						</p>
						<RedButton>Read more</RedButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainPage;
