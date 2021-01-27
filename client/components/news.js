import React from 'react'




// import wave from '../assets/images/wave.jpg'

const News = (props) => {
 
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <br />
      <div className="mt-20">
        <h1> Hello World News / Blog </h1>
      </div>
    </div>
  )
}

News.propTypes = {}

export default News
