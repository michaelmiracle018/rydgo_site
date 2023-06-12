import React, { useState } from "react";
import AboutUsBanner from "../component/banner/aboutUsbanner/AboutUsBanner";
import "../aboutUsPage/aboutus.scss";
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

const AboutUs = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <AboutUsBanner />

      <div className="my-20 mx-20">
        <h4 className="text-5xl font-bold mb-8">About Us</h4>

        <p className="leading-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
          repudiandae aliquid molestiae temporibus quod sequi qui esse. Soluta
          aliquid voluptas voluptate amet corporis unde iste accusantium labore
          rem non quod id illo doloribus, ipsa quasi numquam illum laboriosam
          explicabo temporibus, cupiditate quam! Eos, mollitia nulla ducimus sit
          alias veniam qui fuga? Blanditiis dolore incidunt obcaecati dolores,
          quam dicta explicabo veniam optio minima, iusto laudantium reiciendis
          rem vero impedit beatae saepe commodi, aspernatur ipsum. Libero magni
          optio maxime eius! Voluptate quam, velit saepe sunt quaerat ipsa!
          Repellendus iure nostrum perferendis, nam ab porro, autem voluptatem
          quae, fugiat culpa nihil. Quod, reprehenderit.
        </p>
      </div>
      {/* 
		
			<div className="flex justify-center items-center my-20 mx-10">
			<h4 className="text-5xl font-bold">Rydgo Taxi</h4>
			</div>
		*/}

      <section className="aboutus__page-container">
        <div className="aboutus__page-content">
          <div className="bg__image"></div>

          {/* RIDE TAXI CONTENT*/}
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
                      A documentary about <br /> Rydgo
                    </h4>
                    <p className="py-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita obcaecati atque sint nisi ut, veniam illo
                      officia, quo voluptatem, nemo ipsum. Ab, in adipisci?
                      Officiis deleniti libero reiciendis tenetur qui?
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
                  <HText>Rydgo leadership</HText>
                  <p className="py-6">
                    Rydgo was started by A, B, C, who wanted to solve the
                    problem of the region’s lack of reliable transportation. In
                    2013, D became Rydgo's third co-founder, and together, over
                    a decade, they led the company into 14 countries, and hired
                    over 12 thousand colleagues to bring Rydgo's purpose to
                    life.
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
                    <h4 className="white__text">Join our journey</h4>
                    <p className="py-6">
                      As we continue to deliver on our purpose, we are looking
                      for ambitious people who share our values to join us on
                      our journey. We want our future Rydgoers to learn and
                      grow, create impact, and be part of an inspiring community
                      while building the region’s every day Super App.
                    </p>
                    <WhiteButton>Find out more</WhiteButton>
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
        </div>
      </section>
    </>
  );
};

export default AboutUs;
