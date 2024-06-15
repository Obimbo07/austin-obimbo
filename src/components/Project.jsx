/* eslint-disable react/prop-types */
import React from 'react';
import { projects } from '../pages/Projects';
import { ProjectCard } from '../pages/Projects';

const Project = () => {
  if (!projects || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <><section className="container mx-auto px-4 py-8">
          <div className='p-10 mx-auto'>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">My Recent Projects</h2>
              <hr />
              <div>
                  {projects.slice(0, 2).map((project) => (
                      <ProjectCard key={project.key} project={project} />
                  ))}
              </div>
           </div>
               <h2 className="text-3xl font-bold text-blue-700 mb-4">My Projects</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(2).map((project) => (
                  <ProjectCard key={project.key} project={project} />
              ))}
               </div>
    </section>
    </>
  );
};

export default Project;
