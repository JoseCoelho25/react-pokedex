import React from 'react'

function PokeNameId({pokemon}) {
  return (
    <div className="text-4xl grid grid-cols-2 text-center">
        <div >{pokemon.name}</div>
        <div>#{pokemon.id}</div>
    </div>
  )
}

export default PokeNameId