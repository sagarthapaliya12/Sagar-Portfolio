import React from "react";
import "./header.css";
import CTA from "./Cta";
import profile from "../../assets/sagarprofile.png";
import scroll from "../../assets/scroll-down.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className="container header_container">
				<h5>Hello I'm</h5>
				<h1>SAGAR RAJ THAPALIYA</h1>
				<h5 className="text-light">FrontEnd Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className="profileImg">
					<img src={profile} alt="my picture" />
				</div>

				<a href="#contact" className="scroll_down" title="Scroll Down">
					<img src={scroll} alt="scroll-down" />
				</a>
			</div>
		</header>
	);
};

export default Header;
