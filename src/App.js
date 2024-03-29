import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonList from './components/PokemonList';
import PokemonDetails from "./components/PokemonDetails";
import Favourites from "./components/Favourites";
import Navbar from "./components/Navbar";


export default function App() {

  const [pokemons, setPokemons] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState("")


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await response.json();
      setPrevious(data.previous)
      setNext(data.next)
      setPokemons(data.results)
    }

    fetchData();
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<PokemonList pokemons={pokemons} previous={previous} next={next} />} />
        <Route path='/pokemon/:pokemonName' element={<PokemonDetails />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </div >
  );
}

