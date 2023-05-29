import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Driver from "../components/driverPage/Driver";
import RidersPage from "../components/ridersPage/RidersPage";

const RoutesPage = () => {
	return (
		<div>
			<Routes>
				<Route>
					<Route path="/" element={<Home to="/" />}></Route>
					<Route path="/driver" element={<Driver />}></Route>
					<Route path="/rider" element={<RidersPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
};

export default RoutesPage;
