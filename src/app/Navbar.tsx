import React from 'react';
import './globals.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="active">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/programs">Programs</a>
      <a href="/donations">Donations</a>
      <a href="/membership">Membership</a>
      <a href="/news">News</a>
    </nav>
  );
};

export default Navbar;
