import React, { useState } from "react";
import B2BBanner from "../component/banner/b2bbanner/B2BBanner";
import "../b2bPage/b2b.scss";
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

const B2B = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <B2BBanner />

      <div className="flex flex-col justify-center items-center my-20 mx-10">
        <h4 className="text-5xl font-bold text-center">RydgoExpress</h4>
        <small className="text-xl mt-2 text-[#ff0000] text-center">
          Rydgo will simplify your business operations with <br /> our reliable
          delivery service, dedicated fleet <br /> and advanced technology
        </small>
      </div>

      <section className="driver__card-info-container">
        {/* DRIVER CARD CONTENT */}

        <div className="single__card-info">
          <div className="card__img">
            <img src={referral} alt="cash" />
          </div>

          <div className="card__info-text">
            <div>
              <h4>Super fast delivery</h4>
              <p>
                We’ll only need 30-40 minutes to get your product into your
                customer’s hands.
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
              <h4>Reliable delivery riders</h4>
              <p>
                Careem’s advanced mapping and dispatching tech finds the
                fastest, cheapest route for you.
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
              <h4>Real-time tracking</h4>
              <p>
                Check in any time to see where your delivery is and when it’ll
                reach your customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="driver__card-info-container">
        {/* DRIVER CARD CONTENT */}

        <div className="single__card-info">
          <div className="card__img">
            <img src={referral} alt="cash" />
          </div>

          <div className="card__info-text">
            <div>
              <h4>We're in 10 cities</h4>
              <p>We operate in 11 cities across Accra, Kumasi and Tamale.</p>
            </div>
          </div>
        </div>

        <div className="single__card-info">
          <div className="card__img">
            <img src={time} alt="cash" />
          </div>
          <div className="card__info-text">
            <div>
              <h4>On demand</h4>
              <p>
                Beat the competition by getting your customers what they want,
                when they want it.
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
              <h4>Round-the-clock support</h4>
              <p>
                ou’ll have 24/7 support and dedicated account managers during
                business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Display our partners here */}

      <div className="flex justify-center items-center mx-10 my-20 mb-11">
        <h4 className="text-4xl font-bold text-center">Our partners</h4>
      </div>

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
                      Input your customer’s <br />
                      order details
                    </h4>
                    <p className="py-6">
                      Include pick-up and drop-off locations, and any other
                      relevant details about the customer’s order
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
                  <HText>We assign a rider</HText>
                  <p className="py-6">
                    After confirming your request, a rider will be assigned to
                    pick up the customer’s order from your chosen location
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
                    <h4 className="white__text">Track your delivery</h4>
                    <p className="py-6">
                      Leverage our technology to track your delivery in
                      real-time!
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

          <div className="flex justify-center items-center mx-10 my-20 mb-11">
            <h4 className="text-4xl font-bold text-center">Let get started</h4>
          </div>

          {/* Business Form Here */}
        </div>
      </section>
    </>
  );
};

export default B2B;
