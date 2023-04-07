import React from "react";
import { Link } from "react-router-dom";
import "./rydwellbanner.scss";
import RydWellBannerImage from "../../../../assets/images/Rectangle15.png";

const RydWellBanner = () => {
  return (
    <section className="ridebanner__container">
      <div>
        <img
          src={RydWellBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40 flex flex-col">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Professional beauty, <br /> services at home.
          </h3>
          <small className="text-2xl mt-2 text-white">
            Book your Rydgo taxi on the Rydgo app
          </small>

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

export default RydWellBanner;
