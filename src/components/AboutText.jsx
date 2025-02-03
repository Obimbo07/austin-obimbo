import React from 'react';
import { Image } from 'react-bootstrap';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const AboutText = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col text-white text-overflow ">
          <div className='block bg-gray-800 p-2 rounded-3xl'> {/* Remove flex container */}
              <Avatar className='float-left rounded-full w-[120px] h-auto mr-4 mb-2 md:w-1/5 lg:w-1/5'>
                <AvatarImage src="rename.jpg" />
                <AvatarFallback>Austin</AvatarFallback>
              </Avatar>
      
              <h2 className="text-xl tracking-wide">
                My name is Austin Obimbo, I work remotely from Nairobi and Mombasa, Kenya
                I am pursuing my bachelor' degree in information Technology as a visionary team leader and collaborator specializing in software design and development,
                computer vision, artificial intelligence, and financial technology. 
                I focus on building cyber-secure systems improving digital privacy. 
                As a critical thinker and a strategic planner, I take products from concept to reality.
              </h2>
          </div>
                      
         <div className="p-8">
          {/* <p className="text-base sm:text-lg md:text-xl text-start md:text-center mb-4">
            I am currently in my final year of Bachelor's degree in Information Technology,
            In my role as a disciplined data analyst, I focus on making data-driven decisions that enhance product profitability and scalability. 
            My expertise lies in creating user-centric interfaces and exceptional user experiences, as well as contributing to backend teams through algorithm development and business logic alignment. 
            I have a strong grasp of API design and development, with a focus on technologies like JavaScript, TypeScript, and Python.
          </p> */}
          <p className="text-base sm:text-lg md:text-xl font-semibold text-start md:text-center mb-4 bg-gray-800 p-8 rounded-3xl">
            I am currently working as a Full-stack developer and play a project managment role at 
             <a className="text-blue-600  font-bold underline" href=""> Tech to the Rescue</a>. 
            I help ship features faster, creating scalable algorithms to help improve product output. 
            We collaborate using zoom sessions remotely enhancing our pair-programming and project managment.
          </p>
          <p className="text-center sm:text-lg md:text-xl font-semibold text-start md:text-center bg-gray-800 p-8 rounded-3xl">
            I believe in the value of learning through practical application and am dedicated to consistently
            refining my technological skills.
            I am building AI applications using machine learning, image and video processing systems using computer vision technology.
            <br />
            I am building Web3 knowledge, I study blockchain technology part-time having a comprehensive guide building Dapps and smart-contracts.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-start md:text-center mt-4 bg-gray-800 p-8 rounded-3xl">
            Outside of work,
             I enjoy immersing myself in nature's beauty, experimenting new recipes, playing chess and embracing the tranquility of the beach. Additionally, I have just began playing Golf.
          </p>
          </div>
      </div>
    </>
  );
};

export default AboutText;
