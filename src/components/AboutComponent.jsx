import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AboutText from './AboutText';


const AboutComponent = () => {
  
  return (
    <>
      <div className="bg-grey-300 sm:flex md:flex-col">
        <div className='flex w-full flex-col gap-2 shadow-full'>
           <img 
              src='technology.jpg' 
              alt="Austine obimbo at home work-space"
              className='h-48  md:h-80'
            />
           {/* <img 
              src='rename.jpg' 
              alt="Austine obimbo at home work-space"
              className='absolute rounded-full w-40 inset-x-1/3 md:right-10 md:w-60'
           /> */}
           <Avatar className='absolute rounded-full w-40 h-auto inset-x-1/3 md:inset-x-1/2 md:right-10 md:w-60'>
              <AvatarImage src="rename.jpg" />
              <AvatarFallback>Austin</AvatarFallback>
           </Avatar>
           <div>
           <a
              href="https://docs.google.com/document/d/16JNuFYkcSz5_eDSnlnAezV_bU9NClhMa/edit?usp=sharing&ouid=107251804543803193655&rtpof=true&sd=true"
              target="_blank" // This will open the link in a new tab
              rel="noopener noreferrer" // This is a security measure when using target="_blank"
              className='bg-neutral-900 rounded-full text-white font-bold hover:text-blue-300 p-4 m-4 w-full flex items-center justify-center'
            >
              Get Resume
              <FontAwesomeIcon icon={faLink} className='ml-2' />
            </a>
           </div>
        </div>


        <AboutText />
      </div>
    </>

  )
}

export default AboutComponent;