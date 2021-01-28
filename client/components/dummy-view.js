import React from 'react'
import Head from './head'
import ImageSlider from './units/imageSlider'
import Cards from './units/cards'


const Dummy = () => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
  return (
    <div>
      <Head title="Hello" />
      <ImageSlider />
      <Cards />
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
