import React, { useState, useEffect, JSX } from "react";
import "./profilecss.css";
import ProfileTeam from "./profileteam";
import ProfileRequest from "./Profilerequest";
import ProfileEvent from "./profileevent";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Loader from "../../components/Loader/loader";
import {
	emptyUser,
	useAuth,
	User,
} from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profilepage = () => {
	const [addclass, setaddclass] = useState([
		"onclicknav",
		"",
		"",
	]);
	const [team, setteam] = useState(null);
	const [event, setevent] = useState(null);
	const [requests, setRequests] = useState(null);
	const [dbUser, setDbUser] = useState({});
	const [currentTabValue, setCurrentTabValue] =
		useState<JSX.Element>();
	const [formFilled, setFormFilled] = useState(null);
	const [showLoader, setShowLoader] = useState(false);
	const [loaderText, setLoaderText] = useState("");
	const [eventLinks, setEventLinks] = useState<
		Record<string, string>
	>({});
	const auth = useAuth();
	const navigate = useNavigate();

	const showLoaderWithMessage = (message: string) => {
		setLoaderText(message);
		setShowLoader(true);
	};

	const hideLoader = () => {
		setShowLoader(false);
	};

	function handleevent(data) {
		if (data === 0) {
			const input = ["onclicknav", "", ""];
			setaddclass(input);
		}
		if (data === 1) {
			const input = ["", "onclicknav", ""];
			setaddclass(input);
		}
		if (data === 2) {
			const input = ["", "", "onclicknav"];
			setaddclass(input);
		}
	}
	useEffect(() => {
		if (auth.isAuthenticated) {
			const gettingData = async () => {
				showLoaderWithMessage("Fetching Details");
				console.log(auth.user);
				const { data: dbusr } = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/user/${
						auth.user?.id
					}`
				);
				console.log(dbusr);
				const dbUser = dbusr[0];
				const datas = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/events`
				);
				console.log(datas, dbUser);
				const links: Record<string, string> = {};

				datas.data.events.map(
					// todo: db event type
					(data: { Name: string }, index) => {
						// console.log(data);
						links[data.Name] = data.whatsappLink;
					}
				);
				// console.log(links);

				setEventLinks(links);

				setDbUser(dbUser);
				setteam(dbUser.Teams);
				setFormFilled(dbUser.isFormFilled);
				setevent(dbUser.Events_Participated);
				setCurrentTabValue(
					<ProfileEvent
						event={dbUser.Events_Participated}
						team={dbUser.Teams}
						waLink={links}
					/>
				);
				setRequests(dbUser.Pending_Requests);
				hideLoader();
			};

			gettingData();
			const interval = setInterval(() => {
				auth.logout();
			}, 6000000);
			return () => clearInterval(interval);
		} else {
			window.location.replace("/");
		}
	}, []);

	return (
		<>
			{showLoader ? <Loader text={loaderText} /> : null}
			<div className="profilecontainer">
				<div className="page px-0 md:px-10 z-10">
					<div
						id="back-card"
						className="md:rounded-b-xl h-[160px] bg-no-repeat bg-cover bg-center"
						style={{
							backgroundImage: `url("/profile/firewatchbg.png")`,
						}}
					>
						<div className="min-w-full md:rounded-b-xl h-[160px] -mb-4 bg-black/60"></div>
					</div>

					<div className="myprofile -mt-12 flex flex-col md:flex-row">
						<div className="profilechild imgprofile">
							<img
								className="imgprofile"
								src={dbUser.Profile_Photo}
								alt="user"
							/>
						</div>
						<div className="profilechild">
							<div className="Prodetails text-3xl font-bold text-black-900">
								{dbUser.Name}
							</div>
							<div className="Prodetails hidden md:flex text-l font-normal text-black-900">
								{dbUser.email_id}
							</div>
						</div>
					</div>
				</div>
				<div></div>
				<div className="pb-2 m-2 flex flex-col lg:items-center lg:flex-row lg:px-10">
					<div className="about-user lg:min-h-[40vh] m-2 p-2 bg-sky-50 rounded-2xl flex flex-col lg:w-4/12">
						<p className="about-header text-center">
							About
						</p>
						<hr className="Phr" />
						<div className="user-details">
							<p className="profile-name text-center lg:text-start break-words text-xl p-1 ">
								{dbUser.Name}
							</p>
							<p className="profile-email text-center lg:text-start break-words text-l p-1 ">
								{dbUser.email_id}
							</p>
							<p className="profile-contact text-center lg:text-start break-words text-l p-1 ">
								+91{dbUser.Phone}
							</p>
						</div>
						<div className="sign-out-btn  flex justify-center">
							<button
								className="link_404"
								onClick={() => {
									auth.logout();
									navigate("/");
								}}
							>
								Sign Out
							</button>
						</div>
					</div>

					<div className="dynamic-content w-[100%] sm:m-2 min-h-[60vh] bg-sky-50 rounded-2xl  lg:w-8/12">
						<div className="profilenav flex">
							<div
								className={`Pnavchild px-4 ${addclass[0]}`}
								onClick={() => {
									setCurrentTabValue(
										<ProfileEvent
											event={event}
											team={team}
											waLink={eventLinks}
										/>
									);
									handleevent(0);
								}}
							>
								Events
							</div>
							<div
								className={`Pnavchild px-4 ${addclass[1]}`}
								onClick={() => {
									setCurrentTabValue(
										<ProfileTeam
											team={team}
											data={formFilled}
										/>
									);
									handleevent(1);
								}}
							>
								Teams
							</div>
							<div
								className={`Pnavchild px-4 ${addclass[2]}`}
								onClick={() => {
									setCurrentTabValue(
										<ProfileRequest
											request={requests}
											team={team}
										/>
									);
									handleevent(2);
								}}
							>
								Requests
							</div>
						</div>
						<hr className="Phr" />
						{currentTabValue}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Profilepage;
