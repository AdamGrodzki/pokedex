import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext({});

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(
        localStorage.getItem('favPokemons')
            ? JSON.stringify(localStorage.getItem('favPokemons'))
            : []
    );

    const addFavourite = (details) => {
        setFavourites([...favourites, details])
    };

    const removeFavourite = (details) => {
        const removeFavourite = favourites?.find((removePokemon) => {
            return removePokemon.name === details.name
        });

        if (!removeFavourite) return;

        const updatedFavourites = favourites.filter(
            (removePokemon) => removePokemon !== removeFavourite);
        setFavourites(updatedFavourites);
    };

    const toggleFavourite = (details) => {
        isFavourited(details) ? removeFavourite(details) : addFavourite(details);
    };

    const isFavourited = (details) => {
        const favourited = favourites.find(
            (favouritedPokemon) => favouritedPokemon.name === details.name
        );
        return favourited;
    };

    useEffect(() => {
        const hasLocalFavourites = localStorage.getItem('favPokemons')
            ? JSON.parse(localStorage.getItem('favPokemons'))
            : [];

        setFavourites(hasLocalFavourites)
    }, []);

    localStorage.setItem('favPokemons', JSON.stringif(favourites))

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addFavourite,
                isFavourited,
                toggleFavourite,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};

