import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "../PokemonDetails/pokemonDetails.css";

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

    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setDetails(data);
        } catch (error) {
            console.log("Error fetching Pokemon details: ", error);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <Link to="" className="back-btn" onClick={navigateBack}>Back</Link>
            <h1 className="heading-details">Pokemon Details</h1>

            {details ? <PokemonCard details={details} /> : <Loading />}
        </div>
    );
};

export default PokemonDetails;