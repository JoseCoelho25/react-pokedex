import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeTypes = ({ pokemon,bgColor }) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [bgSecondColor, setSecondBgColor] = useState("");

  useEffect(() => {
    if (pokemon.types) {
      const promises = pokemon.types.map((type) => axios.get(type.type.url));
      Promise.all(promises)
        .then((response) => {
          const types = response.map((res) => res.data.name);
          setPokemonTypes(types);
          const secondType = response[1]?.data?.name;
          switch (secondType) {
            case "fire":
              setSecondBgColor("bg-[#F57D31]");
              break;
            case "poison":
              setSecondBgColor("bg-[#7B61FF]");
              break;
            case "water":
              setSecondBgColor("bg-[#6493EB]");
              break;
            case "grass":
              setSecondBgColor("bg-[#74CB48]");
              break;
            case "electric":
              setSecondBgColor("bg-[#F9CF30]");
              break;
            case "ground":
              setSecondBgColor("bg-[#DEC16B]");
              break;
            case "fairy":
              setSecondBgColor("bg-[#E69EAC]");
              break;
            case "fighting":
              setSecondBgColor("bg-[#C12239]");
              break;
            case "psychic":
              setSecondBgColor("bg-[#FB5584]");
              break;
            case "dragon":
              setSecondBgColor("bg-[#7037FF]");
              break;
            case "ghost":
              setSecondBgColor("bg-[#70559B]");
              break;
            case "ice":
              setSecondBgColor("bg-[#9AD6DF]");
              break;
            case "bug":
              setSecondBgColor("bg-[#A7B723]");
              break;
            case "rock":
              setSecondBgColor("bg-[#B69E31]");
              break;
            case "steel":
              setSecondBgColor("bg-[#B7B9D0]");
              break;
            case "dark":
              setSecondBgColor("bg-[#75574C]");
              break;
            default:
              setSecondBgColor("bg-[#AAA67F]");
          }
        })
        .catch((error) => console.log(error));
    }
  }, [pokemon]);
  
  const gridColumns = pokemonTypes.length > 1 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className="mx-auto text-center pt-10">
      {pokemonTypes.length !== 0 ? (
        <div className={`grid ${gridColumns} gap-x-4 md:grid-cols-1 md:gap-x-2 md:w-auto`}>
          {pokemonTypes.map((type, index) => (
            <div
              key={type}
              className={`text-center py-2 rounded-md text-white ${
                index === 0 ? bgColor : bgSecondColor
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeTypes;
