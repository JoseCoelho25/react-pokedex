import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import PokeTypes from './DetailsComponents/PokeTypes';
import PokeAbility from './DetailsComponents/PokeAbility';
import PokeSpecies from './DetailsComponents/PokeSpecies';
import PokeStats from './DetailsComponents/PokeStats'
import PokeDimensions from './DetailsComponents/PokeDimensions';
import PokeNameId from './DetailsComponents/PokeNameId';
import Poke from '../assets/imgs/pokeball.png';


function DetailsCard() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [bgColor, setBgColor] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
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
                setIsLoading(false);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch(error => console.log(error));   
    }, [id]);
    
    const color = bgColor.split("bg-");

    return (
      <div className={`p-2 mt-24 ${bgColor} w-full md:w-1/3 mx-auto rounded-lg`}>
      {isLoading ? (
        <div className="inset-x-0 bottom-0 h-2/3 absolute">
        <div className="flex justify-center  mt-36 md:mt-2 lg:mt-48">
          <span className="text-6xl">Loading...</span>
          <img src={Poke} alt="pokeball" className="h-24 w-24" />
        </div>
      </div>
      ) : (
        <>
          {pokemon.sprites && pokemon.sprites.front_default ? (
            <div className={`${bgColor} w-full h-48 md:h-36 mt-10`}>
              <PokeNameId pokemon={pokemon} bgColor={bgColor} />
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className={`w-full lg:w-1/2  mx-auto bg-no-bg rounded-xl mt-2 `}
              />
            </div>
          ) : null}
          <div className='bg-white w-full h-fit rounded-lg'>
            <div className='flex w-full mx-auto text-start text-2xl pt-24 mb-5'>
              <PokeTypes pokemon={pokemon} bgColor={bgColor} />
            </div>

            <p
              className={`text-${color[1]} text-center font-bold text-xl mb-2`}
            >
              About
            </p>

            <div className='flex'>
              <PokeDimensions pokemon={pokemon} />
              <PokeAbility pokemon={pokemon} />
            </div>

            <PokeSpecies pokemon={pokemon} />

            <PokeStats pokemon={pokemon} bgColor={bgColor} />
          </div>

          {/* <PokeGender pokemon={pokemon} /> */}
        </>
      )}
    </div>
    );
  }
  
  export default DetailsCard;
