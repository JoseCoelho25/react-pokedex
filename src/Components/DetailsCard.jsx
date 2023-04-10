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



function DetailsCard() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [bgColor, setBgColor] = useState("");
  
    
    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => {
          response.data.name = response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1);
          setPokemon(response.data)
          if (response.data.types) {
            const promises = response.data.types.map((type) => axios.get(type.type.url));
            Promise.all(promises)
              .then((responses) => {
                const types = responses.map((response) => response.data.name);
                switch(types[0]){
                  case "fire":
                    setBgColor("bg-[#F57D31]")
                    break;
                  case "poison":
                    setBgColor("bg-[#7B61FF]")
                    break;
                  case "water":
                    setBgColor("bg-[#6493EB]")
                    break;
                  case "grass":
                    setBgColor("bg-[#74CB48]")
                    break;
                  case "electric":
                    setBgColor("bg-[#F9CF30]");
                    break;
                  case "ground":
                    setBgColor("bg-[#DEC16B]");
                    break;
                  case "fairy":
                    setBgColor("bg-[#E69EAC]");
                    break;
                  case "fighting":
                    setBgColor("bg-[#C12239]");
                    break;
                  case "psychic":
                    setBgColor("bg-[#FB5584]");
                    break;
                  case "dragon":
                    setBgColor("bg-[#7037FF]");
                    break;
                  case "ghost":
                    setBgColor("bg-[#70559B]");
                    break;
                  case "ice":
                    setBgColor("bg-[#9AD6DF]");
                    break;
                  case "bug":
                    setBgColor("bg-[#A7B723]");
                    break;
                  case "rock":
                    setBgColor("bg-[#B69E31]");
                    break;
                  case "steel":
                    setBgColor("bg-[#B7B9D0]");
                    break;
                  case "dark":
                    setBgColor("bg-[#75574C]");
                    break;
                  default:
                    setBgColor("bg-[#AAA67F]")
                }
              })
              .catch((error) => console.log(error));
          }
        })
        .catch(error => console.log(error));   
    }, [id]);
    
      
    return (
      
        <div className={`p-5 ${bgColor}`}>
          <PokeNameId pokemon={pokemon}/>
        {pokemon.sprites && pokemon.sprites.front_default ?
        <div className={`${bgColor} w-full h-48`}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mx-auto bg-no-bg rounded-xl mt-2`}/>
        </div> 
         :
         <p>Loading...</p>}
         <div className='bg-white w-full h-fit rounded-lg'>
          <div className="flex w-1/2 mx-auto text-start text-2xl pt-24 mb-5">
            <PokeTypes pokemon={pokemon} bgColor={bgColor}/>
         </div>
  
          <PokeAbility pokemon={pokemon} />

          <div className="grid grid-cols-2 mt-10">
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
         
         
      </div>
    
      
      
    );
  }
  
  export default DetailsCard;
