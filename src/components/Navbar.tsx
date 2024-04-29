import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css"
import { useState } from "react";

export const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
              <input type="checkbox" id="burger-menu" className="burger-menu-checkbox" checked={isMenuOpen} onChange={toggleMenu} />
  <label htmlFor="burger-menu" className="burger-menu-label">
    <span className="burger-menu-icon"></span>
  </label>
            <ul className={`nav-link-container ${isMenuOpen ? "show" : ""}`}>
                <li><Link className={`nav-link ${location.pathname === "/" ? "active" : ''}`} to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/favourite" ? "active" : ''}`} to="/favourite" onClick={toggleMenu}>Favourites</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;