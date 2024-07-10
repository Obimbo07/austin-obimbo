import React from 'react'
import GitHubContributionGraph from '../components/GithubContributionGraph';
import AboutComponent from '../components/AboutComponent';
import Experience from '../components/Experience';
import InteractiveUi from '../components/InteractiveUi';

const About = () => {
  return (
    <div className='bg-gradient-to-tr from-blue-900 to-blue-900 '>
    <div className='md:p-16'>
    <AboutComponent />
    <GitHubContributionGraph />
    <Experience />
    <InteractiveUi />
    </div>
    </div>
  )
}

export default About;