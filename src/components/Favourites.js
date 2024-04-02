import React from 'react';
import { Link } from "react-router-dom";


const FavoritePokemon = () => {
    return (
        <div>
            <h1>Favorite Pokemon</h1>
            <Link className='back-button' to="/">Home</Link>
        </div>
    )
};

export default FavoritePokemon; 