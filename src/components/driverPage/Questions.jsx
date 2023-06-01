import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "../../styles/quesstions.scss";
const Question = ({ title, info, subInfo }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="questions__wrap">
			<header>
				<h4>{title}</h4>
				<button className="btn__wrap" onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && (
				<div>
					<p>{info}</p>
					<p>{subInfo}</p>
				</div>
			)}
		</article>
	);
};

export default Question;
