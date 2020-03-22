import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./api/index";
import Card from "./components/Card";
import "./App.css";

const pokeurl = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataPokemon = async () => {
      let response = await getAllPokemon(pokeurl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    };
    fetchDataPokemon();
  }, []);

  const loadingPokemon = async data => {
    console.log("data", data);
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="grid-container">
            {pokemonData.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
