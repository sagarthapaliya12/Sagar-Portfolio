import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const HeaderSocials = () => {
	return (
		<div className="header_socials">
			<a href="https://www.linkedin.com/in/sagar-raj12/" target="_blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com/sagarthapaliya12" target="_blank">
				<FaGithubAlt />
			</a>
			<a href="https://www.instagram.com/arko.sagar/" target="_blank">
				<AiFillInstagram />
			</a>
		</div>
	);
};

export default HeaderSocials;
