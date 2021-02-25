import React from 'react'
import CardItem from './cardItem'
// import './cards.scss'

const Cards = () => {
  return (
    <div className="p-16 bg-white">
      <div className="flex flex-col space-y-16 xl:flex-row xl:space-y-0 items-center m-auto w-full">
        <div className="relative w-full h-full justify-evenly xl:justify-around flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-12 xl:space-x-2">
          <CardItem
            src="images/img-infection.jpg"
            text="Grant Funding on courses"
            label="About"
            path="/about"
          />
          <CardItem
            src="images/img-child.jpg"
            text="Accredited Training Schedule"
            label="Training"
            path="/about"
          />
        </div>
        <div className="relative w-full h-full justify-evenly xl:justify-around flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-12 xl:space-x-2">
          <CardItem
            src="images/img-biology.jpg"
            text="Courses on Demand"
            label="Course request"
            path="/about"
          />
          <CardItem
            src="images/img-woman-mask.jpg"
            text="Looking for work?"
            label="Careers"
            path="/about"
          />
        </div>
      </div>
    </div>
  )
}

export default Cards
