import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Hero = () => {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-screen">
        <SwiperSlide className="flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('vision.jpg')" }}>
        <div className=" flex flex-col justify-center h-screen bg-grey px-4 pb-10 pt-20 md:px-10 md:pb-20 md:pt-24 shadow-lg shadow-gray-500 shadow-inner bg-black bg-opacity-50">
          <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">Hey there, I am Austin Obimbo</h2>
          <div className="text-white space-y-2">
            <h3 className="text-xl font-semibold md:text-2xl">Certified Software Engineer</h3>
            <h3 className="text-xl font-semibold md:text-2xl">Vetted Data Operations Analyst</h3>
            <h3 className="text-xl font-semibold md:text-2xl">IoT Devices Software Architecture Manager</h3>
            <h3 className="text-xl font-semibold md:text-2xl">Cloud Developer & DevOps Engineer</h3>
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
  );
}

export default Hero;

