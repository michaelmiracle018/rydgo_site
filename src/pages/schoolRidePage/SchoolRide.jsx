import React, { useState } from "react";
import SchoolRideBanner from "../component/banner/schoolRidebanner/SchoolRideBanner";
import RideBannerImage from "../../assets/images/Rectangle15.png";
import "../schoolRidePage/schoolRide.scss";
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
import GoWrap from "../../components/Go/GoWrap";
import QuestionPage from "../../components/QuestionPage"


const SchoolRide = () => {
  const [isTimeText, setIsTimeText] = useState(false);
  const [isReferralText, setIsReferralText] = useState(false);

  return (
    <>
      <SchoolRideBanner />

      {/* GO CONTENT  */}
      <div>
        <GoWrap />
      </div>
      {/* 

<div className="flex flex-col justify-center items-center my-20 mx-10">
<h4 className="text-5xl font-bold">School Rides</h4>
<small className="text-xl mt-2 text-[#ff0000] text-cen">
With just a tap, you can purchase a School Rides package that’s <br />{" "}
exclusively customised to meet yours and your child’s needs.
</small>
</div>
*/}

      <section className="exploreMore__card-info-container">
        {/* SCHOOLRIDE PACKAGES WITH RYDGO CARD */}

        <div className="single__card-info drop-shadow-md">
          <div className="card__img">
            <img src={referral} alt="cash" />
          </div>
          <div className="card__info-text">
            <div>
              <h4>Book packages</h4>
              <p>40 school rides, starting at just Gh5.00.</p>
            </div>
          </div>
        </div>

        <div className="single__card-info drop-shadow-md">
          <div className="card__img">
            <img src={time} alt="cash" />
          </div>
          <div className="card__info-text">
            <div>
              <h4>Save up to 40%</h4>
              <p>
                Extra savings with no peak charges and regulator fees on package
                rides
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
              <h4>Your kids are in the safest hands</h4>
              <p>
                Real-time tracking and notifications to keep you updated on your
                child’s journey. ...
                {isReferralText && (
                  <div>
                    from out of money, Rydgo makes sure that drivers who take a
                    discount on ride are promptly credited to their wallet
                    tracking the trip. T&C applied.
                  </div>
                )}
                <button
                  className="see__more-btn"
                  onClick={() => setIsReferralText(!isReferralText)}
                >
                  {isReferralText ? "see less" : "see more"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    <h4 className="white__text">Let us take care of it</h4>
                    <p className="py-6">
                      Our newest feature, School Rides, will help you say
                      goodbye to running after your kids in the morning or
                      struggling to arrange pickups and drop-offs.
                    </p>
                    <WhiteButton>Book your ride</WhiteButton>
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
                  <HText>Customised for your child's needs</HText>
                  <p className="py-6">
                    Your child gets premium rides in our Comfort car type with
                    top-rated Captains who prioritise your child’s safety.
                  </p>
                  <RedButton>Book your ride</RedButton>
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
                    <h4 className="white__text">Taxi kids</h4>
                    <p className="py-6">
                      Kids need affordable rides too. Book a car that has a
                      child seat to travel safely with a bundle of joy.
                    </p>
                    <WhiteButton>Book your ride</WhiteButton>
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
                  <h4>Pay</h4>
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
                      {isReferralText ? "see less" : "see more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* MOST ASKED QUESTIONS */}
          <section >
            <QuestionPage />
          </section>
        </div>
      </section>
    </>
  );
};

export default SchoolRide;
