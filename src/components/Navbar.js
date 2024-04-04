import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {


    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favourite">Favourites</Link></li>
            </ul>
        </nav >
    );
}

export default Navbar;