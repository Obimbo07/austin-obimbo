import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

Autoplay.globalOptions = { delay: 5000 }

const EmblaCarousel = (props) => {
  // eslint-disable-next-line react/prop-types
  const { slides, options } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className={`embla__slide bg-no-repeat bg-cover ${slide.className}`}
              key={index}
            >
              <div className="bg-gradient-to-br from-slate-950 to-blue-900 rounded-xl p-4 absolute opacity-60 inset-0 flex items-center justify-center">
                <div className="text-center w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                  <h2 className="text-5xl md:text-5xl font-bold mb-4 text-white">
                    {slide.heading}
                  </h2>
                  <ul className="list-none p-0">
                    {slide.texts.map((text, i) => (
                      <li key={i} className="flex items-center mb-2 p-4">
                        <FontAwesomeIcon
                          icon={faMedal}
                          className="text-yellow-500 mr-3"
                        />
                        <span className="text-white text-lg md:text-base lg:text-lg">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-4 flex w-full justify-center items-center">
        {/* <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="mx-2"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="mx-2"
          />
        </div> */}

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                'embla__dot transition-colors duration-300 ease-in-out'.concat(
                  index === selectedIndex ? ' bg-yellow-500' : ' bg-gray-400'
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
