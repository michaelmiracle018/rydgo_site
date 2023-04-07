import React, { useState } from "react";
import SocialImpactBanner from "../component/banner/socialimpactbanner/SocialImpactBanner";
import "../socialimpactPage/socialimpact.scss";
import HText from "../../shared/HText";
import RedButton from "../../shared/RedButton";
import WhiteButton from "../../shared/WhiteButton";
import TaxidriverImage from "../../assets/images/taxDriver.png";
import TaximaxImage from "../../assets/images/taxiMax.png";
import TaxikidsImage from "../../assets/images/taxiKids.png";
import car1 from "../../assets/images/hyundai_PNG11217 1.png";
import car2 from "../../assets/images/red-hyundai-car-png-15 2.png";
import { motion } from "framer-motion";
import { imageAnimate } from "../../animations";

import cash from "../../assets/icons/CARD.png";
import time from "../../assets/icons/24-7.png";
import referral from "../../assets/icons/REFERRAL.png";
import QuestionPage from "../../components/QuestionPage";

const SocialImpact = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <SocialImpactBanner />

      <div className="my-10 mx-20">
        <h4 className="text-5xl font-bold mb-8">Our social impact</h4>

        <p className="leading-10">
          At the heart of Rydgo’s purpose sits a deep desire to uplift the lives
          of people in our region. It is badly needed, and we are blessed to
          have the opportunity to contribute. Our colleagues and customers have
          supported numerous programmes, including refugee emergency relief
          campaigns in Jordan and Lebanon, accessibility infrastructure building
          in Egypt, mangrove planting in Pakistan, and education for
          underprivileged children in Palestine. In the last three years alone,
          through donations and fundraising, the company has generated more than
          $3.7 million to support development, humanitarian, and empowerment
          initiatives across 10 markets. As a company, we feel responsible for
          our communities’ development and improvement. We find opportunities to
          be of service to people that need it the most, and we hold ourselves
          to a high ethical bar when it comes to business practices.
        </p>
      </div>
      {/* 
		
			<div className="flex justify-center items-center my-20 mx-10">
			<h4 className="text-5xl font-bold">Rydgo Taxi</h4>
			</div>
		*/}

      <section className="socialimpact__page-container">
        <div className="socialimpact__page-content">
          <div className="bg__image"></div>

          <section className="driver__card-info-container">
            {/* DRIVER CARD CONTENT */}

            <div className="single__card-info">
              <div className="card__img">
                <img src={referral} alt="cash" />
              </div>

              <div className="card__info-text">
                <div>
                  <h4>Direct donation</h4>
                  <p>
                    We make it simple for customers to give to a cause they care
                    about, and to donate in honour of a loved one.
                  </p>
                </div>
              </div>
            </div>

            <div className="single__card-info">
              <div className="card__img">
                <img src={time} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Ride and Donate</h4>
                  <p>
                    Our donation car types let you give back, every time you
                    take a ride. A portion of the fare goes to a community in
                    need.
                  </p>
                </div>
              </div>
            </div>

            <div className="single__card-info">
              <div className="card__img">
                <img src={cash} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Impact partnerships</h4>
                  <p>
                    YWe partner with other companies that help us increase our
                    impact by matching and/or adding to customer donations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Donate CONTENT*/}
          <section className="ride_comfort__container" id="Taxi">
            <div className="center__item">
              <div className="ride_comfort__wrap">
                <motion.div
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ staggerChildren: 0.5 }}
                  variants={imageAnimate}
                >
                  <div className="ride_comfort__img">
                    <img
                      src={TaxidriverImage}
                      alt="taxiDriver"
                      style={{ width: "580px", borderRadius: "25px" }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="ride_comfort__text ">
                    <h4 className="white__text">
                      Join us in making a difference
                    </h4>
                    <p className="py-6">
                      We encourage our customers to give to the causes they care
                      about. They can donate via our donations tile on the app,
                      take a dedicated car type where a portion of the proceeds
                      from each ride go to charity and more.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* CAR CONTENT*/}

            <div className="car__image car1">
              <img src={car1} alt="" />
            </div>
            <div className="car__image car2">
              <img src={car2} alt="" />
            </div>
            <div className="car__image car3">
              <img src={car2} alt="" />
            </div>
          </section>

          <section className="slide__content-about" id="Taxi Max">
            {/* Donate CONTENT*/}

            <div className="ride__content center__item">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text__content"
              >
                <div>
                  <HText>
                    We are responsible for <br />
                    our communities
                  </HText>
                  <p className="py-6">
                    Our colleagues are constantly looking for ways to contribute
                    to developing the region. Joining Careem means you will have
                    the chance to volunteer your time and skills to communities
                    in need.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
                variants={imageAnimate}
              >
                <div className="img__wrap">
                  <img src={TaximaxImage} alt="taxiMax" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* =================================== */}

          <section className="driver__card-info-container">
            {/* DRIVER CARD CONTENT */}

            <div className="single__card-info">
              <div className="card__img">
                <img src={referral} alt="cash" />
              </div>

              <div className="card__info-text">
                <div>
                  <h4>Go anywhere</h4>
                  <p>
                    We make it simple for customers to give to a cause they care
                    about, and to donate in honour of a loved one.
                  </p>
                </div>
              </div>
            </div>

            <div className="single__card-info">
              <div className="card__img">
                <img src={time} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Eat anytime</h4>
                  <p>
                    Our donation car types let you give back, every time you
                    take a ride. A portion of the fare goes to a community in
                    need.
                  </p>
                </div>
              </div>
            </div>

            <div className="single__card-info">
              <div className="card__img">
                <img src={cash} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Get anything</h4>
                  <p>
                    YWe partner with other companies that help us increase our
                    impact by matching and/or adding to customer donations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default SocialImpact;
