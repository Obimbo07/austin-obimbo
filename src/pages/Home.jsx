import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Professional from '../components/Professional';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Partners from '../components/Partners';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <div>
        <Hero />
        <Cards />
        <Professional />
        <Experience />
        <Project />
        <Partners />
        <Technologies />
    </div>
  )
}

export default Home;