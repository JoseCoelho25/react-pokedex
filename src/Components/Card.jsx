import React, {useState, useEffect} from 'react'
import axios from "axios";

function Card() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getPokemons();
    },[])
  
    const getPokemons = ()=>{
        const endpoints = [];
        for(let i=1; i <152; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        const response = axios.all(endpoints.map((endpoint)=> axios.get(endpoint))).then((res)=>setPokemons(res));
        return response;
    };
  return (
    <div>
         <div className="container grid grid-cols-4">
            {pokemons.map((p, index)=>(
                <div key={index}>
                      <img src={p.data.sprites.front_default} alt={p.name} />
                     <h3>{p.data.name}</h3>
                     
                </div>             
            ))}
        </div> 
    </div>
  )
}

export default Card