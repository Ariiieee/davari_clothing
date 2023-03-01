import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.jsx";
import Navbar from "./components/routes/navbar/Navbar.jsx";

const App = () => {
	const Shop = () => {
		return <div>This is a shop</div>;
	};
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
