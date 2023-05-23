import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const RoutesPage = () => {
	return (
		<div>
			
				<Routes>
					<Route>
						<Route path="/" element={<Home to="/" />}></Route>
					</Route>
				</Routes>
			
		</div>
	);
};

export default RoutesPage;
