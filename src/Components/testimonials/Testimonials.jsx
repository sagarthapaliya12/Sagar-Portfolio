import React from "react";
import "./testimonial.css";

// core version + navigation, pagination modules:
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

import avt1 from "../../assets/ankit.jpg";
import avt2 from "../../assets/arun.jpg";
import avt3 from "../../assets/mamta.jpg";
import avt4 from "../../assets/sadikshya.jpg";

const data = [
	{
		id: 1,
		avatar: avt1,
		name: "Ankeet Rimal",
		review: "I had a fantastic experience working with Sagar",
	},
	{
		id: 2,
		avatar: avt2,
		name: "Arun pandey",
		review:
			"Sagar is a great client, super easy to work with! Looking forward to working together more in the future!",
	},
	{
		id: 3,
		avatar: avt3,
		name: "Mamta Mainali",
		review: "Great to work with! Interesting design and development ideas.",
	},
	{
		id: 4,
		avatar: avt4,
		name: "Sadikshya Thapa",
		review:
			"Very easy to work with. Finished the job very quickly. Went above and beyond all expectation!",
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Review from Clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="container testimonials_container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}				
				pagination={{ clickable: true }}				
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client_avatar">
								<img src={avatar} alt="client image" />
							</div>
							<h5 className="client_name">{name}</h5>
							<small className="client_review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
