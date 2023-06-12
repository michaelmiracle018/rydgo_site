import React, { useState } from "react";
import EngineerBanner from "../component/banner/engineerbanner/EngineerBanner";
import "../engineerPage/engineer.scss";
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

const Engineer = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <EngineerBanner />

      <div className="my-10 mx-20">
        <h4 className="text-5xl font-bold mb-8">Engineering at Rydgo</h4>

        <p className="leading-10">
          Rydgo is led by a powerful purpose to simplify and improve lives in
          the Middle East, North Africa and Pakistan. We’re pioneering the
          development of innovative services to aid the mobility of people, the
          mobility of things and the mobility of money. We’re in the driving
          seat as we help to define how technology will shape progress in some
          of the fastest-growing countries in the world. Our teams are building
          tech to meet the needs of the future in areas including, e-commerce,
          technology-enabled logistics, maps, identity, and fintech. We’re well
          placed to solve complex and meaningful challenges at scale. We have
          deep tech expertise, strong regulatory relationships, a local
          presence, and increasingly specialised global teams which are
          structured to operate as autonomous start-ups. Our team of over 600
          engineers and developers are empowered to develop cutting-edge
          technology every day. We believe in supporting and nurturing local
          talent, and through our Rydgo Next Gen programme, we recruit junior
          engineers in Pakistan, Jordan and Egypt for a one-year graduate
          scheme.
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
          {/* ========================================================== */}
          <section className="driver__card-info-container">
            {/* DRIVER CARD CONTENT */}

            <div className="single__card-info">
              <div className="card__img">
                <img src={referral} alt="cash" />
              </div>

              <div className="card__info-text">
                <div>
                  <h4>Core engineering</h4>
                  <p>
                    Join us as we solve some of the most difficult problems that
                    our region faces at scale while driving stellar experiences
                    for our Customers, Captains, Partners and Merchants.
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
                  <h4>Infrastracture</h4>
                  <p>
                    You’ll have the opportunity to focus on enhancing the
                    reliability and service maturity of Careem’s platform with
                    high tolerance to failure that allows dynamic adjustment to
                    demand in real time.
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
                  <h4>Data and AI</h4>
                  <p>
                    You’ll have the opportunity to help Careem strengthen its
                    big data platform and deliver fast, reliable and secure
                    access to data and build a single source of truth with data
                    as a core.
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
                  <h4>Security</h4>
                  <p>
                    The Security team at Careem is responsible for safeguarding
                    the information of Careem’s Customers, Captains and
                    Colleagues from data breaches, unauthorised access, and
                    other disruptive security threats and attacks.
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
                  <h4>Product</h4>
                  <p>
                    The Product team is at the heart of materialising Careem’s
                    mission to simplify and improve lives through our Super App
                    vision.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="single__card-info">
              <div className="card__img">
                <img src={cash} alt="cash" />
              </div>
              <div className="card__info-text">
                <div>
                  <h4>Data and AI</h4>
                  <p>
                    You’ll have the opportunity to help Careem strengthen its
                    big data platform and deliver fast, reliable and secure
                    access to data and build a single source of truth with data
                    as a core.
                  </p>
                </div>
              </div>
            </div> */}
          </section>

          {/* ================================================== =====*/}

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

export default Engineer;
