import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">WatchOut</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
