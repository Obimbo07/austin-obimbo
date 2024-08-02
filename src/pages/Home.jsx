import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Partners from '../components/Partners';
import Blog from './Blog';
import GithubContibutionGraph from '../components/GithubContributionGraph';
import InteractiveUi from '../components/InteractiveUi';
import AboutComponent from '../components/AboutComponent';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <> 
      <div className='bg-gradient-to-tr from-blue-900 to-blue-900'>
        <Hero />
        <AboutComponent />
         <div className='md:mx-60'>
           <InteractiveUi />
         </div>
        <GithubContibutionGraph />
        <Cards />
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
