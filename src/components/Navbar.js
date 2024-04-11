import { Link } from "react-router-dom";
import "../styles/navbar.css"

export const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="nav-link-container">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/favourite">Favourites</Link></li>
            </ul>
        </nav >
    );
}

export default Navbar;