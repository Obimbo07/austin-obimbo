import React from 'react';
import { Image } from 'react-bootstrap';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const AboutText = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col text-white text-overflow ">
           <div className='flex gap-2'>
           <Avatar className='rounded-full w-[120px] h-auto  md:w-1/5 lg:w-1/5 h-fit'>
                <AvatarImage src="rename.jpg" />
                <AvatarFallback>Austin</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-start md:text-center mb-4">
              I am a proactive software engineer based in Mombasa, Kenya, committed to shaping the future.
            </h2>
           </div>
            
         <div className="p-8">
          
          {/* <p className="text-base sm:text-lg md:text-xl text-start md:text-center mb-4">
            I am currently in my final year of Bachelor's degree in Information Technology,
            In my role as a disciplined data analyst, I focus on making data-driven decisions that enhance product profitability and scalability. 
            My expertise lies in creating user-centric interfaces and exceptional user experiences, as well as contributing to backend teams through algorithm development and business logic alignment. 
            I have a strong grasp of API design and development, with a focus on technologies like JavaScript, TypeScript, and Python.
          </p> */}
          <p className="text-base sm:text-lg md:text-xl font-semibold text-start md:text-center mb-4 bg-orange-500 p-8 rounded-3xl">
            I am currently working as a Full-stack software developer at <a className="text-blue-600  font-bold underline" href="">Tech to the Rescue</a>. I help ship features faster and create scalable algorithms to help improve product output. I use data analysis and operations to help improve
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-end md:text-center bg-orange-500 p-8 rounded-3xl">
            I believe in the value of learning through practical application and am dedicated to consistently refining my technological skills. I am also improving my cloud computing skills and expanding into artificial intelligence.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-start md:text-center mt-4 bg-orange-500 p-8 rounded-3xl">
            Outside of work, I enjoy immersing myself in nature's beauty, experimenting with new recipes, and embracing the tranquility of the beach. Additionally, I'm planning to take up golf in the near future.
          </p>
          </div>
      </div>
    </>
  );
};

export default AboutText;
