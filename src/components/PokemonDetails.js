import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";
import "../styles/pokemonDetails.css"

const PokemonDetails = () => {
    const { name } = useParams();
    const [details, setDetails] = useState(null);
    const navigate = useNavigate();

    async function fetchDetails() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setDetails(data);
        } catch {
            console.log("error")
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [name]);


    return (
        <div>
            <Link className="back-btn" onClick={() => navigate(-1)}>Back</Link>
            <h1 className="heading-details">Pokemon Details</h1>

            {!details ? <Loading /> : <PokemonCard details={details} />}
        </div>
    );
}

export default PokemonDetails;

