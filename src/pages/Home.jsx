import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Partners from '../components/Partners';
import Blog from './Blog';
import GithubContibutionGraph from '../components/GithubContributionGraph';
import InteractiveUi from '../components/InteractiveUi';
import Contact from '../components/Contact';
import Carousel from '../components/Carousel';
import AboutText from '../components/AboutText';

const Home = () => {
  return (
    <> 
      <div className='bg-gradient-to-tr from-blue-900 to-blue-900'>
        <Carousel />
        <AboutText />
         <div className='md:mx-60'>
           <InteractiveUi />
         </div>
        <GithubContibutionGraph />
        <Experience />
        <Project />
        <Partners />
        <Blog />
        <Contact />
      </div>
    </>
  )
}

export default Home;
