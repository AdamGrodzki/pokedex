import { Link } from 'react-router-dom';
import "../styles/pokemonList.css";
import Button from './Button';
import Navbar from './Navbar';

const PokemonList = ({ pokemons, previous, next, setNext }) => {
    console.log("pokemons", pokemons)
    console.log("allData:", previous)
    console.log("next", next)
    return (
        <div>
            <Navbar />
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

            <div className='buttons-wrap'>
                <Button disabled={previous === null}>Previous</Button>
                <Button disabled={next === null} onClick={() => next = { next }}>Next</Button>
            </div>
        </div >);

}


export default PokemonList;