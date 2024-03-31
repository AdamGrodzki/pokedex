import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";
import "../styles/pokemonDetails.css"
import PokemonList, { nextUrlParam } from "./PokemonList";

const PokemonDetails = () => {
    const { pokemonName } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        async function fetchDetails() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await response.json();
            setDetails(data);
            console.log('data', data)
        }

        fetchDetails();
    }, [pokemonName]);

    const backToPreviousList = () => {
        <PokemonList nextUrlParam={nextUrlParam} />
    }

    return (
        <div>
            <Link className="back-btn" to='/' onClick={backToPreviousList}>Back</Link>
            <h1>Pokemon Details</h1>

            {!details ? <Loading /> : <PokemonCard details={details} />}
        </div>
    );
}

export default PokemonDetails;

