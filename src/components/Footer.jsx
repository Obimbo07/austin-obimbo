import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-400">
            I'm always interested in hearing about new projects, so if you'd like
            to chat, please get in touch.
          </p>
          <form action="#" method="POST" className="mt-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="w-full px-3 mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full rounded-md h-24 border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition ease-in-out duration-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Call to Action & Social Links Section */}
        <div className="w-full md:w-1/2 flex justify-between items-center">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-xl font-bold"
            >
              Hire Me
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-xl font-bold"
            >
              View My Portfolio
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      {/* Contact Info Section */}
  <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-between items-center">
    <div className="flex flex-col space-y-2">
      <a href="#" className="text-gray-400 hover:text-gray-300 flex items-center">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        <span>your.email@example.com</span>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-300 flex items-center">
        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
        <span>(555) 555-5555</span>
      </a>
    </div>
    <a
      href="#"
      className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md font-bold"
    >
      <FontAwesomeIcon icon={faCoffee} className="mr-2" />
      Buy Me a Coffee
    </a>
  </div>
 </footer>
)
}

export default Footer;
