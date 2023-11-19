import  { useEffect, useContext } from "react";
import { PokemonContext } from "../context/CharacterContext";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const SelectionPokemons = () => {
  const navigate = useNavigate();
 
  const { pokemon, getPokemon,selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  useEffect(() => {
    getPokemon("?limit=150");
  }, []);
 

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Pokemon seleccionado:', selectedPokemon);
    navigate("/pokemons-perfil/" + selectedPokemon);
  };
 

  return (
    <div className="opcion__seccion">
      <Form className="opcion__bar" onSubmit={handleSubmit}>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectChange}
          value={selectedPokemon}
        >
          <option>Select a Pokemon</option>
          {pokemon && pokemon.results && pokemon.results.length > 0 ? (
            pokemon.results.map((poke) => (
              <option key={poke.name}>{poke.name}</option>
            ))
          ) : (
            <h1>Not found</h1>
          )}
        </Form.Select>
        <button type="submit" className="btn btn-dark">
          ver más
        </button>
      </Form>
    </div>  
  );
};

export default SelectionPokemons;
