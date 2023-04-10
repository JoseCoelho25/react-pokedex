import React from 'react';

const keygen = () => Date.now().toString() + Math.random()

function PokeStats({pokemon, bgColor}) {

  if (!pokemon.stats) return null;

  return (
    <div className='w-full px-2 mb-4 pb-2'>
      <div className="text-center font-bold">Stats</div>
      <div className=" ">
        {pokemon.stats.map((entry) => (
          <div key={keygen()} className="bg-white grid grid-cols-4 rounded-full">
            <div className="text-xs">{entry.stat.name}</div>
            <div className="text-sm">{entry.base_stat}</div>
            <div className={`${bgColor} h-1/2 rounded-full col-span-2 w-[${entry.base_stat}px] border self-center`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokeStats;
