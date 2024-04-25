import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";
import "../styles/pokemonDetails.css";


interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    stats: { base_stat: number }[];
    types: { type: { name: string } }[];
    sprites: { front_default: string; other: { home: { front_default: string }}};
}

const PokemonDetails = () => {
    const { name } = useParams<{ name: string }>();
    const [details, setDetails] = useState<Pokemon>();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDetails() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                setDetails(data);
            } catch {
                console.log("error");
            }
        }
        fetchDetails();
    }, [name]);

    return (
        <div>
            <Link to="" className="back-btn" onClick={() => navigate(-1)}>Back</Link>
            <h1 className="heading-details">Pokemon Details</h1>

            {!details ? <Loading /> : <PokemonCard details={details} />}
        </div>
    );
};

export default PokemonDetails;
