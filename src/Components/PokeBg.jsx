import React, {useState, useEffect} from "react";
import axios from "axios";

function PokeBg({pokemon, children}) {
    const [bgColor, setBgColor] = useState("");
    

    useEffect(() => {
        if (pokemon.types) {
          const promises = pokemon.types.map((type) => axios.get(type.type.url));
          Promise.all(promises)
            .then(() => {
              switch(pokemon.types[0].type.name){
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
      }, [pokemon]);

  
  return (
    <div className={`container mx-auto w-full mt-28 ${bgColor} rounded-2xl`}>
        {children}
    </div>
  )
}

export default PokeBg;