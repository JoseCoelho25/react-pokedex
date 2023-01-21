import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
