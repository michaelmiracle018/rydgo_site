import React from "react";
import "../../styles/slider.scss";
import Slider from "react-slick";
import img1 from "../../assets/images/slideOne.png";
import img2 from "../../assets/images/slideTwo.png";
import img3 from "../../assets/images/HEADER.png";


const Slide = () => {
	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 3000,
		autoplaySpeed: 2000,
		swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings} className="slide__content">
			<div>
				<img src={img1} alt="slideOne" />
			</div>
			<div>
				<img src={img2} alt="slideTwo" />
			</div>
			<div>
				<img src={img3} alt="slideThree" />
			</div>
		</Slider>
	);
};

export default Slide;
