import React, { useState, useRef, useEffect } from 'react';
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
      x:2000,
      scrollTrigger:{
        trigger:el,
        scrub:8,
        start:"bottom 0%",
        markers:true
      }
    })
  },[])

  return (
    <div >
      <div className="container flex justify-between top-0 left-48 items-baseline fixed" ref={navRef}>
      <Link to="/">
        <img src={Logo} alt="logo" className=""/>
      </Link>
      <div className="flex gap-x-8 my-5 text-2xl ">
        <Link >Contact Us</Link>
        <Link>Suggestions</Link>
      </div>
      

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <div>X</div> : <div>&#9776;</div>}
      </button>
      {isOpen && <div>
        <div>Categories</div>
        <div>Contact Us</div>
        <div>Suggestions</div>
        </div>
        }
    </div>
    </div>
    
  );
}

export default Navbar;
