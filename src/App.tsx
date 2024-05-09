import { Routes, Route } from "react-router-dom";
import PokemonList from "./views/PokemonList";
import Favourites from "./views/Favourites";
import PokemonDetails from "./views/PokemonDetails";
import Navbar from "./components/Navbar";


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

