import { Link } from "react-router-dom";
import useFavouritePokemon from "../../hooks/useFavouritePokemon";
import { FaStar, FaRegStar } from "react-icons/fa";
import "../PokemonContainer/pokemonContainer.css"

interface Pokemon {
    name: string;
    url: string;
  }

const PokemonContainer = ({pokemon}: {pokemon: Pokemon}) => {
    const { isFavouritePokemon } = useFavouritePokemon(pokemon.name);

    return (
        < div className="pokemon" key={pokemon.name} >
            <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                {pokemon.name}
                {isFavouritePokemon ? (
                    <FaStar size={15} className="favourite-icon" />
                ) : (
                    <FaRegStar size={15} className="favourite-icon" />
                )}
            </Link>
        </div >
    );
};

export default PokemonContainer;