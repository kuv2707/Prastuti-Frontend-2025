import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "./Intro.css";
import { useAuth } from "../../contexts/AuthContext";

const Intro = () => {
	const auth = useAuth();
	return (
		<>
			<div className="flex justify-center items-center flex-wrap overflow-hidden IntroContainer">
				<div className="flex flex-col min-h-screen w-full bg-black/10">
					<p className="text-3xl text-center grow md:grow-0 place-content-evenly md:text-left text-white relative sm:mt-10 lg:mt-20 mx-2 min-h-max font-bold p-6 lg:px-12 IntroHeading">
						<TypeAnimation
							sequence={[
								"PRASTUTI'24",
								1000,
								"IIT BHU",
								800,
								"ELECTRICAL (EEE)",
								800,
								"TECH FEST",
								800,
							]}
							speed={30}
							style={{ fontSize: "3rem" }} // Ensured larger heading size
							className="movingText"
							wrapper="span"
							repeat={Infinity}
						/>
					</p>

					<div className="grow md:grow-0 flex flex-col items-center justify-center px-6 lg:px-12">
						<p className="text-center text-lg mx-2 px-6 lg:px-12 py-4 text-white lg:max-w-screen-lg intro IntroPara">
							Electrical Department of IIT (BHU)
							Varanasi presents PRASTUTI, the annual
							technical festival that echoes the
							spirit of innovation and progress! This
							gives you a chance to get your feet wet
							in a wide array of domains, ranging from
							image processing and simulation to web
							development and designing circuits.
							Whether you're a newbie or a
							know-it-all, Prastuti is here to soak
							you in its technical extravaganza. With
							stellar workshops straight from the
							experts, the seeds of understanding
							sprout in your mind, which are further
							watered by the electrifying competitions
							with handsome prizes! This not only
							helps polish your engineering prowess
							but gives you a first-hand experience of
							the modern industry requirements.
							Moreover, there are some iconic Guest
							talks to blow your mind and to keep the
							flames of advancement ignited! So, are
							you ready to reconstruct the era of
							technological renaissance with
							Prastuti'24?
						</p>

						<div className="flex justify-center p-4">
							{!auth.isAuthenticated ? (
								<Link to="/login">
									<button className="linkBtn">
										Register
									</button>
								</Link>
							) : (
								<Link to="/profile">
									<button className="linkBtn">
										Profile
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
