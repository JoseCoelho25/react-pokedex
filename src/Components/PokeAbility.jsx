import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeAbility({ pokemon }) {
    const [pokemonAbility, setPokemonAbility]= useState([]);

    useEffect(() => {
        if(pokemon.abilities){
            const promises = pokemon.abilities.map(ability => axios.get(ability.ability.url))
            Promise.all(promises)
            .then(response =>{
                const abilities = response.map(res => res.data);
                setPokemonAbility(abilities);
            })
            .catch(error => console.log(error));
        }
      }, [pokemon]);

  return (
    <div>
        {pokemonAbility.length !== 0 ?
         <div className="flex">
           {pokemonAbility.map((ability)=>(
            <div key={ability.name}>
                <p>{ability.name}</p>
                {ability.effect_entries.length !== 0? 
                <p>{ability.effect_entries[1].effect}</p>
                :''}
            </div>
            ))}
        </div>
        :""}  
    </div>
  )
}

export default PokeAbility