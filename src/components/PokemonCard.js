import "../styles/pokemonCard.css"

const PokemonCard = ({ details }) => {

    const { name, base_experience, sprites, weight, height, stats, types, abilities, forms } = details;

    return (
        <div className="main">
            {/* NAME  */}
            <div className="pokemon-card">
                <h2 className="capitalize-name">{name}</h2>
                <div className="base-stats">
                    <span>HP: </span>
                    {base_experience}
                </div>
            </div>
            {/* IMAGE  */}
            <div>
                <div className="stats-container">
                    <img src={sprites.front_default} alt={name} className="pokemon-img" />
                    <div className="stats-info">
                        <p>Height:{height}m</p>
                        <p>Weight:{weight}kg </p>
                        <p>ATTACK:{stats[1].base_stat}</p>
                        <p>SPEED:{stats[5].base_stat}</p>
                        <p>DEF:{stats[2].base_stat}</p>
                    </div>
                </div>
            </div>

            {/* SPRITES */}
            <div>
                <img src={sprites.front_default} alt={name} />
                <img src={sprites.back_default} alt={name} />
                <img src={sprites.front_shiny} alt={name} />
                <img src={sprites.back_shiny} alt={name} />
            </div>

            <div className="stats-types">
                {/* TYPES  */}
                <div>
                    <div className="types"></div>
                    Types{types.map(type => (
                        <div>{type.type.name}</div>
                    ))}
                </div>
                {/* ABILITIES */}
                <div>
                    <div className="types">Abilities</div>
                    {abilities.map(ability => (
                        <div>{ability.ability.name}</div>
                    ))}
                </div>
                {/* FORMS */}
                <div>
                    <div className="types">Forms</div>
                    {forms.map(form => (
                        <div>{form.name}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;