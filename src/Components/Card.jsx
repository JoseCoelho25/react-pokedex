import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Poke from '../assets/imgs/pokeball.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Card() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getPokemons();
    });
  }, []);

  const getPokemons = async() => {
    setLoading(true);
    const endpoints = [];
    for (let i = 1; i < 152; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    try {
        const results = await axios.all(endpoints.map(async (endpoint) => {
            return new Promise((resolve) => {
                const el = imgRef.current;
                const tl = gsap.timeline();
                tl.to(el, { rotation: 5500, duration: 15 });
                setTimeout(() => {
                    resolve(axios.get(endpoint));
                    //tl.pause();
                }, 500);
            });
        }));
        setPokemons(results);
        setLoading(false);
        
    } catch (error) {
        console.error(error);
        setLoading(false);
    }
  };
  


  return (
    <div>
      {loading && (
        <div className="inset-x-0 bottom-0 h-2/3 absolute">
          <div className="flex justify-center  mt-36 md:mt-2 lg:mt-48">
            <span className="text-6xl">Loading...</span>
            <img src={Poke} alt="pokeball" className="h-24 w-24" ref={imgRef} />
          </div>
        </div>
      )}
      <div className="container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 mx-auto p-2 lg:p-6 rounded-lg mt-32 mb-32 gap-x-2">
        {pokemons.map((p, index) => (
          <Link to={`/pokemon/${p.data.id}`} key={index}>
            <img src={p.data.sprites.front_default} alt={p.name} className="border-black border-2 w-full rounded-lg bg-red-200" />
            <h3 className="text-center border-black border-2 mx-1 rounded-sm text-lg text-clip overflow-hidden">{p.data.name.charAt(0).toUpperCase() + p.data.name.slice(1)}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Card;