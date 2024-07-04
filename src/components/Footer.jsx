import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faCoffee, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const [state, handleSubmit] = useForm("xrbzzawk");
  if (state.succeeded) {
    return alert('Thank you!! I will reach out to you shortly')
  }
  return (
    <footer id="Contact" className="bg-gray-900 text-white py-16 px-8">
      <h1 className='text-center font-bold text-3xl'>Contact Section</h1>
      <div className="flex flex-col md:flex-row justify-between mt-10 mb-10">
        

        <div className='w-full md:w-2/5 mb-10 md:mb-0'>
          <h3 className="text-4xl font-semibold mb-4 font-serif">Get In Touch</h3>
          <p className="text-gray-400 mb-6 text-4xl ">
            I'm always interested in hearing about new projects, so if you'd like
            to chat, please get in touch.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full mb-2 rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              required
            />
            <ValidationError 
              prefix='Name'
              field='name'
              errors={state.errors}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full mb-2  rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full mb-2 rounded-md h-24 border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              required
             />
             <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition ease-in-out duration-500"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="w-full md:w-1/3  justify-between mb-10 md:mb-0">
          {/* <h1 className='text-center font-bold text-3xl'>Social links</h1> */}
          <div className="flex space-x-6 mt-8 justify-center md:justify-start">
            <a href="https://x.com/austs_" className="text-gray-400 hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://medium.com/@obimboausts" className="text-neutral-400 hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/austin-obimbo/" className=" text-neutral-400 hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.github.com/Obimbo07" className="text-gray-400 hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-bold mb-4 font-serif">Contact Info</h3>
            <div>
              <img src="worldmap.png" alt='world-map-image-continents' />
            </div>
            <a href="mailto:obimboausts@gmail.com" className="text-gray-400 hover:text-gray-300 flex items-center transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>obimboausts@gmail.com</span>
            </a>
            <a href="tel:254-794-570888" className="text-gray-400 hover:text-gray-300 flex items-center transition duration-300">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span>+254 794 570888</span>
            </a>
            <a className="text-gray-400 hover:text-gray-300 flex items-center transition duration-300">
              <FontAwesomeIcon icon={faLocation} className="mr-2" />
              <span>Mombasa, Kenya</span>
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
      <h1 className='text-center mb-8 '>Austin Obimbo ©2024</h1>
    </footer>
  );
};

export default Footer;
