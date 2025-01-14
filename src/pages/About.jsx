import React from 'react'
import GitHubContributionGraph from '../components/GithubContributionGraph';
import AboutComponent from '../components/AboutComponent';
import Experience from '../components/Experience';
import InteractiveUi from '../components/InteractiveUi';
import Exp from '../components/exp';
import Achv from '../components/Achv';

const About = () => {
  return (
    <div className=''>
    <div className='md:p-16'>
    <AboutComponent />
    <GitHubContributionGraph />
     <h2 className="text-4xl font-extrabold text-neutral-100 mb-8 text-center">Work Experience</h2>
    <Exp />
      <h2 className="text-4xl font-extrabold text-neutral-100 mb-8 text-center">Achievements</h2>
    <Achv />
    </div>
    </div>
  )
}

export default About;