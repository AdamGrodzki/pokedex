
import React, { useState, useEffect } from 'react';
import "../styles/pokemonCard.css"
import colorSwitcher from "./PokemonSwitchColors"
import defaultPokemonImage from "../../src/assets/images/pokeball.gif"
import typeIcons from './TypeIcons';
import { GoStarFill } from "react-icons/go";

const PokemonCard = ({ details }) => {
    const { name, id, sprites, stats, types } = details;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // po odswiezeniu strony pokemon zostaje z gwiazdka
        const favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon'));
        if (favoritePokemon && favoritePokemon.includes(id)) {
            setIsFavorite(true);
        }
    }, [id]);

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);

        //zapisane zmiany
        let favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon')) || [];
        if (isFavorite) {
            favoritePokemon = favoritePokemon.filter(pokemonId => pokemonId !== id);
        } else {
            favoritePokemon.push(id);
        }
        localStorage.setItem('favoritePokemon', JSON.stringify(favoritePokemon));
    };

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
                    <button className='fav-button' onClick={handleFavoriteToggle}>
                        {isFavorite ? <GoStarFill size={30} color="gold" /> : <GoStarFill size={30} />}
                    </button>
                    <img src={sprites.front_default || defaultPokemonImage} alt={name} className="pokemon-img" />
                    <div className="stats-info">
                        <p className='attack info'>ATTACK: {stats[1].base_stat}</p>
                        <p className='def info'>DEFENSE: {stats[2].base_stat}</p>
                        <p className='speed info'>SPEED: {stats[5].base_stat}</p>
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

