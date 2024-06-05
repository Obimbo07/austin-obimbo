import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Professional from '../components/Professional';
import Project from '../components/Project';

const Home = () => {
  return (
    <div>
        <Hero />
        <Cards />
        <Professional />
        <Project />
    </div>
  )
}

export default Home;