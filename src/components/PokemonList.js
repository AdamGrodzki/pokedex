import { Link } from 'react-router-dom';
import "../styles/pokemonList.css";
import Button from './Button';
import { useState, useEffect } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";

export let nextUrlParam = "";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [previousUrl, setPreviousUrl] = useState(null);
    const [nextUrl, setNextUrl] = useState("");
    let [currentPageUrl, setCurrentPageUrl] = useState();


    if (nextUrlParam === "") {
        currentPageUrl = "https://pokeapi.co/api/v2/pokemon"
    } else {
        currentPageUrl = nextUrlParam
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(currentPageUrl);
            const data = await response.json();
            setPreviousUrl(data.previous)
            setNextUrl(data.next)
            setPokemons(data.results)
        }

        fetchData();
    }, [currentPageUrl]);

    const handleNextPage = () => {
        setCurrentPageUrl(nextUrl);
        nextUrlParam = nextUrl;
        console.log("nextUrlParam", nextUrlParam)
    }

    const handlePrevPage = () => {
        setCurrentPageUrl(previousUrl);
        nextUrlParam = previousUrl;
        console.log("prevUrlParam", previousUrl)
    }

    return (

        <div>
            <h1 className='h1'>
                Poke<div className='spin'><MdOutlineCatchingPokemon size={45} /></div><span>dex</span>
            </h1>

            <div className='poke-container'>
                {
                    pokemons && (
                        pokemons?.map(pokemon => (
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
                <Button disabled={previousUrl === null} onClick={handlePrevPage}>Previous</Button>
                <Button disabled={nextUrl === null} onClick={handleNextPage}>Next</Button>
            </div>
        </div >);

}


export default PokemonList;

