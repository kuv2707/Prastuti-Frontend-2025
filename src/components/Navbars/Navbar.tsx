import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import {
	BsInstagram,
	BsYoutube,
	BsFacebook,
	BsLinkedin,
	BsGithub,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState } from "react";
import Prastuti24 from "../../assets/prastuti 24.png";

const NAV_LINKS = [
	{ label: "About", hash: "about" },
	{ label: "Events", hash: "events" },
	{ label: "FAQs", hash: "faqs" },
	{ label: "Sponsors", hash: "sponsors" },
	{ label: "Team", hash: "team" },
];

const SOCIAL_LINKS = [
	{
		icon: <BsFacebook />,
		url: "https://www.facebook.com/prastuti.iitbhu",
		label: "Facebook",
	},
	{
		icon: <BsInstagram />,
		url: "https://www.instagram.com/prastuti.iitbhu/",
		label: "Instagram",
	},
	{
		icon: <BsLinkedin />,
		url: "https://www.linkedin.com/company/prastuti/",
		label: "LinkedIn",
	},
	{
		icon: <BsGithub />,
		url: "https://github.com/Prastuti-IIT-BHU",
		label: "Github",
	},
	{
		icon: <BsYoutube />,
		url: "https://www.youtube.com/@prastuti_iitbhu",
		label: "YouTube",
	},
];

const Navbar = () => {
	const [mobMenu, setMobMenu] = useState(false);
	const body = document.body;

	const handleMenu = () => {
		setMobMenu(!mobMenu);
		body.style.overflow = mobMenu ? "auto" : "hidden";
	};

	const scrollWithOffset = (el) => {
		const yCoordinate =
			el.getBoundingClientRect().top + window.pageYOffset;
		window.scrollTo({
			top: yCoordinate - 60,
			behavior: "smooth",
		});
	};

	return (
		<nav className="navbar bg-[#003247]">
			<div className="flex justify-between items-center max-h-[15vh] min-h-[8vh]">
				<div
					className="md:hidden mx-5"
					onClick={handleMenu}
				>
					<IconContext.Provider
						value={{ className: "react-icons" }}
					>
						{mobMenu ? (
							<FaArrowLeft className="cursor-pointer" />
						) : (
							<FaBars className="cursor-pointer" />
						)}
					</IconContext.Provider>
				</div>
				<h1 className="text-white text-2xl font-['Manrope'] font-black px-3 ml-2 drop-shadow-lg">
					<Link smooth to="/#">
						<img
							src={Prastuti24}
							alt="Prastuti'24"
							className="Navlogo"
						/>
					</Link>
				</h1>
				<div className="flex items-center py-3 relative">
					<ul className="hidden md:flex px-2 lg:px-5">
						{NAV_LINKS.map(({ label, hash }) => (
							<li
								key={hash}
								className="px-2 md:px-4 text-white font-['Manrope'] hover:text-[#4B7CB2] text-l"
							>
								<Link
									smooth
									to={{ pathname: "/", hash }}
									scroll={(el) =>
										scrollWithOffset(el)
									}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div
				className={
					mobMenu
						? "md:hidden ease-in-out duration-500 absolute left-0 navMobile bg-[#003247] h-screen w-full z-20 px-5 py-8"
						: "absolute left-[-100%] h-screen ease-in-out duration-500"
				}
			>
				<div className="flex justify-between items-center w-full py-3">
					<ul className="flex px-2 lg:px-5">
						{NAV_LINKS.map(({ label, hash }) => (
							<li
								key={hash}
								className="px-2 md:px-4 text-white hover:text-[#4B7CB2] text-l"
							>
								<Link
									smooth
									to={{ pathname: "/", hash }}
									scroll={(el) =>
										scrollWithOffset(el)
									}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<ul className="flex justify-center py-2">
					{SOCIAL_LINKS.map(({ icon, url, label }) => (
						<li
							key={label}
							className="social-links text-white mx-5 text-l my-4"
						>
							<a href={url}>
								<IconContext.Provider
									value={{
										className: "react-icons",
									}}
								>
									{icon}
								</IconContext.Provider>
								<p className="hidden sm:flex">
									{label}
								</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
