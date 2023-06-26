import React from "react";
import { Link } from "react-router-dom";
import "./donatebanner.scss";
import DonateBannerImage from "../../../../assets/images/Rectangle15.png";

const DonateBanner = () => {
  return (
    <section className="donatebanner__container">
      <div>
        <img
          src={DonateBannerImage}
          alt="donateImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-10 sm:pl-40">
          <h3 className="text-4xl sm:text-6xl text-white italic font-bold flex justify-start">
            Kindness, <br /> in a ride.
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

export default DonateBanner;
