import React from 'react';

const AboutText = () => {
  return (
    <>
      <div className="px-6 flex flex-col  justify-center bg-slate-950 w-full  text-serif">
        <h2 className="text-3xl text-start sm:text-center text-white font-bold mt-4 mb-4">
          I am a proactive full-stack software developer based in Mombasa, Kenya, committed to shaping the future.
        </h2>
        <p className="text-start md:text-center text-white text-lg mb-4">
          Currently, I am pursuing my Bachelor's degree in Information Technology, driven by a dedication to continuous growth and advancement. In my role as a disciplined data analyst, I focus on making data-driven decisions that enhance product profitability and scalability. My expertise lies in creating user-centric interfaces and exceptional user experiences, as well as contributing to backend teams through algorithm development and business logic alignment. I have a strong grasp of API design and development, with a focus on technologies like JavaScript, TypeScript, and Python.
        </p>
        <p className="text-white font-semibold">
          I believe in the value of learning through practical application and am dedicated to consistently refining my technological skills. I am also improving my cloud computing skills and expanding into artificial intelligence.
        </p>
        <p className="text-white font-semibold pt-2">
          Outside of work, I enjoy immersing myself in nature's beauty, experimenting with new recipes, and embracing the tranquility of the beach. Additionally, I'm planning to take up golf in the near future.
        </p>
      </div>
    </>
  );
};

export default AboutText;
