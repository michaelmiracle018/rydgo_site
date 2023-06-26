import React from "react";
import { Link } from "react-router-dom";
import "./rydgrobanner.scss";
import RydGroBannerImage from "../../../../assets/images/Rectangle15.png";

const RydGroBanner = () => {
  return (
    <section className="ridebanner__container">
      <div>
        <img
          src={RydGroBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-10 sm:pl-40 flex flex-col">
          <h3 className="text-4xl sm:text-6xl text-white italic font-bold flex justify-start">
            Groceries, <br />
            in a smart way.
          </h3>
          {/* <small className="text-2xl mt-2 text-white">
            Book your Rydgo taxi on the Rydgo app
          </small> */}

          <Link to="">
            <button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
              Order now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RydGroBanner;
