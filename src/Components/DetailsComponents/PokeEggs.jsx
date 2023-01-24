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
      <div className="font-bold text-center">Egg Groups</div>
       {pokemonEggs.egg_groups ? (
        <div >
          <div className="flex justify-center gap-x-2 bg-white rounded-lg mr-1">{pokemonEggs.egg_groups.length !== 0 ? pokemonEggs.egg_groups.map(entries=> <p key={entries.name} >{entries.name.charAt(0).toUpperCase()+entries.name.slice(1)}</p>) : ""}</div>
        </div>
      ) : (
        ""
      )} 
    </div>
  );
};

export default PokeEggs;