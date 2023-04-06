import React from "react";
import "./footer.css";

import logo from "../../assets/hd-new-logo.png";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer_logo">
				<img src={logo} alt="Logo" className="footer-logo" />
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer_socials">
				<a href="https://www.instagram.com/arko.sagar/" target="_blank">
					<AiFillInstagram />
				</a>
				<a href="https://www.facebook.com/raj.sagar.0511/" target="_blank">
					<BsFacebook />
				</a>
				<a href="https://www.linkedin.com/in/sagar-raj12/" target="_blank">
					<BsLinkedin />
				</a>
			</div>
			<div className="footer_copyright">
				<small>&copy; Sagar Raj Thapaliya. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
