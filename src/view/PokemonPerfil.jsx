import  { useEffect, useContext } from "react";
import { PokemonContext } from "../context/CharacterContext";
import { useParams } from "react-router-dom";

const PokemonGuia = () => {



  const { name } = useParams();

  const { pokemon, getPokemon, selectedPokemon, } = useContext(PokemonContext);
  
console.log(name)
  useEffect(() => {
    getPokemon(`/${selectedPokemon}`);
  }, []);

  console.log('seleccionado es: ' + JSON.stringify(selectedPokemon))



  return (
    <div className="pokemon_section">
      <div className="pokemon_img">
        <div className="background__img"></div>
       <span className="badge text-bg-danger">{pokemon.order}</span>
      {pokemon && pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt="" />
      )}
      </div>
      <div className="pokemon_stats">
       <h2> {pokemon.name}</h2> 
     
       <ul>
        {pokemon.stats && pokemon.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default PokemonGuia;
