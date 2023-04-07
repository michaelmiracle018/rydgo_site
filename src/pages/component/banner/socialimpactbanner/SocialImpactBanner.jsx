import React from "react";
import { Link } from "react-router-dom";
import "./socialimpactbanner.scss";
import SocialImpactBannerImage from "../../../../assets/images/Rectangle15.png";

const SocialImpactBanner = () => {
  return (
    <section className="socialimpactbanner__container">
      <div>
        <img
          src={SocialImpactBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40 flex flex-col">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Rydgo social, <br /> impact.
          </h3>

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

export default SocialImpactBanner;
