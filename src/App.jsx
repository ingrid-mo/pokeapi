import { Routes, Route } from "react-router-dom";
import Navegation from "./components/Navegation";
import Home from "./view/Home";
import SelectionPokemons from "./view/selection";
import "./App.css";
import NotFound from "./view/NotFound";
import PokemonGuia from "./view/PokemonPerfil";
import CharacterProvider from "./context/CharacterContext";

const App = () => {
  return (
    <>
      <Navegation />
      <CharacterProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div >
                <Home />
              </div>
            }
          />

          <Route
            path="/pokemons"
            element={
              <div >
                <SelectionPokemons />
              </div>
            }
          />
             <Route
            path="/pokemons-perfil/:name"
            element={
              <div >
                <PokemonGuia />
              </div>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CharacterProvider>
    </>
  );
};

export default App;
