import React, { useEffect, useState } from "react";
import "./goStyles.scss";
import { go_content } from "../../assets/data";
import GoContent from "./GoContent";
import "./goStyles.scss";
import { useLocation } from "react-router-dom";

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
						<button
							className={` filter__btn ${
								category === "ride" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("ride")}
						>
							Rides
						</button>
						<button
							className={` filter__btn ${
								category === "taxi" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("taxi")}
						>
							Taxi
						</button>
						<button
							className={` filter__btn ${
								category === "bike" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("bike")}
						>
							Bike
						</button>
						<button
							className={` filter__btn ${
								category === "rental" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("rental")}
						>
							Car Rental
						</button>
						<button
							className={` filter__btn ${
								category === "schoolRide" ? "active__btn" : ""
							}`}
							onClick={() => setCategory("schoolRide")}
						>
							School Ride
						</button>
					</div>
				</div>
				<GoContent items={goItems} />
			</section>
		</>
	);
};

export default GoWrap;
