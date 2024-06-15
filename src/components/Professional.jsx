import React from 'react';

const Professional = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center p-4'>
      <div className='md:w-1/3 w-full h-auto mb-4 md:mb-0'>
        <img
          className='w-full h-auto rounded-md shadow-md transform hover:scale-105 transition-transform duration-300'
          src='passport.jpeg'
          alt='professional-passport-photo-austin-obimbo'
        />
      </div>
      <div className='md:w-2/3 w-full p-4 animate-slide-in-left'>
        <div className='mb-4'>
          <h3 className='text-xl font-bold text-blue-600 mb-2'>Introduction</h3>
          <p className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>
            My name is Austin Obimbo. I am a proactive techprenuer & team leader with 2 years experience as a professional developer.
            I have been able to build and collaborate on high scaled projects with love to prolifiate my growth and impact to the world at large.
            I love travelling, exploring nature, Friendly meetups, Coffee Code sessions, and doing research.
          </p>
        </div>
        <div className='mb-4'>
          <h3 className='text-xl font-bold text-blue-600 mb-2'>Skills</h3>
          <ul className='list-disc list-inside text-gray-700 hover:text-blue-500 transition-colors duration-300'>
            <li><strong>Languages:</strong> HTML/CSS, JavaScript, Ruby, Python</li>
            <li><strong>Frameworks:</strong> ReactJs, Vite, NextJs, ReactNative, Ruby on Rails</li>
            <li><strong>Professional Skills:</strong> Data Analysis, Test Driven Development, Agile Methodology, Team Spirit, Collaboration, Team Leadership, Project Management</li>
            <li><strong>Developer Tools:</strong> VS Code, Postman, Android Studio, Zoom, Slack, Airtable, KanbanBoards</li>
          </ul>
        </div>
        <div className='mb-4'>
          <h3 className='text-xl font-bold text-blue-600 mb-2'>Projects</h3>
          <p className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>I have experience with the following environment of projects</p>
          <ul className='list-disc list-inside text-gray-700 hover:text-blue-500 transition-colors duration-300'>
            <li>Content Management System</li>
            <li>Software as a Service</li>
            <li>Financial Management</li>
            <li>Data Analysis and Operations</li>
            <li>API Development and Design</li>
          </ul>
        </div>
        <div className='mb-4'>
          <h3 className='text-xl font-bold text-blue-600 mb-2'>Training and Experience</h3>
          <p className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>
            I have gained most of my skills and knowledge as a self-taught student, and from online bootcamps like Microverse and Coursera. I dedicated 2000+ hours into acquiring knowledge and hands-on experience through remote collaboration and pair-programming with individuals in different time-zones.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-bold text-blue-600 mb-2'>Volunteer</h3>
          <p className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>
            Qui ex nulla laboris exercitation occaecat. Fugiat quis sunt elit labore. Duis dolor adipisicing tempor in minim cillum occaecat qui.
            Mollit cillum laborum deserunt qui consequat elit. Do do ea dolore cupidatat non. In esse laboris deserunt eiusmod irure culpa ipsum elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professional;
