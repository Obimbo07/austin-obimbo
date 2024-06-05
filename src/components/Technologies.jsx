import React from 'react';

const Technologies = () => {
  return (
    <div className="relative overflow-hidden py-16 px-8">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-55"
      >
        <source src="background-video.mp4" type="video/mp4" />
        {/* Add a fallback image if the video doesn't load */}
        <img
          src="background-image.jpg"
          alt="Background Image"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
      </video>
      <div className="flex flex-wrap justify-between gap-10 relative z-10">
        <div className="w-1/2">
          <h2>Frameworks & Languages</h2>
          <div className="flex flex-wrap gap-10">
            <img
              src="github.svg"
              alt="GitHub"
              className="w-20 h-20 rounded-full bg-gray-200 p-2"
            />
            <img
              src="html-css-bootstrap.png"
              alt="HTML, CSS & Bootstrap"
              className="w-20 h-20 rounded-full bg-blue-200 p-2"
            />
            <img
              src="javascript.png"
              alt="JavaScript"
              className="w-20 h-20 rounded-full bg-yellow-200 p-2"
            />
            <img src="python.png" alt="Python" className="w-20 h-20 rounded-full bg-red-200 p-2" />
            <img src="ruby.png" alt="Ruby" className="w-20 h-20 rounded-full bg-sky-200 p-2" />
            {/* Add more framework & language icons here */}
          </div>
        </div>
        <div className="w-1/2">
          <h2>Tools & Methods</h2>
          <div className="flex flex-wrap gap-10">
            <img src="jest.png" alt="Jest" className="w-20 h-20 rounded-full bg-green-200 p-2" />
            <img src="mocha.png" alt="Mocha" className="w-20 h-20 rounded-full bg-purple-200 p-2" />
            <img src="mysql.png" alt="MySQL" className="w-20 h-20 rounded-full bg-teal-200 p-2" />
            <img src="nodejs.png" alt="Node.js" className="w-20 h-20 rounded-full bg-pink-200 p-2" />
            <img
              src="postgres.png"
              alt="PostgreSQL"
              className="w-20 h-20 rounded-full bg-orange-200 p-2"
            />
            <img src="git.png" alt="Git" className="w-20 h-20 rounded-full bg-lime-200 p-2" />
            <img src="aws-logo.png" alt="AWS" className="w-20 h-20 rounded-full bg-emerald-200 p-2" />
            <img src="zoom.png" alt="Zoom" className="w-20 h-20 rounded-full bg-teal-200 p-2" />
            {/* Add more tool & method icons here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
