import React from 'react';
import { Link } from 'react-router-dom';

const FavouritePokemonList = ({ pokemons, handleRemoveFavourite }) => {
    return (
        <div className="fav-poke-container">
            {pokemons?.map((pokemon) => (
                <div key={pokemon.id} className="pokemon">
                    <Link to={`/pokemon/${pokemon.id}`} className="pokemon-link">
                        {pokemon.name}
                    </Link>
                    <button className='remove-btn' onClick={() => handleRemoveFavourite(pokemon.name)}>&times;</button>
                </div>
            ))}
        </div>

    );
};

export default FavouritePokemonList;