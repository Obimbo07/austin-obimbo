import React from 'react';

const experience = [
  {
    index: 1,
    workTitle: 'Self Employed',
    workLocation: 'Remote',
    description: 'Work on 30+ projects',
    date: 'Feb 14th 2023 - Present',
  },
];

const achievements = [
  {
    index: 0,
    title: 'Tech to the Rescue Zero Hunger Hackathon',
    date: '22nd - 24th May 2024',
    description: 'Won the hackathon with a team of three',
  },
];

const Experience = () => {
  return (
    <section className="experience-section p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        <div className="description-section flex flex-col justify-center w-full md:w-1/2 mb-4 md:mb-0 animate-slide-in-left">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Work History</h2>
          <p className="text-sm text-gray-600 mb-4">
            With a diverse experience I am able to work and manage various challenges engineered by software.
          </p>
          <button className="bg-blue-700 text-white p-2 rounded mb-4 hover:bg-blue-800 transition duration-300">
            Contact Me
          </button>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Achievements</h3>
          <div className="timeline overflow-y-auto pr-4">
            <ul className="list-none pl-0">
              {achievements.map((achievement) => (
                <li key={achievement.index} className="timeline-item flex items-start mb-8">
                  <div className="timeline-marker bg-blue-500 h-4 w-4 rounded-full mr-4 mt-1"></div>
                  <div className="timeline-content w-full">
                    <p className="timeline-date text-gray-500">{achievement.date}</p>
                    <h4 className="timeline-title text-lg font-bold">{achievement.title}</h4>
                    <p className="timeline-description text-gray-700">{achievement.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Work Experience</h3>

        <div className="experience-list flex flex-col justify-center w-full md:w-1/2 animate-slide-in-left">
          {experience.map((exp) => (
            <div className="experience-item p-4 rounded-lg border mb-4" key={exp.index}>
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">{exp.workTitle}</h3>
                <span className="text-gray-600">{exp.date}</span>
              </div>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
