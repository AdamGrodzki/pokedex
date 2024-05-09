import { useEffect, useState } from "react";
import { FavouriteStats } from "../components/FavouriteStats";
import "../styles/favourite.css"
import PikachuLove from "../../src/assets/images/pikachuLove.gif"
import useFavouritePokemon from "../hooks/useFavouritePokemon";
import FavouritePokemonList from "../components/FavouritePokemonList";


const FavouritePokemon = (name: any) => {
    const [pokemons, setPokemons] = useState<any>([]);
    const { favouritePokemon, removeFavouritePokemon } = useFavouritePokemon(name);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Promise.all(
                    favouritePokemon.map(async (item) => {
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}/`);
                        return await response.json();
                    })
                );

                setPokemons(data);
            } catch (error) {
                console.log("Error fetching Pokemon data: ", error)
            }
        };

        fetchData();
    }, [favouritePokemon]);



    return (
        <div>
            <div className="favourite-container">
                <h1 className="favourite-heading">Favourite <img src={PikachuLove} alt="Pikachu jumps in the hearts" /> Pokemon</h1>
            </div>
            <FavouritePokemonList pokemons={pokemons} handleRemoveFavourite={removeFavouritePokemon} />
            <FavouriteStats favouritePokemons={pokemons} />
        </div>
    )
};

export default FavouritePokemon;
