import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/routes/home/Home";

const App = () => {
	const Shop = () => {
		return <h1>Hello shop page</h1>;
	};
	return (
		<Routes>
			<Route path="/home" element={<Home />}>
				<Route path="/shop" element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
