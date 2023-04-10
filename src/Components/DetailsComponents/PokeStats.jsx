import React from 'react';


const keygen = () => Date.now().toString() + Math.random()

function PokeStats({pokemon}) {
    
  return (
    <div className='w-full '>
      
      <div className="text-center font-bold">Stats</div>
        {pokemon.stats ? (
            <div className="grid grid-rows-6  gap-x-2 md:gap-x-10"> {pokemon.stats.length !== 0 ? pokemon.stats.map(entries=> <div key={keygen()} className="text-center bg-white rounded-lg text-clip overflow-hidden">
              <div className="block">
                <div className="text-sm">{entries.base_stat} </div>
                <div className="text-xs">{entries.stat.name}</div>
              </div>
              </div>) : ""}</div>
        ):""}
    </div>
  )
}

export default PokeStats