import React from "react";
import { Link } from "react-router-dom";
import "./rydsparklebanner.scss";
import RydSparkleBannerImage from "../../../../assets/images/Rectangle15.png";

const RydSparkleBanner = () => {
  return (
    <section className="ridebanner__container">
      <div>
        <img
          src={RydSparkleBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40 flex flex-col">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Home Cleaning, <br /> with a tap.
          </h3>
          {/* <small className="text-2xl mt-2 text-white">
            Book your Rydgo taxi on the Rydgo app
          </small> */}

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

export default RydSparkleBanner;
