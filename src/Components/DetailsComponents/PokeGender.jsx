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
        <div className="w-full pr-1">
          <p className="text-center bg-white rounded-lg">{pokemonSpecies.gender_rate/8*100}% changes of being female and {(8-pokemonSpecies.gender_rate)/8*100}% changes of being male!</p>
          <div className="flex  ">
            <div style={{width:((8-pokemonSpecies.gender_rate)/8*100)+"%" }} className="bg-blue-600 rounded-l-full text-center">{(8-pokemonSpecies.gender_rate)/8*100}%</div>
            <div style={{width:((pokemonSpecies.gender_rate)/8*100)+"%"}} className="bg-violet-500 rounded-r-full text-center text-clip overflow-hidden">{pokemonSpecies.gender_rate/8*100}%</div>
          </div> 
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeGender;
