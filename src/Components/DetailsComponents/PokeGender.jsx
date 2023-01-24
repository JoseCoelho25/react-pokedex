import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeGender = ({ pokemon }) => {
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
      <div className="font-bold text-center">Gender ratio</div>
      {pokemonSpecies.gender_rate ? (
        <div>
          <p className="text-center bg-white rounded-lg">{pokemonSpecies.gender_rate/8*100}% changes of being female and {(8-pokemonSpecies.gender_rate)/8*100}% changes of being male!</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeGender;
