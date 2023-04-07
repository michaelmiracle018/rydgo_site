import React from "react";
import { Link } from "react-router-dom";
import "./dinebanner.scss";
import DineBannerImage from "../../../../assets/images/Rectangle15.png";

const DineBanner = () => {
  return (
    <section className="ridebanner__container">
      <div>
        <img
          src={DineBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Discover, <br /> Ghana's finest
            <br />
            Restaurant
          </h3>

          <Link to="">
            <button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
              Book now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DineBanner;
