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
    <div className="my-8">
      {pokemonSpecies.flavor_text_entries && pokemonSpecies.flavor_text_entries.length > 0 && (
            <p className="text-center px-2"> {pokemonSpecies.flavor_text_entries[0].flavor_text}</p>
          )}
      {/* <div className="font-bold text-center">Catch Rate</div>
      {pokemonSpecies.capture_rate ? (
        <div className="bg-white rounded-lg ml-1">
          <p className="text-center">Capture Rate: {pokemonSpecies.capture_rate}</p>
          <p className="text-center">Percentage Capture rate : {Math.round(pokemonSpecies.capture_rate/255*100)}%</p>
          
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default PokeSpecies;
