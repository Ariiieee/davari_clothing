import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import Home from "./routes/home/home.jsx";

const App = () => {
	const Navigation = () => {
		return (
			<div>
				<div>
					<h1>This navigation</h1>
				</div>
				<Outlet />
			</div>
		);
	};
	const Shop = () => {
		return <div>This is a shop</div>;
	};
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
