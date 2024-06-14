import React from 'react';

const experience = [
  {
    index: 0,
    workTitle: 'Self Employed',
    workLocation: 'Remote',
    description: 'Work on 20+ projects',
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
    <section className="experience-section">
      <div className="container flex md:flex-row gap-10 mx-auto">
        <div className="description-section flex md:flex-col justify-content-center align-center w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-700 p-4">Work History</h2>
          <p className="text-sm text-gray-600 mb-2 text-wrap">With a diverse experience I am able to work and manage various challenges engineered by software.</p>
          <button className="bg-blue-700 p-2">Contact Me</button>
          <h3>Achievements</h3>
          <div className="timeline overflow-y-auto h-96"> {/* Added overflow-y-auto and height for scrolling */}
            <ul className="timeline list-none pl-0"> {/* Changed to unordered list with Tailwind classes */}
              {achievements.map((achievement) => (
                <li key={achievement.index} className="timeline-item flex items-center mb-8">
                  <div className="timeline-content w-full">
                    <div className="timeline-marker bg-blue-500 h-4 w-4 rounded-full mr-4"></div>
                    <p className="timeline-date text-gray-500">{achievement.date}</p>
                    <h4 className="timeline-title text-lg font-bold">{achievement.title}</h4>
                    <p className="timeline-description text-gray-700">{achievement.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="experience-list flex flex-col justify-content-center w-full md:w-1/2">
          {experience.map((exp) => (
            <div className="experience-item p-10 rounded-lg border" key={exp.index}>
              <div className="flex flex-row">
                <h3 className="text-3xl font-bold text-black-700 p-4">{exp.workTitle}</h3>
                <h3 className="text-3xl font-bold text-black-700 p-4">{exp.date}</h3> {/* Added date for experience */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
