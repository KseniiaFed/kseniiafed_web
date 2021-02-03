import React from 'react'
import Head from './head'
import ImageSlider from './units/imageSlider'
import Cards from './units/cards'
import Testimonials from './units/testimonials'


const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <ImageSlider />
      <Cards />
      <Testimonials />
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
