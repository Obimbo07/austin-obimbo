import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCertificate, faProjectDiagram, faFileAlt, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-tr from-gray-950 to-gray-100 p-8 mx-4 sticky md:top-0 lg:mx-44 rounded-3xl md:px-4 z-10">
        <ul className="flex flex-row flex-wrap sm:flex-row sm:space-x-10  justify-evenly gap-8">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 flex  md:flex-col items-center space-x-2 transition duration-300">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FontAwesomeIcon icon={faHome} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='bg-white p-2 rounded-xl md:hidden'>Home</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm sm:text-base lg:text-lg hidden md:contents">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200 flex md:flex-col items-center space-x-2 transition duration-300">
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FontAwesomeIcon icon={faUser} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='bg-white p-2 rounded-xl md:hidden'>About</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm sm:text-base lg:text-lg hidden md:contents">About</span>
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="text-white hover:text-gray-200 flex   md:flex-col items-center space-x-2 transition duration-300">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FontAwesomeIcon icon={faCertificate} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='bg-white p-2 rounded-xl md:hidden'>Certifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm sm:text-base lg:text-lg hidden md:contents">Certifications</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-200 flex  md:flex-col items-center space-x-2 transition duration-300">
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FontAwesomeIcon icon={faProjectDiagram} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='bg-white p-2 rounded-xl md:hidden'>Projects</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm sm:text-base lg:text-lg hidden md:contents">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/publications" className="text-white hover:text-gray-200 flex  md:flex-col items-center space-x-2 transition duration-300">
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FontAwesomeIcon icon={faFileAlt} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='bg-white p-2 rounded-xl md:hidden'>Publications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm sm:text-base lg:text-lg hidden md:contents">Publications</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-200 flex  md:flex-col items-center space-x-2 transition duration-300">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='bg-white p-2 rounded-xl md:hidden'>Contact</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm sm:text-base lg:text-lg hidden md:contents">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
