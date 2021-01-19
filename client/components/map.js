import React from 'react'
import Header from './units/header'




// import wave from '../assets/images/wave.jpg'

const Map = (props) => {
 
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <Header />
      <br />
      <div>
        <h1> Hello World Dashboard </h1>
      </div>

      
    </div>
  )
}

Map.propTypes = {}

export default Map
