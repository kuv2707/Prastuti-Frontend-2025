import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Mousewheel,
	Keyboard,
	Autoplay,
} from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
	{
		number: "01",
		info: `Prastuti provides students with the platform and the push to meet the most contemporary demands- renewable energy and computer interface within electronics and electrical engineering.`,
		title: "Head of Department EEE, Dr. R.K. Pandey",
		image: "url(./TestimonialImages/rkpandey.jpg)",
	},
	{
		number: "05",
		info: `With Prastuti an effort will be made to provide a platform to students, innovative industries, startups, and interface sectors to showcase the development and demonstration of respective products.`,
		title: "Mentor Professor, Dr. Soumya R Mohanty",
		image: "url(./TestimonialImages/srm.png)",
	},
	{
		number: "09",
		info: `Prastuti provided me with the platform and opportunity to grow and learn about technology and web development in particular.`,
		title: "Prastuti'22 Participant, Himanshu Kaithal",
		image: "url(./TestimonialImages/himanshu.jpg)",
	},
	{
		number: "09",
		info: `Attending the fest was an unforgettable experience. I had the opportunity to witness cutting-edge technology and network with like-minded individuals.`,
		title: "Prastuti'22 Organizer, Atul Kumar",
		image: "url(./TestimonialImages/atul.jpg)",
	},
	{
		number: "09",
		info: `The Prastuti Technical fest is a fantastic opportunity to learn, grow, and be inspired. I highly recommend it to anyone interested in technology and innovation.`,
		title: "Prastuti'23 Senior Advisor, Shreyash Singh",
		image: "url(./TestimonialImages/shreyash.jpg)",
	},
];

export default function MainTestimonial() {
	return (
		<div style={{ width: "100%", overflow: "hidden" }}>
			<Swiper
				style={{ padding: "30px 60px" }}
				modules={[
					Navigation,
					Mousewheel,
					Keyboard,
					Autoplay,
				]}
				navigation={true}
				mousewheel={{ forceToAxis: true }}
				keyboard={true}
				autoplay={{
					delay: 1000,
					disableOnInteraction: true,
				}}
				simulateTouch={false}
				slidesPerView={3}
				spaceBetween={20}
				className="mySwiper"
			>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide
						key={index}
						style={{ padding: "10px" }}
					>
						<div className="testimonial-card">
							<TestimonialCard {...testimonial} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
