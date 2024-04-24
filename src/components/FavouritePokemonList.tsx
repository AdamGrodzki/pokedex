import { Link } from "react-router-dom";

const FavouritePokemonList = ({ pokemons, handleRemoveFavourite }: any) => {
    return (
        <div className="fav-poke-container">
            {pokemons?.map((pokemon: any) => (
                <div key={pokemon.id} className="pokemon">
                    <Link to={`/pokemon/${pokemon.id}`} className="pokemon-link">
                        {pokemon.name}
                    </Link>
                    <button className="remove-btn" onClick={() => handleRemoveFavourite(pokemon.name)}>&times;</button>
                </div>
            ))}
        </div>

    );
};

export default FavouritePokemonList;