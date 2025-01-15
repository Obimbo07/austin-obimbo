import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import '../css/images.css'
import InteractiveUi from "../components/InteractiveUi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp, faArrowRightToFile, faCertificate } from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Experience from "../components/Experience";
import GitHubContributionGraph from "../components/GithubContributionGraph";
import Exp from "../components/exp";
import Achv from "../components/Achv";
import { Link } from "react-router-dom";
import ProjectsAccordion from "../components/ProjectsAccordion";
import Quote from "../components/Quote";
import { Services } from "../components/Services";
import Carousel from "../components/Carousel";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


const Intro = () => {
  return (
    <div className="bg-[#f8f2f0] bg-gray-400 min-h-screen p-4">
      <TawkMessengerReact
                propertyId="64ce31b8cc26a871b02d6f71"
                widgetId="1ihl1mn2g"
                />
      {/* Grid Layout for Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-6xl mx-auto">
        {/* Left Section */}
        <div>
            <div className="flex gap-2">
                <div className="flex flex-none flex-col w-2/3 justify-center items-start gap-4 p-8 rounded-3xl bg-white shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        <span className="">Design</span><br />
                        <span className="">Development</span><br />
                        <span className="text-orange-500">Architecture</span>
                    </h2>
                    <p className="text-gray-600">
                        Austin Obimbo is an innovative software developer who creates
                        architecture redefining modern living spaces.
                    </p>
                    <div className="flex justify-between w-full ">
                        <Link href='https://docs.google.com/document/d/16JNuFYkcSz5_eDSnlnLinkezV_bU9NClhMa/edit?usp=sharing&ouid=107251804543803193655&rtpof=true&sd=true' target="_blank" className="bg-gray-900 hover:bg-gray-100 hover:text-black rounded-full text-white p-2">
                         Get Resume
                       </Link>
                       <Link to="/contact" className="bg-gray-900 hover:bg-gray-100 hover:text-black rounded-full text-white p-2">
                        Contact me
                       </Link>
                    </div>
                </div>
                <div className="at-office flex-1 rounded-3xl">
                  <h1 className="text-white text-3xl font-extrabold text-center"></h1>
                </div>
            </div>
            <div className="flex flex-none w-full h-fit flex-row md:flex-row justify-center items-start gap-4 py-4">
                <div className=" w-2/3 flex text-center flex-none flex-col size-full justify-center items-start gap-4 rounded-3xl bg-white shadow-lg">
                  <h1 className="text-3xl w-full font-extrabold">Services</h1>
                  <Services />
                </div>
                <div className="flex flex-grow toolbox hover:opacity-100 opacity-70 flex-col justify-center items-start p-12 rounded-3xl shadow-lg outline outline-1 w-1/3 outline-offset-2 outline-neutral-100">
                  <Link to="/technologies" >
                    <p className="">Toolkit</p>
                  </Link>
                </div>
            </div>
        </div>
        {/* Right Section */}
        <div className="grid gap-4">
          
          <div className="rounded-3xl shadow-lg bg-white h-auto flex flex-col">
              <div className="flex justify-between p-8">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">Austin Obimbo</h1>
                 <a href='https://docs.google.com/document/d/16JNuFYkcSz5_eDSnlnAezV_bU9NClhMa/edit?usp=sharing&ouid=107251804543803193655&rtpof=true&sd=true' target="_blank"  className="bg-orange-500 font-bold p-2 gap-2 rounded-full text-white">
                   Get Resume
                  <FontAwesomeIcon className="px-2" icon={faArrowRightToFile} />
                 </a>
              </div>
             <div className="w-full">
                <div className="booking-image p-12 mx-8 rounded-3xl">
                <h1 className="text-3xl md:text-4xl text-white bg-orange-500 rounded-3xl p-2 font-extrabold leading-tight">
                  Austin's Gallery
                </h1>
                </div>
             </div>
             <div className="w-full my-8 p px-8">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="">
                    <p 
                      className="font-extrabold text-orange-500 text-center text-3xl">
                      Work Experience
                      </p>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <Exp />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="">
                    <p 
                      className="font-extrabold text-orange-500 text-center text-3xl">
                      Achievements
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Achv />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <ProjectsAccordion />
             </div>
          </div>
        </div>
        
          </div>
          {/* Card Grid */}
      <div>
      <div className="w-full">
            <GitHubContributionGraph />
            {/* <div className="grid grid-cols-2 gap-4 ">
          
            <Card className="rounded-3xl bg-gray-800 text-white p-4">
              <CardContent className="p-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              </CardContent>
            </Card>
            <Card className="rounded-3xl w-fit bg-gray-800 text-white p-4">
              <CardContent className="p-2 ">
                <FontAwesomeIcon icon={faCertificate} />
                <p>Certifications</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl bg-gray-800 text-white p-4">
              <CardContent className="p-2">
                <p>FFF</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl bg-gray-800 text-white p-4">
              <CardContent className="p-2">
                <p>Zephyr</p>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
      

      {/* Footer Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="text-gray-600 hover:text-pink-500">
          Instagram
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          Twitter
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Intro;
