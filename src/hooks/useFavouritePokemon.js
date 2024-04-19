import { useState } from 'react';

const useFavouritePokemon = (key) => {
    const [favouritePokemon, setFavouritePokemon] = useState(() => {
        const storedPokemon = localStorage.getItem(key);
        return storedPokemon ? JSON.parse(storedPokemon) : [];
    });

    const addFavouritePokemon = (pokemonId) => {
        if (!favouritePokemon.includes(pokemonId)) {
            const updatedPokemon = [...favouritePokemon, pokemonId];
            setFavouritePokemon(updatedPokemon);
            localStorage.setItem(key, JSON.stringify(updatedPokemon));
        }
    };

    const removeFavouritePokemon = (pokemonId) => {
        const updatedPokemon = favouritePokemon.filter((id) => id !== pokemonId);
        setFavouritePokemon(updatedPokemon);
        localStorage.setItem(key, JSON.stringify(updatedPokemon));
    };

    const isFavouritePokemon = (pokemonId) => {
        return favouritePokemon.includes(pokemonId);
    };

    return { favouritePokemon, addFavouritePokemon, removeFavouritePokemon, isFavouritePokemon };
};

export default useFavouritePokemon;

// USE EFFECT 4 LINIA

