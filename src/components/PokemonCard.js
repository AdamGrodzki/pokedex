
import React, { useState } from 'react';
import "../styles/pokemonCard.css"
// import colorSwitcher from "./PokemonSwitchColors"
import defaultPokemonImage from "../../src/assets/images/pokeball.gif"
import typeIcons from './TypeIcons';

import { colorSwitcher } from './PokemonSwitchColors';

import { GoStarFill } from "react-icons/go";
import { RiSwordFill } from "react-icons/ri";
import { FaShield } from "react-icons/fa6";
import { GiSteeltoeBoots } from "react-icons/gi";
import { GiSpinningSword } from "react-icons/gi";
import { GiBoltShield } from "react-icons/gi";

const PokemonCard = ({ details }) => {

    const { name, id, sprites, stats, types } = details;
    const [isFavourite, setIsFavourite] = useState(false);


    const handleFavouriteToggle = () => {
        setIsFavourite(!isFavourite)
    }

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
                {/* <div className="stats-container" style={{ background: colorSwitcher(types[0].type.name) }}> */}
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
                        <p className='attack info'><RiSwordFill color='#757cbb' size={25} /> ATTACK:{stats[1].base_stat}</p>
                        <p className='def info'><FaShield color='#FEB17A' size={25} /> DEFENSE:{stats[2].base_stat}</p>
                        <p className='speed info'><GiSteeltoeBoots color='#D880FF' size={25} /> SPEED:{stats[5].base_stat}</p>
                        <p className='attack info'><GiSpinningSword color='#757cbb' size={25} /> SPECIAL ATTACK:{stats[3].base_stat}</p>
                        <p className='def info'><GiBoltShield color='#FEB17A' size={25} /> SPECIAL DEFENSE:{stats[4].base_stat}</p>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default PokemonCard;


// useEffect(() => {
//     // po odswiezeniu strony pokemon zostaje z gwiazdka
//     const favouritePokemon = JSON.parse(localStorage.getItem('favouritePokemon'));
//     if (favouritePokemon && favouritePokemon.includes(id)) {
//         setIsFavourite(true);
//     }
// }, [id]);

// const handleFavouriteToggle = () => {
//     setIsFavourite(!isFavourite);

//     //zapisane zmiany
//     let favouritePokemon = JSON.parse(localStorage.getItem('favouritePokemon')) || [];
//     if (isFavourite) {
//         favouritePokemon = favouritePokemon.filter(pokemonId => pokemonId !== id);
//     } else {
//         favouritePokemon.push(id);
//     }
//     localStorage.setItem('favouritePokemon', JSON.stringify(favouritePokemon));
// };