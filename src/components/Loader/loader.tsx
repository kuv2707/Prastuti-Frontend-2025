import React from "react";
import "./loaderStyles.css";
interface LoaderProps {
	text: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
	return (
		<div className="loader-container">
			<div className="loader-content">
				<h2 className="loader-text text-xl">{text}</h2>
				<div className="loader-circles-container">
					<div className="loader-circle"></div>
					<div className="loader-circle"></div>
					<div className="loader-circle"></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
