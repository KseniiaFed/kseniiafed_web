import React from 'react'
import Button from './button'


const Slide = (props) => {
  return (
    <div className={`bg-${props.background} bg-cover relative items-center w-full h-full max-h-1/3`} >
      <h1 className="pt-24 text-white font-bold text-4xl md:text-6xl text-center">{props.header}</h1>
      <p className="text-white text-lg md:text-2xl text-center">{props.text}</p>
      <div className="mt-6 mb-24 flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <Button className="btns" buttonStyle="btn-outline">GET STARTED</Button>
        <Button className="btns" buttonStyle="btn-default">WATCH TRAILER <i className="far fa-play-circle ml-2" /></Button>
      </div>
    </div>
  )
}

export default Slide
