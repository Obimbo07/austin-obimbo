import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const experience = [
  {
    index: 1,
    workTitle: 'Self Employed',
    workLocation: 'Remote',
    description: 'Worked on 30+ projects as a Full stack developer. Spent 3000+ hours remotely understanding algorithms and data structures using technologies like Ruby on Rails, React (Next.js & Vite), and React Native.',
    date: 'Feb 14th 2023 - Present',
  },
  {
    index: 2,
    workTitle: 'Freelance Software Engineer',
    workLocation: 'Remote',
    description: 'Helped NGOs and non-profits improve their technological advancements by doing pro-bono and low-bono projects. Worked with technologies like WordPress, CMS, and AI tools to enhance their profiles and output.',
    date: 'August 2024 - Present',
  },
];

const achievements = [
  {
    index: 0,
    title: 'Won Tech to the Rescue Zero Hunger Hackathon',
    date: '22nd - 24th May 2024',
    description: 'Developed a USSD-Based Surplus Food Distribution System to combat food waste and improve food accessibility using USSD and Africa’s Talking API.',
    link: 'https://www.techtotherescue.org/hackathon/meet-the-winners/',
  },
];

const Experience = () => {
  return (
    <section className="experience-section p-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-16">
        {/* Achievements Section */}
        <div className="description-section flex flex-col justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold text-neutral-100 mb-8 text-center">Achievements</h2>
          <div className="timeline relative">
            {achievements.map((achievement, i) => (
              <div key={achievement.index} className="relative pl-12 mb-12">
                {/* Line and dot */}
                <div className="absolute left-6 top-0 h-full flex flex-col items-center">
                  {i !== achievements.length - 1 && (
                    <div className="h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md"></div>
                </div>
                <div className="relative">
                  <Card className="shadow-lg bg-gradient-to-r from-white via-gray-50 to-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-500 text-2xl font-semibold">{achievement.title}</CardTitle>
                      <CardDescription className="text-gray-600">{achievement.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{achievement.description}</p>
                      <a className="font-bold text-blue-500 underline hover:text-blue-600" href={achievement.link}>Learn more</a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="description-section flex flex-col justify-center w-full md:w-1/2 mb-4">
          <h2 className="text-4xl font-extrabold text-neutral-100 mb-8 text-center">Work Experience</h2>
          <div className="timeline relative">
            {experience.map((exp, i) => (
              <div key={exp.index} className="relative pl-12 mb-12">
                {/* Line and dot */}
                <div className="absolute left-6 top-0 h-full flex flex-col items-center">
                  {i !== experience.length - 1 && (
                    <div className="h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md"></div>
                </div>
                <div className="relative">
                  <Card className="shadow-lg bg-gradient-to-r from-white via-gray-50 to-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-500 text-2xl font-semibold">{exp.workTitle}</CardTitle>
                      <CardDescription className="text-gray-600">{exp.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{exp.description}</p>
                    </CardContent>
                  </Card>
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
