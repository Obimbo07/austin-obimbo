import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { experience } from './Data';

const Exp = () => {
  return (
    <>
     <div className="description-section flex justify-center w-full">
               <div className="timeline relative">
                 {experience.map((exp, i) => (
                   <div key={exp.index} className="relative pl-8 pr-8 mb-8">
                     
                     <div className="absolute left-2 top-0 h-full flex flex-col items-center">
                       {i !== experience.length - 1 && (
                         <div className="h-full w-1 bg-gradient-to-b from-gray-500 to-gray-900"></div>
                       )}
                       <div className="h-5 w-5 rounded-full bg-gradient-to-r from-gray-500 to-gray-900 shadow-md"></div>
                     </div>
                     <div className="relative">
                       <Card className="shadow-lg bg-gradient-to-r from-white via-gray-50 to-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                         <CardHeader>
                           <CardTitle className="text-blue-500 text-2xl font-semibold">
                              <img src={exp.workLogo} width={120} height={120} alt="Logo" className="mr-4" />
                              <span className="font-bold text-blue-500">{exp.workOrganisation}</span> <br />
          
                              <span className="font-semibold text-black">{exp.workTitle}</span>
                            </CardTitle>
                           <CardDescription className="text-gray-600 font-bold">
                            {exp.date}
                            
                            </CardDescription>
                         </CardHeader>
                         <CardContent>
                           <p className="text-gray-700">{exp.description}</p>
                         </CardContent>
                       </Card>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
    
    </>
  )
}

export default Exp;