import React from "react";
import {Fragment} from "react";
import {Outlet, Link} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../../assets/svg/crown.svg";

import "../navbar/navbar.styles.scss";

const Navbar = () => {
	return (
		<Fragment>
			<div className="navbar">
				<Link className="logo-container" to="/">
					<CrownLogo />
				</Link>

				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navbar;

//TODO: figure out a logo for davari in svg
