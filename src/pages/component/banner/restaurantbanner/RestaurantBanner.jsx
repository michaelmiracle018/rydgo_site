import React from "react";
import { Link } from "react-router-dom";
import "./restaurantbanner.scss";
import RestaurantBannerImage from "../../../../assets/images/Rectangle15.png";

const RestaurantBanner = () => {
  return (
    <section className="restaurantbanner__container">
      <div>
        <img
          src={RestaurantBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40 flex flex-col">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Restaurant partners, <br /> sign up.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default RestaurantBanner;
