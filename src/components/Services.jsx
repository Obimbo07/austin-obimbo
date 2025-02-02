import * as React from "react"
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { services } from "./Data"

export function Services() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      plugins={[ Autoplay({ delay: 3000 })]}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[200px] shadow-xl">
        {services.map((service, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className="bg-gray-800">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-xl font-semibold text-white">{service.name}</span>
                </CardContent>
                
              </Card>
               <Link to="/contact">
                  <span className="text-white font-semibold my-8 mt-12 text-xl p-2 bg-green-800 rounded-xl">Contact me</span>
               </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
