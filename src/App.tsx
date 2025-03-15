import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Register from "./components/Register/Register";

import SeparateEvent from "./pages/Seperate_Event/Separate_Event";

import StickyNav from "./components/Navbars/stickyNav";
import PrastutiTeam from "./components/Team/Teams";
import Error from "./pages/Error/Error";
import Profilepage from "./pages/Profile/profilepage";

// import Loader from "./components/Loader/loader";
import Thankyou from "./pages/Thank_You/Thank_you";

// import Form from "./pages/Form/Form";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/register"
						element={
							<>
								<StickyNav />
								<Register />
							</>
						}
					></Route>
					<Route
						path="/codigo"
						element={
							<>
								<StickyNav />
								<SeparateEvent
									nameOfEvent={"codigo"}
								/>
							</>
						}
					></Route>
					<Route
						path="/hackoverflow"
						element={
							<>
								<StickyNav />
								<SeparateEvent
									nameOfEvent={"hackoverflow"}
								/>
							</>
						}
					></Route>
					<Route
						path="/recognizance"
						element={
							<>
								<StickyNav />
								<SeparateEvent
									nameOfEvent={"recognizance"}
								/>
							</>
						}
					></Route>
					<Route
						path="/simulim"
						element={
							<>
								<StickyNav />
								<SeparateEvent
									nameOfEvent={"simulim"}
								/>
							</>
						}
					></Route>
					<Route
						path="/consilium"
						element={
							<>
								<StickyNav />
								<SeparateEvent
									nameOfEvent={"consilium"}
								/>
							</>
						}
					></Route>
					{/* <Route
          path="/paper-presentation"
          element={
            <>
            <StickyNav />
            <SeparateEvent nameOfEvent={eventData.paperpresetation} />
            </>
            }
            ></Route> */}
					<Route
						path="/thankyou"
						element={<Thankyou />}
					></Route>
					<Route
						path="/oscillion"
						element={
							<>
								<StickyNav />
								<SeparateEvent
									nameOfEvent={"oscillion"}
								/>
							</>
						}
					></Route>
					<Route
						path="/login"
						element={
							<>
								<StickyNav />
								<Register />
							</>
						}
					></Route>
					<Route
						path="/team"
						element={
							<>
								<StickyNav />
								<PrastutiTeam />
							</>
						}
					></Route>
					{/* <Route
					path="/form"
					element={
						<>
            <StaticNav />
            <Form />
						</>
            }
            /> */}
					<Route path="/*" element={<Error />} />
					<Route
						path="/profile"
						element={
							<>
								<StickyNav />
								<Profilepage />
							</>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
