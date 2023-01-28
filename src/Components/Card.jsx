import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

function Card({setIsCardLoaded}) {
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
            setIsCardLoaded(true);
        });
    };
   
  return (
    <div>
        {loading && <div>Loading...</div>}
        <div className="container grid grid-cols-8 mx-auto  rounded-lg mt-32 mb-32 gap-x-2">
            {pokemons.map((p, index)=>(
                <Link to={`/pokemon/${p.data.id}`} key={index} >
                      <img src={p.data.sprites.front_default} alt={p.name} className="border-black border-2 w-full rounded-lg bg-red-200"/>
                     <h3 className="text-center border-black border-2 mx-1 rounded-sm text-lg">{p.data.name.charAt(0).toUpperCase()+p.data.name.slice(1)}</h3> 
                </Link>             
            ))}
        </div> 
    </div>
  )
}

export default Card
