import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { favArray } from "./PokemonCard";
import { FavouriteStats } from './FavouriteStats';
import "../styles/favourite.css"
import PikachuLove from "../../src/assets/images/pikachuLove.gif"


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

    const removeFavourite = (pokemonName) => {
        const updatedFavArray = favArray.filter((item) => item !== pokemonName);
        localStorage.setItem('favArray', JSON.stringify(updatedFavArray));
        setPokemons(pokemons.filter((pokemon) => pokemon.name !== pokemonName));
    };


    return (
        <div>
            <div className='favourite-container'>
                <h1>Favourite <img src={PikachuLove} alt='Pikachu jumps in the hearts' /> Pokemon</h1>
            </div>
            <div className="fav-poke-container">
                {pokemons?.map((pokemon) => (
                    <div key={pokemon.name} className="pokemon">
                        <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                            {pokemon.name}
                        </Link>
                        <button className='remove-btn' onClick={() => removeFavourite(pokemon.name)}>&times;</button>
                    </div>
                ))}
            </div>
            <FavouriteStats favouritePokemons={pokemons} />
        </div>
    )
};

export default FavouritePokemon;

