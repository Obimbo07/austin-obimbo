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
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {slides.map((slide, index) => (
            <div className={`embla__slide bg-no-repeat  ${slide.className}`} key={index}>
              <div className="bg-gradient-to-b from-grey-900 to-grey-100 rounded-xl p-4 absolute opacity-100 lg:inset-x-1/3 inset-y-1/3 h-fit w-max">
                <h2 className="text-2xl font-bold mb-4 text-white">{slide.heading}</h2>
                <ul className="list-none p-0">
                  {slide.texts.map((text, i) => (
                    <li key={i} className="flex items-center mb-2 p-2">
                      <FontAwesomeIcon icon={faMedal} className="text-yellow-500 mr-3" />
                      <span className='text-white'>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
