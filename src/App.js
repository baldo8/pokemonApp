import "./App.css";
import { useState } from "react";
import MovesComponent from "./components/MovesComponent/MovesComponent";
import HeldItemComponent from "./components/HeldItems/HeldItemComponent";
import FormsComponent from "./components/FormsComponent/FormsComponent";
import AbilitiesComponent from "./components/AbilitiesComponent/AbilitiesComponent";
import SpritesComponent from "./components/SpritesComponent/SpritesComponent";

import Pokedex from "./components/Pokedex/Pokedex";
function App() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const searchpokemon = async () => {
    // 1. call api to get pokemon details
    // 2. save details to state
    // 3. https://pokeapi.co/api/v2/pokemon/ditto
    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      const data = await res?.json();
      console.log(data);

      setPokemon(data);
    } catch (error) {
      console.log(error.message || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Pokemon</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchpokemon}>Search</button>

      <div>
        <Pokedex pokemon={pokemon} loading={loading} />
      </div>
      <div>
        <SpritesComponent
          sprites={pokemon.sprites}
          name={pokemon.name}
          id={pokemon.id}
        />
      </div>
      <div>
        <AbilitiesComponent abilities={pokemon.abilities} />

        <div>
          <FormsComponent forms={pokemon.forms} />
        </div>
        <div>
          <HeldItemComponent held_items={pokemon.held_items} />
        </div>
        <div>
          <MovesComponent moves={pokemon.moves} />
        </div>
      </div>
    </div>
  );
}

export default App;
