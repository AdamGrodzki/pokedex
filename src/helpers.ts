// import { FAVOURITE_POKEMON_KEY } from "./hooks/useFavouritePokemon";

// export const getPokemonsFromLocalStorage = () => {
//     const storedPokemons: any = localStorage.getItem(FAVOURITE_POKEMON_KEY);
//     console.log("storedPokemons:", storedPokemons)
//     console.log("Type", typeof storedPokemons)

//     const parsedPokemons = JSON.parse(storedPokemons);
//     // const storedPokemons: string[] | null = localStorage.getItem(FAVOURITE_POKEMON_KEY);

//     return parsedPokemons || [];
// }

import { FAVOURITE_POKEMON_KEY } from "./hooks/useFavouritePokemon";

export const getPokemonsFromLocalStorage = () => {
    const storedPokemons = localStorage.getItem(FAVOURITE_POKEMON_KEY);

    if (storedPokemons) {
        try {
            const parsedPokemons = JSON.parse(storedPokemons);
            return parsedPokemons;
        } catch (error) {
            console.error('Error parsing stored pokemons:', error);
            return [];
        }
    } else {
        return [];
    }
}