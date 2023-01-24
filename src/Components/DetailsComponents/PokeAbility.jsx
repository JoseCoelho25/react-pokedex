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

      console.log(pokemonAbility.length)
  return (
    <div>
        {pokemonAbility.length !== 0 ?
        // ternary to display columns by array.length
         <div className={`grid text-center gap-x-2 ${pokemonAbility.length === 1 ? `grid-cols-1` : pokemonAbility.length === 2 ? `grid-cols-2` : `grid-cols-3`}`}>
           {pokemonAbility.map((ability)=>(
            <div key={keygen()}>
                <p className="font-bold  text-center ">{ability.name.charAt(0).toUpperCase()+ability.name.slice(1)}</p>
                {/* needed a filter to display only the content in english */}
                {ability.effect_entries.length !== 0? 
                ability.effect_entries
                .filter(entry => entry.language.name === "en")
                .map(entry => <p key={keygen()} className="bg-white rounded-lg">{entry.effect}</p>)
                :''}
            </div>
            ))}
        </div>
        :""}  
    </div>
  )
}

export default PokeAbility