import React, { useState } from 'react'


export const projects = [
    {
      name: 'Daraja test',
      description: 'An implementation of Mpesa daraja Express checkout API. This implementation demonstrates how best to intergrate the mpesa models and payment logic.',
      technologies: ['Ruby on Rails', 'Daraja API'],
      image: 'daraja_mpesa.png',
      liveLink: 'https://github.com/Obimbo07/daraja-test',
      sourceLink: 'https://github.com/Obimbo07/daraja-test',
    },
    {
      name: 'Book Destination',
      description: 'This Full stack application helps users reserve holiday, meeting and BNB destinations, in various places. Users have can perform CRUD operations on the destinations, and schedule reservations',
      technologies: ['Ruby on Rails', 'React/Redux'],
      image: 'book_destination_logo.jpeg',
      liveLink: 'https://github.com/Obimbo07/book-destinations-api',
      sourceLink: 'https://github.com/Obimbo07/book-destinations-api',
    },
    {
      name: 'Budget App',
      description: 'A more generic versioned Budget App, that includes transaction management features. A User authentication system using JWT authentication. categorised budgets and transactions to be conducted upon each budget',
      image: 'budget-app.jpg',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      liveLink: 'https://budget-app-m9id.onrender.com/',
      sourceLink: 'https://github.com/Obimbo07/budget-app',
    },
    {
      name: 'Recipe Daily',
      description: 'Recipedaily is a web application designed to help users manage their recipes effortlessly. With features like a dynamic recipe list, public recipes showcase, food management, and a convenient general shopping list, it offers a seamless cooking experience.',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      image: 'recipe.jpg',
      liveLink: 'https://github.com/Obimbo07/Recipedaily',
      sourceLink: 'https://github.com/Obimbo07/Recipedaily',
    },
    {
      name: 'Catalogue of My Things',
      description: 'Collaborated on this console app that helps users manage their category of things. The menu is user-friendly and interactive with a list of options. A record of different types of things you own: books, music albums, movies, and games. The data will be stored in JSON files but will also prepare a database with tables structure analogical to the program\'s class structure.',
      technologies: ['Ruby', 'Console Interface'],
      image: 'cot.jpg',
      liveLink: 'https://drive.google.com/file/d/1ABEhMnYWMxh2e3631bI7XedAYCIsHYwf/view',
      sourceLink: 'https://github.com/Obimbo07/Catalog-of-my-things',
    },
    {
      name: 'Space X Travellers Hub',
      description: 'I collaborated remotely with team members in this frontend application to utilize API calls to render a list of Space X dragons and space shuttles. Using redux to handle state, I was able to save bookings of the dragons.',
      technologies: ['React', 'Bootstrap', 'Redux'],
      image: 'spacex.png',
      liveLink: 'https://github.com/Obimbo07/spacex-travellers-hub',
      sourceLink: 'https://github.com/Obimbo07/spacex-travellers-hub',
    },
    {
      name: 'Tdn',
      description: 'The devise authenticated blog app allows users connect andf chat with each other.',
      technologies: ['Bootstrap', 'Ruby on rails'],
      image: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/tdn',
      sourceLink: 'https://github.com/Obimbo07/tdn',
    },
    {
      name: 'School library system',
      description: 'This project built on Object oriented ruby, is used to manage a school library system. Users are allowed to create persons(student & teachers), Create rental books and save all the data in json files.',
      technologies: ['Ruby', 'Console-tool'],
      image: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/school-library',
      sourceLink: 'https://github.com/Obimbo07/school-library',
    },
    {
      name: 'Vet Clinic Database',
      description: 'Designed a clinical database to help manage patient records and clinical inventory',
      technologies: ['Ruby'],
      image: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/vet-clinic',
      sourceLink: 'https://github.com/Obimbo07/vet-clinic',
    },
    {
      name: 'Vet Clinic Database',
      description: 'Designed a clinical database to help manage patient records and clinical inventory',
      technologies: ['Ruby'],
      image: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/vet-clinic',
      sourceLink: 'https://github.com/Obimbo07/vet-clinic',
    },
];

export const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    return (
      <div className="h-fit sm:w-1/2 p-4 flex shadow-lg rounded-lg border-yellow-300 border-solid overflow-hidden ">

        <img className="w-1/2 h-48 grow object-fill" src={project.image} alt={project.name} />
        
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
  
  export const Modal = ({ project, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 bg-gray-500/50 flex justify-center items-center">
        <div className="w-full max-w-lg rounded-lg bg-white p-4 shadow-md">
           <img className="w-1/2 h-48 grow object-fill" src={project.image} alt={project.name} />
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