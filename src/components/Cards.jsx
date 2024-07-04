import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faBug, faDraftingCompass, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Cards = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const animation = useAnimation();

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

  const cardData = [
    {
      icon: faCode,
      title: 'Full Stack Development',
      description: 'I offer comprehensive development services remotely, onsite, and hybrid. My front-end skills focus primarily on user-centric interfaces with end-user specifications. My back-end logic works powerfully with the architecture and application programming interface development and design.',
    },
    {
      icon: faDatabase,
      title: 'Data Operations Analyst',
      description: 'I excel in making data-driven decisions for profitability and product upscale. I work with Database Management Systems and use business intelligence tools like PowerBI and Excel to help get insights from business data. I create data visualization reports for proper documentation on data, helping make informed, scalable company decisions.',
    },
    {
      icon: faBug,
      title: 'Testing and Optimization',
      description: 'I specialize in Test Driven Development (TDD) and optimization techniques to ensure the reliability and efficiency of software products. Quality is assured, and proper implementation of search ranking, page speed, and overall health of the software.',
    },
    {
      icon: faDraftingCompass,
      title: 'Software Architecture and Design',
      description: 'My experience empowers me to design and develop products with a keen interest in complexity, team expertise, technological efficiency, scalability needs, and maintenance cost.',
    },
    {
      icon: faUsers,
      title: 'Mentoring and Community Building',
      description: 'I am always ready to give familiarity and guidance to aspiring developers. The growth and empowerment I offer accelerate their journey and instill impactful changes.',
    },
    {
      icon: faHandshake,
      title: 'Team Spirit',
      description: 'I thrive in collaborative environments, demonstrating strong team understanding throughout the whole development cycle. As a team leader with a co-centric focus on product quality, I imply attention to detail on product features, fostering Agile development methodologies and DevOps.',
    },
  ];

  return (
    <>
      <h1 id="services" className="text-5xl font-bold text-black-800 text-center mt-10 p-8 text-white outline">Services</h1>
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-neutral-700 rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-900"
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
          >
            <div className="flex justify-center items-center h-40">
              <FontAwesomeIcon icon={card.icon} className="text-6xl text-blue-500 transition-transform transform hover:scale-110 hover:text-blue-700" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <h3 className="text-lg font-semibold transition-colors duration-300 text-neutral-100 hover:text-blue-700">{card.title}</h3>
              <button href="#Contact" className="text-blue-500 hover:text-blue-700">Learn More</button>
            </div>
            <p className="text-neutral-100 pt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Cards;
