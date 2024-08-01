import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const AboutComponent = () => {
  
  return (
    <>
      <div className="bg-grey-300 sm:flex">
        <div className=' flex flex-col gap-2 shadow-full'>
           <img 
              src='technology.jpg' 
              alt="Austine obimbo at home work-space"
              className='h-32'
            />
           <img 
              src='at_office.jpg' 
              alt="Austine obimbo at home work-space"
              className='absolute rounded-full w-40 top-5 left-40'
           />
           <div>
           <a
              href="https://docs.google.com/document/d/16JNuFYkcSz5_eDSnlnAezV_bU9NClhMa/edit?usp=sharing&ouid=107251804543803193655&rtpof=true&sd=true"
              target="_blank" // This will open the link in a new tab
              rel="noopener noreferrer" // This is a security measure when using target="_blank"
              className='bg-neutral-900 rounded-full text-white font-bold hover:text-blue-300 p-4 w-full flex items-center justify-center'
            >
              Get Resume
              <FontAwesomeIcon icon={faLink} className='ml-2' />
            </a>
           </div>
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-3xl  text-start text-white font-bold mt-4 mb-4">
            I'm Austin Obimbo.I live in Mombasa Kenya where I build the future.
          </h2>
          <p className='text-start text-white text-mono text-lg mb-4'>
            I am a proactive full-stack software developer with love of growing my career,
            currently pursuing my a Bachelors degree in Information Technology. As professional data analysts I make data-driven
            decisions for product profitability and scalability. I design user-centric interfaces and wonderful user experiences, 
            within backend teams I am able to create algorithms and align business logic. My love for API design and development
            mimics an actual server.
          </p>
          <p className='text-white text-semibold text-mono'>
            I believe in learning by doing and constantly upskill myself towards greater technological
            aspects.
          </p>

          <p className='text-white text-semibold text-mono'>
            When I am not working I find myself exploring natures finest destinations, trying new recipes, going to the beach and hoping to begin playing Golf.
          </p>
        </div>
      </div>
    </>

  )
}

export default AboutComponent;