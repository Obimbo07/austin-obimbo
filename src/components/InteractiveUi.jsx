import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { getCalApi } from "@calcom/embed-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/images.css';

const InteractiveUi = () => {
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

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-wrap m-6 gap-4 h-auto">

      <motion.div
        className="h-28 w-1/4 rounded-full passport-1"
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <div className='h-full bg-gradient-to-t from-blue-700 to-dark-500 hover:opacity-20  text-3xl text-center rounded-full opacity-90'>
          <h1 className='font-bold font-sans text-white p-2'>About Me</h1>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 grow h-auto w-1/3"
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <div className="h-1/3 booking-image rounded-3xl ">
          <button data-cal-link="austin.obimbo" className='opacity-60 hover:opacity-80 bg-gradient-to-r from-blue-800 to-green-800 h-full hover:opacity-80 w-full text-white font-serif text-2xl p-1 rounded-3xl'>
            <h1>Book Live Sessions with me</h1>
          </button>
        </div>

        <div className="gap-4 flex flex-row h-auto grow">
          <div className="gap-4 h-auto flex flex-col grow">
            <div className="opacity-90 hover:opacity-90 bg-gradient-to-t from-green-900 to-blue-400 rounded-3xl h-auto grow">
              <ul className='flex gap-4 rounded-3xl flex-wrap opacity-90 h-full'>
                <li className='text-2xl p-4 flex gap-4 text-white'>
                     <Link>
                      <FontAwesomeIcon icon={faWhatsapp} />
                     </Link>
                    <Link href="https://facebook.com/musumba-austin-obimbo">
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  
                </li>
              </ul>
            </div>

            <div className="opacity-90 hover:opacity-90 bg-gradient-to-b from-green-600 to-gray-900 rounded-xl h-auto grow">
              <div className="p-4 text-center text-2xl">
                Projects
              </div>
            </div>
          </div>
          <div className="software rounded-3xl h-auto grow">
            <div className="h-full  rounded-3xl text-center  opacity-50 bg-gradient-to-b from-gray-900 to-green-500 ">
              <p className=" text-white ">
                 Toolkit
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default InteractiveUi;
