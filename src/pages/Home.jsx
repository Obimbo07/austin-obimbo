import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='bg-gradient-to-tr from-blue-900 to-blue-900'>
        {loading ? (
          <div className='loader'></div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default Home;
