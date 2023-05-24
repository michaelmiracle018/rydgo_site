import React, { useEffect, useState } from "react";
import subLinks from "../../assets/data";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

const ServicesSidebar = () => {
	const [category, setCategory] = useState("GO");
	const [allSubLinks, setAllSubLinks] = useState(subLinks);
	useEffect(() => {
		if (category === "GO") {
			const filteredLinks = subLinks.filter((item) => item.category === "GO");
			setAllSubLinks(filteredLinks);
		}

		if (category === "EAT") {
			const filteredLinks = subLinks.filter((item) => item.category === "EAT");
			setAllSubLinks(filteredLinks);
		}

		if (category === "GET") {
			const filteredLinks = subLinks.filter((item) => item.category === "GET");
			setAllSubLinks(filteredLinks);
		}
		if (category === "PAY") {
			const filteredLinks = subLinks.filter((item) => item.category === "PAY");
			setAllSubLinks(filteredLinks);
		}
	}, [category]);

	return (
		<div className="service__sm-screen">
			<div className="links__content">
				<ul>
					<li
						className={` ${category === "GO" ? "active__btn" : ""}`}
						onClick={() => setCategory("GO")}
					>
						Go
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
