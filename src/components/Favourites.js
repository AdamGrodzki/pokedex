import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FavouriteStats } from "./FavouriteStats";
import "../styles/favourite.css"
import PikachuLove from "../../src/assets/images/pikachuLove.gif"
import { getFavouritePokemon, removeFavouritePokemon } from "./LocalStorage";

const FavouritePokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const favouritePokemon = getFavouritePokemon();
            const data = await Promise.all(
                favouritePokemon.map(async (item) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}/`);
                    return await response.json();
                })
            );

            setPokemons(data);
        };
        fetchData();
    }, []);

    const removeFavourite = (id) => {
        removeFavouritePokemon(id);
        setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
    }

    return (
        <div>
            <div className="favourite-container">
                <h1>Favourite <img src={PikachuLove} alt="Pikachu jumps in the hearts" /> Pokemon</h1>
            </div>
            <div className="fav-poke-container">
                {pokemons?.map((pokemon) => (
                    <div key={pokemon.name} className="pokemon">
                        <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                            {pokemon.name}
                        </Link>
                        <button className='remove-btn' onClick={() => removeFavourite(pokemon.id)}>&times;</button>
                    </div>
                ))}
            </div>
            <FavouriteStats favouritePokemons={pokemons} />
        </div>
    )
};

export default FavouritePokemon;

