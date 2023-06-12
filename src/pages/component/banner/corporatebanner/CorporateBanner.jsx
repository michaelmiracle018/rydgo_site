import React from "react";
import { Link } from "react-router-dom";
import "./corporatebanner.scss";
import CorporateBannerImage from "../../../../assets/images/Rectangle15.png";

const CorporateBanner = () => {
  return (
    <section className="corporatebanner__container">
      <div>
        <img
          src={CorporateBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40 flex flex-col">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            For people, <br /> on the move.
          </h3>
          {/* <small className="text-2xl mt-2 text-white">
            Book your Rydgo taxi on the Rydgo app
          </small> */}

          {/* <Link to="">
            <button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
              Book your ride
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default CorporateBanner;
