import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeTypes = ({ pokemon }) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    if (pokemon.types) {
      const promises = pokemon.types.map((type) => axios.get(type.type.url));
      Promise.all(promises)
        .then((response) => {
          const types = response.map((res) => res.data.name);
          setPokemonTypes(types);
        })
        .catch((error) => console.log(error));
    }
  }, [pokemon]);

  return (
    <div>
      {pokemonTypes.length !== 0 ? (
        <div>
          {pokemonTypes.map((type) => (
            <p key={type}>{type}</p>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeTypes;
