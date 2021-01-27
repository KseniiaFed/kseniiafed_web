import React from 'react'

const Events = (props) => {
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <div>
        <h1> Hello World Events </h1>
      </div>
    </div>
  )
}

Events.propTypes = {}

export default Events
