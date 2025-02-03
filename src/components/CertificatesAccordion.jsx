import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Certifications, { CertificateCard, sortedCertificates } from '../pages/Certifications'

const CertificatesAccordion = () => {
  return (
    <>
        <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="">
                    <p 
                      className="font-bold text-center uppercase text-2xl">
                       Licensing and Certification
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    {sortedCertificates.map((certificate) => (
                      <CertificateCard className="flex flex-row-reverse" key={certificate.id} certificate={certificate} />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

    </>
  )
}

export default CertificatesAccordion