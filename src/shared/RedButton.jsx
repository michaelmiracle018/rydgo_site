import React from "react";
const RedButton = ({ children }) => {
	return (
		<div>
			<button className="red__btn">
				{children}
			</button>
		</div>
	);
};

export default RedButton;
