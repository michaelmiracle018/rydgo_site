import React from "react";
import "../../styles/slider.scss";
import Slider from "react-slick";
import img1 from "../../assets/images/Rectangle.png"
import img2 from "../../assets/images/rec2.jpg"
import img3 from "../../assets/images/rec3.jpg"


const Slide = () => {
	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 3000,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings} className="slide__content">
			<div>
				<img src={img1} alt="" />
			</div>
			<div>
				<img src={img2} alt="" />
			</div>
			<div>
				<img src={img3} alt="" />
			</div>
		</Slider>
	);
};

export default Slide;
