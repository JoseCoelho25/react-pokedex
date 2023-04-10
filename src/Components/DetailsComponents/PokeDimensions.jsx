import React from 'react';
import weight from '../../assets/imgs/weight.png'
import ruler from '../../assets/imgs/ruler.png'

const keygen = () => Date.now().toString() + Math.random()

function PokeDimensions({pokemon}) {
     
  return (
    <div className='w-full '>
      <div className="grid grid-cols-2 gap-x-2 h-full">
        <div className='grid grid-cols-1 content-between'>
          <div className='flex justify-around'>
            <img src={ruler} alt="ruler" className='w-5 rotate-90' />
            <div className="text-center bg-white rounded-lg">{pokemon.height*10}cm </div>
          </div>
          <div className="text-xs text-gray-500  text-center">Height</div>
        </div>
        <div className='grid grid-cols-1 content-between'>
          <div className='flex justify-around'>
            <img src={weight} alt="weight" className='w-5' />
            <div className="text-center bg-white rounded-lg">{pokemon.weight/10}Kg</div>
          </div>
          
          <div className="text-xs text-gray-500  text-center">Weight</div>
        </div>
        
      </div>
      {/* <div className="text-center font-bold">Stats</div>
        {pokemon.stats ? (
            <div className="grid grid-cols-6  gap-x-2 md:gap-x-10"> {pokemon.stats.length !== 0 ? pokemon.stats.map(entries=> <div key={keygen()} className="text-center bg-white rounded-lg text-clip overflow-hidden">
              <div className="block">
                <div className="text-sm">{entries.base_stat} </div>
                <div className="text-xs">{entries.stat.name}</div>
              </div>
              </div>) : ""}</div>
        ):""} */}
    </div>
  )
}

export default PokeDimensions