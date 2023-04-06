import React from "react";
import "./about.css";
import me from "../../assets/profilesagar.jpg";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About ME</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img src={me} alt="my image" />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<article className="about_card">
							<FaAward />
							<h5>Experience</h5>
							<small>3+ Years Working</small>
						</article>

						<article className="about_card">
							<FiUsers />
							<h5>Clients</h5>
							<small>Searching</small>
						</article>

						<article className="about_card">
							<VscFolderLibrary />
							<h5>Projects</h5>
							<small>7+ Completed</small>
						</article>
					</div>
					<p>
						As an experienced front-end web developer with over 3 years of
						experience, I have a strong understanding of web development
						technologies such as HTML, CSS, JavaScript, ReactJS, and Figma.
						Throughout my career, I have completed 7 successful projects,
						demonstrating my expertise in developing visually appealing and
						responsive websites. Currently, I am actively seeking new clients
						through LinkedIn and freelancing platforms to showcase my skills and
						provide my clients with a seamless web development experience. With
						a passion for creating intuitive and user-friendly websites, I am
						confident in my ability to exceed your expectations and deliver
						high-quality work.
					</p>

					<a href="#contact" className="btn btn-primary">
						Lets Connect
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
