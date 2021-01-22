import React from 'react'
import Head from './head'
import Header from './units/header'
import HeroSection from './units/heroSection'
import Cards from './units/cards'
import Footer from './units/footer'


const Dummy = () => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
