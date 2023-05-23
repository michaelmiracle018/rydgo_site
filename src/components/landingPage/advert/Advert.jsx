import React from "react";
import "./advert.scss";

const Advert = () => {
	return (
		<section className="advert__container">
			<video autoplay="" loop="" controls="" width="500">
				<source
					id="mp4"
					src="http://media.w3.org/2010/05/sintel/trailer.mp4"
					type="video/mp4"
				/>
			</video>
		</section>
	);
};

export default Advert;
