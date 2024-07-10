import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faCoffee, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact';

const Footer = () => {
  return (
    <>
      <Contact />
      <footer id="Contact" className="bg-gray-900 text-white py-16 px-8">
        <div className="flex flex-col items-center">
          <img src="passport.jpg" alt="Logo" className="w-28 mb-8 rounded-full" />
          <p className="text-center text-gray-400 max-w-2xl mb-8">
            Welcome to my website! Here you'll find insights about my projects, interests, and professional journey. 
            Connect with me through the social links below and feel free to reach out if you have any questions or 
            collaborations in mind.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="w-full md:w-1/3 mb-10 md:mb-0 flex flex-col items-center md:items-start">
          <h1 className='text-center font-bold text-3xl mb-8'>Social Links</h1>
            <div className="flex space-x-6 mt-8">
              <a href="https://x.com/austs_" className="text-gray-400 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://medium.com/@obimboausts" className="text-neutral-400 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/austin-obimbo/" className="text-neutral-400 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.github.com/Obimbo07" className="text-gray-400 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold mb-4">Contact Info</h3>
            <div className="mb-4">
              <img src="worldmap.png" alt="world-map-image-continents" className="w-full"/>
            </div>
            <a href="mailto:obimboausts@gmail.com" className="text-gray-400 hover:text-gray-300 flex items-center transition duration-300 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>obimboausts@gmail.com</span>
            </a>
            <a href="tel:254-794-570888" className="text-gray-400 hover:text-gray-300 flex items-center transition duration-300 mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span>+254 794 570888</span>
            </a>
            <div className="text-gray-400 flex items-center mb-2">
              <FontAwesomeIcon icon={faLocation} className="mr-2" />
              <span>Mombasa, Kenya</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mt-8 md:mt-0">
            <a
              href="https://app.shukran.co/AB7508"
              className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition ease-in-out duration-500"
            >
              <FontAwesomeIcon icon={faCoffee} className="mr-2" />
              Buy Me a Coffee
            </a>
          </div>
        </div>
        <h1 className='text-center text-gray-500 mt-8'>Austin Obimbo ©2024</h1>
      </footer>
    </>
  );
};

export default Footer;
