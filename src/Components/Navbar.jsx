import React, { useState, useRef, useEffect } from 'react';
import "../App.css";
import Logo from "../assets/imgs/logo.png";
import {Link} from "react-router-dom";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  useEffect(()=>{
    const el = navRef.current;
     gsap.to(el,{
       scrollTrigger:{
         trigger:el,
         scrub:2,
         start:"bottom 20%",
         end:"bottom 0%",
         toggleClass:"toggle-nav",
       }
     })
  },[])

  return (
    <div className="w-screen">
      <div className="container flex justify-between top-0 2xl:left-44 left-0 mt-4 fixed max-w-screen-2xl px-4  bg-black z-10" ref={navRef}>
      <Link to="/">
        <img src={Logo} alt="logo" className=""/>
      </Link>
      <div className="hidden sm:flex gap-x-8 my-5 text-2xl ">
        <Link to="/contact" className="hover:underline underline-offset-4 decoration-2 text-white">Contact Me</Link>
        <Link to="/suggestion" className="hover:underline underline-offset-4 decoration-2 text-white">Suggestions</Link>
      </div>
      
      <div className="sm:hidden">
        <button className="w-full" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 
        <div className="text-4xl text-end text-white">X</div>
         : 
         <div className="text-4xl text-white">&#9776;</div>}
      </button>
      {isOpen && <div className="bg-white rounded-lg p-2 w-36 grid grid-cols-1 mt-8 hover:bg-blue-400">
        <Link to="/" className="hover:bg-blue-400 rounded-lg p-1">Categories</Link>
        <Link to="/contact" className="hover:bg-blue-400 rounded-lg p-1">Contact Me</Link>
        <Link to="/suggestion" className="hover:bg-blue-400 rounded-lg p-1">Suggestions</Link>
        </div>
        }
      </div>
      
    </div>
    </div>
    
  );
}

export default Navbar;
