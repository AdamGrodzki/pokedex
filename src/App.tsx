import { Routes, Route } from "react-router-dom";
import PokemonList from "./views/PokemonList/PokemonList";
import Favourites from "./views/Favourites/Favourites";
import PokemonDetails from "./views/PokemonDetails/PokemonDetails";
import Navbar from "./components/Navbar/Navbar";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/favourite" element={<Favourites />} />
      </Routes>
    </div >
  );
}

