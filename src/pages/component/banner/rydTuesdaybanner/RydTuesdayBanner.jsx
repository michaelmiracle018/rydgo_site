import React from "react";
import { Link } from "react-router-dom";
import "./rydTuesdaybanner.scss";
import RydTuesdayBannerImage from "../../../../assets/images/Rectangle15.png";

const RydTuesdayBanner = () => {
  return (
    <section className="rydTuesdaybanner__container">
      <div>
        <img
          src={RydTuesdayBannerImage}
          alt="donateImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-40">
          <h3 className="text-6xl text-white italic font-bold flex justify-start">
            Rydgo Tuesdays
          </h3>

          <Link to="">
            <button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
              Subcribe now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RydTuesdayBanner;
