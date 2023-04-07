import React, { useEffect, useState } from "react";
import { subLinks } from "../../assets/data";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

const ServicesSidebar = () => {
  const [category, setCategory] = useState("RIDE");
  const [allSubLinks, setAllSubLinks] = useState(subLinks);
  useEffect(() => {
    const filteredLinks = subLinks.filter((item) => item.category === category);
    setAllSubLinks(filteredLinks);
  }, [category]);

  return (
    <div className="service__sm-screen">
      <div className="links__content">
        <ul>
          <li
            className={` ${category === "RIDE" ? "active__btn" : ""}`}
            onClick={() => setCategory("RIDE")}
          >
            Ride
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
        <div className="sub__links-content">
          {allSubLinks.map((link) => (
            <Link to={link.url} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;
