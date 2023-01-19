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

      console.log(pokemons[0])
  return (
    <div>
         <div>
            {pokemons.map((pokemon, index)=>(
                <ul key={index}>
                    <li>{pokemon[0].name}</li>
                </ul>
            ))}
        </div> 
    </div>
  )
}

export default HomePage