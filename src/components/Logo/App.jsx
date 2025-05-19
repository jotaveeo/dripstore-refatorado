import { Link } from "react-router-dom";
import logoHeader from "../../assets/svgs/logo-header.svg";
import "./style.css";

export default function Logo() {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-link">
        <img className="logo-header" src={logoHeader} alt="logo-header" />
      </Link>
    </div>
  );
}