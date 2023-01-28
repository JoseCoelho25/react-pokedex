import React from 'react';

const keygen = () => Date.now().toString() + Math.random()

function PokeDimensions({pokemon}) {
     
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-2">
        <div>
          <div className="font-bold text-center">Height</div>
          <div className="text-center bg-white rounded-lg">{pokemon.height*10}cm or {pokemon.height/10}m</div>
        </div>
        <div >
          <div className="font-bold text-center">Weight</div>
          <div className="text-center bg-white rounded-lg">{pokemon.weight/10}Kg</div>
        </div>
        
      </div>
      <div className="text-center font-bold">Stats</div>
        {pokemon.stats ? (
            <div className="grid grid-cols-6 gap-x-10"> {pokemon.stats.length !== 0 ? pokemon.stats.map(entries=> <div key={keygen()} className="text-center bg-white rounded-lg text-clip overflow-hidden">{entries.base_stat} {entries.stat.name}</div>) : ""}</div>
        ):""}
    </div>
  )
}

export default PokeDimensions