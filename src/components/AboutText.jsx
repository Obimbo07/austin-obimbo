import React from 'react';
import { Image } from 'react-bootstrap';

const AboutText = () => {
  return (
    <>
      <div className="px-4 py-8 flex flex-col md:flex-row items-center justify-center bg-slate-950 w-full text-serif space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Section with Overlay */}
        <div className="relative w-full md:w-1/5 lg:w-1/5 h-auto">
          <div className="relative group">
            <Image
              src="/new_passport.jpg"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-50 rounded-lg transition-all duration-500 group-hover:bg-opacity-0"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start md:text-center mb-4">
            I am a proactive full-stack software developer based in Mombasa, Kenya, committed to shaping the future.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-start md:text-center mb-4">
            Currently, I am pursuing my Bachelor's degree in Information Technology, driven by a dedication to continuous growth and advancement. In my role as a disciplined data analyst, I focus on making data-driven decisions that enhance product profitability and scalability. My expertise lies in creating user-centric interfaces and exceptional user experiences, as well as contributing to backend teams through algorithm development and business logic alignment. I have a strong grasp of API design and development, with a focus on technologies like JavaScript, TypeScript, and Python.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-start md:text-center">
            I believe in the value of learning through practical application and am dedicated to consistently refining my technological skills. I am also improving my cloud computing skills and expanding into artificial intelligence.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-start md:text-center pt-2">
            Outside of work, I enjoy immersing myself in nature's beauty, experimenting with new recipes, and embracing the tranquility of the beach. Additionally, I'm planning to take up golf in the near future.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutText;
