import { useEffect, useState } from "react";
import { FavouriteStats } from "../../components/FavouriteStats/FavouriteStats";
import "../Favourites/favourites.css";
import PikachuLove from "../../assets/images/pikachuLove.gif";
import useFavouritePokemon from "../../hooks/useFavouritePokemon";
import FavouritePokemonList from "./FavouritePokemonList";

interface FavouritePokemonProps {
    pokemonName: string;
}

const FavouritePokemon: React.FC<FavouritePokemonProps> = ({ pokemonName}) => {
    const {
        favouritePokemons,
        removeFavouritePokemon,
    } = useFavouritePokemon(pokemonName);

    const [pokemons, setPokemons] = useState<any[]>([]);

    const fetchData = async (favouritePokemon: string[]) => {
        try {
            const data = await Promise.all(
                favouritePokemon.map(async (name: any) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    return await response.json();
                })
            );
            setPokemons(data);
        } catch (error) {
            console.log("Error fetching Pokemon data:", error);
        }
    };

    useEffect(() => {
        fetchData(favouritePokemons);
    }, [favouritePokemons]);


    return (
                <div>
                    <div className="favourite-container">
                        <h1 className="favourite-heading">Favourite <img src={PikachuLove} alt="Pikachu jumps in the hearts" /> Pokemon</h1>
                    </div>
                    <FavouritePokemonList 
                    pokemons={pokemons}
                    handleRemoveFavourite={removeFavouritePokemon} 
                    />
                    <FavouriteStats favouritePokemons={pokemons} 
                    />
                </div>
            )
};

export default FavouritePokemon;

