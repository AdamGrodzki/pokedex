import React from "react";
import { GoStarFill } from "react-icons/go";

const FavoriteButton = ({ isFavourite, onToggle }) => {
    return (
        <button className='fav-button' onClick={onToggle}>
            {isFavourite ? <GoStarFill size={30} color="gold" /> : <GoStarFill size={30} />}
        </button>
    );
};

export default FavoriteButton;