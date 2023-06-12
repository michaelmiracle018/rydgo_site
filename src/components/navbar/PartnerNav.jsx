import React from "react";
import "../../styles/aboutUsSidebar.scss";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const PartnerNav = ({ setOpenPartnerNav }) => {
  return (
    <>
      <section className="aboutUs__nav-container">
        <div className="aboutUs__content">
          <div className="aboutUs__wrap">
            <div className="links__content">
              <ul>
                <li>
                  <Link to="/rydgo-for-business">Corporate packages</Link>
                </li>
                <li>
                  <Link to="/restaurant-partner-signup">
                    Restaurant delivery
                  </Link>
                </li>
                <li>
                  <Link to="/rydgo-express">B2B delivery</Link>
                </li>
                {/* <li>
                  <Link to="/">Pay merchant solutions</Link>
                </li> */}
              </ul>
              <div className="close__btn">
                <VscChromeClose
                  className="icon__btn"
                  onClick={() => setOpenPartnerNav(false)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="service__overlay"
          onClick={() => setOpenPartnerNav(false)}
        ></div>
      </section>
    </>
  );
};

export default PartnerNav;
