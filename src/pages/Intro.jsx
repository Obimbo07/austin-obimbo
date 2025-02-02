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
    <div className="min-h-screen pt-2">
      <TawkMessengerReact
                propertyId="64ce31b8cc26a871b02d6f71"
                widgetId="1ihl1mn2g"
                />
      {/* Grid Layout for Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <div className="flex flex-none flex-col w-2/3 justify-center items-start gap-4 p-4 rounded-3xl bg-white shadow-lg">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight">
                        <span className="">Design</span><br />
                        <span className="">Development</span><br />
                        <span className="text-orange-500">Architecture</span>
                    </h2>
                    <p className="text-gray-600">
                        Austin Obimbo is an innovative software developer | AI Research Scientist who creates
                        architecture redefining modern living spaces.
                    </p>
                    <div className="flex justify-between w-full ">
                        <Link href='https://docs.google.com/document/d/16JNuFYkcSz5_eDSnlnLinkezV_bU9NClhMa/edit?usp=sharing&ouid=107251804543803193655&rtpof=true&sd=true' target="_blank" className="bg-gray-800 hover:bg-gray-100 hover:text-black rounded-full text-white p-2">
                         Resume
                       </Link>
                       <Link to="/contact" className="bg-gray-800 hover:bg-gray-100 hover:text-black rounded-full text-white p-2">
                        Contact me
                       </Link>
                    </div>
                </div>
                <div className="at-office flex-1 rounded-3xl outline outline-1 outline-offset-2 outline-neutral-100">
                  <h1 className="text-white text-3xl font-extrabold text-center"></h1>
                </div>
            </div>
            <div className="flex gap-2">
                <div className=" w-2/3 flex text-center flex-none flex-col size-full justify-center items-start gap-4 rounded-3xl bg-white shadow-lg">
                  <h1 className="text-xl w-full font-sans font-bold">WHAT I DO BEST</h1>
                  <Services />
                </div>
                <div className="flex flex-grow toolbox hover:opacity-100 opacity-70 flex-col justify-center items-start rounded-3xl shadow-lg outline outline-1 w-1/3 outline-offset-2 outline-neutral-100">
                  <Link to="/technologies" >
                    <p className="text-white font-bold text-3xl mb-48">Toolkit</p>
                  </Link>
                </div>
            </div>
        </div>
        {/* Right Section */}
        <div className="grid gap-4">
          
          <div className="rounded-3xl shadow-lg bg-white h-auto flex flex-col">
              <div className="flex justify-between p-4">
                 <h1 className="text-2xl md:text-4xl font-bold leading-tight font-serif">Austin Obimbo</h1>
                 <a href='https://docs.google.com/document/d/16JNuFYkcSz5_eDSnlnAezV_bU9NClhMa/edit?usp=sharing&ouid=107251804543803193655&rtpof=true&sd=true' target="_blank"  className="bg-green-800 font-bold p-2 rounded-full text-white">
                   Resume
                  <FontAwesomeIcon icon={faArrowRightToFile} />
                 </a>
              </div>
             <div className="w-full">
                <div className="booking-image p-12 mx-8 rounded-3xl">
                <div className="community-wall bg-gray-800 shadow-2xl text-white relative opacity-90 text-sm hover:opacity-90 rounded-3xl grow">
                  <p className="text-white text-center text-xl font-bold p-2">Community wall</p>
                  <h2 className="hidden font-sans text-white text-center font-bold p-2 text-2xl bg-dark-900">Coming Soon</h2>
                </div>
                </div>
             </div>
             <div className="w-full my-4  px-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="">
                    <p 
                      className="font-bold text-center text-3xl">
                      WORK EXPERIENCE
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
                      className="font-bold text-center text-3xl">
                      ACHIEVEMENTS
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
        </div>
      </div>
    
    </div>
  );
};

export default Intro;
