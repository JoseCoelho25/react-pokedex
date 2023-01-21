import React, {useState, useEffect} from 'react'

function HomePage() {
    const [pokemons, setPokemons] = useState ([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
          .then(response => response.json())
          .then(data => {
            setPokemons(data.results)
          });
      }, []);

     
  return (
    <div>
         <div className="container grid grid-cols-4">
            {pokemons.map((p, index)=>(
                <div key={index}>
                    <h3>{p.name}</h3>
                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={p.name} /> 
                </div>             
            ))}
        </div> 
    </div>
  )
}

export default HomePage