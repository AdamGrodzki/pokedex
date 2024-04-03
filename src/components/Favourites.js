import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FavouritesContext } from './FavouritesContext';
import PokemonCard from './PokemonCard';

import "../styles/favourite.css"
import PikachuLove from "../../src/assets/images/pikachuLove.gif"
// import { GoHeartFill } from "react-icons/go";


const FavouritePokemon = () => {
    const { favourites } = useContext(FavouritesContext)
    return (
        <div>
            <Link className='back-button' to="/">Home</Link>
            {/* <h1>Favourite Pokemon <GoHeartFill className='heart-icon' size={45} /></h1> */}
            <div className='favourite-container'>
                <h1>Favourite Pokemon</h1>
                <img src={PikachuLove} alt='Pikachu jumps in the hearts' />

                <div className='pokemon-favGallery'>
                    {favourites ? (
                        <div className="pokemon-list">
                            {favourites?.map((details, key) => {
                                return <PokemonCard key={key} details={details} />;
                            })}
                        </div>
                    ) : (

                        <p>You do not have any favorite Pokemón</p>

                    )}
                </div>
            </div>
        </div>
    )
};

export default FavouritePokemon;