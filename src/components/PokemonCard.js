
import React, { useState, useEffect } from 'react';
import { colorSwitcher } from './PokemonSwitchColors';
import typeIcons from './TypeIcons';
import FavouritePokemon from './Favourites';
import "../styles/pokemonCard.css"
import defaultPokemonImage from "../../src/assets/images/pokeball.gif"

import { GoStarFill } from "react-icons/go";
import { RiSwordFill } from "react-icons/ri";
import { FaShield } from "react-icons/fa6";
import { GiSteeltoeBoots } from "react-icons/gi";
import { GiSpinningSword } from "react-icons/gi";
import { GiBoltShield } from "react-icons/gi";


export let favArray = [];

const PokemonCard = ({ details }) => {
    const { name, id, sprites, stats, types } = details;
    const [isFavourite, setIsFavourite] = useState(false);

    const handleFavouriteToggle = () => {
        let favouritePokemon = JSON.parse(localStorage.getItem('favouritePokemon')) || [];

        if (isFavourite) {
            favouritePokemon = favouritePokemon.filter(pokemonId => pokemonId !== details.id);
            setIsFavourite(false);

            favArray = favArray.filter(id => id !== details.id);
        } else {
            favouritePokemon.push(details.id);
            setIsFavourite(true);

            if (!favArray.includes(details.id)) {
                favArray.push(details.id);
            }
        }
        localStorage.setItem('favouritePokemon', JSON.stringify(favouritePokemon));

        <FavouritePokemon />
    };

    useEffect(() => {
        // po odswiezeniu strony pokemon zostaje z gwiazdka
        const favouritePokemon = JSON.parse(localStorage.getItem('favouritePokemon'));
        if (favouritePokemon && favouritePokemon.includes(id)) {
            setIsFavourite(true);
        }
    }, [id]);

    const getTypeIcon = (type) => {
        const icon = typeIcons[type];
        if (typeof icon === 'string') {
            return <img src={icon} alt={type} />;
        }
        return null;
    };


    return (
        <div className="main">
            <div className="pokemon-card">
                <h2 className="capitalize-name">{name}</h2>
                <div className="base-stats">
                    <span>ID: </span>
                    #{id.toString().padStart(3, '0')}
                </div>
            </div>

            <div>
                <div className="stats-container" style={{ background: colorSwitcher(types[0].type.name) }}>
                    <button className='fav-button' onClick={handleFavouriteToggle}>
                        {isFavourite ? <GoStarFill size={30} color="gold" /> : <GoStarFill size={30} />}
                    </button>
                    <p className='types-icon'>
                        {types.map((type) => (
                            <span key={type.type.name}>{getTypeIcon(type.type.name)}</span>
                        ))}
                    </p>

                    <img src={sprites.front_default || sprites.other.home.front_default || defaultPokemonImage} alt={name} className="pokemon-img" />
                    <div className="stats-info">
                        <p className='info'><RiSwordFill color='#E50000' size={25} /> ATTACK:{stats[1].base_stat}</p>
                        <p className='info'><FaShield color='#FFFF00' size={25} /> DEFENSE:{stats[2].base_stat}</p>
                        <p className='info'><GiSteeltoeBoots color='#ffc0cb' size={25} /> SPEED:{stats[5].base_stat}</p>
                        <p className='info'><GiSpinningSword color='#0000ff' size={25} /> SPECIAL ATTACK:{stats[3].base_stat}</p>
                        <p className='info'><GiBoltShield color='#007300' size={25} /> SPECIAL DEFENSE:{stats[4].base_stat}</p>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default PokemonCard;


// const handleFavouriteToggle = () => {
//     setIsFavourite(!isFavourite);
//     if (!favArray.includes(details.id)) {
//         favArray.push(details.id);
//     }
//     <FavouritePokemon />
// };

// let favouritePokemon = JSON.parse(localStorage.getItem('favouritePokemon')) || [];
// if (isFavourite) {
//     favouritePokemon = favouritePokemon.filter(pokemonId => pokemonId !== id);
// } else {
//     favouritePokemon.push(id);
//     setIsFavourite(true);
// }
// localStorage.setItem('favouritePokemon', JSON.stringify(favouritePokemon));