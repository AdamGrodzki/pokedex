
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonList from './components/PokemonList';
import PokemonDetails from "./components/PokemonDetails";
import { CgPokemon } from "react-icons/cg";


export default function App() {

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
      const data = await response.json();
      console.log(data);
      setPokemons(data.results)
    }

    fetchData();
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<PokemonList pokemons={pokemons} />} />
        <Route path='/pokemon/:pokemonName' element={<PokemonDetails />} />
      </Routes>
    </div >
  );
}

