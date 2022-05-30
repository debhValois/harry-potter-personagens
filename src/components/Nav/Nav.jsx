import "./Nav.css";
import { Link } from "react-router-dom";
import icon from "../../images/icon.png";

export function Nav() {
  return (
    <nav>
      <ul>
        <div className="nav-title">
          <li>
            <img src={icon} alt="Logo do Harry Potter" />
          </li>
          <li>
            <h1>Personagens do Harry Potter</h1>
          </li>
        </div>
        <div className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
