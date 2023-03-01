import React from "react";
import CategoryItem from "../categoryItem/CategoryItem";
import "./directory.styles.scss";

const Directory = ({categories}) => {
	return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem category={category} />
			))}
		</div>
	);
};

export default Directory;
