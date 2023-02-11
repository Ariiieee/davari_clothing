import React from "react";
import CategoryItem from "../catergoryItem/CategoryItem";
import "../directory/directory.styles.scss";

const Directory = ({categories}) => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryItem category={category} />
			))}
		</div>
	);
};

export default Directory;
