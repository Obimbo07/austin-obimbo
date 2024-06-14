import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <><nav className="navigation-content">
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
      </li>
      <li>
        <Link to="/about" className="text-white hover:text-gray-200">About</Link>
      </li>
      <li>
        <Link to="/projects" className="text-white hover:text-gray-200">Projects</Link>
      </li>
    </ul>
  </nav>
  </>
  )
}

export default Navbar;