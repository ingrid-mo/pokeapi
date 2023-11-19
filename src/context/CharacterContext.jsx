import { createContext, useState, useEffect } from "react";
export const PokemonContext = createContext();
import axios from "axios";

const CharacterProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  // const [pokemonList, setPokemonList] = useState([]);
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const getPokemon = async (parametro) => {
    try {
      let response = [];
      if(parametro) {
        response = await axios.get(apiUrl + parametro);
      } else {
        response = await axios.get(apiUrl);
      }
      
      const data = response.data;
      setPokemon(data);
    } catch (err) {
      console.log("Error al obtener datos del json:", err);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);
  console.log(pokemon);

  return (
    <PokemonContext.Provider value={{ pokemon, getPokemon, apiUrl, selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
export default CharacterProvider;
