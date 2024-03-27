import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonDetails = () => {

    const { pokemonName } = useParams();

    const [details, setDetails] = useState(null);


    useEffect(() => {
        async function fetchDetails() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await response.json();
            console.log(data)
            setDetails(data);
        }

        fetchDetails();
    }, [pokemonName]);

    return (
        <div>
            <Link to="/">Back</Link>
            <h3>Pokemon Details:</h3>
        </div>
    );
}

export default PokemonDetails;