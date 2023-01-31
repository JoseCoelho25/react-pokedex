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
        <div className="grid grid-cols-1 md:gap-x-2 md:w-auto">
          {pokemonTypes.map((type) => (
            <div key={type}>{type.charAt(0).toUpperCase()+type.slice(1)}</div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeTypes;
