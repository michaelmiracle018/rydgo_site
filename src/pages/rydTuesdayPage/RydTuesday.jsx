import React, { useState } from "react";
import RydTuesdayBanner from "../component/banner/rydTuesdaybanner/RydTuesdayBanner";
import "../rydTuesdayPage/rydtuesday.scss";
import HText from "../../shared/HText";
import RedButton from "../../shared/RedButton";
import WhiteButton from "../../shared/WhiteButton";
import ComfortCareImage from "../../assets/images/comfort.png";
import ExecutiveCarImage from "../../assets/images/executive.png";
import MaxCarImage from "../../assets/images/max.png";
import car1 from "../../assets/images/hyundai_PNG11217 1.png";
import car2 from "../../assets/images/red-hyundai-car-png-15 2.png";
import { motion } from "framer-motion";
import { imageAnimate } from "../../animations";
import cash from "../../assets/icons/CARD.png";
import time from "../../assets/icons/24-7.png";
import referral from "../../assets/icons/REFERRAL.png";
import QuestionPage from "../../components/QuestionPage";

const RydTuesday = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <RydTuesdayBanner />

      <div className="flex flex-col justify-center items-center my-20 mx-10">
        <h4 className="text-xl sm:text-4xl font-bold text-center ">
          Most members save Gh200+ cedis monthly <br /> with Rydgo Tuesday
        </h4>
        <small className="text-xl mt-2 text-[#ff0000]">
          Enjoy unlimited promotions on Rydgo Tuesdays on rides, food and
          groceries, dining out, plus more
        </small>
      </div>

      <section className="rydtuesday__page-container">
        <div className="rydtuesday__page-content">
          <div className="bg__image"></div>

          {/* RIDE COMFORT CONTENT*/}

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
                      src={ComfortCareImage}
                      alt="comfortCar"
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
                      Instant 10% back on 10 rides
                    </h4>
                    <p className="py-6">
                      On Hala Taxi & rides, credited to your Careem Pay wallet
                    </p>
                    <WhiteButton>Subscribe now</WhiteButton>
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
            {/* Rydgo Tueday CONTENT*/}

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
                  <HText>No delivery fee on food</HText>
                  <p className="py-6">
                    On McDonald’s, Starbucks & 5,000+ restaurants
                  </p>
                  <RedButton>Subscibe now</RedButton>
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
                  <img src={ExecutiveCarImage} alt="executiveCar" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* RIDE MAX CONTENT*/}

          <section className="ride_max__container">
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
                      src={MaxCarImage}
                      alt="maxCar"
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
                      No delivery fee on Quik groceries and shops
                    </h4>
                    <p className="py-6">On unlimited orders</p>
                    <WhiteButton>Subscribe now</WhiteButton>
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
            {/* Rydgo Tueday CONTENT*/}

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
                  <HText>15% - 30% off on DineOut</HText>
                  <p className="py-6">On 100+ restaurants</p>
                  <RedButton>Subscibe now</RedButton>
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
                  <img src={ExecutiveCarImage} alt="executiveCar" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Dicount Card CONTENT */}

          {/* <div className="flex justify-center items-center mx-10 mt-20">
            <h4 className="text-5xl font-bold">Explore more with Rydgo</h4>
          </div> */}

          <section className="exploreMore__card-info-container">
            {/* Dicount Card Rydgo */}

            <div className="single__card-info drop-shadow-md">
              <div className="card__img">
                <img src={referral} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>10% off on laundry</h4>
                  <p>On unlimited orders</p>
                </div>
              </div>
            </div>

            <div className="single__card-info drop-shadow-md">
              <div className="card__img">
                <img src={time} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>20% off on home cleaning</h4>
                  <p>On unlimited bookings</p>
                </div>
              </div>
            </div>

            <div className="single__card-info drop-shadow-md">
              <div className="card__img">
                <img src={cash} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Priority Support</h4>
                  <p>Directly from our top agents</p>
                </div>
              </div>
            </div>
          </section>

          {/* EXPLORE MORE WITH RYDGO CONTENT */}

          <div className="flex justify-center items-center mx-10 mt-20">
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
                    living out of money, Rydgo makes sure that drivers who
                    take...
                    {isTimeText && (
                      <div>
                        a discount on ride are promptly credited to their wallet
                        tracking the trip. T&C applied.
                      </div>
                    )}
                    <button
                      className="see__more-btn"
                      onClick={() => setIsTimeText(!isTimeText)}
                    >
                      {isTimeText ? "see less" : "see more"}
                    </button>
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
                  <h4>Make Payment</h4>
                  <p>
                    Build up Gh2.00 cedis or further awards for each successful
                    referral, and relying on the promotional term, the rider
                    obtains discounts or ride credits.To prevent living drivers
                    ...
                    {isReferralText && (
                      <div>
                        from out of money, Rydgo makes sure that drivers who
                        take a discount on ride are promptly credited to their
                        wallet tracking the trip. T&C applied.
                      </div>
                    )}
                    <button
                      className="see__more-btn"
                      onClick={() => setIsReferralText(!isReferralText)}
                    >
                      {isTimeText ? "see less" : "see more"}
                    </button>
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

export default RydTuesday;
