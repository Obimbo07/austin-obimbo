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
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { DNA } from 'react-loader-spinner';

const Home = () => {
  const [isloading, setIsloading] =  useState(true)

  useState(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isloading) {
    return (
      <>
        <div className="h-screen flex items-center justify-center">
          <DNA
            visible={true}
            height="200"
            width="200"

            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className='bg-gradient-to-tr from-grey-900 to-blue-900'>
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
  );
}

export default Home;
