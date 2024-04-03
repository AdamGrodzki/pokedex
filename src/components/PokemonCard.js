
import React, { useState } from 'react';
import "../styles/pokemonCard.css"
import colorSwitcher from "./PokemonSwitchColors"
import defaultPokemonImage from "../../src/assets/images/pokeball.gif"
import typeIcons from './TypeIcons';
import { GoStarFill } from "react-icons/go";
import Favourites from ".//Favourites"



const PokemonCard = ({ details }) => {

    const { name, id, sprites, stats, types } = details;
    const [isFavourite, setIsFavourite] = useState(false);

    const handleFavouriteToggle = () => {
        setIsFavourite(!isFavourite)
    }

    const getTypeIcon = (type) => {
        const icon = typeIcons[type];
        if (typeof icon === 'string') {
            return <img src={icon} alt={type} style={{ width: '30px', height: '30px', margin: "0 3px" }} />;
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
                    <img src={sprites.front_default || defaultPokemonImage} alt={name} className="pokemon-img" />
                    <div className="stats-info">
                        <p className='attack info'>ATTACK:{stats[1].base_stat}</p>
                        <p className='def info'>DEFENSE:{stats[2].base_stat}</p>
                        <p className='speed info'>SPEED:{stats[5].base_stat}</p>
                        <p className='types-icon'>
                            TYPES:
                            {types.map((type) => (
                                <span key={type.type.name}>{getTypeIcon(type.type.name)}</span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>

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