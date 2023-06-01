import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Driver from "../components/driverPage/Driver";
import RidersPage from "../components/ridersPage/RidersPage";
import Ride from '../pages/ridePage/Ride';

const RoutesPage = () => {
	return (
		<div>
			<Routes>
				<Route>
					<Route path="/" element={<Home to="/" />}></Route>
					<Route path="/driver" element={<Driver />}></Route>
					<Route path="/rider" element={<RidersPage />}></Route>
					<Route path="/ride" element={<Ride />}></Route>s
				</Route>
			</Routes>
		</div>
	);
};

export default RoutesPage;
