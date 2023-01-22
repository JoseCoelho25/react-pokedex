import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeSpecies = ({ pokemon }) => {
  const [pokemonSpecies, setPokemonSpecies] = useState({});

  useEffect(() => {
    if (pokemon.species) {
      axios
        .get(pokemon.species.url)
        .then((response) => setPokemonSpecies(response.data))
        .catch((error) => console.log(error));
    }
  }, [pokemon]);

  return (
    <div>
      {pokemonSpecies.capture_rate ? (
        <div>
          <p>Capture Rate: {pokemonSpecies.capture_rate}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeSpecies;