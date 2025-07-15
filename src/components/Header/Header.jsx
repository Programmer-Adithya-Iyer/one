import React from "react";
import "./Header.css";
import Logo from "../../assets/react.svg";

const Header = () => {
	return (
		<header>
			<nav>
				<img src={Logo} alt="React Logo" width="40px" />
			</nav>
		</header>
	);
};

export default Header;
