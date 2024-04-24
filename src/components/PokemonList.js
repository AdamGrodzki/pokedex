import { useSearchParams } from "react-router-dom";
import "../styles/pokemonList.css";
import Button from "./Button";
import { useState, useEffect } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import PokemonContainer from "./PokemonContainer";


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
    };

    const handlePrevPage = () => {
        const currentPage = (searchParams.get("page") || 1) * 1;
        if (currentPage > 1) {
            setSearchParams({ page: currentPage - 1 });
        }
    }

    return (
        <div>
            <h1 className="heading-list">
                Poke<div className="spin"><MdOutlineCatchingPokemon size={45} /></div><span>dex</span>
            </h1>
            <div className="poke-container">
                {
                    pokemons && (
                        pokemons?.map(pokemon => (
                            <PokemonContainer key={pokemon.name} pokemon={pokemon} />
                        ))
                    )
                }
            </div>
            <div className="buttons-wrap">
                <Button disabled={previousUrl === null} onClick={handlePrevPage} className="button-text">Previous</Button>
                <Button disabled={nextUrl === null} onClick={handleNextPage} className="button-text">Next</Button>
            </div>
        </div >
    );
}

export default PokemonList;

