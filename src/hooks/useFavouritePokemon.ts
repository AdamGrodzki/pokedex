import { useEffect, useState } from 'react';
const FAVOURITE_POKEMON_KEY = 'favouritePokemon';
export const FAVOURITE_MAX_COUNT = 6;


const useFavouritePokemon = (pokemonName: string) => {
    const [favouritePokemon, setFavouritePokemon] = useState<string[]>([]);
    useEffect(() => {
        getFromLocalStorage()
    }, [])

    useEffect(() => {
        updateFavouritePokemonLS(favouritePokemon)
    }, [favouritePokemon])

    const isFavouritePokemon = favouritePokemon.includes(pokemonName);
    const isMaxFavouriteCount = favouritePokemon.length === FAVOURITE_MAX_COUNT;



    const storedPokemon = localStorage.getItem(FAVOURITE_POKEMON_KEY);
    const getFromLocalStorage = () => {
        setFavouritePokemon(storedPokemon ? JSON.parse(storedPokemon) : []);
    }

    const addFavouritePokemon = () => {
        if (!isFavouritePokemon && !isMaxFavouriteCount) {
            const updatedPokemon = [...favouritePokemon, pokemonName];
            setFavouritePokemon(updatedPokemon);
        }
    };

    const removeFavouritePokemon = (pokemonName: string) => {
        const updatedPokemon = favouritePokemon.filter((name) => name !== pokemonName);
        setFavouritePokemon(updatedPokemon);
        updateFavouritePokemonLS(updatedPokemon);

    };

    const updateFavouritePokemonLS = (newFavouritePokemon: string[]) => {
        localStorage.setItem(FAVOURITE_POKEMON_KEY, JSON.stringify(newFavouritePokemon));
    };


    return {
        favouritePokemon,
        addFavouritePokemon,
        removeFavouritePokemon,
        isFavouritePokemon,
        isMaxFavouriteCount,
        storedPokemon,
    };
};

export default useFavouritePokemon;


