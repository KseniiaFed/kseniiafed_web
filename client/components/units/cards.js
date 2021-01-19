import React from 'react'
import CardItem from './cardItem'
import './cards.scss'

const Cards = () => {
  return (
    <div className='p-16 bg-white'>
      <h1 className="text-center text-3xl font-bold">Check out these EPIC Vaccines!</h1>
      <div className="flex flex-col items-center m-auto w-11/12 max-w-screen-xl">
        <div className="relative m-12">
          <ul className="mb-6">
            <CardItem
              src="images/img-infection.jpg"
              text="Explore your true nature and unleash your hidden powers"
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
