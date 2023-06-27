import React, { useEffect, useState } from "react";

import Layouts from "./components/Layouts";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";
import DriverSignUpNav from "./components/driverSignUpComponent/DriverSignUpNav";

const App = () => {
	const [showNav, setShowNav] = useState(false);
	const [showTopBtn, setShowTopBtn] = useState(false);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	

	const path = useLocation().pathname;
	const driverPath = path?.substring(1);

	useEffect(() => {
		if (driverPath === "driverSignUp") {
			setShowNav(true);
		}
	}, [path]);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
		goToTop()
		return () => window.addEventListener("scroll", null);
	}, [path]);

	return (
		<div>
			{!showNav ? <Navbar /> : <DriverSignUpNav />}
			<Layouts />
			<Footer />
		</div>
	);
};

export default App;
