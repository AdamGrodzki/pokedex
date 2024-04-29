import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css"

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
              <input type="checkbox" id="burger-menu" className="burger-menu-checkbox" />
  <label htmlFor="burger-menu" className="burger-menu-label">
    <span className="burger-menu-icon"></span>
  </label>
            <ul className="nav-link-container">
                <li><Link className={`nav-link ${location.pathname === "/" ? "active" : ''}`} to="/">Home</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/favourite" ? "active" : ''}`} to="/favourite">Favourites</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;