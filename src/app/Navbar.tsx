import React from 'react';
import './globals.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
<Link href="/" className="active">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
<Link href="/programs">Programs</Link>
<Link href="/donations">Donations</Link>
<Link href="/membership">Membership</Link>
<Link href="/news">News</Link>
    </nav>
  );
};

export default Navbar;
