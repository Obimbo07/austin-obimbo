import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Achv from './Achv'
import Project from './Project'

const ProjectsAccordion = () => {
  return (
    <>
        <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="">
                    <p 
                      className="font-bold text-center text-3xl">
                      PROJECTS
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Project />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

    </>
  )
}

export default ProjectsAccordion