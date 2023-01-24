import React, { useState } from 'react';
import Logo from "../assets/imgs/logo.png";
import {Link} from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container flex justify-between mx-auto">
      <Link to="/">
        <img src={Logo} alt="logo" className=""/>
      </Link>
      <div className="flex gap-x-8 my-5">
        <Link>Categories</Link>
        <Link>Contact Us</Link>
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
  );
}

export default Navbar;
