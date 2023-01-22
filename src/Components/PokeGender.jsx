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
      {pokemonSpecies.gender_rate ? (
        <div>
          <p>Gender Rate: {pokemonSpecies.gender_rate/8*100}% changes of being female and {(8-pokemonSpecies.gender_rate)/8*100}% changes of being male!</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeGender;
