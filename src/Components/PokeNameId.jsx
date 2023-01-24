import React from 'react'

function PokeNameId({pokemon}) {
  return (
    <div className="text-4xl grid grid-cols-2 text-center">
        <div >{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</div>
        <div>#{pokemon.id}</div>
    </div>
  )
}

export default PokeNameId