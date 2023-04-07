import React from "react";
import "./advert.scss";
import BannerVideo from "../../../assets/videos/banner_video.mp4";

const Advert = () => {
  return (
    <section className="advert__container">
      <video autoPlay={true} loop muted width="500">
        <source id="mp4" src={BannerVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default Advert;
