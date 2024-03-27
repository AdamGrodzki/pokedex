import { Link } from 'react-router-dom';
import "../styles/pokemonList.css";

const PokemonList = ({ pokemons }) => {
    return (
        <div>
            <h1 className='h1'>
                Pokedex - React
            </h1>

            <div className='poke-container'>
                {
                    pokemons && (
                        pokemons.map(pokemon => (
                            < div key={pokemon.name} className='pokemon'>
                                <Link to={`/pokemon/${pokemon.name}`}
                                    className='pokemon-link'

                                >{pokemon.name}</Link>
                            </div>
                        ))
                    )
                }
            </div>
        </div >);
}

export default PokemonList;