import React, { useState } from "react";
import CorporateBanner from "../component/banner/corporatebanner/CorporateBanner";
import "../corporatePage/corporate.scss";
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

const Corporate = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <CorporateBanner />

      <div className="flex flex-col justify-center items-center my-20 mx-10">
        <h4 className="text-5xl font-bold">RydgoBusiness</h4>
        {/* <small className="text-xl mt-2 text-[#ff0000]">
          Ghana’s most affordable ride.
        </small> */}
      </div>

      <section className="driver__card-info-container">
        {/* DRIVER CARD CONTENT */}

        <div className="single__card-info">
          <div className="card__img">
            <img src={referral} alt="cash" />
          </div>

          <div className="card__info-text">
            <div>
              <h4>Reliability</h4>
              <p>
                Our Captains are always on time, and our call center is
                available 24/7.
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
              <h4>Quality</h4>
              <p>
                Captains who will always make you feel at home in your city, or
                theirs.
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
              <h4>Safety</h4>
              <p>Your team’s safety is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ride__page-container">
        <div className="ride__page-content">
          <div className="bg__image"></div>

          {/* CORPORATE CONTENT*/}
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
                      Your corporate rides, sorted.
                    </h4>
                    <p className="py-6">
                      Book a ride on demand or pre-book online for extra peace
                      of mind and ultimate convenience. From meetings to
                      interviews or business trips, Rydgo for Business is the
                      ultimate corporate travel companion to get your team where
                      they need to be, on time and in style.
                    </p>
                    {/* <WhiteButton>Book your ride</WhiteButton> */}
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
                  <HText>Travel expensing has never been easier.</HText>
                  <p className="py-6">
                    View your total travel spend, all upcoming bookings, and
                    settle your account at your own convenience through a
                    variety of billing and payment methods.
                  </p>
                  {/* <RedButton>Book your ride</RedButton> */}
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

          {/* TAXI KIDZ CONTENT*/}

          <section className="ride_max__container" id="Taxi Kids">
            <div className="center__item">
              <div className="ride_max__wrap">
                <motion.div
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ staggerChildren: 0.5 }}
                  variants={imageAnimate}
                >
                  <div className="ride_max__img">
                    <img
                      src={TaxikidsImage}
                      alt="taxiKids"
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
                  <div className="ride_max__text ">
                    <h4 className="white__text">
                      We’ll take care of your ride.
                    </h4>
                    <p className="py-6">
                      You’ve got enough on your mind. Our Captains are experts
                      in getting around the busy highways and narrow streets of
                      the region, to make sure you get to where you need to be.
                    </p>
                    {/* <WhiteButton>Book your ride</WhiteButton> */}
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
                  <HText>
                    For the business <br /> traveler in you.
                  </HText>
                  <p className="py-6">
                    Handshakes over breakfast in Ghana. Coffee over lunch in
                    Accra. When you travel across the region, Rydgo Business has
                    got all your transportation needs covered, from city to
                    city. All you have to do is sit back, and focus on what’s
                    important – your comfort. Keep your business going wherever
                    you are thanks to our regional coverage.
                  </p>
                  {/* <RedButton>Book your ride</RedButton> */}
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

          <div className="flex justify-center items-center mx-10 my-20 mb-11">
            <h4 className="text-4xl font-bold text-center">
              Let one of our sales professionals <br /> connect with you!
            </h4>
          </div>

          {/* Business Form */}
        </div>
      </section>
    </>
  );
};

export default Corporate;
