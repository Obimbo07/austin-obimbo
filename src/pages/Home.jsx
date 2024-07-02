import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Professional from '../components/Professional';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Partners from '../components/Partners';
import Technologies from '../components/Technologies';
import Blog from './Blog';
import About from '../components/About';
import GithubContibutionGraph from '../components/GithubContributionGraph';
import InteractiveUi from '../components/InteractiveUi';

const Home = () => {
  return (
    <> 
    
    <div   className='border-8 border-gradient bg-gradient-to-r from-red-800 to-green-800' >
      <Hero />
        <About /> 
        <Professional />
        <GithubContibutionGraph />
        <InteractiveUi />
        <Cards />
        <Experience />
        <Project />
        <Partners />
        <Technologies />
        <Blog />
      </div>
    </>
  )
}

export default Home;