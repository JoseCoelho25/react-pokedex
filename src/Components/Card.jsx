import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

function Card() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getPokemons();
    },[])
  
    const getPokemons = ()=>{
        const endpoints = [];
        for(let i=1; i <152; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint)=> axios.get(endpoint)))
        .then((res)=>{
            setPokemons(res);
            setLoading(false);
        });
    };
   
  return (
    <div>
        {loading && <div>Loading...</div>}
        <div className="container grid grid-cols-8 mx-auto border-2">
            {pokemons.map((p, index)=>(
                <Link to={`/pokemon/${p.data.id}`} key={index}>
                      <img src={p.data.sprites.front_default} alt={p.name} />
                     <h3>{p.data.name.charAt(0).toUpperCase()+p.data.name.slice(1)}</h3>
                    
                </Link>             
            ))}
        </div> 
    </div>
  )
}

export default Card
