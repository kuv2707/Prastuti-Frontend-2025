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
	{ label: "About", hash: "about", path: "/" },
	{ label: "Events", hash: "events", path: "/" },
	{ label: "FAQs", hash: "faqs", path: "/" },
	{ label: "Sponsors", hash: "sponsors", path: "/" },
	{ label: "Team", path: "/team" },
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

	const scrollWithOffset = (el: HTMLElement) => {
		const yCoordinate =
			el.getBoundingClientRect().top + window.pageYOffset;
		window.scrollTo({
			top: yCoordinate - 60,
			behavior: "smooth",
		});
	};

	return (
		<nav className="navbar bg-[#003247] p-4">
			<div className="flex justify-between items-center max-h-[15vh] min-h-[8vh]">
				<div className="flex items-center gap-4">
					<div className="md:hidden" onClick={handleMenu}>
						<IconContext.Provider
							value={{ className: "react-icons" }}
						>
							{mobMenu ? (
								<FaArrowLeft className="cursor-pointer text-white" />
							) : (
								<FaBars className="cursor-pointer text-white" />
							)}
						</IconContext.Provider>
					</div>
					<h1 className="text-white text-2xl font-['Manrope'] font-black">
						<Link smooth to="/#">
							<img
								src={Prastuti24}
								alt="Prastuti'24"
								className="Navlogo w-32"
							/>
						</Link>
					</h1>
				</div>

				<ul className="sm:hidden md:flex items-center gap-6 md:visible">
					{NAV_LINKS.map(({ label, hash, path }) => (
						<li
							key={label}
							className="text-white hover:text-[#4B7CB2] text-lg"
						>
							<Link
								smooth
								to={{
									pathname: path ? path : "",
									hash: hash,
								}}
								scroll={scrollWithOffset}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex gap-4 text-white">
					{SOCIAL_LINKS.map(({ icon, url, label }) => (
						<a
							key={label}
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
						>
							{icon}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
