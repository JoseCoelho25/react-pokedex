import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function DetailsCard() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [pokemonAbility, setPokemonAbility]= useState([]);
  
    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => setPokemon(response.data))
        .catch(error => console.log(error));
    }, [id]);
    
    useEffect(() => {
    if(pokemon.abilities){
        const promises = pokemon.abilities.map(ability => axios.get(ability.ability.url))
        Promise.all(promises)
        .then(response =>{
            const abilities = response.map(res => res.data);
            setPokemonAbility(abilities);
        })
        .catch(error => console.log(error));
    }
  }, [pokemon]);
    
    
    return (
        <div>
        <h1>{pokemon.name}</h1>
        {/* ternary operator to allow the request for the API sprites */}
        {pokemon.sprites && pokemon.sprites.front_default ? 
         <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-1/5"/>:
         <p>Loading...</p>}
          {pokemonAbility.length !== 0 ?
         <div className="flex">
           {pokemonAbility.map((ability)=>(
            <div key={ability.name}>
                <p>{ability.name}</p>
                {ability.effect_entries.length !== 0? 
                <p>{ability.effect_entries[1].effect}</p>
                :''}
            </div>
            ))}
        </div>
        :""}  
      </div>
    );
  }
  
  export default DetailsCard;
