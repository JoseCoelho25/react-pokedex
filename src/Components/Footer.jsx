import React, {useRef, useEffect} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Footer({isCardLoaded}) {
  const footerRef = useRef(null);
  useEffect(()=>{
    if(isCardLoaded){
    const el = footerRef.current;
    console.log(el)
    gsap.to(el,{
      y:400,
      scrollTrigger:{
        trigger:el,
        scrub:2,
        start:"top 100%",
        markers:{
          startColor:"blue"
        },
      }
    })
  }
  },[isCardLoaded])

  return (
    <div>
    <footer className="mt-5 mb-96 container mx-auto text-xl font-bold" ref={footerRef}>
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
    </div>
  )
}

export default Footer

