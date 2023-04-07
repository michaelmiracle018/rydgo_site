import React from "react";
import { Link } from "react-router-dom";
import "./foodbanner.scss";
import FoodBannerImage from "../../../../assets/images/Rectangle15.png";

const FoodBanner = () => {
  return (
    <section className="foodbanner__container">
      <div>
        <img
          src={FoodBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40 flex flex-col">
          <small className="text-5xl text-white italic font-bold flex justify-start">
            Rydgo,
          </small>

          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Eat.
          </h3>

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

export default FoodBanner;
