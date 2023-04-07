import React, { useEffect, useState } from "react";
import "../../styles/servicesNav.scss";
import { subLinks } from "../../assets/data";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

const ServicesNav = ({ openServiceNav, setOpenServiceNav }) => {
  const [category, setCategory] = useState("RIDE");
  const [allSubLinks, setAllSubLinks] = useState(subLinks);
  useEffect(() => {
    const filteredLinks = subLinks.filter((item) => item.category === category);
    setAllSubLinks(filteredLinks);
  }, [category]);
  return (
    <section className="section__nav-container">
      <div className="servicesNav__content">
        <div className="servicesNav__wrap">
          <div className="links__content">
            <ul>
              <li
                className={`${category === "RIDE" ? "active__btn" : ""}`}
                onClick={() => setCategory("RIDE")}
              >
                Rides
              </li>
              <li
                className={`${category === "EAT" ? "active__btn" : ""}`}
                onClick={() => setCategory("EAT")}
              >
                Eat
              </li>
              <li
                className={`${category === "GET" ? "active__btn" : ""}`}
                onClick={() => setCategory("GET")}
              >
                Get
              </li>
              <li
                className={`${category === "PAY" ? "active__btn" : ""}`}
                onClick={() => setCategory("PAY")}
              >
                Pay
              </li>
            </ul>
            <div className="line"></div>
            <div className="sub__links-content">
              {allSubLinks.map((link) => (
                <Link to={link.url} key={link.id}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="close__btn">
              <VscChromeClose
                className="icon__btn"
                onClick={() => setOpenServiceNav(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="service__overlay"
        onClick={() => setOpenServiceNav(false)}
      ></div>
    </section>
  );
};

export default ServicesNav;
