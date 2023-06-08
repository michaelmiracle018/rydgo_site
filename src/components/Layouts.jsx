import React from "react";
import RoutesPage from "../routes/index";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import ScrollToTop from './ScrollTop/ScrollToTop'

const Layouts = () => {
	return (
		<div>
			<RoutesPage />
			<ScrollToTop />
		</div>
	);
};

export default Layouts;
