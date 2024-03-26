import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <nav className="nav-header">
            <div>
                <Link to="/" className="pokemon-logo">
                    <img src="" alt="" />
                    <h1>Pokedex</h1>
                </Link>
            </div>
            {/* <div>
                <Link to='/Favorite'>Favorite Pokemons</Link>
            </div> */}
        </nav>
    )

}

export default Navbar;