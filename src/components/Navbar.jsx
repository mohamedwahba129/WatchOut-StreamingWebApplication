import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <a href='/'>
        <div className="navbar-logo">
          <img src='logo/logo.png' alt="WatchOut Logo" />
          <h4>WatchOut</h4>
        </div>
      </a>


      {/* <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div> */}

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
