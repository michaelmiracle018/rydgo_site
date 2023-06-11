import React from "react";
import { Route, Routes } from "react-router-dom";

//HOME / LANDING Page Route
import Home from "../pages/Home";

//DRIVER and RIDER Route Pages
import Driver from "../components/driverPage/Driver";
import RidersPage from "../components/ridersPage/RidersPage";

//RIDE Routes Pages
import Ride from "../pages/ridePage/Ride";
import Taxi from "../pages/taxiPage/Taxi";
import Bike from "../pages/bikePage/Bike";
import CarRental from "../pages/carRentalPage/CarRental";
import SchoolRIde from "../pages/schoolRidePage/SchoolRide";
import DriverSignUp from "../pages/driverSignUp/DriverSignUp";

//EAT Routes Pages
import Dine from "../pages/dinePage/Dine";
import Food from "../pages/foodPage/Food";

//PAY Routes Pages
import Pay from "../pages/payPage/Pay";
import Donate from "../pages/donatePage/Donate";

//GET Routes Pages
import RydGro from "../pages/rydgroPage/RydGro";
import RydSuper from "../pages/rydsuperPage/RydSuper";
import RydDrop from "../pages/ryddropPage/RydDrop";
import RydSparkle from "../pages/rydsparklePage/RydSparkle";
import RydLaundry from "../pages/rydlaundryPage/RydLaundry";
import RydWell from "../pages/rydwellPage/RydWell";
import RydPharm from "../pages/rydpharmPage/RydPharm";
import RydTour from "../pages/rydtourPage/RydTour";

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
          <Route path="/schoolRide" element={<SchoolRIde />}></Route>
          <Route path="/driverSignUp" element={<DriverSignUp />}></Route>
          <Route path="/rydpay" element={<Pay />}></Route>
          <Route path="/rydgive" element={<Donate />}></Route>
          <Route path="/dineout" element={<Dine />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/rydgro" element={<RydGro />}></Route>
          <Route path="/rydsuper" element={<RydSuper />}></Route>
          <Route path="/ryddrop" element={<RydDrop />}></Route>
          <Route path="/rydsparkle" element={<RydSparkle />}></Route>
          <Route path="/rydlaundry" element={<RydLaundry />}></Route>
          <Route path="/rydwell" element={<RydWell />}></Route>
          <Route path="/rydpharm" element={<RydPharm />}></Route>
          <Route path="/rydtour" element={<RydTour />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesPage;
