import React, { useEffect, useState } from "react";
import "./goStyles.scss";
import { go_content } from "../../assets/data";
import GoContent from "./GoContent";
import "./goStyles.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const GoWrap = () => {
	const [goItems, setGoItems] = useState(go_content);
	const [category, setCategory] = useState("ride");

	const location = useLocation().pathname;
	const path = location?.substring(1);

	useEffect(() => {
		const filteredItems = go_content.filter(
			(item) => item.category === category,
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
					<h2>GO</h2>
				</div>
				<div className="">
					<div className="go__btn-container">
						<NavLink
							to="/ride"
							className={` filter__btn ${
								category === "ride" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("ride")}
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
							Taxi
						</NavLink>
						<NavLink
							to="/bike"
							className={` filter__btn ${
								category === "bike" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("bike")}
						>
							Bike
						</NavLink>
						<NavLink
							to="/rental"
							className={` filter__btn ${
								category === "rental" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("rental")}
						>
							Car Rental
						</NavLink>
						<NavLink
							to="/schoolRide"
							className={` filter__btn ${
								category === "schoolRide" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("schoolRide")}
						>
							School Ride
						</NavLink>
					</div>
				</div>
				<GoContent items={goItems} />
			</section>
		</>
	);
};

export default GoWrap;
