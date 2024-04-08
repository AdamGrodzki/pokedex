import { Link } from 'react-router-dom';
import "../styles/pokemonList.css";
import Button from './Button';
import { useState, useEffect } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { useSearchParams } from 'react-router-dom';


const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [previousUrl, setPreviousUrl] = useState("");
    const [nextUrl, setNextUrl] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();



    useEffect(() => {
        async function fetchData() {
            let url = "https://pokeapi.co/api/v2/pokemon";
            if (searchParams.get("page")) {
                const currentPage = searchParams.get("page") * 1;
                if (currentPage > 1) {
                    url = `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 20}`;
                }
            }
            const response = await fetch(url);
            const data = await response.json();
            setPreviousUrl(data.previous)
            setNextUrl(data.next)
            setPokemons(data.results)
        }


        fetchData();
    }, [searchParams]);

    const handleNextPage = () => {
        const currentPage = (searchParams.get("page") || 1) * 1;
        setSearchParams({ page: currentPage + 1 })
        console.log("nextUrlParam", nextUrl)
    };

    const handlePrevPage = () => {
        const currentPage = (searchParams.get("page") || 1) * 1;
        if (currentPage > 1) {
            setSearchParams({ page: currentPage - 1 });
            console.log("prevUrlParam", previousUrl)
        }
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

