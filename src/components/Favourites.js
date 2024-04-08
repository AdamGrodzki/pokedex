import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/favourite.css"

import "../styles/favourite.css"
import PikachuLove from "../../src/assets/images/pikachuLove.gif"

import { favArray } from "./PokemonCard";

const FavouritePokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Promise.all(
                favArray.map(async (item) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}/`);
                    return await response.json();
                })
            );

            setPokemons(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Link className='back-button' to="/">Home</Link>
            <div className='favourite-container'>
                <h1>Favourite <img src={PikachuLove} alt='Pikachu jumps in the hearts' /> Pokemon</h1>
            </div>
            <div className="fav-poke-container">
                {pokemons?.map((pokemon) => (
                    <div key={pokemon.name} className="pokemon">
                        <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                            {pokemon.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FavouritePokemon;