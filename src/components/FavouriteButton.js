import React from "react";
import { GoStarFill } from "react-icons/go";

const FavoriteButton = ({ isFavourite, onToggle, disabled }) => {
    return (
        <button className='fav-button' onClick={onToggle} disabled={disabled}>
            {isFavourite ? <GoStarFill size={30} color="gold" /> : <GoStarFill size={30} />}
        </button>
    );
};

export default FavoriteButton;