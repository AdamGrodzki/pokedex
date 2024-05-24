import { FAVOURITE_POKEMON_KEY } from "./hooks/useFavouritePokemon";

export const getPokemonsFromLocalStorage = () => {
    const storedPokemons = localStorage.getItem(FAVOURITE_POKEMON_KEY);

    if (!storedPokemons) {
        return [];
    }

    try {
        const parsedPokemons = JSON.parse(storedPokemons);
        return Array.isArray(parsedPokemons) ? parsedPokemons : [];
    } catch (error) {
        console.error('Error parsing stored pokemons:', error);
        return [];
    }
};

export const updateFavouritePokemonLS = (newFavouritePokemon: string[]) => {
    localStorage.setItem(FAVOURITE_POKEMON_KEY, JSON.stringify(newFavouritePokemon));
};


