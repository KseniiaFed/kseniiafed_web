import React from 'react'
// import wave from '../assets/images/wave.jpg'

const News = (props) => {
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <div className="mt-20">
        <div>
          <h1> Hello World News / Blog </h1>
          <p> Lorem inpsum dolor sit amet consectetur fldjbndshlkdfbdlfbfg fjdgdlghlf</p>
        </div>

        <div>
          <div>General words + link to the News</div>
          <div>Latest news carousel</div>
          <div>Twitter feed</div>
        </div>
      </div>
    </div>
  )
}

News.propTypes = {}

export default News
