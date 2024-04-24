import React from "react";
import { Link } from "react-router-dom";
import useFavouritePokemon from "../hooks/useFavouritePokemon";
import { FaStar, FaRegStar } from "react-icons/fa";
import "../styles/pokemonContainer.css"




const PokemonContainer = ({ pokemon }) => {
    const { favouritePokemon } = useFavouritePokemon(pokemon.name);

    return (
        < div className="pokemon" key={pokemon.name} >
            <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                {pokemon.name}
                {favouritePokemon.includes(pokemon.name) ? (
                    <FaStar size={15} className="favourite-icon" />
                ) : (
                    <FaRegStar size={15} className="favourite-icon" />
                )}
            </Link>
        </div >
    );
};

export default PokemonContainer;