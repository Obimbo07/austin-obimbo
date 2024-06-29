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

const Home = () => {
  return (
    <>
        <Hero />
        <About /> 
        <Professional />
        <GithubContibutionGraph />
        {/* <Cards />
        <Experience />
        <Project />
        <Partners />
        <Technologies />
        <Blog /> */}
    </>
  )
}

export default Home;