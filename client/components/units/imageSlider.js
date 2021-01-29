import React, { useState, useEffect } from 'react'
import Slide from './slide'
import Arrow from './arrow'

// import Button from './button'

const slides = [
  <Slide key="slide1" background="slide1" header="FIND YOUR CENTRE" text="I want to know more"/>,
  <Slide key="slide2" background="slide2" header="DESIGN ON GROWTH" text="Information Seminar"/>,
  <Slide key="slide3" background="slide3" header="UPCOMING EVENTS" text="I want to know more"/>,
  <Slide key="slide4" background="slide4" header="LEARNING HUB" text="I want to know more"/>,
  <Slide key="slide5" background="slide5" header="MEMBERSHIP" text="Become part of community"/>
  // <img key="slide1" src="images/slide1.jpg" alt="first slide" className="max-h-full" />,
  // <img key="slide2" src="images/slide2.jpg" alt="second slide" className="max-h-full" />,
  // <img key="slide3" src="images/slide3.jpg" alt="third slide" className="max-h-full" />,
  // <img key="slide4" src="images/slide4.jpg" alt="fourth slide" className="max-h-full" />,
  // <img key="slide5" src="images/slide5.jpg" alt="fifth slide" className="max-h-full"/>
]

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, )

  const prevSlideIndex = activeIndex ? activeIndex - 1 : slides.length - 1
  const nextSlideIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1

  const swipeSlide = () => {

  }

  return (
    <div className="relative h-80">
      <div className="relative block box-border w-full h-80 justify-between">
          <Arrow direction="left" swipeSlide={swipeSlide} />
          <Arrow direction="right" />
        <div
          className="slider-image-prev hidden"
          key={prevSlideIndex}
        >
          {slides[prevSlideIndex]}
        </div>
        <div
          className="w-full relative h-80 items-center"
          key={activeIndex}
        >
          {slides[activeIndex]}
        </div>
        <div
          className="slider-image-next hidden"
          key={nextSlideIndex}
        >
          {slides[nextSlideIndex]}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
