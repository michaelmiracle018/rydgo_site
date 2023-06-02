import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import cash from "../assets/icons/ICONs-31.png";

import "../styles/quesstions.scss";

const Question = ({ title, info, img }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="questions__wrap">
			<header>
				<div className="flex items-center justify-center gap-2">
					<h4>{title}</h4>
				</div>
				<button className="btn__wrap" onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && (
				<div >
					<p>{info}</p>
				</div>
			)}
		</article>
	);
};

export default Question;
