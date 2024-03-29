import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
    console.log("Navbar: ", window.location)
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/favourites">Favourites</a></li>
            </ul>
        </nav >
    );
}

export default Navbar;