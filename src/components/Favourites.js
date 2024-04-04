import React from 'react';
import { Link } from "react-router-dom";

import "../styles/favourite.css"
import PikachuLove from "../../src/assets/images/pikachuLove.gif"
// import { GoHeartFill } from "react-icons/go";


const FavouritePokemon = () => {
    return (
        <div>
            <Link className='back-button' to="/">Home</Link>
            {/* <h1>Favourite Pokemon <GoHeartFill className='heart-icon' size={45} /></h1> */}
            <div className='favourite-container'>
                <h1>Favourite <img src={PikachuLove} alt='Pikachu jumps in the hearts' /> Pokemon</h1>
               

            </div>
        </div>
    )
};

export default FavouritePokemon;