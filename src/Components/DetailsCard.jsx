import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import PokeTypes from '../Components/PokeTypes';
import PokeAbility from './PokeAbility';
import PokeGender from './PokeGender';
import PokeSpecies from './PokeSpecies';
import PokeEggs from './PokeEggs';
import PokeHatch from './PokeHatch';
import PokeDimensions from './PokeDimensions';
import PokeNameId from './PokeNameId';


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
      <div className="container mx-auto w-1/2">
        <PokeNameId pokemon={pokemon}/>
        
        {/* ternary operator to allow the request for the API sprites */}
        {pokemon.sprites && pokemon.sprites.front_default ? 
         <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-1/5 mx-auto bg-white rounded-xl"/>:
         <p>Loading...</p>}
         <div className="flex w-1/4 mx-auto text-end text-2xl">
          <div className="w-1/2">Type:</div>
          <PokeTypes pokemon={pokemon} className=""/>
         </div>
         
        <PokeAbility pokemon={pokemon} />
        <PokeGender pokemon={pokemon}/>
        <PokeSpecies pokemon={pokemon}/>
        <div>Breeding</div>
        <PokeEggs pokemon={pokemon}/>
        <PokeHatch pokemon={pokemon}/>
        <PokeDimensions pokemon={pokemon}/>
      </div>
    );
  }
  
  export default DetailsCard;
