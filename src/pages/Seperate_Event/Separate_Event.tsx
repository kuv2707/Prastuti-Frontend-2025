import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SeperateEvents.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/loader";
import Modal from "../../components/Modal/Modal";

import allEventsData, {
	Event,
	PrastutiEventName,
} from "./../Seperate_Event/Eventdata";
import { useAuth } from "../../contexts/AuthContext";

interface SeparateEventProps {
	nameOfEvent: PrastutiEventName;
}

const Separate_Event = ({ nameOfEvent }: SeparateEventProps) => {
	const eventInfo = allEventsData[nameOfEvent];
	const eventTitle = eventInfo.title;
	console.log(eventTitle);
	const [teamName, setTeamName] = useState<string>("");
	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [loaderText, setLoaderText] = useState<string>("");
	const [modal, setModal] = useState<boolean>(false);
	const auth = useAuth();
	const navigate = useNavigate();
	const handleModal = (value: boolean) => setModal(value);

	const showLoaderWithMessage = (message: string) => {
		setLoaderText(message);
		setShowLoader(true);
	};

	const hideLoader = () => {
		setShowLoader(false);
	};

	const teamRegister = async (name: string) => {
		showLoaderWithMessage("Registering");

		try {
			const response = await axios.post(
				`${
					import.meta.env.VITE_API_URL
				}/api/teamRegistration`,
				{
					user_id: auth.user?.id,
					event_name: eventTitle,
					team_name: name,
				}
			);
			toast.success(response.data.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});

			//Shall I redirect ?????
			// setTimeout(() => {
			//   window.location.replace("/profile")
			// }, 1500)
		} catch (error) {
			toast.error(error.response.data.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		}
		hideLoader();

		
	};
	//  console.log(result._id);
	const register = async () => {
		const { data } = await axios.get(
			`${import.meta.env.VITE_API_URL}/api/user/${
				auth.user?.id
			}`
		);
		if (!data[0].isFormFilled) {
			navigate("/form");
		}
		if (!eventInfo.teamEvent) {
			try {
				showLoaderWithMessage("Registering");
				const response = await axios.post(
					`${
						import.meta.env.VITE_API_URL
					}/api/soloRegistration`,
					{
						user_id: auth.user?.id,
						event_name: eventTitle,
					}
				);
				hideLoader();
				toast.success(response.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				//Shall I redirect ?????
				// setTimeout(() => {
				// 	window.location.replace("/profile");
				// }, 1500);
			} catch (error) {
				hideLoader();
				toast.error(error.response.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			}
		} else {
			handleModal(true);
		}
	};
	return (
		<>
			{showLoader ? <Loader text={loaderText} /> : null}
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<div
				className="min-h-screen min-w-screen m-0 bg-no-repeat bg-cover bg-center"
				style={{
					backgroundImage: `url(${eventInfo.imgpath})`,
				}}
			>
				<div className=" min-h-screen w-full md:w-3/5 lg:w-[45%] bg-black md:opacity-[0.8] opacity-[0.7] text-white p-[3rem]">
					{eventInfo.title === "Recognizance" && (
						<div
							dangerouslySetInnerHTML={{
								__html: eventInfo.sponsorInfo,
							}}
						/>
					)}
					<h1 className="font-bold text-3xl md:text-2xl mt-7 mb-1 font-[Poppins]">
						{eventInfo.title}
					</h1>
					<h2 className="md:text-xl xl:text-2xl mb-3 text-[#29ffff] font-[Poppins] text-lg">
						{eventInfo.subtitle}
					</h2>
					<p className="md:text-md xl:text-lg text-justify font-[Nunito] text-md mb-4">
						{eventInfo.eventInfo}
					</p>
					{eventInfo.bullets && (
						<ul className="md:text-md xl:text-lg text-justify font-[Nunito] text-md bullet-list">
							{eventInfo.bullets.map((bullet) => (
								<li>{bullet}</li>
							))}
						</ul>
					)}
					{eventInfo.links && (
						<>
							<p>Important Links:</p>
							<ul className="md:text-md xl:text-lg text-justify font-[Nunito] text-md bullet-list">
								{eventInfo.links.map((link) => (
									<li>
										<a
											href={link.href}
											className="text-blue-500"
										>
											{link.text}
										</a>
									</li>
								))}
							</ul>
						</>
					)}
					<div className="flex justify-between">
						<h3 className="md:text-md xl:text-lg text-justify font-[Nunito] text-md">
							Participants :{" "}
							<span>
								{eventInfo.participants ?? 0}
							</span>
						</h3>
						{eventInfo.title === "Recognizance" && (
							<div
								style={{
									fontSize: "1.2rem",
									fontWeight: "normal",
									color: "#C9CDD3",
								}}
							>
								{eventInfo.prize ?? "Prize"}
							</div>
						)}
					</div>
					{auth.isAuthenticated ? (
						<button
							onClick={register}
							className="mt-8 border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#d5d8d8] hover:text-black font-Catamaran
                  "
						>
							Register
						</button>
					) : (
						<Link to="/login">
							<button
								className="mt-8 border-2 border-[white] px-10 py-3 rounded-3xl hover:bg-[#d5d8d8] hover:text-black font-Catamaran
                  "
							>
								Register
							</button>
						</Link>
					)}
					<div className="conduct">
						{" "}
						{/* <a
              href="https://github.com/Prastuti-Fest-IIT-BHU/Prastuti-Frontend-2023/blob/main/public/code_of_conduct.md"
              target="_blank"
              rel="noreferrer"
            >
              Code of Conduct
            </a> */}
					</div>
				</div>
			</div>
			<Modal modal={modal} handleModal={handleModal}>
				<div className="flex flex-col rounded-md">
					<label htmlFor="user-team" className="p-2">
						Please enter your team name that you have
						created in profilepage
					</label>
					<input
						onChange={(e) =>
							setTeamName(e.target.value)
						}
						id="user-team"
						type="text"
						className="p-2"
						placeholder="TeamName"
					></input>
					<button
						className="p-2 flex  justify-end"
						onClick={() => {
							handleModal(false);
							teamRegister(teamName);
						}}
					>
						Submit
					</button>
				</div>
			</Modal>
		</>
	);
};
export default Separate_Event;
