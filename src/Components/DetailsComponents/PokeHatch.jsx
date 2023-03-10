import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeHatch = ({ pokemon }) => {
  const [pokemonHatch, setPokemonHatch] = useState({});

  useEffect(() => {
    if (pokemon.species) {
      axios
        .get(pokemon.species.url)
        .then((response) => setPokemonHatch(response.data))
        .catch((error) => console.log(error));
    }
  }, [pokemon]);

 
  return (
    <div>
      <div className="font-bold text-center">Hatch Time</div>
        {pokemonHatch.hatch_counter ? ( 
            <div>
                <p className="text-center bg-white rounded-lg ml-1">{(pokemonHatch.hatch_counter+1)*255} steps to hatch</p>
            </div>
        ) : (
        ""
        )}
        </div> 
      );
    };

export default PokeHatch;
