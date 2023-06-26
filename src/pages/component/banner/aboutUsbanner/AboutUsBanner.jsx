import React from "react";
import { Link } from "react-router-dom";
import "./aboutusbanner.scss";
import AboutUsBannerImage from "../../../../assets/images/Rectangle15.png";

const AboutUsBanner = () => {
  return (
    <section className="aboutusbanner__container">
      <div>
        <img
          src={AboutUsBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-10 sm:pl-40 flex flex-col">
          <h3 className="text-4xl sm:text-6xl text-white italic font-bold flex justify-start">
            About Us
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;
