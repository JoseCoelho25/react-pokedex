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
        {pokemonHatch.hatch_counter ? ( 
            <div>
                <p>Hatch timer: {(pokemonHatch.hatch_counter+1)*255}steps to hatch.</p>
            </div>
        ) : (
        ""
        )}
        </div> 
      );
    };

export default PokeHatch;
