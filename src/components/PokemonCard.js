import React, { useState } from 'react';
import Modal from './Modal';
import { colorSwitcher } from './PokemonSwitchColors';
import typeIcons from './TypeIcons';
import FavoriteButton from './FavouriteButton';
import '../styles/pokemonCard.css';
import defaultPokemonImage from '../../src/assets/images/pokeball.gif';
import { FaHeart } from 'react-icons/fa';
import { RiSwordFill } from 'react-icons/ri';
import { FaShield } from 'react-icons/fa6';
import { GiSteeltoeBoots } from 'react-icons/gi';
import { GiSpinningSword } from 'react-icons/gi';
import { GiBoltShield } from 'react-icons/gi';

import useFavouritePokemon from "../hooks/useFavouritePokemon";
import { FAVOURITE_MAX_COUNT } from "../hooks/useFavouritePokemon";

const PokemonCard = ({ details }) => {
    const { name, id, sprites, stats, types } = details;
    const [showModal, setShowModal] = useState(false);
    const { addFavouritePokemon, removeFavouritePokemon, isFavouritePokemon, isMaxFavouriteCount } = useFavouritePokemon(name);



    const handleToggleFavourite = () => {
        isFavouritePokemon
            ? removeFavouritePokemon(name)
            : !isMaxFavouriteCount
                ? addFavouritePokemon(name)
                : setShowModal(true);
    };

    const getTypeIcon = (type) => {
        const icon = typeIcons[type];
        if (typeof icon === "string") {
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

            <Modal isOpen={showModal} onClose={setShowModal}>
                <div className="modal-content">
                    <h2>Oops!</h2>
                    <p>You can only have a maximum of {FAVOURITE_MAX_COUNT} favorite Pokemon.</p>
                </div>
            </Modal>


            <div>
                <div className="stats-container" style={{ background: colorSwitcher(types[0].type.name) }}>
                    <FavoriteButton isFavourite={isFavouritePokemon} onToggle={handleToggleFavourite} disabled={isMaxFavouriteCount && !isFavouritePokemon} />
                    <p className="types-icon">
                        {types.map((type) => (
                            <span key={type.type.name}>{getTypeIcon(type.type.name)}</span>
                        ))}
                    </p>

                    <img src={sprites.front_default || sprites.other.home.front_default || defaultPokemonImage} alt={name} className="pokemon-img" />
                    <div className="stats-info">
                        <p className="info">
                            <FaHeart color="#69DC12" size={25} /> HP:{stats[0].base_stat}
                        </p>
                        <p className="info">
                            <RiSwordFill color="#E50000" size={25} /> ATTACK:{stats[1].base_stat}
                        </p>
                        <p className="info">
                            <FaShield color="#FFFF00" size={25} /> DEFENSE:{stats[2].base_stat}
                        </p>
                        <p className="info">
                            <GiSteeltoeBoots color="#ffc0cb" size={25} /> SPEED:{stats[5].base_stat}
                        </p>
                        <p className="info">
                            <GiSpinningSword color="#0000ff" size={25} /> SPECIAL ATTACK:{stats[3].base_stat}
                        </p>
                        <p className="info">
                            <GiBoltShield color="#007300" size={25} /> SPECIAL DEFENSE:{stats[4].base_stat}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PokemonCard;
