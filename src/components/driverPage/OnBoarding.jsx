import React, { useEffect, useState } from "react";
import time from "../../assets/icons/24-7.png";
import "../../styles/onBoarding.scss";
import { imageLoad } from "../../assets/data";

const OnBoarding = () => {
	const [category, setCategory] = useState("ONE");
	const [getImage, setImage] = useState(imageLoad);

	useEffect(() => {
		const filteredImage = imageLoad.filter(
			(item) => item.category === category,
		);
		setImage(filteredImage);
	}, [category]);

	return (
		<>
			<div className="onBoard__container">
				<h2>Steps to follow</h2>
				<div className="drive__steps-info">
					<div className="drive__steps-img-wrap">
						{getImage.map((item) => (
							<img
								src={item.img}
								alt="image"
								key={item.id}
								style={{ width: "200px" }}
							/>
						))}
					</div>
					<div className="onBoard__content">
						<div className="progress__container">
							<div className="progress" id="progress"></div>
							<div className="single__onBoard-wrap">
								<button
									className={`${
										category === "ONE" ? "circle active__circle" : "circle"
									}`}
									onClick={() => setCategory("ONE")}
								>
									1
								</button>
								<div className="circle__text text1">
									<p>
										Download the Rydgo app from the app store or play store.
									</p>
								</div>
							</div>
							<div className="single__onBoard-wrap">
								<button
									className={`${
										category === "TWO" ? "circle active__circle" : "circle"
									}`}
									onClick={() => setCategory("TWO")}
								>
									2
								</button>
								<div className="circle__text">
									<p>Sign in with your necessary details.</p>
								</div>
							</div>
							<div className="single__onBoard-wrap">
								<div
									className={`${
										category === "THREE" ? "circle active__circle" : "circle"
									}`}
									onClick={() => setCategory("THREE")}
								>
									3
								</div>
								<div className="circle__text">
									<p>Submit documents.</p>
								</div>
							</div>
							<div className="single__onBoard-wrap">
								<button
									className={`${
										category === "FOUR" ? "circle active__circle" : "circle"
									}`}
									onClick={() => setCategory("FOUR")}
								>
									4
								</button>
								<div className="circle__text">
									<p>Schedule for autocheck and orientation.</p>
								</div>
							</div>
							<div className="single__onBoard-wrap">
								<button
									className={`${
										category === "FIVE" ? "circle active__circle" : "circle"
									}`}
									onClick={() => setCategory("FIVE")}
								>
									5
								</button>
								<div className="circle__text">
									<p>Get approved and start work</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="onBoard__paragraph">
					<div>
						<p className="onBoard__para1">
							To activate the Rydgo onboarding process, please be ready to enter
							the application with your relevant data, licence information, and
							payment information.
						</p>
						<p className="onBoard__para2">
							Rydgo works closely with drivers to ensure that drivers earn more.
							Our lower commission rates and welfare schemes help make driving
							on Rydgo a drive for your future. Get started by downloading and
							registering on the app!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default OnBoarding;
