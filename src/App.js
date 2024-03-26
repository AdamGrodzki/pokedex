import React from "react";
import Navbar from "./pages/Navbar";
import Pokedex from "./pages/Pokedex";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" component={<Pokedex />} />
        <Route path="/" component={<Navbar />} />
      </Routes >
    </Router>
  );
}


