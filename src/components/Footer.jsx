import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faCoffee, faLocation, faShare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm("xrbzzawk");
      if (state.succeeded) {
          return alert('Thank you!! I will reach out to you shortly')
      }
  return (
    <>
     <div className='lg:mx-44 mx-4'>
      <footer id="Contact" className="rounded-3xl text-gray-30  md:mx-20 md:mt-2 bg-white">
        <div className="w-full mx-4 py-6 flex flex-col gap-4 md:flex-row items-start">
            <div className='md:w-1/3 py-4 px-4'>
              <img src="logo-shine.png" alt="Logo" className="w-20 h-auto rounded-full float-left mr-4" />
              <p className="text-start text-gray-900 font-semibold">
                Austin Obimbo<br />
                Engineer with 3+ years of experience living and creating solutions to problems in this digital era
              </p>
            </div>
            <div className='md:w-1/3'>
              <ul className='list-inside list-disc'>
                <h1 className='font-bold text-2xl'>SERVICES</h1>
                <li>
                  Web Design and Development
                </li>
                <li>
                  System Design and Development
                </li>
                <li>
                  Data Operations and Analysis
                </li>
                <li>
                Internt of Things Software Architecture Development
                </li>
              </ul>
            </div>
            <div className='md:w-1/3 snewsletter-box'>
              <span className='text-start md:text-center'>
                 <h2 className='font-bold text-2xl'>HIRE ME ?</h2>
                 <p className='font-semibold p-4'>Submit your email. Austin will contact you shortly.</p>
              </span>
              <form className='flex' onSubmit={handleSubmit}>
              <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full mb-2  rounded-xl border border-gray-700 bg-gray-800 px-2 py-2 text-white focus:border-blue-500 focus:outline-none"
                  required
              />
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
              />
               <button
                  type="submit"
                  className="w-fit bg-orange-900 hover:bg-orange-500 text-white font-bold py-2 px-2 rounded-xl relative right-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition ease-in-out duration-500"
                  disabled={state.submitting}
              >
                 <FontAwesomeIcon icon={faShare} size="2x" />
              </button>
              </form>
             
            </div>
        </div>
        <div className="flex mx-10 flex-col md:flex-row justify-between mb-10">
          <div className="w-full md:w-1/3 mb-10 md:mb-0 flex flex-col items-start md:items-start">
            <div className="flex space-x-6 mt-8">
              <a href="https://x.com/austs_" className="text-gray-900 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://medium.com/@obimboausts" className="text-neutral-900 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/austin-obimbo/" className="text-neutral-900 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.github.com/Obimbo07" className="text-gray-900 hover:text-gray-300 transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            <div className="mb-4 mt-4">
              <img src="worldmap.png" alt="world-map-image-continents" className="w-full"/>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-start md:items-start">
            <a href="mailto:obimboausts@gmail.com" className="text-gray-900 hover:text-gray-300 flex items-center transition duration-300 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>obimboausts@gmail.com</span>
            </a>
            <a href="tel:254-794-570888" className="text-gray-900 hover:text-gray-300 flex items-center transition duration-300 mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span>+254 794 570888</span>
            </a>
            <div className="text-gray-900 flex items-center mb-2">
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
        <h1 className='text-center font-semibold text-gray-900 mt-8'>COPYRIGHT © 2025 - ALL RIGHTS RESERVED BY <span className='font-extrabold text-orange-500'>AUSTIN OBIMBO</span></h1>
      </footer>
      </div>
    </>
  );
};

export default Footer;
