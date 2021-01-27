import React from 'react'

const Training = (props) => {
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <br />
      <div className="mt-20">
        <h1> Hello World Training block here </h1>
      </div>
    </div>
  )
}

Training.propTypes = {}

export default Training
