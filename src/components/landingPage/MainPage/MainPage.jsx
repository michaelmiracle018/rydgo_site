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
import { motion } from "framer-motion";
import { imageAnimate } from "../../../animations";
import { textAnimate } from "../../../animations";
import Blog from "./Blog";
import blogs from "../../../assets/blogs";

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },

	},
};

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

					<div className="about__content center__item">
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
								<HText>About us</HText>
								<p className="py-6">
									Rydgo’s mission is to simplify and improve the lives of people
									and build an awesome organisation that inspires. Learn more
									about our purpose, people and services.
								</p>
								<RedButton>Read more</RedButton>
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
								<img src={womanImage} alt="" />
							</div>
						</motion.div>
					</div>
				</section>
				{/* CAPTAIN CONTENT*/}

				<section className="captain__container">
					<div className="center__item">
						<div className=" captain__wrap">
							<motion.div
								initial={"hidden"}
								whileInView={"visible"}
								viewport={{ once: false, amount: 0.5 }}
								transition={{ staggerChildren: 0.5 }}
								variants={imageAnimate}
							>
								<div className="captain__img">
									<img
										src={womanCaptain}
										alt="womanDriver"
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
								<div className="captain__text ">
									<h4 className="white__text">Captain</h4>
									<p className="py-6">
										Drive with Rydgo and earn with every ride. Choose your own
										hours, enjoy amazing Captain rewards and get professional
										training.
									</p>
									<WhiteButton>Read more</WhiteButton>
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

				{/* ENGINEERING CONTENT*/}
				<motion.div
					initial={"offscreen"}
					whileInView={"onscreen"}
					viewport={{ once: false, amount: 0.5 }}
					transition={{ staggerChildren: 0.5 }}
				>
					<div className="engineer__content center__item">
						<div className="text__content">
							<motion.div variants={textAnimate}>
								<HText>Engineering at Rydgo</HText>
							</motion.div>
							<motion.div variants={textAnimate}>
								<p className="py-6">
									Rydgo is creating cutting-edge technology every day across
									five tech sites in USA and Ghana, in a mission to build a
									lasting tech institution that inspires.
								</p>
								<RedButton>Read more</RedButton>
							</motion.div>
						</div>
						<motion.div variants={imageAnimate}>
							<div className="img__wrap">
								<img src={youngMan} alt="" />
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* SOCIAL IMPART CONTENT*/}
				<div className="social__content center__item">
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						viewport={{ once: false, amount: 0.5 }}
						transition={{ staggerChildren: 0.5 }}
						variants={imageAnimate}
					>
						<div className="social__wrap-img">
							<img src={friendsImg} alt="" />
						</div>
					</motion.div>
					<div className="social__text-content">
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
							<HText>Our Social Impact</HText>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.9 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<p className="py-6">
								Rydgo is creating cutting-edge technology every day across five
								tech sites in USA and Ghana, in a mission to build a lasting
								tech institution that inspires.
							</p>
							<RedButton>Read more</RedButton>
						</motion.div>
					</div>
				</div>
				{/* OUR BLOG CONTENT*/}
				<section className="our__blog">
					<div className="our__blog-content center__item">
						<h3>Our Blog</h3>

						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.7 }}
							variants={container}
							className="blog__cards"
						>
							{blogs.map((blog) => (
								<Blog key={blog.id} blog={blog} />
							))}
						</motion.div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default MainPage;
