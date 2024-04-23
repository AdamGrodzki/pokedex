import { useEffect, useState } from 'react';
const FAVOURITE_POKEMON_KEY = 'favouritePokemon';
export const FAVOURITE_MAX_COUNT = 6;


const useFavouritePokemon = (pokemonName) => {
    const [favouritePokemon, setFavouritePokemon] = useState([]);
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

    const removeFavouritePokemon = (pokemonName) => {
        const updatedPokemon = favouritePokemon.filter((name) => name !== pokemonName);
        setFavouritePokemon(updatedPokemon);
        updateFavouritePokemonLS(updatedPokemon);

    };

    const updateFavouritePokemonLS = (newFavouritePokemon) => {
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


