import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <h1 className='text-center font-bold text-3xl'>Contact Section</h1>
      <div className="flex flex-col md:flex-row justify-between mt-10 mb-10">
        {/* Contact Form Section */}
        <div className='w-full md:w-2/5 mb-10 md:mb-0'>
          <h3 className="text-5xl font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-400 mb-6 sm:text-xl">
            I'm always interested in hearing about new projects, so if you'd like
            to chat, please get in touch.
          </p>
          <form action="#" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full rounded-md h-24 border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition ease-in-out duration-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Call to Action & Social Links Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-between mb-10 md:mb-0">
          <div className="flex space-x-6 mt-8 justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-bold mb-4">Contact Info</h3>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-300 flex items-center transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>your.email@example.com</span>
            </a>
            <a href="tel:555-555-5555" className="text-gray-400 hover:text-gray-300 flex items-center transition duration-300">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span>(555) 555-5555</span>
            </a>
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition ease-in-out duration-500"
            >
              <FontAwesomeIcon icon={faCoffee} className="mr-2" />
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
      <h1 className='text-center'>Austin Obimbo ©2024</h1>
    </footer>
  );
};

export default Footer;
