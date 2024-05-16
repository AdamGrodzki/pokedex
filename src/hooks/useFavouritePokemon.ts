import { useEffect, useState } from 'react';
import { getPokemonsFromLocalStorage } from '../helpers';
export const FAVOURITE_POKEMON_KEY = 'favouritePokemon';
export const FAVOURITE_MAX_COUNT = 6;


const useFavouritePokemon = (pokemonName: string) => {
    const [favouritePokemon, setFavouritePokemon] = useState<string[]>([]);
    useEffect(() => {
        getFromLocalStorage()
    }, [])

    useEffect(() => {
        console.log({ favouritePokemon })
        updateFavouritePokemonLS(favouritePokemon)
        // deb
    }, [favouritePokemon])

    const isFavouritePokemon = favouritePokemon.includes(pokemonName);
    const isMaxFavouriteCount = favouritePokemon.length === FAVOURITE_MAX_COUNT;

    const getFromLocalStorage = () => {
        const storedPokemons = getPokemonsFromLocalStorage();
        if (favouritePokemon.join(',') !== storedPokemons.join(',')) {
            console.log(favouritePokemon.join(','))
            console.log(storedPokemons.join(','))
            setFavouritePokemon(storedPokemons);
        }

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
    };
};

export default useFavouritePokemon;


