import React from 'react';

const Technologies = () => {
  return (
    <div className="relative overflow-hidden py-16 px-8 bg-gradient-to-r from-blue-800 to-green-400">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-40"
      >
        <source src="background-video.mp4" type="video/mp4" />
        <img
          src="background-image.jpg"
          alt="Background Image"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
      </video>
      <div className="relative z-10 flex flex-wrap justify-between gap-10">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="sm:text-sm md:text-3xl font-bold text-white mb-6">Frameworks & Languages</h2>
          <div className="flex flex-wrap gap-6">
            <img
              src="github.svg"
              alt="GitHub"
              className="w-20 h-20 rounded-full bg-gray-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="html-css-bootstrap.png"
              alt="HTML, CSS & Bootstrap"
              className="w-20 h-20 rounded-full bg-blue-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="javascript.png"
              alt="JavaScript"
              className="w-20 h-20 rounded-full bg-yellow-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="python.png"
              alt="Python"
              className="w-20 h-20 rounded-full bg-red-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="download.png"
              alt="React-logo"
              className="w-20 h-20 rounded-full bg-gray-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="ruby.png"
              alt="Ruby"
              className="w-20 h-20 rounded-full bg-sky-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="rails.png"
              alt="Ruby-on-rails-logo-png"
              className="w-20 h-20 rounded-full bg-gray-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="redux.png"
              alt="redux-logo-png"
              className="w-20 h-20 rounded-full bg-gray-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="rspec.png"
              alt="Ruby-on-rails-logo-png"
              className="w-20 h-20 rounded-full bg-gray-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            {/* Add more framework & language icons here */}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="sm:text-sm font-bold md:text-3xl text-white mb-6">Tools & Methods</h2>
          <div className="flex flex-wrap gap-6">
            <img
              src="jest.png"
              alt="Jest"
              className="w-20 h-20 rounded-full bg-green-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="mocha.png"
              alt="Mocha"
              className="w-20 h-20 rounded-full bg-purple-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="mysql.png"
              alt="MySQL"
              className="w-20 h-20 rounded-full bg-teal-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="nodejs.png"
              alt="Node.js"
              className="w-20 h-20 rounded-full bg-pink-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="postgres.png"
              alt="PostgreSQL"
              className="w-20 h-20 rounded-full bg-orange-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="git.png"
              alt="Git"
              className="w-20 h-20 rounded-full bg-lime-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="aws-logo.png"
              alt="AWS"
              className="w-20 h-20 rounded-full bg-emerald-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src="zoom.png"
              alt="Zoom"
              className="w-20 h-20 rounded-full bg-teal-200 p-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            {/* Add more tool & method icons here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
