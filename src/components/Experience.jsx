import React from 'react';

const experience = [
  {
    index: 1,
    workTitle: 'Self Employed',
    workLocation: 'Remote',
    description: 'Work on 30+ projects as a Full stack developer.I collaboratively spent 3000+ hours remotely understanding algorithms and data structures using techonologies i.e Ruby on rails , React (NextJs & Vite), and React Native.',
    date: 'Feb 14th 2023 - Present',
  },
  
];

const achievements = [
  {
    index: 0,
    title: 'Tech to the Rescue Zero Hunger Hackathon',
    date: '22nd - 24th May 2024',
    description: 'Haba na Haba ussd application, a USSD-Based Surplus Food Distribution System, an innovative solution designed to combat food waste and improve food accessibility which connects surplus food providers with individuals in need through the use of Unstructured Supplementary Service Data (USSD) and Africa’s Talking API.',
    link: 'https://www.techtotherescue.org/hackathon/meet-the-winners/',
  },
];

const Experience = () => {
  return (
    <section className="experience-section p-4 m-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        <div className="description-section flex flex-col justify-center w-full md:w-1/2 mb-4 md:mb-0 animate-slide-in-left">         
          <h2 className="text-3xl font-bold text-neutral-100 outline p-2 text-center md:text-center mb-4">Work History</h2>
          <p className="text-lg text-white mb-4 text-center">
            With a diverse experience I am able to work and manage various challenges engineered by software.
          </p>
          <button className="bg-blue-700 text-white p-2 rounded mb-4 hover:bg-blue-800 transition duration-300">
            Hire me
          </button>
          <h3 className="text-2xl font-bold text-white p-2 mb-4 text-center outline">Achievements</h3>
          <div className="timeline overflow-y-auto pr-4">
            <ul className="list-none pl-0">
              {achievements.map((achievement) => (
                <li key={achievement.index} 
                  className=" timeline-item flex items-start mb-8">
                  <div className="timeline-marker bg-blue-500 h-4 w-4 rounded-full  mt-1"></div>
                  <div className="timeline-content w-full text-white ">
                    
                    <div className='shadow-2xl p-4 rounded-xl m-2 text-neutral-700 bg-white '>
                    <p className="timeline-date ">{achievement.date}</p>
                    <h4 className="timeline-title text-blue-400 text-xl font-bold">{achievement.title}</h4>
                    <p className="timeline-description">{achievement.description}</p>
                    <a className="font-bold text-blue-500 underline" href={achievement.link}>Learn more</a>

                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="description-section flex flex-col justify-center w-full md:w-1/2 mb-4 md:mb-0 animate-slide-in-left" >
        <h3 className="text-2xl font-bold text-white mb-4 md:text-center outline text-center p-2">Work Experience</h3>

        <div className="experience-list flex flex-col justify-center w-full md:w-1/2 animate-slide-in-left">
            {experience.map((exp) => (
              <div className="experience-item relative p-4 mb-6" key={exp.index}>
                <div className="absolute inset-0 rounded-lg border-4 border-gradient bg-gradient-to-r from-blue-500 to-purple-500 -z-10"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">{exp.workTitle}</h3>
                    <span className="text-gray-600">{exp.date}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Experience;
