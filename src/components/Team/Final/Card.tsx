import "./Card.css";
interface CardProps {
	img: string;
	position: string;
	name: string;
}

function Card(props: CardProps) {
	return (
		<div className="team-card">
			<div>
				<div className="cardImg">
					<img src={props.img} alt="" />
				</div>
				<div className="content">
					<h4 className="pos">{props.position}</h4>
					<h4 className="pos">{props.name}</h4>
					<br />
				</div>
			</div>
		</div>
	);
}
export default Card;
