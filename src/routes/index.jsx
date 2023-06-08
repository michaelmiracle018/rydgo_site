import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Driver from "../components/driverPage/Driver";
import RidersPage from "../components/ridersPage/RidersPage";
import Ride from '../pages/ridePage/Ride';
import Taxi from "../pages/taxiPage/Taxi";
import Bike from "../pages/bikePage/Bike";
import CarRental from "../pages/carRentalPage/CarRental";
import SchoolRIde from "../pages/schoolRidePage/SchoolRide";
import Food from "../pages/foodPage/Food";
import Dine from "../pages/dinePage/Dine";
import Pay from "../pages/payPage/Pay";
import Donate from "../pages/donatePage/Donate";



const RoutesPage = () => {
	return (
		<div>
			<Routes>
				<Route>
					<Route path="/" element={<Home to="/" />}></Route>
					<Route path="/driver" element={<Driver />}></Route>
					<Route path="/rider" element={<RidersPage />}></Route>
					<Route path="/ride" element={<Ride />}></Route>
					<Route path="/taxi" element={<Taxi />}></Route>
					<Route path="/bike" element={<Bike />}></Route>
					<Route path="/rental" element={<CarRental />}></Route>
					<Route path="/schoolride" element={<SchoolRIde />}></Route>
					<Route path="/food" element={<Food />}></Route>
					<Route path="/dineOut" element={<Dine />}></Route>
					<Route path="/rydpay" element={<Pay />}></Route>
					<Route path="/rydgive" element={<Donate />}></Route>
				</Route>
			</Routes>
		</div>
	);
};

export default RoutesPage;
