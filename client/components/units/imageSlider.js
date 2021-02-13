import React, { useState, useEffect } from 'react'
import Slide from './slide'
import Arrow from './arrow'
import Dots from './dots'

const slides = [
  <Slide key="slide1" background="slide1" header="FIND YOUR CENTRE" text="I want to know more"/>,
  <Slide key="slide2" background="slide2" header="DESIGN ON GROWTH" text="Information Seminar"/>,
  <Slide key="slide3" background="slide3" header="UPCOMING EVENTS" text="I want to know more"/>,
  <Slide key="slide4" background="slide4" header="LEARNING HUB" text="I want to know more"/>,
  <Slide key="slide5" background="slide5" header="MEMBERSHIP" text="Become part of community"/>
]

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, )

  const swipeSlideRight = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)
  }
  const swipeSlideLeft = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1)
  }
  const dotHandler = (i) => {
    setActiveIndex(i)
  }

  return (
    <div className="relative h-80">
      <div className="relative block box-border w-full h-80 justify-between">
        <Arrow direction="left" swipeSlide={swipeSlideLeft} />
        <Arrow direction="right" swipeSlide={swipeSlideRight} />
        <Dots slides={slides} activeIndex={activeIndex} dotHandler={dotHandler}/>
        <div key={activeIndex} className="w-full relative h-80 items-center" >
          {slides[activeIndex]}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
