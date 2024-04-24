import { colorSwitcher } from './PokemonSwitchColors';
import typeIcons from './TypeIcons';
import '../styles/pokemonCard.css';
import defaultPokemonImage from '../../src/assets/images/pokeball.gif';
import { FaHeart } from 'react-icons/fa';
import { RiSwordFill } from 'react-icons/ri';
import { FaShield } from 'react-icons/fa6';
import { GiSteeltoeBoots } from 'react-icons/gi';
import { GiSpinningSword } from 'react-icons/gi';
import { GiBoltShield } from 'react-icons/gi';
import { GoStarFill } from "react-icons/go";
import Button from './Button';

import useFavouritePokemon from "../hooks/useFavouritePokemon";

const PokemonCard = ({ details }) => {
    const { name, id, sprites, stats, types } = details;
    const { addFavouritePokemon, removeFavouritePokemon, isFavouritePokemon, isMaxFavouriteCount } = useFavouritePokemon(name);

    const handleToggleFavourite = () => {
        isFavouritePokemon
            ? removeFavouritePokemon(name)
            : !isMaxFavouriteCount && addFavouritePokemon(name);
    };

    const getTypeIcon = (type) => {
        const icon = typeIcons[type];
        return typeof icon === "string" ? <img src={icon} alt={type} /> : null;
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
                    <Button onClick={handleToggleFavourite} className='fav-button' disabled={isMaxFavouriteCount && !isFavouritePokemon}>
                        {isFavouritePokemon ? <GoStarFill size={30} color="gold" /> : <GoStarFill size={30} />}
                    </Button>
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
