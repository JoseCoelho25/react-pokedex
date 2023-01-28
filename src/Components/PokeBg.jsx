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
                    setBgColor("bg-orange-600")
                    break;
                case "poison":
                    setBgColor("bg-violet-700")
                    break;
                case "water":
                    setBgColor("bg-blue-400")
                    break;
                case "grass":
                    setBgColor("bg-green-400")
                    break;
                case "electric":
                    setBgColor("bg-yellow-400");
                    break;
                case "ground":
                    setBgColor("bg-yellow-700");
                    break;
                case "fairy":
                    setBgColor("bg-red-300");
                    break;
                case "fighting":
                    setBgColor("bg-red-600");
                    break;
                case "psychic":
                    setBgColor("bg-violet-500");
                    break;
                case "dragon":
                    setBgColor("bg-blue-900");
                    break;
                case "ghost":
                    setBgColor("bg-indigo-900");
                    break;
                case "ice":
                    setBgColor("bg-blue-200");
                    break;
                case "bug":
                    setBgColor("bg-green-600");
                    break;
                case "rock":
                    setBgColor("bg-yellow-900");
                    break;
                default:
                    setBgColor("bg-neutral-400")
            }
            })
            .catch((error) => console.log(error));
        }
      }, [pokemon]);

  
  return (
    <div className={`container mx-auto w-full mt-36 ${bgColor} rounded-2xl`}>
        {children}
    </div>
  )
}

export default PokeBg;