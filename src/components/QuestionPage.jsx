import React from "react";
import "./driverPage/driver.scss";
import Question from "./Questions";
import { questions } from "../assets/data";
import RideBannerImage from "../assets/images/Rectangle15.png";

const QuestionPage = () => {
	return (
		<>
			<div className="question__img">
				<img src={RideBannerImage} alt="rideImage" className="absolute" />
				<section className="questions__container">
					<div className="question__title">
						<h3>TOP QUESTIONS</h3>
					</div>
					<section className="questions__info">
						{questions.map((question) => {
							return <Question key={question.id} {...question} />;
						})}
					</section>
				</section>
			</div>
		</>
	);
};

export default QuestionPage;
