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
         <ul>
            {pokemons.map((pokemon)=>
                <li>{pokemon[0].name}</li>
            )}
        </ul> 
    </div>
  )
}

export default HomePage