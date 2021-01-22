import React from 'react'
import CardItem from './cardItem'
import './cards.scss'

const Cards = () => {
  return (
    <div className='p-16 bg-white'>
      <h1 className="text-center text-3xl font-bold">Check out these EPIC Vaccines!</h1>
      <div className="flex flex-col md:flex-row items-center m-auto w-11/12 max-w-screen-xl">
        <div className="relative m-12 border-2 border-red-500">
          <ul className="mb-6">
            <CardItem
              src="images/img-infection.jpg"
              text="Explore your true nature and unleash your hidden powers"
              label="Products"
              path="/about"
            />
             <CardItem
              src="images/img-child.jpg"
              text="Safety is a priority"
              label="Products"
              path="/about"
            />
          </ul>
        </div>
        <div className="relative m-12 border-2 border-red-500">
          <ul className="mb-6">
            <CardItem
              src="images/img-biology.jpg"
              text="Technologies"
              label="Products"
              path="/about"
            />
             <CardItem
              src="images/img-woman-mask.jpg"
              text="Safety is a priority"
              label="Products"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
