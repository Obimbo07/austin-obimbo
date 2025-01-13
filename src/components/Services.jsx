import * as React from "react"

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
      plugins={[ Autoplay({ delay: 1000 })]}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[200px] shadow-xl">
        {services.map((service, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className="bg-orange-500">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-xl font-semibold">{service.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
