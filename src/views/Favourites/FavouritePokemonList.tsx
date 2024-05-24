import { Link } from "react-router-dom";

interface Pokemon {
    id: number;
    name: string;
  }
  
  interface FavouritePokemonListProps {
    pokemons: Pokemon[];
    handleRemoveFavourite: (pokemonName: string) => void;
  }

const FavouritePokemonList: React.FC<FavouritePokemonListProps> = ({ pokemons, handleRemoveFavourite }) => {

    return (
        <div className="fav-poke-container">
            {pokemons?.map((pokemon) => (
                <div key={pokemon.name} className="pokemon">
                    <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                        {pokemon.name}
                    </Link>
                    <button className="remove-btn" onClick={() => handleRemoveFavourite(pokemon.name)}>&times;</button>
                </div>
            ))}
        </div>

    );
};

export default FavouritePokemonList;