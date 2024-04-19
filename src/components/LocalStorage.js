export const FAVOURITE_POKEMON_KEY = 'favouritePokemon';

export function getFavouritePokemon() {
    return JSON.parse(localStorage.getItem(FAVOURITE_POKEMON_KEY)) || [];
}

export function addFavouritePokemon(id) {
    const favouritePokemon = getFavouritePokemon();
    favouritePokemon.push(id);
    localStorage.setItem(FAVOURITE_POKEMON_KEY, JSON.stringify(favouritePokemon));
}

export function removeFavouritePokemon(id) {
    const favouritePokemon = getFavouritePokemon();
    const updatedFavouritePokemon = favouritePokemon.filter((item) => item !== id);
    localStorage.setItem(FAVOURITE_POKEMON_KEY, JSON.stringify(updatedFavouritePokemon));
    return updatedFavouritePokemon;
}

