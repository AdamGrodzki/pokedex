import { Link } from 'react-router-dom';
import "../styles/pokemonList.css";
import Button from './Button';

const PokemonList = ({ pokemons, previous }) => {
    console.log("pokemons", pokemons)
    console.log("allData:", previous)
    return (
        <div>
            <h1 className='h1'>
                Pokedex
            </h1>

            <div className='poke-container'>
                {
                    pokemons && (
                        pokemons.map(pokemon => (
                            <div key={pokemon.name} className='pokemon'>
                                <Link to={`/pokemon/${pokemon.name}`}
                                    className='pokemon-link'

                                >{pokemon.name}</Link>
                            </div>
                        ))
                    )
                }
            </div>

            <Button
                disabled={previous === null}
            >Previous</Button>
            <Button>Next</Button>
        </div >);
}

export default PokemonList;