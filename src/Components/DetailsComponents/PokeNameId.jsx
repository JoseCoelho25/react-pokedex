import React from 'react'

function PokeNameId({pokemon, bgColor}) {
  return (
    <div className="text-2xl pr-2 grid grid-cols-3 w-full md:w-1/3 text-center gap-x-2 absolute top-28 md:top-28 z-0 rounded-lg md:pr-4">
        <div className={`${bgColor} text-white font-bold  col-span-2`}>{pokemon.name}</div>
        <div className={`${bgColor} text-white font-bold text-2xl`}>#{pokemon.id}</div>
    </div>
  )
}

export default PokeNameId