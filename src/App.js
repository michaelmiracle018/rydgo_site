import React, { useEffect, useState } from "react";

import Layouts from "./components/Layouts";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";
import DriverSignUpNav from "./components/DriverSignUpNav";

const App = () => {
	const [showNav, setShowNav] = useState(false);

	const path = useLocation().pathname;
	const driverPath = path?.substring(1);

	useEffect(() => {
		if (driverPath === "driverSignUp") {
			setShowNav(true);
		}
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
