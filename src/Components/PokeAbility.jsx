import React, { useState, useEffect } from "react";
import axios from "axios";

// variavel para criar keys unicas
const keygen = () => Date.now().toString() + Math.random()

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
            <div key={keygen()}>
                <p>{ability.name}</p>
                {/* needed a filter to display only the content in english */}
                {ability.effect_entries.length !== 0? 
                ability.effect_entries
                .filter(entry => entry.language.name === "en")
                .map(entry => <p key={keygen()}>{entry.effect}</p>)
                :''}
            </div>
            ))}
        </div>
        :""}  
    </div>
  )
}

export default PokeAbility