import { useEffect, useState } from "react";
import { FavouriteStats } from "../../components/FavouriteStats/FavouriteStats";
import "../Favourites/favourites.css";
import PikachuLove from "../../assets/images/pikachuLove.gif";
import useFavouritePokemon from "../../hooks/useFavouritePokemon";
import FavouritePokemonList from "../../components/FavouritePokemonList";


const fetchData = async (favouritePokemon: string[], setPokemons: any) => {
    try {
        const data = await Promise.all(
            favouritePokemon.map(async (item: string) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}/`);
                return await response.json();
            })
        );

        setPokemons(data);
    } catch (error) {
        console.log("Error fetching Pokemon data: ", error)
    }
};


const FavouritePokemon = (name: any) => {
    const [pokemons, setPokemons] = useState<any>([]);
    const { favouritePokemon, removeFavouritePokemon } = useFavouritePokemon(name);
   
    useEffect(() => {
        fetchData(favouritePokemon, setPokemons);
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
