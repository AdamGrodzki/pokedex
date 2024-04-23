import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import useFavouritePokemon from "../hooks/useFavouritePokemon";



const PokemonContainer = ({ pokemon }) => {
    const { favouritePokemon } = useFavouritePokemon(pokemon.name);

    return (
        < div className="pokemon" key={pokemon.name} >
            <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                {pokemon.name}
                {favouritePokemon.includes(pokemon.name) ? (
                    <FaStar size={25} className="favorite-icon" color="yellow" />
                ) : (
                    <FaRegStar size={25} className="favorite-icon" color="yellow" />
                )}
            </Link>
        </div >
    );
};

export default PokemonContainer;