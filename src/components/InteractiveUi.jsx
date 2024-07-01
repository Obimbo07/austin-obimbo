import '../css/images.css';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


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

  return (
    <div className="flex flex-wrap   m-10 gap-1 h-auto">
       <div className="passport-1 min-h-80 w-2/4 rounded-xl">
         <div className='h-full hover:opacity-80 text-white text-2xl p-1 text-center rounded-xl opacity-60 bg-gradient-to-t from-blue-900 to-yellow-400 '>
           <h1 className='p-8'>About Me</h1>
         </div>
       </div>
       <div className="flex flex-col gap-1 grow bg-dark-300 h-auto w-1/3">
          <div className=" h-1/3 booking-image rounded-xl">
            <button data-cal-link="austin.obimbo" className='h-full hover:opacity-20 opacity-55 w-fulll text-white font-serif text-2xl p-1 rounded-xl bg-gradient-to-t from-blue-800 to-blue-600'>
              <h1>Book Live Sessions with me</h1>
            </button>
          </div>

          <div className="bg-green-300 gap-1 flex flex-row h-auto grow">
            <div className="bg-blue-300 gap-1 h-auto flex flex-col grow">
              <div className="bg-red-300 rounded-xl h-auto grow slide-1 bg-cover bg-no-repeat">
                <ul className='flex gap-1 flex-wrap bg-blue-900 opacity-90 h-full'>
                  <li className='text-2xl p-1 flex gap-2 text-white'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                </ul>
              </div>

               <div className="bg-yellow-300 rounded-xl h-auto grow">
                <div className="">
                  Projects
                </div>
              </div>
            </div>
            <div className="bg-yellow-300 rounded-xl h-auto grow">
              Toolbox
            </div>
          </div>
       </div>
       

    </div>
  );
}

export default InteractiveUi;