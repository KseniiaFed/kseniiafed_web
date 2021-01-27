import React from 'react'
import Head from './head'
import HeroSection from './units/heroSection'
import Cards from './units/cards'


const Dummy = () => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
  return (
    <div>
      <Head title="Hello" />
      <HeroSection />
      <Cards />
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
