import React, { useState, useEffect } from "react";
import { getAllPokemon } from './api/index'
import "./App.css";

const pokeurl = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    let response = await getAllPokemon(pokeurl);
    console.log(response.data);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <h1>Data is fetched</h1>}</div>;
}

export default App;
