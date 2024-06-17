import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faBug, faDraftingCompass, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  return (
    <>
    <h1 className="text-5xl font-bold text-black-800 text-center mt-10 p-4">Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">
        <div className="flex justify-center items-center h-40">
          <FontAwesomeIcon icon={faCode} className="text-6xl text-blue-500 transition-transform transform hover:scale-110 hover:text-blue-700" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-700">Full Stack Development</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">
          I offer comprehensive development services remotely, onsite, and hybrid. My front-end skills focus primarily on user-centric interfaces with end-user specifications. My back-end logic works powerfully with the architecture and application programming interface development and design.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">
        <div className="flex justify-center items-center h-40">
          <FontAwesomeIcon icon={faDatabase} className="text-6xl text-blue-500 transition-transform transform hover:scale-110 hover:text-blue-700" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-700">Data Operations Analyst</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">
          I excel in making data-driven decisions for profitability and product upscale. I work with Database Management Systems and use business intelligence tools like PowerBI and Excel to help get insights from business data. I create data visualization reports for proper documentation on data, helping make informed, scalable company decisions.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">
        <div className="flex justify-center items-center h-40">
          <FontAwesomeIcon icon={faBug} className="text-6xl text-blue-500 transition-transform transform hover:scale-110 hover:text-blue-700" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-700">Testing and Optimization</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">
          I specialize in Test Driven Development (TDD) and optimization techniques to ensure the reliability and efficiency of software products. Quality is assured, and proper implementation of search ranking, page speed, and overall health of the software.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">
        <div className="flex justify-center items-center h-40">
          <FontAwesomeIcon icon={faDraftingCompass} className="text-6xl text-blue-500 transition-transform transform hover:scale-110 hover:text-blue-700" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-700">Software Architecture and Design</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">
          My experience empowers me to design and develop products with a keen interest in complexity, team expertise, technological efficiency, scalability needs, and maintenance cost.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">
        <div className="flex justify-center items-center h-40">
          <FontAwesomeIcon icon={faUsers} className="text-6xl text-blue-500 transition-transform transform hover:scale-110 hover:text-blue-700" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-700">Mentoring and Community Building</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">
          I am always ready to give familiarity and guidance to aspiring developers. The growth and empowerment I offer accelerate their journey and instill impactful changes.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50">
        <div className="flex justify-center items-center h-40">
          <FontAwesomeIcon icon={faHandshake} className="text-6xl text-blue-500 transition-transform transform hover:scale-110 hover:text-blue-700" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-700">Team Spirit</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">
          I thrive in collaborative environments, demonstrating strong team understanding throughout the whole development cycle. As a team leader with a co-centric focus on product quality, I imply attention to detail on product features, fostering Agile development methodologies and DevOps.
        </p>
      </div>
    </div>
    </>
  );
};

export default Cards;
