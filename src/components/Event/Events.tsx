import { Data } from "./Data";
import { Link } from "react-router-dom";
import "./Events.css";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Card() {
	return (
		<div id="events">
			<h1 className="EventHead font-Manrope font-extrabold text-6xl mt-[20px] mb-[10px]">
				Events
			</h1>
			{Data.map((item, index) => (
				<>
					<div
						key={index}
						id="card"
						className="pt-8 pb-12 x  {item.float} sm:m-0"
						data-aos={item.slide}
						data-aos-duration="1000"
						// variants={boxVariant}
						// initial="hidden"
						// whileInView={"visible"}
					>
						<motion.div
							className="p-0 w-full min-h-[41vh] lg:w-4/5 mx-auto shadow-lg flex flex-col rounded-lg hover:shadow-xl"
							style={{
								background:
									"linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)",
							}}
							whileHover={{ scale: 1.05 }}
						>
							<Link
								to={item.path}
								v-for="card in cards"
								className="flex flex-col md:flex-row overflow-hidden
                                    rounded-lg w-100"
							>
								<div className="h-[41vh] w-auto md:w-1/2 ">
									<img
										className="inset-0 h-full w-full object-cover object-center rounded-l-lg"
										alt="event pic"
										src={item.image}
									/>
								</div>

								<div
									className="w-full py-6 px-8 text-gray-800 flex flex-col "
									style={{
										background:
											"linear-gradient(90deg, rgba(219,242,255,1) 0%, rgba(185,250,255,1) 100%)",
									}}
								>
									<h3
										className="text-lg leading-tight truncate mb-2 px-2 py-1"
										style={{
											fontFamily: "Poppins",
											color: "#fff",
											fontSize: "25px",
											textShadow:
												"0 0 10px rgba(0, 115, 230, 1), 0 0 20px rgba(0, 115, 230, 0.8), 0 0 30px rgba(0, 115, 230, 1.0)",
											backgroundColor:
												"#003247",
										}}
									>
										{item.title}
									</h3>
									<p className="mt-2 info">
										{item.information}
									</p>
									<p
										className="text-xl text-gray-700 tracking-wide font-black mt-2"
										style={{
											fontFamily: "Nunito",
											color: "#003247",
										}}
									>
										{item.infoinfo}
									</p>
									<p className="text-base text-gray-700 tracking-wide font-black ">
										{item.team && (
											<span className="">
												{" "}
												Team Event
											</span>
										)}
										{!item.team && (
											<span className="">
												{" "}
												Solo Event
											</span>
										)}
									</p>
								</div>
							</Link>
						</motion.div>
					</div>

					{/* <motion.div
          className="progress"
          style={{
            scaleX,
            position: "fixed",
            left: "0",
            right: "0",
            height: "5px",
            backgroundColor: "#29ffff",
            bottom: "10px",
            zIndex: "10"
          }}
        />  */}
				</>
			))}
		</div>
	);
}

export default Card;
