import React from 'react'

function PokeNameId({pokemon}) {
  return (
    <div className="text-4xl grid grid-cols-3 text-center gap-x-2 ">
        <div className="bg-white rounded-lg col-span-2">{pokemon.name}</div>
        <div className="bg-white rounded-lg">#{pokemon.id}</div>
    </div>
  )
}

export default PokeNameId