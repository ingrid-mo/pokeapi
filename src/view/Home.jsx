import { PokemonContext } from "../context/CharacterContext";
import { useContext, useEffect } from "react";

const Home = () => {
  let { pokemon, getPokemon } = useContext(PokemonContext);
  useEffect(() => {
    getPokemon("/pikachu");
  }, []);

  return (
    <div className="bighero">
      <h1>Hola entrenador pokemon</h1>

      {pokemon.sprites && (
        <img
          className="bighero__img"
          src={pokemon.sprites.back_default}
          alt="Pokemon Sprite"
        />
      )}
    </div>
  );
};

export default Home;
