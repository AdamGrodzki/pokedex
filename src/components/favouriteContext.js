// import { createContext, useState } from "react";

// export const FavouriteContext = createContext();

// export const FavouriteProvider = ({ children }) => {
//     const [favourites, setFavourites] = useState(
//         JSON.parse(localStorage.getItem('favouritePokemon')) || []
//     );

//     const toggleFavourite = (pokemonId) => {
//         if (favourites.includes(pokemonId)) {
//             setFavourites(favourites.filter((id) => id !== pokemonId));
//             localStorage.setItem(
//                 "favouritePokemon",
//                 JSON.stringify(favourites.filter((id) => id !== pokemonId))
//             );
//         } else {
//             if (favourites.length >= 6) {
//                 return;
//             }
//             setFavourites([...favourites, pokemonId]);
//             localStorage.setItem(
//                 "favouritePokemon",
//                 JSON.stringify([...favourites, pokemonId])
//             );
//         }
//     };

//     return (
//         <FavouriteContext.Provider value={{ favourites, toggleFavourite }}>
//             {children}
//         </FavouriteContext.Provider>
//     );
// };