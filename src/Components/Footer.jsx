import React from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Footer() {
 

  return (
    <footer className="mt-5 mb-20 container mx-auto text-xl font-bold">
      <div className="flex justify-center align-items-center">
        <p className="mr-1">Developed by</p>
        <a className="mhq"  href="https://linkedin/">
          José Coelho
        </a>
      </div>
      <a 
        className="flex justify-center mb-5 underline underline-offset-2"
        href="https://github.com/JoseCoelho25/react-pokedex.git"
      >
        View code on Github
        
      </a>
    </footer>
  )
}

export default Footer

