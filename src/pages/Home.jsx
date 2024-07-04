import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
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
      <div className='dark-striped-background '>
        <Hero />
         <div className='md:mx-60'>
           <InteractiveUi />
         </div>
        <GithubContibutionGraph />
        <Cards />
        <Experience />
        <Project />
        <Partners />
        <Blog />
      </div>
    </>
  )
}

export default Home;
