import "../styles/pokemonCard.css"
import colorSwitcher from "./PokemonSwitchColors";

const PokemonCard = ({ details }) => {

    const { name, id, sprites, stats, types } = details;


    return (
        <div className="main" >
            <div className="pokemon-card">
                <h2 className="capitalize-name">{name}</h2>
                <div className="base-stats">
                    <span>ID: </span>
                    #{id.toString().padStart(3, '0')}
                </div>
            </div>

            <div>
                <div className="stats-container" style={{ backgroundColor: colorSwitcher(types[0].type.name) }}>
                    <img src={sprites.front_default} alt={name} className="pokemon-img" />
                    <div className="stats-info">
                        <p>ATTACK: {stats[1].base_stat}</p>
                        <p>SPEED: {stats[5].base_stat}</p>
                        <p>DEF: {stats[2].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;