import React from 'react'
import { achievements } from './Data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'

const Achv = () => {
  return (
    <>
      <div className="description-section flex flex-col justify-center w-full  md:mb-0">
          <div className="timeline relative">
            {achievements.map((achievement, i) => (
              <div key={achievement.index} className="relative  mb-12">
                
                <div className="absolute left-6 top-0 h-full flex flex-col items-center">
                  {i !== achievements.length - 1 && (
                    <div className="h-full w-1 bg-gradient-to-b from-orange-500 to-orange-900"></div>
                  )}
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-900 shadow-md"></div>
                </div>
                <div className="relative px-16">

                  <Card className="shadow-lg bg-gradient-to-r from-white via-gray-50 to-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-orange-500 text-2xl font-semibold">{achievement.title}</CardTitle>
                      <CardDescription className="text-gray-600">{achievement.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{achievement.description}</p>
                      <a className="font-bold text-blue-500 underline hover:text-blue-600" href={achievement.link}>Learn more</a>
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

export default Achv