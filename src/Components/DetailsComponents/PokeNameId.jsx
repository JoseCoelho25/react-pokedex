import React from 'react'

function PokeNameId({pokemon, bgColor}) {
  return (
    <div className="text-2xl grid grid-cols-3 w-full text-center gap-x-2 absolute top-24 z-0">
        <div className={`${bgColor} text-white font-bold  col-span-2`}>{pokemon.name}</div>
        <div className={`${bgColor} text-white font-bold text-2xl`}>#{pokemon.id}</div>
    </div>
  )
}

export default PokeNameId