import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xrbzzawk");

  return (
    <div className="lg:mx-44 mx-4">
      <footer
        id="Contact"
        className="rounded-3xl text-gray-900 bg-white shadow-md p-6"
      >
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row items-start gap-8">
          {/* About Section */}
          <div className="md:w-1/3">
            <img
              src="logo-shine.png"
              alt="Logo"
              className="w-20 h-auto rounded-full mb-4"
            />
            <p className="text-gray-800 font-semibold">
              Austin Obimbo
              <br />
              Engineer with 3+ years of experience creating solutions for the
              digital era.
            </p>
          </div>

          {/* Services Section */}
          <div className="md:w-1/3">
            <ul className="list-inside list-disc">
              <h1 className="font-bold text-2xl mb-4">SERVICES</h1>
              {[
                {
                  title: "Web Design and Development",
                  description:
                    "Creating responsive and modern websites tailored to your needs.",
                },
                {
                  title: "System Design and Development",
                  description:
                    "Architecting and implementing scalable systems and solutions.",
                },
                {
                  title: "Data Operations and Analysis",
                  description:
                    "Streamlining data processes and uncovering insights for better decisions.",
                },
                {
                  title: "IoT Software Architecture Development",
                  description:
                    "Building robust and scalable IoT architectures for connected systems.",
                },
              ].map((service, index) => (
                <li
                  key={index}
                  className="relative group cursor-pointer hover:text-blue-500"
                >
                  {service.title}
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/3">
            <h2 className="font-bold text-2xl mb-4">HIRE ME?</h2>
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
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300 disabled:opacity-50"
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
          <div className="flex gap-6">
            <a
              href="https://x.com/austs_"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://medium.com/@obimboausts"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/austin-obimbo/"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.github.com/Obimbo07"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
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
            className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md transition duration-300"
            aria-label="Buy me a coffee"
          >
            <FontAwesomeIcon icon={faCoffee} className="mr-2" />
            Buy Me a Coffee
          </a>
        </div>

        <p className="text-center text-gray-700 mt-8 font-medium">
          COPYRIGHT © 2025 - ALL RIGHTS RESERVED BY{" "}
          <span className="font-extrabold text-orange-500">AUSTIN OBIMBO</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
