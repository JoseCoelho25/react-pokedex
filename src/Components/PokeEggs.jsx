import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeEggs = ({ pokemon }) => {
  const [pokemonEggs, setPokemonEggs] = useState({});

  useEffect(() => {
    if (pokemon.species) {
      axios
        .get(pokemon.species.url)
        .then((response) => setPokemonEggs(response.data))
        .catch((error) => console.log(error));
    }
  }, [pokemon]);

  
  return (
    <div>
       {pokemonEggs.egg_groups ? (
        <div >
          <div className="flex">Egg groups: {pokemonEggs.egg_groups.length !== 0 ? pokemonEggs.egg_groups.map(entries=> <p key={entries.name} >{entries.name}</p>) : ""}</div>
        </div>
      ) : (
        ""
      )} 
    </div>
  );
};

export default PokeEggs;