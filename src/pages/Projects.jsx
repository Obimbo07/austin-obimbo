import React, { useState } from 'react'

export const projects = [
   {
    name: 'Business management system',
    description: 'The system allows Clients book services offered by the business. Workers are assigned to booked service by administrators. The system has inclusive Mpesa payment system to help collect payments from clients booked service which dispatches the commission to the worker too.The workers dashboard with a "Request cash out" button enables workers request commission earned from administrators.',
    technologies: ['Ruby on Rails', 'Daraja API'],
    image: 'daraja_mpesa.png',
    liveLink: '#',
    sourceLink: 'https://github.com/Obimbo07/daraja-test',
    },
    {
      name: 'Daraja test',
      description: 'An implementation of Mpesa daraja Api stkquery and stkpush.',
      technologies: ['Ruby on Rails', 'Daraja API'],
      image: 'daraja_mpesa.png',
      liveLink: '#',
      sourceLink: 'https://github.com/Obimbo07/daraja-test',
    },
    {
      name: 'Book Destination',
      description: 'This Full stack application helps users reserve holiday, meeting and BNB destinations, in various places. Users have can perform CRUD operations on the destinations.',
      technologies: ['Ruby on Rails', 'React/Redux'],
      image: 'book_destination_logo.jpeg',
      liveLink: 'https://www.olaycompany.com',
      sourceLink: 'Not Sourced on Github',
    },
    {
      index: 1,
      name: 'Budget App',
      description: 'A more generic versioned Budget App, that includes transaction management features. A User authentication system using JWT authentication.',
      image: 'budget-app.jpg',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      liveLink: 'https://example.com/project2',
      sourceLink: 'https://github.com/user/project2',
    },
    {
      index: 2,
      name: 'Recipe Daily',
      description: 'is a User authenticated application that allows them perform CRUD operations on recipe meals. The add food feature enables users to create unique recipes and decide which ones to display publicly to all users.',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      image: 'recipe.jpg',
      liveLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/user/project1',
    },
    {
      index: 3,
      name: 'Catalogue of My Things',
      description: 'Collaborated on this console app that helps users manage their category of things. The menu is user-friendly and interactive with a list of options. A record of different types of things you own: books, music albums, movies, and games. The data will be stored in JSON files but will also prepare a database with tables structure analogical to the program\'s class structure.',
      technologies: ['Ruby', 'Console Interface'],
      image: 'cot.jpg',
      liveLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/user/project1',
    },
    {
      index: 4,
      name: 'Space X Travellers Hub',
      description: 'I collaborated remotely with team members in this frontend application to utilize API calls to render a list of Space X dragons and space shuttles. Using redux to handle state, I was able to save bookings of the dragons.',
      technologies: ['React', 'Bootstrap', 'Redux'],
      image: 'spacex.png',
      liveLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/user/project1',
    },
    {
      index: 5,
      name: 'Multi Post Stories',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      image: 'projects.png',
      liveLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/user/project1',
    },
    {
      index: 6,
      name: 'Multi Post Stories',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      image: 'projects.png',
      liveLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/user/project1',
    },
    {
      index: 7,
      name: 'Multi Post Stories',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      image: 'projects.png',
      liveLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/user/project1',
    },
    {
      index: 8,
      name: 'Multi Post Stories',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      image: 'projects.png',
      liveLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/user/project1',
    },
    // Add more project objects as needed
];

export const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    return (
      <div className="h-fit sm:w-1/3 p-4 flex shadow-lg rounded-lg border-yellow-300 border-solid overflow-hidden ">
        <img className="w-1/2 h-48 grow object-fit" src={project.image} alt={project.name} />
        
        <div className="px-4 py-2 grow bg-gray-100">
          <h3 className="text-lg font-bold text-blue-700 hover:text-blue-800">{project.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{project.description.slice(0, 100)}...</p>
          <button
            className="px-3 py-1 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none"
            onClick={handleOpenModal}
          >
            View Details
          </button>
        </div>
        {showModal && (
          <Modal project={project} onClose={handleCloseModal} />
        )}
      </div>
    );
  };
  
  const Modal = ({ project, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 bg-gray-500/50 flex justify-center items-center">
        <div className="w-full max-w-lg rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-4">{project.name}</h2>
          <p className="text-gray-700">{project.description}</p>
          <div className="flex justify-between mt-4">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none">
              Live Link
            </a>
            <a href={project.sourceLink} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
              View Source
            </a>
          </div>
          <button className="mt-4 px-3 py-1 rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  const Projects = () => {
    return (
      <section className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-500 to-green-500">
        <h2 className="text-5xl font-bold text-blue-700 text-center font-serif mb-4">MY PROJECTS</h2>
        <div className="sm:flex flex-wrap justify-stretch ">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    );
  };


export default Projects;