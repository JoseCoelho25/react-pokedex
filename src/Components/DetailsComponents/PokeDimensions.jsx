import React from 'react';

const keygen = () => Date.now().toString() + Math.random()

function PokeDimensions({pokemon}) {
     
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <div className="font-bold text-center">Height</div>
          <div className="text-center">{pokemon.height*10}cm or {pokemon.height/10}m</div>
        </div>
        <div>
          <div className="font-bold text-center">Weight</div>
          <div className="text-center">{pokemon.weight/10}Kg</div>
        </div>
        
      </div>
        {pokemon.stats ? (
            <div className="flex"> {pokemon.stats.length !== 0 ? pokemon.stats.map(entries=> <div key={keygen()} className="grid grid-cols-2 gap-x-2">{entries.base_stat}{entries.stat.name}</div>) : ""}</div>
        ):""}
    </div>
  )
}

export default PokeDimensions