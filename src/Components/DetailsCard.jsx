import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import PokeTypes from '../Components/PokeTypes';
import PokeAbility from './PokeAbility';
import PokeGender from './PokeGender';
import PokeSpecies from './PokeSpecies';


function DetailsCard() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
  
    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => setPokemon(response.data))
        .catch(error => console.log(error));
    }, [id]);
    
    
    return (
        <div>
        <h1>{pokemon.name}</h1>
        {/* ternary operator to allow the request for the API sprites */}
        {pokemon.sprites && pokemon.sprites.front_default ? 
         <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-1/5"/>:
         <p>Loading...</p>}
        <PokeTypes pokemon={pokemon} />
        <PokeAbility pokemon={pokemon}/>
        <PokeGender pokemon={pokemon}/>
        <PokeSpecies pokemon={pokemon}/>
      </div>
    );
  }
  
  export default DetailsCard;
