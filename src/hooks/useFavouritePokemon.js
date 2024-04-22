import { useEffect, useState } from 'react';
const FAVOURITE_POKEMON_KEY = 'favouritePokemon';
export const FAVOURITE_MAX_COUNT = 6;


const useFavouritePokemon = (pokemonId) => {
    const [favouritePokemon, setFavouritePokemon] = useState([]);
    useEffect(() => {
        getFromLocalStorage()
    }, [])

    useEffect(() => {
        updateFavouritePokemonLS(favouritePokemon)
    }, [favouritePokemon])

    const isFavouritePokemon = favouritePokemon.includes(pokemonId);
    const isMaxFavouriteCount = favouritePokemon.length === FAVOURITE_MAX_COUNT;



    const getFromLocalStorage = () => {
        const storedPokemon = localStorage.getItem(FAVOURITE_POKEMON_KEY);
        setFavouritePokemon(storedPokemon ? JSON.parse(storedPokemon) : []);
    }

    const addFavouritePokemon = () => {
        if (!isFavouritePokemon && !isMaxFavouriteCount) {
            const updatedPokemon = [...favouritePokemon, pokemonId];
            setFavouritePokemon(updatedPokemon);
        }
    };

    const removeFavouritePokemon = (pokemonId) => {
        const updatedPokemon = favouritePokemon.filter((id) => id !== pokemonId);
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
        isMaxFavouriteCount
    };
};

export default useFavouritePokemon;



