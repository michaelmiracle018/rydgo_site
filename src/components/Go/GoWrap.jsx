import React, { useEffect, useState } from "react";
import "./goStyles.scss";
import { go_content } from "../../assets/data";
import GoContent from "./GoContent";
import "./goStyles.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const GoWrap = () => {
  const [goItems, setGoItems] = useState(go_content);
  const [category, setCategory] = useState("rides");

  const location = useLocation().pathname;
  const path = location?.substring(1);
  console.log(location);

  useEffect(() => {
    const filteredItems = go_content.filter(
      (item) => item.category === category
    );
    setGoItems(filteredItems);
  }, [category]);

  useEffect(() => {
    if (path) {
      setCategory(path);
    }
  }, [path]);

  return (
		<>
			<section className="go__wrap-container">
				<div className="go__title">
					<h2>RIDE</h2>
				</div>
				<div className="">
					<div className="go__btn-container">
						<NavLink
							to="/rides"
							className={` filter__btn ${
								category === "rides" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("rides")}
						>
							Rides
						</NavLink>
						<NavLink
							to="/taxi"
							className={` filter__btn ${
								category === "taxi" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("taxi")}
						>
							Rydgo Student
						</NavLink>
						<NavLink
							to="/bike"
							className={` filter__btn ${
								category === "bike" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("bike")}
						>
							Rydgo Extra
						</NavLink>
						<NavLink
							to="/rental"
							className={` filter__btn ${
								category === "rental" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("rental")}
						>
							Rydgo Taxi
						</NavLink>
						<NavLink
							to="/schoolRide"
							className={` filter__btn ${
								category === "schoolRide" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("schoolRide")}
						>
							Rydgo Rental
						</NavLink>
					</div>
				</div>
				<GoContent items={goItems} />
			</section>
		</>
	);
};

export default GoWrap;
