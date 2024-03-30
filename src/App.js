import { Routes, Route } from "react-router-dom";
import PokemonList from './components/PokemonList';
import Favourites from "./components/Favourites";
import PokemonComponent from "./components/PokemonDetails";
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/pokemon/:pokemonName' element={<PokemonComponent />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </div >
  );
}

