import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css"

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul className="nav-link-container">
                <li><Link className={`nav-link ${location.pathname === "/" ? "active" : ''}`} to="/">Home</Link></li>
                <li><Link className={`nav-link ${location.pathname === "/favourite" ? "active" : ''}`} to="/favourite">Favourites</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;