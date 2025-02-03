import React from "react";
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faCoffee,
  faLocation,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faXTwitter,

} from "@fortawesome/free-brands-svg-icons";
import { useForm, ValidationError } from "@formspree/react";
import { services } from "./Data";
const Footer = () => {
  const [state, handleSubmit] = useForm("xrbzzawk");
  const currentYear = new Date().getFullYear();
  const expYear = currentYear - 2021;
  console.log(expYear);

  return (
    <div className="lg:mx-44 mx-4">
      <footer
        id="Contact"
        className="rounded-3xl text-gray-900 bg-white shadow-md p-6"
      >
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row items-start ">
          {/* About Section */}
          <div className="md:w-1/3 flex md:flex-col">
            <img
              src="logo-shine.png"
              alt="Logo"
              className="rounded-full mb-4"
               width={80}
               height={10}
            />
            <p className="text-gray-800  font-semibold">
              <strong className="text-3xl">Austin Obimbo</strong>
              <br />
              Engineer with +{expYear} years of experience creating solutions to problems for the
              digital era.
            </p>
          </div>

          {/* Services Section */}
          <div className="md:w-1/3">
            <ul className="list-inside list-disc">
              <h1 className="font-bold text-2xl mb-2">WHAT I DO</h1>
              {services.map((service, index) => (
                <li
                  key={index}
                  className="list-none hover:text-blue-500"
                >
                  {service.name}
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/3 flex flex-wrap">
            <h2 className="font-bold text-2xl">CONTACT ME?</h2>
            <a
              data-cal-link="austin.obimbo"
              target="_blank" // This will open the link in a new tab
              rel="noopener noreferrer" // This is a security measure when using target="_blank"
              className='font-bold hover:bg-blue-900 p-4 underline text-blue-500 hover:text-white flex items-center rounded-full justify-center'
            >
              Book Call
              <FontAwesomeIcon icon={faVideo} className='ml-2' />
            </a>
            <p className="font-semibold mb-4">
              Submit your email. Austin will contact you shortly.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-xl transition duration-300 disabled:opacity-50"
                disabled={state.submitting}
              >
                <FontAwesomeIcon icon={faShare} className="mr-2" />
                Submit
              </button>
              {state.succeeded && (
                <p className="text-green-500">Thank you! I’ll reach out shortly.</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8 gap-8">
          {/* Social Links */}
          
          <div className="flex flex-col gap-6">
            <strong className="text-3xl">Social Links</strong>
            <span className="flex gap-4">
            <a
              href="https://x.com/austs_"
              target="_blank"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a
              href="https://medium.com/@obimboausts"
              target="_blank"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/austin-obimbo/"
              target="_blank"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.github.com/Obimbo07"
              target="_blank"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <a
              href="mailto:obimboausts@gmail.com"
              className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              obimboausts@gmail.com
            </a>
            <a
              href="tel:254-794-570888"
              className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
              +254 794 570888
            </a>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocation} />
              Mombasa, Kenya
            </div>
          </div>

          {/* Coffee Support */}
          <a
            href="https://app.shukran.co/AB7508"
            className="inline-flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-5400 text-white font-bold rounded-md transition duration-300"
            aria-label="Buy me a coffee"
          >
            <FontAwesomeIcon icon={faCoffee} className="mr-2" />
            Buy Me a Coffee
          </a>
        </div>

        <p className="text-center text-gray-700 mt-8 font-medium">
          COPYRIGHT © 2025 - ALL RIGHTS RESERVED BY{" "}
          <span className="font-extrabold text-yellow-600">AUSTIN OBIMBO</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
