import React, { useState } from "react";
import RydPharmBanner from "../component/banner/rydPharmbanner/RydPharmBanner";
import "../rydpharmPage/rydpharm.scss";
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

const RydPharm = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <RydPharmBanner />

      <div className="flex flex-col justify-center items-center my-20 mx-10">
        <h4 className="text-5xl font-bold">RydPharm</h4>
        <small className="text-xl mt-2 text-[#ff0000]">
          Restock your medicine cabinet and bathroom supplies in no time.
        </small>
      </div>

      <section className="ride__page-container">
        <div className="ride__page-content">
          <div className="bg__image"></div>

          {/* RIDE TAXI CONTENT*/}

          <section className="ride_comfort__container">
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
                      Under the weather? <br />
                      We've got you.
                    </h4>
                    <p className="py-6">
                      We’ll help you recover. From cold and flu, to pain relief
                      medication and more, order what you need from any of the
                      trusted pharmacy brands on the app.
                    </p>
                    <WhiteButton>Order now</WhiteButton>
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

          <section className="slide__content-about">
            {/* TAXI MAX CONTENT*/}

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
                  <HText>Pharmacy, in minutes.</HText>
                  <p className="py-6">
                    From medicine, to skincare and hygiene essentials, find
                    everything you need for you and your family.
                  </p>
                  <RedButton>Order now</RedButton>
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

          <div className="flex justify-center items-center mx-10 my-20">
            <h4 className="text-4xl font-bold">
              Choose from a wide range of trusted brands.
            </h4>
          </div>

          <section className="driver__card-info-container">
            {/* DRIVER CARD CONTENT */}

            <div className="single__card-info">
              <div className="card__img">
                <img src={referral} alt="cash" />
              </div>

              <div className="card__info-text">
                <div>
                  <h4>Pharmacy A</h4>
                  <p>
                    Select from a wide range of options and get your ride within
                    minutes, or schedule one for later.
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
                  <h4>Pharmacy B</h4>
                  <p>
                    Track your ride in real time from the moment a Captain is
                    assigned until you arrive at your destination.
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
                  <h4>Pharmacy C</h4>
                  <p>
                    Card, Rydgo Pay, Apple Pay or cash; you can pay securely on
                    Rydgo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EXPLORE MORE WITH RYDGO CONTENT */}

          <div className="flex justify-center items-center mx-10">
            <h4 className="text-5xl font-bold">Explore more with Rydgo</h4>
          </div>

          <section className="exploreMore__card-info-container">
            {/* EXPLORE MORE WITH RYDGO CARD */}

            <div className="single__card-info drop-shadow-md">
              <div className="card__img">
                <img src={referral} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Eat Anytime</h4>
                  <p>
                    When you end a trip that was paid for using a card or mobile
                    money, Rydgo at one time credits your wallet. Within 24
                    hours, wallet credits will be made available to provide
                    drivers access to their funds. Pertaining to T&C
                  </p>
                </div>
              </div>
            </div>

            <div className="single__card-info drop-shadow-md">
              <div className="card__img">
                <img src={time} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Get Anything</h4>
                  <p>
                    Build up Gh2.00 cedis or further awards for each successful
                    referral, and relying on the promotional term, the rider
                    obtains discounts or ride credits. To prevent drivers from
                    living out of money, Rydgo makes sure that drivers who take.
                  </p>
                </div>
              </div>
            </div>

            <div className="single__card-info drop-shadow-md">
              <div className="card__img">
                <img src={cash} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Pay</h4>
                  <p>
                    Build up Gh2.00 cedis or further awards for each successful
                    referral, and relying on the promotional term, the rider
                    obtains discounts or ride credits.To prevent living drivers
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* MOST ASKED QUESTIONS */}

          <QuestionPage />
        </div>
      </section>
    </>
  );
};

export default RydPharm;
