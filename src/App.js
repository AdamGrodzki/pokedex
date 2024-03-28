import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonList from './components/PokemonList';
import PokemonDetails from "./components/PokemonDetails";


export default function App() {

  const [pokemons, setPokemons] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await response.json();
      console.log(data);
      setPrevious(data.previous)
      setPokemons(data.results)
    }

    fetchData();
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<PokemonList pokemons={pokemons} previous={previous} />} />
        <Route path='/pokemon/:pokemonName' element={<PokemonDetails />} />
      </Routes>
    </div >
  );
}

