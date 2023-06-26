import React from "react";
import { Link } from "react-router-dom";
import "./b2bbanner.scss";
import B2BBannerImage from "../../../../assets/images/Rectangle15.png";

const B2BBanner = () => {
  return (
    <section className="b2bbanner__container">
      <div>
        <img
          src={B2BBannerImage}
          alt="rideImage"
          width={500}
          className="absolute"
        />

        <div className="text relative pt-28 pl-10 sm:pl-40 flex flex-col">
          <h3 className="text-4xl sm:text-6xl text-white italic font-bold flex justify-start">
            Anything, <br /> Delivered.
          </h3>

          <Link to="">
            <button className="mt-20 bg-white text-red-500 py-3 px-10 font-bold text-lg rounded">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default B2BBanner;
