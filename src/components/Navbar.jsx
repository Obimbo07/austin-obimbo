import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCertificate, faProjectDiagram, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <nav className="navigation-content p-4">
        <ul className="flex flex-row flex-wrap sm:flex-row sm:space-x-6 justify-center gap-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 flex items-center space-x-2 transition duration-300">
              <FontAwesomeIcon icon={faHome} />
              <span className="text-sm sm:text-base lg:text-lg">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200 flex items-center space-x-2 transition duration-300">
              <FontAwesomeIcon icon={faUser} />
              <span className="text-sm sm:text-base lg:text-lg">About</span>
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="text-white hover:text-gray-200 flex items-center space-x-2 transition duration-300">
              <FontAwesomeIcon icon={faCertificate} />
              <span className="text-sm sm:text-base lg:text-lg">Certifications</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-200 flex items-center space-x-2 transition duration-300">
              <FontAwesomeIcon icon={faProjectDiagram} />
              <span className="text-sm sm:text-base lg:text-lg">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/publications" className="text-white hover:text-gray-200 flex items-center space-x-2 transition duration-300">
              <FontAwesomeIcon icon={faFileAlt} />
              <span className="text-sm sm:text-base lg:text-lg">Publications</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-200 flex items-center space-x-2 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="text-sm sm:text-base lg:text-lg">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
