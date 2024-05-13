import { useSearchParams } from "react-router-dom";
import "../styles/pokemonList.css";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import PokemonContainer from "../components/PokemonContainer";

interface Pokemon {
    name: string;
    url: string;
  }

const PokemonList: React.FC  = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [previousUrl, setPreviousUrl] = useState<string>("");
    const [nextUrl, setNextUrl] = useState<string>("");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = "https://pokeapi.co/api/v2/pokemon";

                const currentPage = searchParams.get("page") || "1";
                if (Number(currentPage) > 1) {
                    url = `https://pokeapi.co/api/v2/pokemon?offset=${(Number(currentPage) - 1) * 20}`;
            }
                
            const response = await fetch(url);
            const data = await response.json();
            setPreviousUrl(data.previous)
            setNextUrl(data.next)
            setPokemons(data.results)
        } catch(error){
            console.log("Error fetching Pokemon data: ", error);
        }
    };


        fetchData();
    }, [searchParams]);

    const handleNextPage = () => {
        const currentPage = searchParams.get("page") || "1";
        setSearchParams({ page: (Number(currentPage) + 1).toString()})
    };

    const handlePrevPage = () => {
        const currentPage = searchParams.get("page") || "1";
        if (Number(currentPage) > 1) {
            setSearchParams({ page: (Number(currentPage) - 1).toString() });
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

