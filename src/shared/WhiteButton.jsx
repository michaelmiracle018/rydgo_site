import React from "react";

const WhiteButton = ({children}) => {
	return (
		<div>
			<button className="white__btn cursor-pointer">{children}</button>
		</div>
	);
};

export default WhiteButton;
