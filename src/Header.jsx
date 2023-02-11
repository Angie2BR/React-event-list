import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTeamspeak } from "react-icons/fa";

function Header() {
	return (
		<div className="header">
			<p>
				<FaTeamspeak size={60} /> TeamSpeak
			</p>
			<div className="hamburger">
				<GiHamburgerMenu size={65} />
			</div>
		</div>
	);
}

export default Header;
