import React from 'react'
import EmblaCarousel from './Emba/EmblaCarousel'
import '../css/embla.css'
import { HeroData } from './Data'

const OPTIONS = { loop: true, duration: 5 }


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