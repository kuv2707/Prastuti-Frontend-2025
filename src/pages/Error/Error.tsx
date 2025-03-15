import { Link } from "react-router-dom";
import "./Error.css";
export default function Errpr() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="h2">Looks like you're lost!</h3>
          <p>The page you are looking for is not available!</p>
          <Link to="/#">
            <button className="link_404">Go to Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
