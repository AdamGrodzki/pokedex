import { useEffect, useState } from 'react';
import { getPokemonsFromLocalStorage, updateFavouritePokemonLS } from '../helpers';

export const FAVOURITE_POKEMON_KEY = 'favouritePokemon';
export const FAVOURITE_MAX_COUNT = 6;


const useFavouritePokemon = (pokemonName: string) => {
    const [favouritePokemons, setFavouritePokemons] = useState<string[]>(() => getPokemonsFromLocalStorage());

    useEffect(() => {
        setFavouritePokemons(getPokemonsFromLocalStorage())
    }, [])

    useEffect(() => {
        updateFavouritePokemonLS(favouritePokemons)
    }, [favouritePokemons])

    const isFavouritePokemon = favouritePokemons.includes(pokemonName);
    const isMaxFavouriteCount = favouritePokemons.length === FAVOURITE_MAX_COUNT;

    // const getFromLocalStorage = () => {
    //     const storedPokemons = getPokemonsFromLocalStorage();
    //     if (favouritePokemons.join(',') !== storedPokemons.join(',')) {
    //         setFavouritePokemons(storedPokemons);
    //         console.log("getFromLocalStorage: ", storedPokemons);
    //     }
    // };

    const addFavouritePokemon = () => {
        if (!isFavouritePokemon && !isMaxFavouriteCount) {
            const updatedPokemon = [...favouritePokemons, pokemonName];
            setFavouritePokemons(updatedPokemon);
        }
    };

    const removeFavouritePokemon = (pokemonName: string) => {
        const updatedPokemon = favouritePokemons.filter((name) => name !== pokemonName);
        setFavouritePokemons(updatedPokemon);
        // updateFavouritePokemonLS(updatedPokemon);
    };


    return {
        favouritePokemons,
        addFavouritePokemon,
        removeFavouritePokemon,
        isFavouritePokemon,
        isMaxFavouriteCount,
    };
};

export default useFavouritePokemon;
