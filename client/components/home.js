import React from 'react'
import Head from './head'
import ImageSlider from './units/imageSlider'
import Cards from './units/cards'
import Testimonials from './units/testimonials'
import Blog from './units/blog'
import Subscription from './units/subscription'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <ImageSlider />
      <Cards />
      <Testimonials />
      <Blog />
      <Subscription />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
