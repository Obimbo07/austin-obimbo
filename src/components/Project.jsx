import React, { useState } from 'react';
import div from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { projects } from '../pages/Projects';
import { Modal } from '../pages/Projects';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex flex-col sm:flex-row p-4 shadow-lg rounded-lg bg-white overflow-hidden">
      <img className="w-full sm:w-1/2 h-48 object-cover" src={project.image} alt={project.name} />
      
      <div className="px-4 py-2 bg-gray-100 flex-grow">
        <h3 className="text-lg font-bold text-blue-700 hover:text-blue-800">{project.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{project.description.slice(0, 100)}...</p>
        <button
          className="px-3 py-1 mt-auto rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none"
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

const Project = () => {
  const navigation = useNavigate();
  if (!projects || projects.length === 0) {
    return <p>No projects available.</p>;
    
  }
  
  const recentProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3, 7);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleProjects = () => {
    navigation('/projects');
  }

  return (
    <section className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-500 to-green-500">
      <div className='p-10 mx-auto'>
        <h2 className="text-3xl font-bold text-white mb-4">MY RECENT PROJECTS</h2>
        <hr className="border-t border-white mb-6" />
        <div className='flex flex-wrap md:flex-nowrap  gap-4' {...settings}>
          {recentProjects.map((project) => (
            <div key={project.name} className="px-2 w-fit">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className='flex justify-center p-2'>
          <button className='bg-white rounded-lg p-2' onClick={handleProjects}>
              View more
          </button>
       </div>
      </div>
      <div className='p-10 mx-auto'>
        <h2 className="text-4xl font-bold text-white mb-4 text-center">MY PROJECTS</h2>
        <hr className="border-t border-white mb-6" />
        <div className='flex flex-wrap md:flex-nowrap  gap-4' {...settings}>
          {otherProjects.map((project) => (
            <div key={project.name} className="px-2 w-fit">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
      </div>
      
    </section>
  );
};

export default Project;
