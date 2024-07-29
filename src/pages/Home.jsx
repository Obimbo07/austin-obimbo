import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Partners from '../components/Partners';
import Blog from './Blog';
import GithubContibutionGraph from '../components/GithubContributionGraph';
import InteractiveUi from '../components/InteractiveUi';
import {Button} from '../components/ui/button.jsx';

const Home = () => {
  return (
    <> 
      <div className='bg-gradient-to-tr from-blue-900 to-blue-900'>
        <Hero />
        <Button>Cool</Button>
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
