import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { getCalApi } from "@calcom/embed-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/images.css';

const InteractiveUi = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const animation = useAnimation();
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" }
        }
      });
    })();
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.0,
          ease: 'easeOut',
        },
      });
    } else {
      animation.start({ opacity: 0, y: 50 });
    }
  }, [inView, animation]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <h2 className="outline outline-1 outline-white-100 text-white text-4xl text-start font-bold p-2 mx-4 my-4 md:text-center">Here is what makes me Austin</h2>
      <div ref={ref} className="flex h-auto flex-wrap gap-4 mx-7 md:mx-10">
        <motion.div
          className="h-auto flex flex-col gap-4 justify-between align-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <a href='https://drive.google.com/file/d/14oawHPuNXChYYcxJ_On0InIbBeMjd5ML/view?usp=share_link' target="_blank" className="rounded-2xl shadow-2xl size-40 md:size-52 hover:size-44 resume flex items-end justify-center text-center text-3xl opacity-70 outline outline-1  outline-offset-2 outline-neutral-100">
              <h2 className="h-min rounded-2xl text-white bg-gradient-to-t from-blue-700 to-dark-500 w-full text-white font-sans">
                Resume
              </h2>
          </a>

          <a href="/about" className='at-office hover:bg-size-10 shadow-2xl size-40 md:size-52 text-3xl text-center flex items-end justify-center rounded-3xl opacity-80 outline outline-1  outline-offset-2 outline-neutral-100'>
            <h1 className='w-full rounded-3xl bg-gradient-to-t from-blue-700 to-dark-500 hover:opacity-80 font-sans text-white py-4'>
              About Me
            </h1>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 grow w-1/3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <div className="h-1/2 booking-image rounded-3xl shadow-2xl opacity-70 outline outline-1  outline-offset-2 outline-neutral-100">
            <button data-cal-link="austin.obimbo" className='hover:opacity-90 bg-gradient-to-t from-blue-800 to-dark-300 h-full w-full text-white font-sans font-bold text-2xl rounded-3xl md:'>
              <h1 >Book Live Sessions</h1>
            </button>
          </div>

          <div className="gap-4 flex h-auto flex-col md:flex-row grow">
            <div className="gap-2 h-auto flex flex-col grow">
              <div className="community-wall bg-blue-900 shadow-2xl text-white relative opacity-90 text-sm hover:opacity-90 rounded-3xl grow ">
                <div className="community-image hover:hidden central-image absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden">
                  <img src="/rename.jpg" alt="Central" className="w-12 h-auto rounded-full" />
                  <div className="wave-effect absolute inset-2"></div>
                </div>
                <p className="font-sans text-white text-center font-bold pb-4 ">Community wall</p>
                <h2 className="hidden font-sans text-white text-center font-bold p-2 text-2xl bg-dark-900">Coming Soon</h2>
              </div>

              <div className="shadow-2xl opacity-90 hover:opacity-90 bg-gradient-to-t from-blue-600 to-dark-900 rounded-xl h-auto grow ">
                <div className="text-center flex justify-around text-white">
                  <Link to='/projects' className="text-white hover:underline">PROJECTS</Link>
                  <Link to='#services' className="text-white hover:underline">SERVICES</Link>
                </div>
              </div>
            </div>

            <a  href="/technologies" className="toolbox shadow-2xl md:w-2/3 md:h-48 h-40 rounded-3xl grow utline outline outline-1  outline-offset-2 outline-neutral-100">
              <div className="w-full h-full bg-gradient-to-t from-blue-600 to-dark-900 rounded-3xl flex items-end justify-center text-center opacity-90">
                <p className="text-white font-bold text-3xl font-sans">Toolkit</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center p-8">
        <a href="/about" className="p-2 rounded-lg bg-neutral-50 ">
          Learn More
        </a>
      </div>
    </>
  );
}

export default InteractiveUi;
