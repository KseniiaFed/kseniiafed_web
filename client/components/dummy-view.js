import React from 'react'
import Head from './head'
import Header from './units/header'
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
      <Header />
      <HeroSection />
      <Cards />
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 hover:text-red-500 font-3xl text-white font-bold rounded-lg border shadow-lg p-10">
          This is Ksenia`s personal website. Hello!
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
