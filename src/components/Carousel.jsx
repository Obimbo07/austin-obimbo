import React from 'react'
import EmblaCarousel from './Emba/EmblaCarousel'
import '../css/embla.css'
import { HeroData } from './Data'

const OPTIONS = { loop: true, duration: 30 }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Carousel = () => {
  return (
    <>
      <div className=''>
         <EmblaCarousel slides={HeroData} options={OPTIONS} />
      </div>
    </>
  )
}

export default Carousel