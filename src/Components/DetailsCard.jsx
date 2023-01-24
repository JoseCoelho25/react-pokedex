import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import PokeTypes from './DetailsComponents/PokeTypes';
import PokeAbility from './DetailsComponents/PokeAbility';
import PokeGender from './DetailsComponents/PokeGender';
import PokeSpecies from './DetailsComponents/PokeSpecies';
import PokeEggs from './DetailsComponents/PokeEggs';
import PokeHatch from './DetailsComponents/PokeHatch';
import PokeDimensions from './DetailsComponents/PokeDimensions';
import PokeNameId from './DetailsComponents/PokeNameId';
import PokeBg from './PokeBg';


function DetailsCard() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
  
    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => {
          // had to do the uppercase here in useeffect because of the pokemon initial rendering
          response.data.name = response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1);
          setPokemon(response.data)
        })
        .catch(error => console.log(error));
        
    }, [id]);
   
      
    return (
      <PokeBg pokemon={pokemon}>
        <div className="">
        <PokeNameId pokemon={pokemon}/>
        
        {/* ternary operator to allow the request for the API sprites */}
        {pokemon.sprites && pokemon.sprites.front_default ? 
         <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-1/5 mx-auto bg-white rounded-xl"/>:
         <p>Loading...</p>}
         <div className="flex w-1/4 mx-auto text-end text-2xl mt-5 mb-5">
            <div className="w-1/2">Type:</div>
            <PokeTypes pokemon={pokemon} className=""/>
         </div>
  
        <PokeAbility pokemon={pokemon} />

        <div className="grid grid-cols-2 mt-5">
          <PokeGender pokemon={pokemon}/>
          <PokeSpecies pokemon={pokemon}/>
        </div>
        
        <div className="text-center font-bold mt-5">Breeding</div>
        <div className="grid grid-cols-2">
          <PokeEggs pokemon={pokemon}/>
          <PokeHatch pokemon={pokemon}/>
        </div>
        
        <PokeDimensions pokemon={pokemon}/>
         
      </div>
      </PokeBg>
      
      
    );
  }
  
  export default DetailsCard;
