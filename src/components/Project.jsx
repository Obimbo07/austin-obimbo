/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import { projects } from '../pages/Projects';
import { ProjectCard } from '../pages/Projects';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  if (!projects || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  const recentProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

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

  return (
    <section className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-500 to-green-500">
      <div className='p-10 mx-auto'>
        <h2 className="text-3xl font-bold text-white text-center mb-4">My Recent Projects</h2>
        <hr className="border-t border-white" />
        <Slider {...settings}>
          {recentProjects.map((project) => (
            <div key={project.key} className="p-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='p-10 mx-auto'>
        <h2 className="text-3xl font-bold text-white mb-4 text-center">My Projects</h2>
        <hr className="border-t border-white" />
        <Slider {...settings}>
          {otherProjects.map((project) => (
            <div key={project.key} className="p-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
