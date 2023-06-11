import React from "react";
import { Link } from "react-router-dom";
import "./rydtourbanner.scss";
import RydTourBannerImage from "../../../../assets/images/Rectangle15.png";

const RydTourBanner = () => {
  return (
    <section className="rydtourbanner__container">
      <div>
        <img
          src={RydTourBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40 flex flex-col">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Tour around, <br /> the city.
          </h3>
          {/* <small className="text-2xl mt-2 text-white">
            Book your Rydgo taxi on the Rydgo app
          </small> */}

          <Link to="">
            <button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
              Book your ride
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RydTourBanner;
